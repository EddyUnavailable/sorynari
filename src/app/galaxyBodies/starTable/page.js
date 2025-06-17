import React from 'react';
import styles from '@/styles/galaxyBodies.module.css';
import sunStyles from '@/styles/sun.module.css';

const starData = [
  {
    type: 'O-type',
    temp: '30,000–50,000 K',
    size: '15–90× Solar',
    mass: '15–120 M☉',
    luminosity: '10^4–10^6 L☉',
    metallicity: '-0.3 to +0.3',
    habitableZone: '100–400 AU',
    planetFrequency: '<5%',
    environment: 'Clusters, binaries',
    region: 'Spiral Arms',
    lifespan: '1–10 million years',
    planetNotes: 'Unlikely to form stable planets due to intense UV radiation.',
    lifeLikelihood: 'Extremely low. Too hot and short-lived.',
    estimated: '~0.0001% (~1 star)',
    colorClass: 'O',
  },
  {
    type: 'B-type',
    temp: '10,000–30,000 K',
    size: '3–18× Solar',
    mass: '3–18 M☉',
    luminosity: '10^2–10^4 L☉',
    metallicity: '-0.4 to +0.4',
    habitableZone: '10–30 AU',
    planetFrequency: '~5%',
    environment: 'Clusters, binaries',
    region: 'Spiral Arms',
    lifespan: '10–100 million years',
    planetNotes: 'Low chance of habitable planets due to high radiation.',
    lifeLikelihood: 'Very low. Harsh radiation environment.',
    estimated: '~0.13% (~13 stars)',
    colorClass: 'B',
  },
  {
    type: 'A-type',
    temp: '7,500–10,000 K',
    size: '1.4–2.1× Solar',
    mass: '1.4–2.1 M☉',
    luminosity: '5–25 L☉',
    metallicity: '-0.5 to +0.5',
    habitableZone: '2–4 AU',
    planetFrequency: '~10%',
    environment: '~30% binaries',
    region: 'Disk',
    lifespan: '0.5–2 billion years',
    planetNotes: 'Planets possible, but habitable zones are narrow.',
    lifeLikelihood: 'Low. Short lifespan limits life development.',
    estimated: '~0.6% (~60 stars)',
    colorClass: 'A',
  },
  {
    type: 'F-type',
    temp: '6,000–7,500 K',
    size: '1.15–1.4× Solar',
    mass: '1.15–1.4 M☉',
    luminosity: '1.5–5 L☉',
    metallicity: '-0.5 to +0.5',
    habitableZone: '1.5–2.2 AU',
    planetFrequency: '~20%',
    environment: '~33% binaries',
    region: 'Disk',
    lifespan: '2–4 billion years',
    planetNotes: 'Can host stable planets with wider habitable zones.',
    lifeLikelihood: 'Moderate. Suitable for habitable planets.',
    estimated: '~3% (~300 stars)',
    colorClass: 'F',
  },
  {
    type: 'G-type',
    temp: '5,200–6,000 K',
    size: '0.8–1.2× Solar',
    mass: '0.8–1.2 M☉',
    luminosity: '0.6–1.5 L☉',
    metallicity: '-0.5 to +0.5',
    habitableZone: '0.95–1.4 AU',
    planetFrequency: '~50%',
    environment: '~33% binaries',
    region: 'Disk',
    lifespan: '8–12 billion years',
    planetNotes: 'Ideal for planetary systems, like our Solar System.',
    lifeLikelihood: 'High. Stable habitable zone.',
    estimated: '~7.6% (~760 stars)',
    colorClass: 'G',
  },
  {
    type: 'K-type',
    temp: '3,700–5,200 K',
    size: '0.5–0.9× Solar',
    mass: '0.5–0.9 M☉',
    luminosity: '0.1–0.6 L☉',
    metallicity: '-0.5 to +0.5',
    habitableZone: '0.2–0.5 AU',
    planetFrequency: '~60%',
    environment: '~25% binaries',
    region: 'Disk',
    lifespan: '15–30 billion years',
    planetNotes: 'Long-lived stars with stable habitable zones.',
    lifeLikelihood: 'Moderate to High. Suitable for life.',
    estimated: '~12.1% (~1,210 stars)',
    colorClass: 'K',
  },
  {
    type: 'M-type',
    temp: '2,400–3,700 K',
    size: '0.08–0.6× Solar',
    mass: '0.08–0.6 M☉',
    luminosity: '0.001–0.08 L☉',
    metallicity: '-0.5 to +0.5',
    habitableZone: '0.03–0.1 AU',
    planetFrequency: '~70%',
    environment: 'Mostly isolated',
    region: 'Disk',
    lifespan: '50–100 billion years',
    planetNotes: 'Common; habitable zones close, often tidally locked.',
    lifeLikelihood: 'Moderate. Life possible with challenges.',
    estimated: '~76.5% (~7,650 stars)',
    colorClass: 'M',
  },
  {
    type: 'L-type',
    temp: '1,300–2,400 K',
    size: '0.07–0.1× Solar',
    mass: '0.06–0.08 M☉',
    luminosity: '<0.001 L☉',
    metallicity: '-0.3 to +0.3',
    habitableZone: '0.01–0.03 AU',
    planetFrequency: '~10%',
    environment: 'Mostly isolated',
    region: 'Disk',
    lifespan: '100+ billion years',
    planetNotes: 'Cool dwarfs; planets likely tidally locked.',
    lifeLikelihood: 'Low. Extreme conditions for life.',
    estimated: '~0.5% (~50 stars)',
    colorClass: 'BrownDwarf',
  },
  {
    type: 'T-type',
    temp: '700–1,300 K',
    size: '0.06–0.09× Solar',
    mass: '0.03–0.06 M☉',
    luminosity: '<0.0001 L☉',
    metallicity: '-0.3 to +0.3',
    habitableZone: 'Negligible',
    planetFrequency: '<5%',
    environment: 'Mostly isolated',
    region: 'Disk',
    lifespan: '100+ billion years',
    planetNotes: 'Brown dwarfs; cold planets unlikely.',
    lifeLikelihood: 'Very low. Insufficient energy.',
    estimated: '~0.2% (~20 stars)',
    colorClass: 'BrownDwarf',
  },
  {
    type: 'Y-type',
    temp: '300–700 K',
    size: '0.05–0.08× Solar',
    mass: '0.013–0.03 M☉',
    luminosity: '<0.00001 L☉',
    metallicity: '-0.3 to +0.3',
    habitableZone: 'Negligible',
    planetFrequency: '<1%',
    environment: 'Mostly isolated',
    region: 'Disk',
    lifespan: '100+ billion years',
    planetNotes: 'Coolest brown dwarfs; planets rare.',
    lifeLikelihood: 'Extremely low. Minimal energy.',
    estimated: '~0.1% (~10 stars)',
    colorClass: 'BrownDwarf',
  },
  {
    type: 'C-type (Carbon Stars)',
    temp: '2,500–3,500 K',
    size: '2–10× Solar',
    mass: '1–4 M☉',
    luminosity: '10–100 L☉',
    metallicity: '+0.1 to +0.5',
    habitableZone: '0.5–1 AU',
    planetFrequency: '~5%',
    environment: 'Isolated or binaries',
    region: 'Disk',
    lifespan: '1–3 billion years',
    planetNotes: 'Rare; carbon-rich, may have exotic planets.',
    lifeLikelihood: 'Low. Unstable environments.',
    estimated: '~0.01% (~1 star)',
    colorClass: 'M',
  },
  {
    type: 'W-type (Wolf-Rayet)',
    temp: '30,000–200,000 K',
    size: '10–20× Solar',
    mass: '10–30 M☉',
    luminosity: '10^5–10^6 L☉',
    metallicity: '-0.2 to +0.2',
    habitableZone: '100–500 AU',
    planetFrequency: '<1%',
    environment: 'Clusters, binaries',
    region: 'Spiral Arms',
    lifespan: '1–10 million years',
    planetNotes: 'Unlikely planets due to extreme mass loss.',
    lifeLikelihood: 'Extremely low. Hostile environment.',
    estimated: '~0.0001% (~1 star)',
    colorClass: 'O',
  },
  {
    type: 'White Dwarfs',
    temp: '8,000–40,000 K (initial)',
    size: '~0.01× Solar',
    mass: '0.5–1.4 M☉',
    luminosity: '0.0001–0.01 L☉',
    metallicity: '-1.0 to +0.5',
    habitableZone: '0.01–0.05 AU',
    planetFrequency: '~10%',
    environment: 'Isolated or binaries',
    region: 'Disk, Halo',
    lifespan: '10+ billion years',
    planetNotes: 'May retain planetary debris; new planets unlikely.',
    lifeLikelihood: 'Very low. Inactive remnants.',
    estimated: '~0.5% (~50 stars)',
    colorClass: 'WhiteDwarf',
  },
  {
    type: 'Neutron Stars',
    temp: '100,000–1,000,000 K',
    size: '~10–20 km',
    mass: '1.1–2.0 M☉',
    luminosity: '10^–5–10^–3 L☉',
    metallicity: '-0.5 to +0.5',
    habitableZone: 'Negligible',
    planetFrequency: '<1%',
    environment: 'Isolated or binaries',
    region: 'Disk',
    lifespan: '10+ billion years',
    planetNotes: 'Extreme gravity and radiation make planets unstable.',
    lifeLikelihood: 'Extremely low. Hostile environment.',
    estimated: '~0.001% (~0.1 stars)',
    colorClass: 'NeutronStar',
  },
  {
    type: 'Black Holes',
    temp: 'Negligible (Hawking)',
    size: 'Singularity (~0 km)',
    mass: '3–100 M☉',
    luminosity: 'Negligible',
    metallicity: '-0.5 to +0.5',
    habitableZone: 'None',
    planetFrequency: '0%',
    environment: 'Isolated or binaries',
    region: 'Disk',
    lifespan: 'Near-eternal',
    planetNotes: 'No conventional planetary systems.',
    lifeLikelihood: 'None. Extreme gravity.',
    estimated: '~0.0001% (~0.01 stars)',
    colorClass: 'BlackHole',
  },
];

