"use client"
import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import styles from '@/styles/galaxyBodies.module.css';
import sunStyles from '@/styles/sun.module.css';


const planetSubTypeData = [
  {
    type: 'Hot Jupiter',
    parentType: 'Gas Giant',
    description: 'Gas giants orbiting very close to their star with high temperatures.',
    starCompatibility: ['O', 'B', 'A', 'F', 'G'],
    habitability: 'None',
    imageUrl: 'https://via.placeholder.com/60/e0ac69?text=Hot+Jupiter',
  },
  {
    type: 'Cold Jupiter',
    parentType: 'Gas Giant',
    description: 'Gas giants in wide, colder orbits, similar to Jupiter.',
    starCompatibility: ['A', 'F', 'G', 'K', 'M'],
    habitability: 'None (could have habitable moons)',
    imageUrl: 'https://via.placeholder.com/60/e0ac69?text=Cold+Jupiter',
  },
  {
    type: 'Hot Neptune',
    parentType: 'Mini-Neptune',
    description: 'Smaller gas planets in close orbits with high temperatures.',
    starCompatibility: ['O', 'B', 'A', 'F', 'G'],
    habitability: 'Low',
    imageUrl: 'https://via.placeholder.com/60/64b5f6?text=Hot+Neptune',
  },
  {
    type: 'Sub-Neptune',
    parentType: 'Mini-Neptune',
    description: 'Planets between Super-Earth and Neptune in size with dense atmospheres.',
    starCompatibility: ['F', 'G', 'K', 'M'],
    habitability: 'Low to Moderate',
    imageUrl: 'https://via.placeholder.com/60/64b5f6?text=Sub-Neptune',
  },
  {
    type: 'Ultra-Hot Jupiter',
    parentType: 'Gas Giant',
    description: 'Extremely hot gas giants with temperatures exceeding 2,000 K.',
    starCompatibility: ['O', 'B', 'A', 'F'],
    habitability: 'None',
    imageUrl: 'https://via.placeholder.com/60/e0ac69?text=Ultra-Hot+Jupiter',
  },
  {
    type: 'Warm Neptune',
    parentType: 'Mini-Neptune',
    description: 'Neptunes in moderate orbits, less extreme than Hot Neptunes.',
    starCompatibility: ['F', 'G', 'K', 'M'],
    habitability: 'Low',
    imageUrl: 'https://via.placeholder.com/60/64b5f6?text=Warm+Neptune',
  },
  {
    type: 'Super-Jupiter',
    parentType: 'Gas Giant',
    description: 'Gas giants significantly larger than Jupiter.',
    starCompatibility: ['A', 'F', 'G', 'K', 'M'],
    habitability: 'None (could have habitable moons)',
    imageUrl: 'https://via.placeholder.com/60/e0ac69?text=Super-Jupiter',
  },
  {
    type: 'Puffy Planet',
    parentType: 'Gas Giant',
    description: 'Low-density gas giants with inflated atmospheres due to stellar heating.',
    starCompatibility: ['O', 'B', 'A', 'F'],
    habitability: 'None',
    imageUrl: 'https://via.placeholder.com/60/e0ac69?text=Puffy+Planet',
  },
  {
    type: 'Rocky Super-Earth',
    parentType: 'Super-Earth',
    description: 'Massive terrestrial planets with rocky surfaces.',
    starCompatibility: ['F', 'G', 'K', 'M'],
    habitability: 'Potentially High',
    imageUrl: 'https://via.placeholder.com/60/5d4037?text=Rocky+Super-Earth',
  },
  {
    type: 'Oceanic Super-Earth',
    parentType: 'Super-Earth',
    description: 'Super-Earths with significant water coverage, potentially habitable.',
    starCompatibility: ['F', 'G', 'K', 'M'],
    habitability: 'Moderate to High',
    imageUrl: 'https://via.placeholder.com/60/5d4037?text=Oceanic+Super-Earth',
  },
  {
    type: 'Iron Planet',
    parentType: 'Terrestrial',
    description: 'Rocky planets with high iron content, denser than typical terrestrials.',
    starCompatibility: ['F', 'G', 'K', 'M'],
    habitability: 'Low to Moderate',
    imageUrl: null,
  },
  {
    type: 'Silicate Planet',
    parentType: 'Terrestrial',
    description: 'Rocky planets dominated by silicate minerals, like Earth.',
    starCompatibility: ['F', 'G', 'K', 'M'],
    habitability: 'High (depending on atmosphere)',
    imageUrl: null,
  },
  {
    type: 'Dwarf Planet',
    parentType: 'Terrestrial',
    description: 'Small, rocky bodies not clearing their orbit, e.g., Pluto.',
    starCompatibility: ['F', 'G', 'K', 'M'],
    habitability: 'Low',
    imageUrl: 'https://via.placeholder.com/60/455a64?text=Dwarf+Planet',
  },
  {
    type: 'Hot Super-Earth',
    parentType: 'Super-Earth',
    description: 'Super-Earths in close orbits with high surface temperatures.',
    starCompatibility: ['O', 'B', 'A', 'F', 'G'],
    habitability: 'Low',
    imageUrl: 'https://via.placeholder.com/60/5d4037?text=Hot+Super-Earth',
  },
  {
    type: 'Cold Super-Earth',
    parentType: 'Super-Earth',
    description: 'Super-Earths in distant, colder orbits.',
    starCompatibility: ['F', 'G', 'K', 'M'],
    habitability: 'Moderate',
    imageUrl: 'https://via.placeholder.com/60/5d4037?text=Cold+Super-Earth',
  },
  {
    type: 'Gas Dwarf',
    parentType: 'Mini-Neptune',
    description: 'Small planets with thick hydrogen-helium atmospheres, transitional.',
    starCompatibility: ['F', 'G', 'K', 'M'],
    habitability: 'Low',
    imageUrl: 'https://via.placeholder.com/60/64b5f6?text=Gas+Dwarf',
  },
];

export default function PlanetSubTypes() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Planet Subtypes</h1>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Icon</th>
              <th>Subtype</th>
              <th>Parent Type</th>
              <th>Description</th>
              <th>Star Compatibility</th>
              <th>Habitability</th>
            </tr>
          </thead>
          <tbody>
            {planetSubTypeData.map((subType, idx) => (
              <tr key={idx}>
                <td>
                  {subType.type === 'Silicate Planet' ? (
                    <div className={styles.earth} aria-label="Earth-like planet"></div>
                  ) : (
                    <img
                      src={subType.imageUrl}
                      alt={`${subType.type} planet`}
                      className={styles.planetImage}
                    />
                  )}
                </td>
                <td>{subType.type}</td>
                <td>{subType.parentType}</td>
                <td>{subType.description}</td>
                <td>{subType.starCompatibility.join(', ')}</td>
                <td>{subType.habitability}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}