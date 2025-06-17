"use client";
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import styles from '@/styles/galaxyBodies.module.css';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function GenerateSolarSystem() {
  const [systemName, setSystemName] = useState('');
  const [starType, setStarType] = useState('');
  const [planets, setPlanets] = useState([]);
  const [moons, setMoons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [systemId, setSystemId] = useState(null);

  const starTypes = ['O', 'B', 'A', 'F', 'G', 'K', 'M'];

  const generateSystem = async () => {
    setLoading(true);
    setError(null);

    try {
      // Random star type
      const randomStar = starTypes[Math.floor(Math.random() * starTypes.length)];
      setStarType(randomStar);

      // Fetch compatible planets
      const { data: planetData, error: planetError } = await supabase
        .from('planets')
        .select('*')
        .in('star_compatibility', [randomStar]);
      if (planetError) throw planetError;

      // Select planets based on frequency (weighted random)
      const selectedPlanets = [];
      const totalFrequency = planetData.reduce((sum, p) => sum + parseInt(p.frequency || '0'), 0);
      for (let i = 0; i < 5; i++) { // Max 5 planets
        const rand = Math.random() * totalFrequency;
        let cumulative = 0;
        for (const planet of planetData) {
          cumulative += parseInt(planet.frequency || '0');
          if (rand <= cumulative && !selectedPlanets.includes(planet)) {
            selectedPlanets.push(planet);
            break;
          }
        }
      }

      // Assign moons to each planet
      const selectedMoons = [];
      for (const planet of selectedPlanets) {
        const { data: moonData, error: moonError } = await supabase
          .from('moons')
          .select('*')
          .in('planet_compatibility', [planet.type]);
        if (moonError) throw moonError;

        const moonTotalFrequency = moonData.reduce((sum, m) => sum + parseInt(m.frequency || '0'), 0);
        for (let j = 0; j < 2; j++) { // Max 2 moons per planet
          const rand = Math.random() * moonTotalFrequency;
          let cumulative = 0;
          for (const moon of moonData) {
            cumulative += parseInt(moon.frequency || '0');
            if (rand <= cumulative && !selectedMoons.some(m => m.moon_id === moon.id)) {
              selectedMoons.push({ planet_id: planet.id, moon_id: moon.id });
              break;
            }
          }
        }
      }

      setPlanets(selectedPlanets);
      setMoons(selectedMoons);
    } catch (err) {
      setError('Failed to generate system: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const saveSystem = async () => {
    if (!systemName || !starType || planets.length === 0) {
      setError('Please generate a system and provide a name first.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Insert solar system
      const { data: systemData, error: systemError } = await supabase
        .from('solar_systems')
        .insert({ name: systemName, star_type: starType })
        .select();
      if (systemError) throw systemError;
      const newSystemId = systemData[0].id;
      setSystemId(newSystemId);

      // Insert planets with random orbital distances (0.1–30 AU)
      const planetInserts = planets.map(planet => ({
        solar_system_id: newSystemId,
        planet_id: planet.id,
        orbital_distance: (Math.random() * 29.9 + 0.1).toFixed(1),
      }));
      const { error: planetError } = await supabase
        .from('system_planets')
        .insert(planetInserts);
      if (planetError) throw planetError;

      // Insert moons with random orbital distances (1–20 planetary radii)
      const moonInserts = moons.map(moon => ({
        system_planet_id: planetInserts.find(p => p.planet_id === moon.planet_id).id,
        moon_id: moon.moon_id,
        orbital_distance: (Math.random() * 19 + 1).toFixed(1),
      }));
      const { error: moonError } = await supabase
        .from('system_moons')
        .insert(moonInserts);
      if (moonError) throw moonError;

      setError('System saved successfully!');
    } catch (err) {
      setError('Failed to save system: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Generate Solar System</h1>
      <div>
        <input
          type="text"
          value={systemName}
          onChange={(e) => setSystemName(e.target.value)}
          placeholder="System Name"
          className={styles.input}
        />
        <button onClick={generateSystem} disabled={loading} className={styles.button}>
          {loading ? 'Generating...' : 'Generate System'}
        </button>
        <button onClick={saveSystem} disabled={loading || !planets.length} className={styles.button}>
          {loading ? 'Saving...' : 'Save System'}
        </button>
      </div>
      {error && <p className={styles.error}>{error}</p>}
      {starType && <p>Star Type: {starType}</p>}
      {planets.length > 0 && (
        <div>
          <h2>Planets</h2>
          <ul>
            {planets.map((planet) => (
              <li key={planet.id}>{planet.type} (Mass: {planet.mass_range}, Size: {planet.size_range})</li>
            ))}
          </ul>
        </div>
      )}
      {moons.length > 0 && (
        <div>
          <h2>Moons</h2>
          <ul>
            {moons.map((moon, idx) => {
              const moonData = moonTypeData.find(m => m.type === moon.type);
              return <li key={idx}>{moonData?.type || 'Unknown Moon'}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}