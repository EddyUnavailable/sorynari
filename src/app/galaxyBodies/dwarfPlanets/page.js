"use client";
import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import styles from '@/styles/galaxyBodies.module.css';

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function DwarfPlanetTypes() {
  const [dwarfPlanetData, setDwarfPlanetData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch dwarf planet data from Supabase on component mount
  useEffect(() => {
    async function fetchDwarfPlanetData() {
      try {
        const { data, error } = await supabase
          .from('dwarf_planets')
          .select('*')
          .order('id', { ascending: true });
        if (error) {
          throw error;
        }
        setDwarfPlanetData(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data: ' + err.message);
        setLoading(false);
      }
    }
    fetchDwarfPlanetData();
  }, []);

  if (loading) {
    return <div className={`${styles.container} ${styles.milkyWay}`}>Loading...</div>;
  }

  if (error) {
    return <div className={`${styles.container} ${styles.milkyWay}`}>Error: {error}</div>;
  }

  return (
    <div className={`${styles.container} ${styles.milkyWay}`}>
      <h1 className={styles.heading}>Dwarf Planet Types and Subtypes</h1>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Icon</th>
              <th>Type/Subtype</th>
              <th>Parent Type</th>
              <th>Description</th>
              <th>Star Compatibility</th>
              <th>Mass Range (M⊕)</th>
              <th>Size Range (R⊕)</th>
              <th>Orbital Distance (AU)</th>
              <th>Composition Notes</th>
              <th>Frequency</th>
              <th>Habitability</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {dwarfPlanetData.map((dwarfPlanet, idx) => (
              <React.Fragment key={`entry-${idx}`}>
                <tr>
                  <td>
                    {dwarfPlanet.image_url ? (
                      <img
                        src={dwarfPlanet.image_url}
                        alt={`${dwarfPlanet.type} dwarf planet`}
                        className={styles.planetImage}
                      />
                    ) : (
                      <div className={styles.earth} aria-label="Silicate-like dwarf planet"></div>
                    )}
                  </td>
                  <td>{dwarfPlanet.type}</td>
                  <td>{dwarfPlanet.parent_type || '-'}</td>
                  <td>{dwarfPlanet.description}</td>
                  <td>{dwarfPlanet.star_compatibility.join(', ')}</td>
                  <td>{dwarfPlanet.mass_range}</td>
                  <td>{dwarfPlanet.size_range}</td>
                  <td>{dwarfPlanet.orbital_distance_range}</td>
                  <td>{dwarfPlanet.composition_notes}</td>
                  <td>{dwarfPlanet.frequency}</td>
                  <td>{dwarfPlanet.habitability}</td>
                  <td>{dwarfPlanet.location.join(', ')}</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}