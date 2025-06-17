"use client";
import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import styles from '@/styles/galaxyBodies.module.css';

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function PlanetTypes() {
  const [planetData, setPlanetData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch planet data from Supabase on component mount
  useEffect(() => {
    async function fetchPlanetData() {
      try {
        const { data, error } = await supabase
          .from('planets')
          .select('*')
          .order('id', { ascending: true });
        if (error) {
          throw error;
        }
        setPlanetData(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data: ' + err.message);
        setLoading(false);
      }
    }
    fetchPlanetData();
  }, []);

  if (loading) {
    return <div className={`${styles.container} ${styles.milkyWay}`}>Loading...</div>;
  }

  if (error) {
    return <div className={`${styles.container} ${styles.milkyWay}`}>Error: {error}</div>;
  }

  return (
    <div className={`${styles.container} ${styles.milkyWay}`}>
      <h1 className={styles.heading}>Planet Types and Subtypes</h1>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Icon</th>
              <th>Type/Subtype</th>
              <th>Parent Type</th>
              <th>Description</th>
              <th>Star Compatibility</th>
              <th>Mass Range (M_J or M⊕)</th>
              <th>Size Range (R_J or R⊕)</th>
              <th>Orbital Distance (AU)</th>
              <th>Composition Notes</th>
              <th>Frequency</th>
              <th>Habitability</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {planetData.map((planet, idx) => (
              <React.Fragment key={`entry-${idx}`}>
                <tr>
                  <td>
                    {planet.image_url ? (
                      <img
                        src={planet.image_url}
                        alt={`${planet.type} planet`}
                        className={styles.planetImage}
                      />
                    ) : (
                      <div className={styles.earth} aria-label="Silicate-like planet"></div>
                    )}
                  </td>
                  <td>{planet.type}</td>
                  <td>{planet.parent_type || '-'}</td>
                  <td>{planet.description}</td>
                  <td>{planet.star_compatibility.join(', ')}</td>
                  <td>{planet.mass_range}</td>
                  <td>{planet.size_range}</td>
                  <td>{planet.orbital_distance_range}</td>
                  <td>{planet.composition_notes}</td>
                  <td>{planet.frequency}</td>
                  <td>{planet.habitability}</td>
                  <td>{planet.location.join(', ')}</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}