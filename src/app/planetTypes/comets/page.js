import React from 'react';
import styles from '@/styles/stars.module.css';

const cometTypeData = [
  {
    type: 'Short-Period Comet',
    description: 'Comets with orbital periods less than 200 years, often from the Kuiper Belt, e.g., Halley’s Comet.',
    location: ['Inner Solar System', 'Kuiper Belt'],
    habitability: 'None',
    imageUrl: 'https://via.placeholder.com/60/87ceeb?text=Short-Period+Comet',
  },
  {
    type: 'Long-Period Comet',
    description: 'Comets with orbital periods exceeding 200 years, originating from the Oort Cloud, e.g., Hale-Bopp.',
    location: ['Inner Solar System', 'Oort Cloud'],
    habitability: 'None',
    imageUrl: 'https://via.placeholder.com/60/00b7eb?text=Long-Period+Comet',
  },
  {
    type: 'Sungrazer Comet',
    description: 'Comets passing extremely close to the Sun, often disintegrating, e.g., Comet ISON.',
    location: ['Inner Solar System', 'Oort Cloud'],
    habitability: 'None',
    imageUrl: 'https://via.placeholder.com/60/ffa500?text=Sungrazer+Comet',
  },
  {
    type: 'Extinct Comet',
    description: 'Comets that have lost their volatile materials, resembling asteroids, e.g., 3200 Phaethon.',
    location: ['Asteroid Belt', 'Inner Solar System'],
    habitability: 'None',
    imageUrl: 'https://via.placeholder.com/60/696969?text=Extinct+Comet',
  },
  {
    type: 'Interstellar Comet',
    description: 'Comets from outside our solar system, passing through, e.g., 2I/Borisov.',
    location: ['Interstellar', 'Inner Solar System'],
    habitability: 'None',
    imageUrl: 'https://via.placeholder.com/60/4682b4?text=Interstellar+Comet',
  },
];

export default function CometTypes() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Comet Types</h1>
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
            {cometTypeData.map((comet, idx) => (
              <tr key={idx}>
                <td>
                  <img
                    src={comet.imageUrl}
                    alt={`${comet.type} comet`}
                    className={styles.planetImage}
                  />
                </td>
                <td>{comet.type}</td>
                <td>{comet.description}</td>
                <td>{comet.location.join(', ')}</td>
                <td>{comet.habitability}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}