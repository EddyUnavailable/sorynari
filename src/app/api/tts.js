import fs from 'fs';
import os from 'os';
import path from 'path';
import { google } from 'googleapis';
import textToSpeech from '@google-cloud/text-to-speech';

const client = new textToSpeech.TextToSpeechClient();

// Google Drive setup
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'; // Or your app's redirect URI
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN; // Ensure this is set in your environment

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({ version: 'v3', auth: oauth2Client });

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: 'Text input is required.' });
    }

    // Text-to-speech request
    const request = {
      input: { text },
      voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
      audioConfig: { audioEncoding: 'MP3' },
    };

    try {
      // Generate MP3
      const [response] = await client.synthesizeSpeech(request);

      // Save MP3 to a temporary directory
      const tempDir = os.tmpdir(); // Get the system's temporary directory
      const outputPath = path.join(tempDir, 'output.mp3'); // Create a path for the temporary file
      fs.writeFileSync(outputPath, response.audioContent, 'binary');

      // Upload MP3 to Google Drive
      const fileMetadata = {
        name: 'output.mp3',
        parents: ['1bmwWFNEhI-ODs3r9Qh_MXEkThggWQss9'], // Replace with your Google Drive folder ID
      };
      const media = {
        mimeType: 'audio/mpeg',
        body: fs.createReadStream(outputPath),
      };

      const driveResponse = await drive.files.create({
        resource: fileMetadata,
        media: media,
        fields: 'id, webViewLink, webContentLink',
      });

      // Remove the local file after uploading to Google Drive
      fs.unlinkSync(outputPath);

      // Respond with Google Drive file details
      res.status(200).json({
        message: 'MP3 saved to Google Drive!',
        driveFileId: driveResponse.data.id,
        webViewLink: driveResponse.data.webViewLink,
        webContentLink: driveResponse.data.webContentLink,
      });
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);

      // Clean up the temporary file in case of an error
      const tempDir = os.tmpdir();
      const outputPath = path.join(tempDir, 'output.mp3');
      if (fs.existsSync(outputPath)) {
        fs.unlinkSync(outputPath);
      }

      res.status(500).json({ error: 'Failed to process text-to-speech or upload to Google Drive.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}