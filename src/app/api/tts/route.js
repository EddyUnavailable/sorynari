import fs from 'fs';
import os from 'os';
import path from 'path';
import { google } from 'googleapis';
import textToSpeech from '@google-cloud/text-to-speech';

// === 1. Setup credentials ===
const credentialsPath = path.join('/tmp', 'gcloud-key.json');

if (!fs.existsSync(credentialsPath)) {
  const base64 = process.env.GOOGLE_CREDENTIALS_BASE64;
  if (!base64) throw new Error('GOOGLE_CREDENTIALS_BASE64 env var is missing.');

  const json = Buffer.from(base64, 'base64').toString('utf8');

  try {
    JSON.parse(json); // Validate
  } catch {
    throw new Error('Decoded GOOGLE_CREDENTIALS_BASE64 is not valid JSON.');
  }

  fs.writeFileSync(credentialsPath, json, 'utf8');
  console.log('✅ Credentials written to:', credentialsPath);
}

const client = new textToSpeech.TextToSpeechClient({ keyFilename: credentialsPath });

// === 2. Google Drive Setup ===
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
  throw new Error('Missing Google Drive OAuth credentials');
}

const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({ version: 'v3', auth: oauth2Client });

// === 3. POST handler ===
export async function POST(req) {
  const outputPath = path.join(os.tmpdir(), 'output.mp3');

  try {
    console.log('📥 POST /api/tts received');

    const body = await req.json();
    const { text } = body;

    if (!text) {
      return new Response(JSON.stringify({ error: 'Text input is required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    console.log('🎤 Converting text:', text);

    const request = {
      input: { text },
      voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
      audioConfig: { audioEncoding: 'MP3' },
    };

    const [response] = await client.synthesizeSpeech(request);

    fs.writeFileSync(outputPath, response.audioContent, 'binary');
    console.log('✅ Audio file written to:', outputPath);

    const fileMetadata = {
      name: 'output.mp3',
      parents: ['1bmwWFNEhI-ODs3r9Qh_MXEkThggWQss9'], // Replace with your real folder ID
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

    console.log('📁 Uploaded to Drive:', driveResponse.data);

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
    console.error('❌ Error in POST /api/tts:', error);
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