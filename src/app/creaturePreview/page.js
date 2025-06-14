"use client"

// components/CreaturePreview.js
import React, { useEffect, useRef, useState } from 'react';
import * as PIXI from 'pixi.js';

export default function CreaturePreview() {
  const canvasRef = useRef(null);
  const appRef = useRef(null);

  const [trait, setTrait] = useState('red');

  useEffect(() => {
    if (!canvasRef.current) return;

    // Create PixiJS app with existing canvas element
    appRef.current = new PIXI.Application({
      view: canvasRef.current,
      width: 400,
      height: 400,
      transparent: true,
      resolution: window.devicePixelRatio || 1,
    });

    // Load base sprite (e.g., creature body)
    const baseTexture = PIXI.Texture.from('/images/body.png');
    const baseSprite = new PIXI.Sprite(baseTexture);
    appRef.current.stage.addChild(baseSprite);

    // Load overlay sprite depending on trait
    const overlayTexture = PIXI.Texture.from(`/images/eyes-${trait}.png`);
    const overlaySprite = new PIXI.Sprite(overlayTexture);
    appRef.current.stage.addChild(overlaySprite);

    // Position sprites
    baseSprite.x = 0;
    baseSprite.y = 0;
    overlaySprite.x = 0;
    overlaySprite.y = 0;

    return () => {
      // Cleanup Pixi app on unmount
      appRef.current.destroy(true, { children: true, texture: true, baseTexture: true });
      appRef.current = null;
    };
  }, [trait]);

  return (
    <div>
      <canvas ref={canvasRef} />
      <button onClick={() => setTrait(trait === 'red' ? 'blue' : 'red')}>
        Toggle Eyes Color (Current: {trait})
      </button>
    </div>
  );
}
