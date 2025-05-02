import textToSpeech from '@google-cloud/text-to-speech';
import fs from 'fs';
import path from 'path';

const client = new textToSpeech.TextToSpeechClient({
  keyFilename: './gcloud-key.json', // Make sure this path is correct
});

async function testTTS() {
  const [response] = await client.synthesizeSpeech({
    input: { text: 'Hello world, this is a test.' },
    voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
    audioConfig: { audioEncoding: 'MP3' },
  });

  const outputPath = path.resolve('output.mp3');
  fs.writeFileSync(outputPath, response.audioContent, 'binary');
  console.log('✅ Audio saved to output.mp3');
}

testTTS().catch(console.error);