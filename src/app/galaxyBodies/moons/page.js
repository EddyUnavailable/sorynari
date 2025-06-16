import React from 'react';
import styles from '@/styles/galaxyBodies.module.css';

const moonTypeData = [
  {
    type: 'Rocky Moon',
    description: 'Solid, silicate-based moons with rocky surfaces, often cratered or geologically inactive, e.g., Earth’s Moon, Phobos.',
    planetCompatibility: ['Terrestrial'],
    habitability: 'Low (limited by atmosphere absence)',
    imageUrl: 'https://via.placeholder.com/60/808080?text=Rocky+Moon',
  },
  {
    type: 'Icy Moon',
    description: 'Moons with water ice or volatile surfaces, often with subsurface oceans, e.g., Europa, Enceladus.',
    planetCompatibility: ['Gas Giant', 'Ice Giant'],
    habitability: 'Moderate to High (if subsurface oceans present)',
    imageUrl: 'https://via.placeholder.com/60/add8e6?text=Icy+Moon',
  },
  {
    type: 'Volcanic Moon',
    description: 'Geologically active moons with volcanic activity driven by tidal heating, e.g., Io.',
    planetCompatibility: ['Gas Giant'],
    habitability: 'Low (extreme conditions)',
    imageUrl: 'https://via.placeholder.com/60/ff4500?text=Volcanic+Moon',
  },
  {
    type: 'Captured Moon',
    description: 'Irregular moons, likely captured asteroids or comets, with eccentric or retrograde orbits, e.g., Triton, Phoebe.',
    planetCompatibility: ['Gas Giant', 'Ice Giant', 'Terrestrial'],
    habitability: 'Low',
    imageUrl: 'https://via.placeholder.com/60/696969?text=Captured+Moon',
  },
  {
    type: 'Regular Moon',
    description: 'Moons formed in orbit around a planet, with circular, prograde orbits, e.g., Ganymede, Titan.',
    planetCompatibility: ['Gas Giant', 'Ice Giant', 'Terrestrial'],
    habitability: 'Moderate (e.g., Titan with atmosphere)',
    imageUrl: 'https://via.placeholder.com/60/9acd32?text=Regular+Moon',
  },
  {
    type: 'Shepherd Moon',
    description: 'Small moons orbiting within or near planetary rings, shaping them gravitationally, e.g., Pandora, Prometheus.',
    planetCompatibility: ['Gas Giant', 'Ice Giant'],
    habitability: 'None',
    imageUrl: 'https://via.placeholder.com/60/d3d3d3?text=Shepherd+Moon',
  },
  {
    type: 'Trojan Moon',
    description: 'Hypothetical moons sharing a planet’s orbit at Lagrangian points, none confirmed in our solar system.',
    planetCompatibility: ['Any'],
    habitability: 'Unknown',
    imageUrl: 'https://via.placeholder.com/60/708090?text=Trojan+Moon',
  },
  {
    type: 'Exomoon',
    description: 'Moons orbiting exoplanets, hypothesized but not confirmed, e.g., around Kepler-1625b.',
    planetCompatibility: ['Gas Giant', 'Super-Earth', 'Mini-Neptune'],
    habitability: 'Unknown (potentially high for icy exomoons)',
    imageUrl: 'https://via.placeholder.com/60/4682b4?text=Exomoon',
  },
  {
    type: 'Dwarf Planet Moon',
    description: 'Moons orbiting dwarf planets, often comparable in size to their parent, e.g., Charon around Pluto.',
    planetCompatibility: ['Dwarf Planet'],
    habitability: 'Low',
    imageUrl: 'https://via.placeholder.com/60/556b2f?text=Dwarf+Planet+Moon',
  },
  {
    type: 'Temporary Moon',
    description: 'Mini-moons or transient objects briefly captured by a planet’s gravity, e.g., 2020 CD3 around Earth.',
    planetCompatibility: ['Terrestrial', 'Gas Giant'],
    habitability: 'None',
    imageUrl: 'https://via.placeholder.com/60/778899?text=Temporary+Moon',
  },
];

export default function MoonTypes() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Moon Types</h1>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Icon</th>
              <th>Type</th>
              <th>Description</th>
              <th>Planet Compatibility</th>
              <th>Habitability</th>
            </tr>
          </thead>
          <tbody>
            {moonTypeData.map((moon, idx) => (
              <tr key={idx}>
                <td>
                  {moon.type === 'Rocky Moon' ? (
                    <div className={styles.earth} aria-label="Rocky moon"></div>
                  ) : (
                    <img
                      src={moon.imageUrl}
                      alt={`${moon.type} moon`}
                      className={styles.planetImage}
                    />
                  )}
                </td>
                <td>{moon.type}</td>
                <td>{moon.description}</td>
                <td>{moon.planetCompatibility.join(', ')}</td>
                <td>{moon.habitability}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}