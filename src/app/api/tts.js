import fs from 'fs';
import path from 'path';
import textToSpeech from '@google-cloud/text-to-speech';

const client = new textToSpeech.TextToSpeechClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;

    // Set up request for TTS
    const request = {
      input: { text },
      voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
      audioConfig: { audioEncoding: 'MP3' },
    };

    try {
      // Perform TTS request
      const [response] = await client.synthesizeSpeech(request);

      // Define output path
      const outputPath = path.join(process.cwd(), 'public', 'output.mp3');
      fs.writeFileSync(outputPath, response.audioContent, 'binary');

      res.status(200).json({ message: 'MP3 saved!', filePath: '/output.mp3' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to synthesize speech' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}