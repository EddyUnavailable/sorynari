"use client"
import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import styles from '@/styles/galaxyBodies.module.css';
import sunStyles from '@/styles/sun.module.css';

// Initialize Supabase client

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function StarTypesPage() {
  const [starData, setStarData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch star data from Supabase on component mount
  useEffect(() => {
    async function fetchStarData() {
      try {
        const { data, error } = await supabase
          .from('stars')
          .select('*')
          .order('id', { ascending: true }); // Optional: Order by id for consistency
        if (error) {
          throw error;
        }
        setStarData(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch star data: ' + err.message);
        setLoading(false);
      }
    }
    fetchStarData();
  }, []);

  if (loading) {
    return <div className={styles.container}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.container}>Error: {error}</div>;
  }

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
                      sunStyles[star.color_class] || ''
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
                <td>{star.habitable_zone}</td>
                <td>{star.planet_frequency}</td>
                <td>{star.environment}</td>
                <td>{star.region}</td>
                <td>{star.lifespan}</td>
                <td>{star.planet_notes}</td>
                <td>{star.life_likelihood}</td>
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
          Each spectral type (O, B, A, F, G, K, M) is divided into subgroups from 0 to 9, indicating finer temperature differences within the type. Subgroup 0 is the hottest, and 9 is the coolest for that type. For example, a G2 star like the Sun (5,500 K) is cooler than a G0 star but hotter than a G5 star. Subgroups refine classifications for precise stellar modeling. Examples include Sirius (A1, ~9,900 K), Vega (A0, ~9,600 K), and Proxima Centauri (M5.5, ~3山县K).
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