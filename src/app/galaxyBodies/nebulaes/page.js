import React from 'react';
import styles from '@/styles/galaxyBodies.module.css';

const nebulaTypeData = [
  {
    type: 'Emission Nebula',
    description: 'Clouds of ionized gas glowing due to nearby hot stars, e.g., Orion Nebula.',
    location: ['Star-forming regions', 'Galactic disks'],
    habitability: 'None',
    imageUrl: 'https://via.placeholder.com/60/ff4040?text=Emission+Nebula',
  },
  {
    type: 'Reflection Nebula',
    description: 'Dust clouds reflecting light from nearby stars, e.g., Pleiades Nebula.',
    location: ['Star-forming regions', 'Galactic disks'],
    habitability: 'None',
    imageUrl: 'https://via.placeholder.com/60/4682b4?text=Reflection+Nebula',
  },
  {
    type: 'Planetary Nebula',
    description: 'Shells of gas ejected by dying low-mass stars, e.g., Ring Nebula.',
    location: ['Galactic disks', 'Galactic halos'],
    habitability: 'None',
    imageUrl: 'https://via.placeholder.com/60/00ff7f?text=Planetary+Nebula',
  },
  {
    type: 'Supernova Remnant',
    description: 'Expanding gas clouds from massive star explosions, e.g., Crab Nebula.',
    location: ['Galactic disks', 'Interstellar medium'],
    habitability: 'None',
    imageUrl: 'https://via.placeholder.com/60/9932cc?text=Supernova+Remnant',
  },
  {
    type: 'Dark Nebula',
    description: 'Dense dust clouds blocking background starlight, e.g., Horsehead Nebula.',
    location: ['Star-forming regions', 'Galactic disks'],
    habitability: 'None',
    imageUrl: 'https://via.placeholder.com/60/2f2f2f?text=Dark+Nebula',
  },
];

export default function NebulaTypes() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Nebula Types</h1>
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
            {nebulaTypeData.map((nebula, idx) => (
              <tr key={idx}>
                <td>
                  <img
                    src={nebula.imageUrl}
                    alt={`${nebula.type} nebula`}
                    className={styles.planetImage}
                  />
                </td>
                <td>{nebula.type}</td>
                <td>{nebula.description}</td>
                <td>{nebula.location.join(', ')}</td>
                <td>{nebula.habitability}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}