'use client';
import React, { useState } from 'react';

const TextToSpeech = ({ apiEndpoint = '../api/tts' }) => {
  const [text, setText] = useState('');
  const [languageCode, setLanguageCode] = useState('en-US'); // Default to 'en-US'
  const [voiceName, setVoiceName] = useState('');
  const [gender, setGender] = useState('NEUTRAL');
  const [speakingRate, setSpeakingRate] = useState(1.0);
  const [pitch, setPitch] = useState(0);
  const [volumeGainDb, setVolumeGainDb] = useState(0);
  const [effectsProfile, setEffectsProfile] = useState('');
  const [audioPath, setAudioPath] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      text,
      languageCode,
      name: voiceName,
      gender,
      speakingRate: parseFloat(speakingRate),
      pitch: parseFloat(pitch),
      volumeGainDb: parseFloat(volumeGainDb),
      effectsProfile,
    };

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      if (response.ok) {
        setAudioPath(data.link); // Use the Google Drive link from the API response
      } else {
        alert('Error: ' + (data.error || 'Unknown error occurred.'));
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div>
      <h1>Text-to-Speech</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <strong>Text:</strong>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text here..."
              required
            />
          </label>
        </div>
        <div>
          <label>
            <strong>Language Code:</strong>
            {/* Dropdown menu for Language Code */}
            <select
              value={languageCode}
              onChange={(e) => setLanguageCode(e.target.value)}
            >
              <option value="en-US">English (US)</option>
              <option value="en-GB">English (UK)</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            <strong>Voice Name:</strong>
            <input
              type="text"
              value={voiceName}
              onChange={(e) => setVoiceName(e.target.value)}
              placeholder="e.g., en-US-Wavenet-D"
            />
          </label>
        </div>
        <div>
          <label>
            <strong>Gender:</strong>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="NEUTRAL">Neutral</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            <strong>Speaking Rate:</strong>
            <input
              type="number"
              step="0.1"
              value={speakingRate}
              onChange={(e) => setSpeakingRate(e.target.value)}
              placeholder="1.0 (default)"
            />
          </label>
        </div>
        <div>
          <label>
            <strong>Pitch:</strong>
            <input
              type="number"
              step="0.1"
              value={pitch}
              onChange={(e) => setPitch(e.target.value)}
              placeholder="0 (default)"
            />
          </label>
        </div>
        <div>
          <label>
            <strong>Volume Gain (dB):</strong>
            <input
              type="number"
              step="0.1"
              value={volumeGainDb}
              onChange={(e) => setVolumeGainDb(e.target.value)}
              placeholder="0 (default)"
            />
          </label>
        </div>
        <div>
          <label>
            <strong>Effects Profile:</strong>
            <input
              type="text"
              value={effectsProfile}
              onChange={(e) => setEffectsProfile(e.target.value)}
              placeholder="e.g., headphone-class-device"
            />
          </label>
        </div>
        <button type="submit">Convert to Speech</button>
      </form>

      {audioPath && (
        <div>
          <h2>Generated MP3:</h2>
          <audio controls>
            <source src={audioPath} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <a href={audioPath} target="_blank" rel="noopener noreferrer">
              Download MP3
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default TextToSpeech;