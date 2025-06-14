'use client';

import { useState } from 'react';
import styles from '@/styles/species.module.css';

export default function SpeciesCreator() {
  const [formData, setFormData] = useState({
    name: '',
    height: 180,
    speed: 25,
    intelligence: 120,
    abilities: [],
    hasWings: false,
  });

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAbilityChange = (index, value) => {
    const newAbilities = [...formData.abilities];
    newAbilities[index] = value;
    setFormData(prev => ({ ...prev, abilities: newAbilities }));
  };

  const addAbility = () => {
    setFormData(prev => ({ ...prev, abilities: [...prev.abilities, ''] }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1>Create a Species</h1>

        <label>
          Name:
          <input
            type="text"
            value={formData.name}
            onChange={e => updateField('name', e.target.value)}
          />
        </label>

        <label>
          Height (cm):
          <input
            type="number"
            value={formData.height}
            onChange={e => updateField('height', parseInt(e.target.value))}
          />
        </label>

        <label>
          Speed (km/h):
          <input
            type="number"
            value={formData.speed}
            onChange={e => updateField('speed', parseInt(e.target.value))}
          />
        </label>

        <label>
          Intelligence (IQ):
          <input
            type="number"
            value={formData.intelligence}
            onChange={e => updateField('intelligence', parseInt(e.target.value))}
          />
        </label>

        <label>
          Has wings?
          <input
            type="checkbox"
            checked={formData.hasWings}
            onChange={e => updateField('hasWings', e.target.checked)}
          />
        </label>

        <div>
          <h3>Abilities:</h3>
          {formData.abilities.map((ability, i) => (
            <input
              key={i}
              type="text"
              value={ability}
              onChange={e => handleAbilityChange(i, e.target.value)}
              placeholder={`Ability ${i + 1}`}
            />
          ))}
          <button className={styles.button} type="button" onClick={addAbility}>
            + Add Ability
          </button>
        </div>
      </div>

      <div className={styles.preview}>
        <h2>{formData.name || 'Unnamed Species'}</h2>
        <p><strong>Height:</strong> {formData.height} cm</p>
        <p><strong>Speed:</strong> {formData.speed} km/h</p>
        <p><strong>Intelligence:</strong> {formData.intelligence} IQ</p>
        <p>{formData.hasWings ? '🪽 This species has wings' : 'No wings'}</p>

        {formData.abilities.length > 0 && (
          <div>
            <h4>Abilities:</h4>
            <ul>
              {formData.abilities.filter(a => a.trim()).map((ability, i) => (
                <li key={i}>{ability}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
