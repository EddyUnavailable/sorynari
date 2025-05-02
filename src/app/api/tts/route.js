import { google } from 'googleapis';
import textToSpeech from '@google-cloud/text-to-speech';
import fs from 'fs';
import path from 'path';
import os from 'os';
import { NextResponse } from 'next/server';

// Define the folder where temporary files will be stored
const TEMP_DIR = os.tmpdir();

// Ensure the temporary directory exists
if (!fs.existsSync(TEMP_DIR)) {
  fs.mkdirSync(TEMP_DIR);
}

export async function POST(req) {
  const outputPath = path.join(TEMP_DIR, `output-${Date.now()}.mp3`);

  try {
    console.log('📥 POST /api/tts received');

    // Parse the incoming request
    const body = await req.json();
    const { text } = body;

    if (!text) {
      // Return an error response for missing input
      return NextResponse.json({ error: 'Text input is required.' }, { status: 400 });
    }

    console.log('🎤 Converting text:', text);

    // Google Text-to-Speech API setup
    const ttsClient = new textToSpeech.TextToSpeechClient({
      keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    });

    // Prepare the TTS request
    const ttsRequest = {
      input: { text },
      voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
      audioConfig: { audioEncoding: 'MP3' },
    };

    // Generate the speech
    const [ttsResponse] = await ttsClient.synthesizeSpeech(ttsRequest);

    // Save the audio file locally
    fs.writeFileSync(outputPath, ttsResponse.audioContent, 'binary');
    console.log('✅ Audio file written to:', outputPath);

    // Google Drive API setup
    const auth = new google.auth.GoogleAuth({
      keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
      scopes: ['https://www.googleapis.com/auth/drive.file'],
    });

    const drive = google.drive({ version: 'v3', auth });

    // Upload the file to Google Drive
    const driveFileMetadata = {
      name: `output-${Date.now()}.mp3`,
      parents: [process.env.GOOGLE_DRIVE_FOLDER_ID],
    };

    const driveMedia = {
      mimeType: 'audio/mpeg',
      body: fs.createReadStream(outputPath),
    };

    const driveResponse = await drive.files.create({
      resource: driveFileMetadata,
      media: driveMedia,
      fields: 'id, webViewLink',
    });

    console.log('📁 Uploaded to Drive:', driveResponse.data);

    // Clean up the temporary file
    fs.unlinkSync(outputPath);

    // Return the Drive file details
    return NextResponse.json({
      id: driveResponse.data.id,
      link: driveResponse.data.webViewLink,
    });
  } catch (error) {
    console.error('❌ Error in /api/tts:', error);

    // Clean up the temporary file if it exists
    if (fs.existsSync(outputPath)) {
      fs.unlinkSync(outputPath);
    }

    return NextResponse.json(
      { error: 'Failed to process TTS or upload to Drive.', details: error.message },
      { status: 500 }
    );
  }
}