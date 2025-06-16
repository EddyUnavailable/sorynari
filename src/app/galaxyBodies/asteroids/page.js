import React from 'react';
import styles from '@/styles/galaxyBodies.module.css';

const asteroidTypeData = [
  {
    type: 'C-Type (Carbonaceous)',
    description: 'Carbon-rich asteroids, common in the outer asteroid belt, e.g., Hygiea.',
    location: ['Asteroid Belt (outer)', 'Scattered'],
    habitability: 'None',
    imageUrl: 'https://via.placeholder.com/60/2f2f2f?text=C-Type',
  },
  {
    type: 'S-Type (Silicaceous)',
    description: 'Silicate-based asteroids, dominant in the inner asteroid belt, e.g., Eros.',
    location: ['Asteroid Belt (inner)', 'Near-Earth'],
    habitability: 'None',
    imageUrl: 'https://via.placeholder.com/60/696969?text=S-Type',
  },
  {
    type: 'M-Type (Metallic)',
    description: 'Metal-rich asteroids, possibly cores of differentiated bodies, e.g., Psyche.',
    location: ['Asteroid Belt (middle)', 'Scattered'],
    habitability: 'None',
    imageUrl: 'https://via.placeholder.com/60/808080?text=M-Type',
  },
  {
    type: 'V-Type (Vesta-like)',
    description: 'Basaltic asteroids, linked to Vesta’s crust, e.g., Vesta.',
    location: ['Asteroid Belt', 'Near-Earth'],
    habitability: 'None',
    imageUrl: 'https://via.placeholder.com/60/a9a9a9?text=V-Type',
  },
  {
    type: 'Near-Earth Asteroid (NEA)',
    description: 'Asteroids with orbits crossing Earth’s, potential impact risks, e.g., Apophis.',
    location: ['Near-Earth', 'Inner Solar System'],
    habitability: 'None',
    imageUrl: 'https://via.placeholder.com/60/556b2f?text=NEA',
  },
];

export default function AsteroidTypes() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Asteroid Types</h1>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Icon</th>
              <th>Type</th>
              <th>Description</th>
              <th>Location</th>
              <th>Habitability</th>
            </tr>
          </thead>
          <tbody>
            {asteroidTypeData.map((asteroid, idx) => (
              <tr key={idx}>
                <td>
                  <img
                    src={asteroid.imageUrl}
                    alt={`${asteroid.type} asteroid`}
                    className={styles.planetImage}
                  />
                </td>
                <td>{asteroid.type}</td>
                <td>{asteroid.description}</td>
                <td>{asteroid.location.join(', ')}</td>
                <td>{asteroid.habitability}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}