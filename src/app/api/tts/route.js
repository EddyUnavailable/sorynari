import fs from 'fs';
import os from 'os';
import path from 'path';
import { google } from 'googleapis';
import textToSpeech from '@google-cloud/text-to-speech';

const credentialsPath = path.join('/tmp', 'gcloud-key.json');

// Ensure credentials file is written
if (!fs.existsSync(credentialsPath)) {
  if (!process.env.GOOGLE_CREDENTIALS_JSON) {
    throw new Error('GOOGLE_CREDENTIALS_JSON env var is missing.');
  }

  // Write the JSON to disk
  fs.writeFileSync(credentialsPath, process.env.GOOGLE_CREDENTIALS_JSON);
}

const client = new textToSpeech.TextToSpeechClient({
  keyFilename: credentialsPath,
});

// Google Drive setup
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;

console.log('GOOGLE_CLIENT_ID:', CLIENT_ID ? 'Loaded' : 'Missing');
console.log('GOOGLE_CLIENT_SECRET:', CLIENT_SECRET ? 'Loaded' : 'Missing');
console.log('GOOGLE_REFRESH_TOKEN:', REFRESH_TOKEN ? 'Loaded' : 'Missing');

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
const drive = google.drive({ version: 'v3', auth: oauth2Client });

export async function POST(req) {
  try {
    console.log('Received POST request at /api/tts');

    const body = await req.json();
    const { text } = body;

    if (!text) {
      return new Response(JSON.stringify({ error: 'Text input is required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    console.log('Text-to-Speech input text:', text);

    const request = {
      input: { text },
      voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
      audioConfig: { audioEncoding: 'MP3' },
    };

    const [response] = await client.synthesizeSpeech(request);
    console.log('Received audio content from TTS API.');

    const tempDir = os.tmpdir();
    const outputPath = path.join(tempDir, 'output.mp3');
    fs.writeFileSync(outputPath, response.audioContent, 'binary');

    const fileMetadata = {
      name: 'output.mp3',
      parents: ['1bmwWFNEhI-ODs3r9Qh_MXEkThggWQss9'],
    };
    const media = {
      mimeType: 'audio/mpeg',
      body: fs.createReadStream(outputPath),
    };

    const driveResponse = await drive.files.create({
      resource: fileMetadata,
      media,
      fields: 'id, webViewLink, webContentLink',
    });

    fs.unlinkSync(outputPath);

    return new Response(
      JSON.stringify({
        message: 'MP3 saved to Google Drive!',
        driveFileId: driveResponse.data.id,
        webViewLink: driveResponse.data.webViewLink,
        webContentLink: driveResponse.data.webContentLink,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error:', error);

    const outputPath = path.join(os.tmpdir(), 'output.mp3');
    if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath);

    return new Response(
      JSON.stringify({ error: 'Failed to process TTS or upload to Drive.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}