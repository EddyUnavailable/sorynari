"use client"
import React, { useState } from 'react';

const TextToSpeech = ({ apiEndpoint = '/api/tts' }) => {
  const [text, setText] = useState('');
  const [audioPath, setAudioPath] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();
    if (response.ok) {
      setAudioPath(data.filePath);
    } else {
      alert('Error: ' + data.error);
    }
  };

  return (
    <div>
      <h1>Text-to-Speech</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text here..."
        />
        <button type="submit">Convert to Speech</button>
      </form>
      {audioPath && (
        <div>
          <h2>Generated MP3:</h2>
          <audio controls>
            <source src={audioPath} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default TextToSpeech;