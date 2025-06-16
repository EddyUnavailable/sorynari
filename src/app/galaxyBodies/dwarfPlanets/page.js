import React from 'react';
import styles from '@/styles/galaxyBodies.module.css';

const dwarfPlanetTypeData = [
  {
    type: 'Kuiper Belt Dwarf Planet',
    description: 'Spherical bodies in the Kuiper Belt, not clearing their orbits, e.g., Pluto, Haumea.',
    location: ['Kuiper Belt'],
    habitability: 'Low',
    imageUrl: 'https://via.placeholder.com/60/455a64?text=Kuiper+Belt+Dwarf',
  },
  {
    type: 'Scattered Disc Dwarf Planet',
    description: 'Spherical bodies with highly eccentric orbits, e.g., Eris, Gonggong.',
    location: ['Scattered Disc'],
    habitability: 'Low',
    imageUrl: 'https://via.placeholder.com/60/4682b4?text=Scattered+Disc+Dwarf',
  },
  {
    type: 'Inner Solar System Dwarf Planet',
    description: 'Spherical bodies in the asteroid belt, not clearing their orbits, e.g., Ceres.',
    location: ['Asteroid Belt'],
    habitability: 'Low (potential water ice)',
    imageUrl: 'https://via.placeholder.com/60/696969?text=Inner+Dwarf',
  },
];

export default function DwarfPlanetTypes() {
  return (
    <div className={`${styles.container} ${styles.milkyWay}`}>
      <h1 className={styles.heading}>Dwarf Planet Types</h1>
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
            {dwarfPlanetTypeData.map((dwarfPlanet, idx) => (
              <tr key={idx}>
                <td>
                  <img
                    src={dwarfPlanet.imageUrl}
                    alt={`${dwarfPlanet.type} dwarf planet`}
                    className={styles.planetImage}
                  />
                </td>
                <td>{dwarfPlanet.type}</td>
                <td>{dwarfPlanet.description}</td>
                <td>{dwarfPlanet.location.join(', ')}</td>
                <td>{dwarfPlanet.habitability}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}