"use client";
import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import styles from '@/styles/galaxyBodies.module.css';

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function MoonTypes() {
  const [moonData, setMoonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch moon data from Supabase on component mount
  useEffect(() => {
    async function fetchMoonData() {
      try {
        const { data, error } = await supabase
          .from('moons')
          .select('*')
          .order('id', { ascending: true });
        if (error) {
          throw error;
        }
        setMoonData(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data: ' + err.message);
        setLoading(false);
      }
    }
    fetchMoonData();
  }, []);

  if (loading) {
    return <div className={`${styles.container} ${styles.milkyWay}`}>Loading...</div>;
  }

  if (error) {
    return <div className={`${styles.container} ${styles.milkyWay}`}>Error: {error}</div>;
  }

  return (
    <div className={`${styles.container} ${styles.milkyWay}`}>
      <h1 className={styles.heading}>Moon Types</h1>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Icon</th>
              <th>Type</th>
              <th>Description</th>
              <th>Planet Compatibility</th>
              <th>Mass Range (M⊕)</th>
              <th>Size Range (R⊕)</th>
              <th>Orbital Distance (PR)</th>
              <th>Composition Notes</th>
              <th>Frequency</th>
              <th>Habitability</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {moonData.map((moon, idx) => (
              <tr key={`entry-${idx}`}>
                <td>
                  {moon.type === 'Rocky Moon' ? (
                    <div className={styles.earth} aria-label="Rocky moon"></div>
                  ) : (
                    <img
                      src={moon.image_url}
                      alt={`${moon.type} moon`}
                      className={styles.planetImage}
                    />
                  )}
                </td>
                <td>{moon.type}</td>
                <td>{moon.description}</td>
                <td>{moon.planet_compatibility.join(', ')}</td>
                <td>{moon.mass_range}</td>
                <td>{moon.size_range}</td>
                <td>{moon.orbital_distance_range}</td>
                <td>{moon.composition_notes}</td>
                <td>{moon.frequency}</td>
                <td>{moon.habitability}</td>
                <td>{moon.location.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}