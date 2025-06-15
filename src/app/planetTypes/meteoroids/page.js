import React from 'react';
import styles from '@/styles/stars.module.css';

const meteoroidTypeData = [
  {
    type: 'Rocky Meteoroid',
    description: 'Small rocky fragments, often from asteroids, become meteors in atmospheres, e.g., Geminids.',
    location: ['Interplanetary Space', 'Near Planets'],
    habitability: 'None',
    imageUrl: 'https://via.placeholder.com/60/8b4513?text=Rocky+Meteoroid',
  },
  {
    type: 'Metallic Meteoroid',
    description: 'Small metallic fragments, typically from asteroid cores, e.g., Hoba meteorite parent.',
    location: ['Interplanetary Space', 'Near Planets'],
    habitability: 'None',
    imageUrl: 'https://via.placeholder.com/60/708090?text=Metallic+Meteoroid',
  },
  {
    type: 'Cometary Meteoroid',
    description: 'Fragments from comets, often causing meteor showers, e.g., Perseids.',
    location: ['Interplanetary Space', 'Near Planets'],
    habitability: 'None',
    imageUrl: 'https://via.placeholder.com/60/778899?text=Cometary+Meteoroid',
  },
];

export default function MeteoroidTypes() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Meteoroid Types</h1>
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
            {meteoroidTypeData.map((meteoroid, idx) => (
              <tr key={idx}>
                <td>
                  <img
                    src={meteoroid.imageUrl}
                    alt={`${meteoroid.type} meteoroid`}
                    className={styles.planetImage}
                  />
                </td>
                <td>{meteoroid.type}</td>
                <td>{meteoroid.description}</td>
                <td>{meteoroid.location.join(', ')}</td>
                <td>{meteoroid.habitability}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}