export default function StarTypesPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Star Types in a 1,000 × 1,000 × 1,000 Light-Year Cube</h1>
      <p className={styles.paragraph}>
        This table summarizes the characteristics of stellar objects within a 1,000 light-year cubic volume centered on the Sun, based on Milky Way distributions. Approximately 10,000 stars and remnants are estimated in this region, providing a foundation for building a realistic galaxy.
      </p>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Type</th>
              <th>Color</th>
              <th>Temperature</th>
              <th>Size</th>
              <th>Mass</th>
              <th>Luminosity</th>
              <th>Metallicity</th>
              <th>Habitable Zone</th>
              <th>Planet Frequency</th>
              <th>Environment</th>
              <th>Region</th>
              <th>Lifespan</th>
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
                  <div
                    className={`${sunStyles.sun} ${
                      star.type === 'Brown Dwarfs' ? sunStyles.BrownDwarf :
                      star.type === 'White Dwarfs' ? sunStyles.WhiteDwarf :
                      star.type === 'Neutron Stars' ? sunStyles.NeutronStar :
                      star.type === 'Black Holes' ? sunStyles.BlackHole :
                      sunStyles[star.colorClass] || ''
                    }`}
                    title={star.type}
                    aria-label={star.type}
                  />
                </td>
                <td>{star.temp}</td>
                <td>{star.size}</td>
                <td>{star.mass}</td>
                <td>{star.luminosity}</td>
                <td>{star.metallicity}</td>
                <td>{star.habitableZone}</td>
                <td>{star.planetFrequency}</td>
                <td>{star.environment}</td>
                <td>{star.region}</td>
                <td>{star.lifespan}</td>
                <td>{star.planetNotes}</td>
                <td>{star.lifeLikelihood}</td>
                <td>{star.estimated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subheading}>Stellar Classification Guide</h2>
        <p className={styles.paragraph}>
          Stellar classification groups stars by temperature, spectra, luminosity, and metallicity. This guide covers main-sequence types (O to M), extended types (L, T, Y, C, W), spectral subgroups (0–9), and Yerkes/MK luminosity classes to build a Milky Way-like galaxy. Luminosity sets habitable zones and galactic brightness, while metallicity drives planet formation and stellar distribution.
        </p>

        <h3 className={styles.categoryTitle}>Spectral Types (O, B, A, F, G, K, M, L, T, Y, C, W)</h3>
        <p className={styles.paragraph}>
          Spectral types sort stars by surface temperature and spectral lines, from hottest O-type to coolest Y-type. Main-sequence types <strong>O, B, A, F, G, K, M</strong> are joined by <strong>L, T, Y</strong> (brown dwarfs), <strong>C</strong> (carbon stars), and <strong>W</strong> (Wolf-Rayet stars).
        </p>

        <h3 className={styles.categoryTitle}>Spectral Subgroups (0–9)</h3>
        <p className={styles.paragraph}>
          Each spectral type (O, B, A, F, G, K, M) is divided into subgroups from 0 to 9, indicating finer temperature differences within the type. Subgroup 0 is the hottest, and 9 is the coolest for that type. For example, a G2 star like the Sun (5,500 K) is cooler than a G0 star but hotter than a G5 star. Subgroups refine classifications for precise stellar modeling. Examples include Sirius (A1, ~9,900 K), Vega (A0, ~9,600 K), and Proxima Centauri (M5.5, ~3,000 K).
        </p>

        <h3 className={styles.categoryTitle}>Beyond OBAFGKM</h3>
        <ul className={styles.bulletList}>
          <li><strong>L-type Dwarfs:</strong> Cooler than M-type; show alkali metals and hydrides. Often brown dwarfs or low-mass stars.</li>
          <li><strong>T-type Dwarfs:</strong> Cooler; methane in spectra. Exclusively brown dwarfs.</li>
          <li><strong>Y-type Dwarfs:</strong> Coolest brown dwarfs; ammonia and water absorption.</li>
          <li><strong>C-type (Carbon Stars):</strong> Cool giants with carbon-rich atmospheres; R, N, S subtypes.</li>
          <li><strong>W-type (Wolf-Rayet):</strong> Hot, massive stars with emission lines from rapid mass loss. Rare.</li>
        </ul>

        <h3 className={styles.categoryTitle}>Luminosity Classes (Yerkes/MK System)</h3>
        <ul className={styles.bulletList}>
          <li><strong>0 / Ia+:</strong> Hypergiants (e.g., Eta Carinae)</li>
          <li><strong>I:</strong> Supergiants<br/>— Ia: Highly luminous (e.g., Rigel)<br/>— Ib: Less luminous</li>
          <li><strong>II:</strong> Bright Giants</li>
          <li><strong>III:</strong> Giants (e.g., Arcturus)</li>
          <li><strong>IV:</strong> Subgiants (e.g., Procyon)</li>
          <li><strong>V:</strong> Main Sequence (e.g., Sun)</li>
          <li><strong>sd / VI:</strong> Subdwarfs (low-metallicity)</li>
          <li><strong>D / VII:</strong> White Dwarfs</li>
        </ul>

        <h3 className={styles.categoryTitle}>Luminosity and Metallicity</h3>
        <p className={styles.paragraph}>
          <strong>Luminosity</strong> (in solar units) measures a star’s energy output, defining the habitable zone where liquid water can exist. For example, a G-type star (0.6–1.5 solar units, like the Sun, G2) has a habitable zone at 0.95–1.4 AU, where Earth orbits at 1 AU. An M-type star (0.001–0.08 solar units, e.g., Proxima Centauri, M5.5) has a closer zone at 0.03–0.1 AU, meaning an Earth-like planet would orbit much closer to the star. An O-type star (10^4–10^6 solar units, e.g., Rigel, B8) has a habitable zone at 100–400 AU, so an Earth-like planet would need to orbit as far as Neptune (30 AU) or beyond to avoid being scorched. High-luminosity stars like O-types light up spiral arms, while low-luminosity M-types create the disk’s faint glow. <strong>Metallicity</strong> ([Fe/H], metal content vs. Sun) controls planet formation. Metal-rich disk stars ([Fe/H] ~0.0, e.g., Sun) form rocky planets easily, while metal-poor halo stars ([Fe/H] &lt;-1.0) rarely do, shaping planetary system distribution.
        </p>

        <h3 className={styles.categoryTitle}>Stellar Evolution Pathways</h3>
        <ul className={styles.bulletList}>
          <li><strong>Main-Sequence Stars:</strong> M, K, G evolve to White Dwarfs after losing outer layers.</li>
          <li><strong>Massive Stars:</strong> O, B become Neutron Stars or Black Holes via supernovae.</li>
          <li><strong>Brown Dwarfs:</strong> L, T, Y cool forever, no hydrogen fusion.</li>
          <li><strong>Carbon Stars:</strong> C-types form in AGB phase of intermediate-mass stars.</li>
        </ul>

        <h3 className={styles.categoryTitle}>Example Classifications</h3>
        <ul className={styles.bulletList}>
          <li><strong>Sun:</strong> G2V — G-type, subclass 2, main-sequence dwarf</li>
          <li><strong>Rigel:</strong> B8Ia — B-type, subclass 8, luminous supergiant</li>
          <li><strong>Arcturus:</strong> K0III — K-type, subclass 0, giant</li>
          <li><strong>Proxima Centauri:</strong> M5.5Ve — M-type, subclass 5.5, main-sequence dwarf</li>
          <li><strong>Luhman 16:</strong> L7.5/T0.5 — Brown dwarf binary, L/T-type</li>
        </ul>
      </div>
    </div>
  );
}