
import React from 'react';
import styles from '@/styles/galaxyBodies.module.css';

const planetData = [
  {
    type: 'Terrestrial',
    description: 'Rocky planets with solid surfaces, e.g., Earth, Mars.',
    starCompatibility: ['F', 'G', 'K', 'M'],
    habitability: 'High (depending on atmosphere and location)',
    imageUrl: null,
  },
  {
    type: 'Gas Giant',
    description: 'Large planets with thick gaseous envelopes, like Jupiter.',
    starCompatibility: ['A', 'F', 'G', 'K', 'M'],
    habitability: 'None (could have habitable moons)',
    imageUrl: 'https://via.placeholder.com/60/e0ac69?text=Gas+Giant',
  },
  {
    type: 'Ice Giant',
    description: 'Similar to gas giants but with more ice elements, e.g., Neptune.',
    starCompatibility: ['A', 'F', 'G', 'K', 'M'],
    habitability: 'None',
    imageUrl: 'https://via.placeholder.com/60/4db6ac?text=Ice+Giant',
  },
  {
    type: 'Super-Earth',
    description: 'Rocky planets larger than Earth, may be habitable.',
    starCompatibility: ['F', 'G', 'K', 'M'],
    habitability: 'Potentially High',
    imageUrl: 'https://via.placeholder.com/60/5d4037?text=Super-Earth',
  },
  {
    type: 'Mini-Neptune',
    description: 'Small gas planets with possible dense atmospheres.',
    starCompatibility: ['F', 'G', 'K', 'M'],
    habitability: 'Low',
    imageUrl: 'https://via.placeholder.com/60/64b5f6?text=Mini-Neptune',
  },
  {
    type: 'Ocean World',
    description: 'Planets covered with vast oceans.',
    starCompatibility: ['F', 'G', 'K', 'M'],
    habitability: 'Moderate to High (if stable climate)',
    imageUrl: 'https://via.placeholder.com/60/1976d2?text=Ocean+World',
  },
  {
    type: 'Lava World',
    description: 'Hot rocky planets with molten surfaces.',
    starCompatibility: ['O', 'B', 'A', 'F', 'G'],
    habitability: 'None',
    imageUrl: 'https://via.placeholder.com/60/b71c1c?text=Lava+World',
  },
  {
    type: 'Desert Planet',
    description: 'Arid, dry planets with little to no water.',
    starCompatibility: ['F', 'G', 'K', 'M'],
    habitability: 'Moderate (if atmosphere exists)',
    imageUrl: 'https://via.placeholder.com/60/e57373?text=Desert+Planet',
  },
  {
    type: 'Rogue Planet',
    description: 'Planets not bound to any star system.',
    starCompatibility: ['Any (ejected bodies)'],
    habitability: 'Extremely Low',
    imageUrl: 'https://via.placeholder.com/60/455a64?text=Rogue+Planet',
  },
  {
    type: 'Carbon Planet',
    description: 'Planets with surfaces rich in carbon compounds.',
    starCompatibility: ['G', 'K', 'M'],
    habitability: 'Unknown',
    imageUrl: 'https://via.placeholder.com/60/263238?text=Carbon+Planet',
  },
  {
    type: 'Chthonian Planet',
    description: 'Gas giants stripped of their atmospheres.',
    starCompatibility: ['O', 'B', 'A', 'F', 'G'],
    habitability: 'None',
    imageUrl: 'https://via.placeholder.com/60/546e7a?text=Chthonian',
  },
];

export default function PlanetTypes() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Planet Types</h1>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Icon</th>
              <th>Type</th>
              <th>Description</th>
              <th>Star Compatibility</th>
              <th>Habitability</th>
            </tr>
          </thead>
          <tbody>
            {planetData.map((planet, idx) => (
              <tr key={idx}>
                <td>
                  {planet.type === 'Terrestrial' ? (
                    <div className={styles.earth} aria-label="Earth-like planet"></div>
                  ) : (
                    <img
                      src={planet.imageUrl}
                      alt={`${planet.type} planet`}
                      className={styles.planetImage}
                    />
                  )}
                </td>
                <td>{planet.type}</td>
                <td>{planet.description}</td>
                <td>{planet.starCompatibility.join(', ')}</td>
                <td>{planet.habitability}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
