import React from 'react';
import styles from '../styles/planets.module.css';

const planetData = [
  {
    type: 'Terrestrial',
    colorClass: 'colorTerrestrial',
    description: 'Rocky planets with solid surfaces, e.g., Earth, Mars.',
    starCompatibility: ['F', 'G', 'K', 'M'],
    habitability: 'High (depending on atmosphere and location)',
    icon: '🌍'
  },
  {
    type: 'Gas Giant',
    colorClass: 'colorGasGiant',
    description: 'Large planets with thick gaseous envelopes, like Jupiter.',
    starCompatibility: ['A', 'F', 'G', 'K', 'M'],
    habitability: 'None (could have habitable moons)',
    icon: '🪐'
  },
  {
    type: 'Ice Giant',
    colorClass: 'colorIceGiant',
    description: 'Similar to gas giants but with more ice elements, e.g., Neptune.',
    starCompatibility: ['A', 'F', 'G', 'K', 'M'],
    habitability: 'None',
    icon: '🧊'
  },
  {
    type: 'Super-Earth',
    colorClass: 'colorSuperEarth',
    description: 'Rocky planets larger than Earth, may be habitable.',
    starCompatibility: ['F', 'G', 'K', 'M'],
    habitability: 'Potentially High',
    icon: '🌎'
  },
  {
    type: 'Mini-Neptune',
    colorClass: 'colorMiniNeptune',
    description: 'Small gas planets with possible dense atmospheres.',
    starCompatibility: ['F', 'G', 'K', 'M'],
    habitability: 'Low',
    icon: '🌫️'
  },
  {
    type: 'Ocean World',
    colorClass: 'colorOceanWorld',
    description: 'Planets covered with vast oceans.',
    starCompatibility: ['F', 'G', 'K', 'M'],
    habitability: 'Moderate to High (if stable climate)',
    icon: '🌊'
  },
  {
    type: 'Lava World',
    colorClass: 'colorLavaWorld',
    description: 'Hot rocky planets with molten surfaces.',
    starCompatibility: ['O', 'B', 'A', 'F', 'G'],
    habitability: 'None',
    icon: '🌋'
  },
  {
    type: 'Desert Planet',
    colorClass: 'colorDesertPlanet',
    description: 'Arid, dry planets with little to no water.',
    starCompatibility: ['F', 'G', 'K', 'M'],
    habitability: 'Moderate (if atmosphere exists)',
    icon: '🏜️'
  },
  {
    type: 'Rogue Planet',
    colorClass: 'colorRoguePlanet',
    description: 'Planets not bound to any star system.',
    starCompatibility: ['Any (ejected bodies)'],
    habitability: 'Extremely Low',
    icon: '🛰️'
  },
  {
    type: 'Carbon Planet',
    colorClass: 'colorCarbonPlanet',
    description: 'Planets with surfaces rich in carbon compounds.',
    starCompatibility: ['G', 'K', 'M'],
    habitability: 'Unknown',
    icon: '🪵'
  },
  {
    type: 'Chthonian Planet',
    colorClass: 'colorChthonian',
    description: 'Gas giants stripped of their atmospheres.',
    starCompatibility: ['O', 'B', 'A', 'F', 'G'],
    habitability: 'None',
    icon: '⚫'
  },
];

export default function planetTypes() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Planet Types</h1>
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
              <td><span className={`${styles.colorDot} ${styles[planet.colorClass]}`}>{planet.icon}</span></td>
              <td>{planet.type}</td>
              <td>{planet.description}</td>
              <td>{planet.starCompatibility.join(', ')}</td>
              <td>{planet.habitability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
