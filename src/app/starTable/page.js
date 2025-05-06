import React from "react";
import styles from '../styles/stars.module.css';

const starData = [
    {
      type: 'O-type',
      temp: '30,000–50,000 K',
      colorClass: 'colorO',
      size: 'Up to 50× Solar',
      lifespan: '1–10 million years',
      planetNotes: 'Unlikely to have stable planets due to intense radiation and short life span.',
      lifeLikelihood: 'Extremely low. Too hot and too short-lived for life.',
      estimated: '~1 star',
    },
    {
      type: 'B-type',
      temp: '10,000–30,000 K',
      colorClass: 'colorB',
      size: '3–15× Solar',
      lifespan: '10–100 million years',
      planetNotes: 'Low likelihood of habitable planets; harsh radiation environments.',
      lifeLikelihood: 'Very low. Similar issues to O-type stars.',
      estimated: '~10 stars',
    },
    {
      type: 'A-type',
      temp: '7,500–10,000 K',
      colorClass: 'colorA',
      size: '1.5–2.5× Solar',
      lifespan: '200–400 million years',
      planetNotes: 'May have planets, but their habitable zones are close to the star.',
      lifeLikelihood: 'Low. Shorter lifespan and intense radiation.',
      estimated: '~50 stars',
    },
    {
      type: 'F-type',
      temp: '6,000–7,500 K',
      colorClass: 'colorF',
      size: '1.5–2× Solar',
      lifespan: '2–4 billion years',
      planetNotes: 'Can host planets, more stable than hotter stars.',
      lifeLikelihood: 'Moderate. Possibility of habitable planets.',
      estimated: '~200 stars',
    },
    {
      type: 'G-type',
      temp: '5,300–6,000 K',
      colorClass: 'colorG',
      size: 'Similar to Solar',
      lifespan: '9–10 billion years',
      planetNotes: 'Likely to have planets, as seen with our Solar System.',
      lifeLikelihood: 'High. Habitable zone suitable for Earth-like planets.',
      estimated: '~700 stars',
    },
    {
      type: 'K-type',
      temp: '3,500–5,300 K',
      colorClass: 'colorK',
      size: '0.7–0.8× Solar',
      lifespan: '10–30 billion years',
      planetNotes: 'Stable and long-lived. Planets can form in habitable zones.',
      lifeLikelihood: 'Moderate to High.',
      estimated: '~3,000 stars',
    },
    {
      type: 'M-type',
      temp: '<3,500 K',
      colorClass: 'colorM',
      size: '0.1–0.5× Solar',
      lifespan: '30–100 billion years',
      planetNotes: 'Very common. Habitable zones close to the star.',
      lifeLikelihood: 'Low to Moderate. Life possible with challenges.',
      estimated: '~6,000 stars',
    },
    {
      type: 'Brown Dwarfs',
      temp: '500–2,500 K',
      colorClass: 'colorBrownDwarf',
      size: 'Substellar (planet-sized)',
      lifespan: '100–200 million years',
      planetNotes: 'Not capable of sustaining fusion; could have cold planets.',
      lifeLikelihood: 'Very low. No fusion.',
      estimated: '~50 stars',
    },
    {
      type: 'White Dwarfs',
      temp: '>10,000 K (initial)',
      colorClass: 'colorWhiteDwarf',
      size: 'Earth-sized',
      lifespan: 'Billions of years',
      planetNotes: 'May retain planetary debris, not form new planets.',
      lifeLikelihood: 'Very low. No longer active.',
      estimated: '~50 stars',
    },
    {
      type: 'Neutron Stars',
      temp: '>1,000,000 K',
      colorClass: 'colorNeutron',
      size: '~20 km',
      lifespan: 'Billions of years',
      planetNotes: 'Intense radiation and gravity make planets unstable.',
      lifeLikelihood: 'Extremely low. Life impossible.',
      estimated: '~1 star',
    },
    {
      type: 'Black Holes',
      temp: '—',
      colorClass: 'colorBlackHole',
      size: 'Singularity',
      lifespan: 'Eternal',
      planetNotes: 'Do not have conventional planetary systems.',
      lifeLikelihood: 'None. Too extreme.',
      estimated: '~1 star',
    },
  ];
  
  export default function starTypesPage() {
    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>Star Types in a 1,000 × 1,000 Light-Year Cube</h1>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Type</th>
              <th>Color</th>
              <th>Temperature</th>
              <th>Size</th>
              <th>Life Span</th>
              <th>Planetary Formation</th>
              <th>Habitability</th>
              <th>Est. Count</th>
            </tr>
          </thead>
          <tbody>
            {starData.map((star, index) => (
              <tr key={index}>
                <td>{star.type}</td>
                <td>
                  <span className={`${styles.colorDot} ${styles[star.colorClass]}`} title={star.type}></span>
                </td>
                <td>{star.temp}</td>
                <td>{star.size}</td>
                <td>{star.lifespan}</td>
                <td>{star.planetNotes}</td>
                <td>{star.lifeLikelihood}</td>
                <td>{star.estimated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
