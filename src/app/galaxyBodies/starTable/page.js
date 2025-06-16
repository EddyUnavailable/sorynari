
import React from 'react';
import styles from '@/styles/galaxyBodies.module.css';

const starData = [
  {
    type: 'O-type',
    temp: '30,000–50,000 K',
    size: 'Up to 50× Solar',
    lifespan: '1–10 million years',
    planetNotes: 'Unlikely to have stable planets due to intense radiation and short life span.',
    lifeLikelihood: 'Extremely low. Too hot and too short-lived for life.',
    estimated: '~1 star',
    imageUrl: 'https://via.placeholder.com/60/4682ff?text=O-type',
  },
  {
    type: 'B-type',
    temp: '10,000–30,000 K',
    size: '3–15× Solar',
    lifespan: '10–100 million years',
    planetNotes: 'Low likelihood of habitable planets; harsh radiation environments.',
    lifeLikelihood: 'Very low. Similar issues to O-type stars.',
    estimated: '~10 stars',
    imageUrl: 'https://via.placeholder.com/60/a3cdff?text=B-type',
  },
  {
    type: 'A-type',
    temp: '7,500–10,000 K',
    size: '1.5–2.5× Solar',
    lifespan: '200–400 million years',
    planetNotes: 'May have planets, but their habitable zones are close to the star.',
    lifeLikelihood: 'Low. Shorter lifespan and intense radiation.',
    estimated: '~50 stars',
    imageUrl: 'https://via.placeholder.com/60/f0f8ff?text=A-type',
  },
  {
    type: 'F-type',
    temp: '6,000–7,500 K',
    size: '1.5–2× Solar',
    lifespan: '2–4 billion years',
    planetNotes: 'Can host planets, more stable than hotter stars.',
    lifeLikelihood: 'Moderate. Possibility of habitable planets.',
    estimated: '~200 stars',
    imageUrl: 'https://via.placeholder.com/60/fffde6?text=F-type',
  },
  {
    type: 'G-type',
    temp: '5,300–6,000 K',
    size: 'Similar to Solar',
    lifespan: '9–10 billion years',
    planetNotes: 'Likely to have planets, as seen with our Solar System.',
    lifeLikelihood: 'High. Habitable zone suitable for Earth-like planets.',
    estimated: '~700 stars',
    imageUrl: 'https://via.placeholder.com/60/ffee58?text=G-type',
  },
  {
    type: 'K-type',
    temp: '3,500–5,300 K',
    size: '0.7–0.8× Solar',
    lifespan: '10–30 billion years',
    planetNotes: 'Stable and long-lived. Planets can form in habitable zones.',
    lifeLikelihood: 'Moderate to High.',
    estimated: '~3,000 stars',
    imageUrl: 'https://via.placeholder.com/60/ffa726?text=K-type',
  },
  {
    type: 'M-type',
    temp: '<3,500 K',
    size: '0.1–0.5× Solar',
    lifespan: '30–100 billion years',
    planetNotes: 'Very common. Habitable zones close to the star.',
    lifeLikelihood: 'Low to Moderate. Life possible with challenges.',
    estimated: '~6,000 stars',
    imageUrl: 'https://via.placeholder.com/60/ff5555?text=M-type',
  },
  {
    type: 'Brown Dwarfs',
    temp: '500–2,500 K',
    size: 'Substellar (planet-sized)',
    lifespan: '100–200 million years',
    planetNotes: 'Not capable of sustaining fusion; could have cold planets.',
    lifeLikelihood: 'Very low. No fusion.',
    estimated: '~50 stars',
    imageUrl: 'https://via.placeholder.com/60/7a4a30?text=Brown+Dwarf',
  },
  {
    type: 'White Dwarfs',
    temp: '>10,000 K (initial)',
    size: 'Earth-sized',
    lifespan: 'Billions of years',
    planetNotes: 'May retain planetary debris, not form new planets.',
    lifeLikelihood: 'Very low. No longer active.',
    estimated: '~50 stars',
    imageUrl: 'https://via.placeholder.com/60/d9d9d9?text=White+Dwarf',
  },
  {
    type: 'Neutron Stars',
    temp: '>1,000,000 K',
    size: '~20 km',
    lifespan: 'Billions of years',
    planetNotes: 'Intense radiation and gravity make planets unstable.',
    lifeLikelihood: 'Extremely low. Life impossible.',
    estimated: '~1 star',
    imageUrl: 'https://via.placeholder.com/60/c7bfff?text=Neutron+Star',
  },
  {
    type: 'Black Holes',
    temp: '—',
    size: 'Singularity',
    lifespan: 'Eternal',
    planetNotes: 'Do not have conventional planetary systems.',
    lifeLikelihood: 'None. Too extreme.',
    estimated: '~1 star',
    imageUrl: 'https://via.placeholder.com/60/1a1a1a?text=Black+Hole',
  },
];

export default function StarTypesPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Star Types in a 1,000 × 1,000 Light-Year Cube</h1>
      <div className={styles.tableWrapper}>
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
                  <img
                    src={star.imageUrl}
                    alt={`${star.type} star`}
                    className={styles.starImage}
                    title={star.type}
                  />
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
    </div>
  );
}
