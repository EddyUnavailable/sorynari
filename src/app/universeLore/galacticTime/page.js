import styles from './../../styles/galacticTIme.module.css';

export default function GalacticTime() {
  return (
    <div className={styles.container}>
      <h1>Galactic Orbital Timestamp (GOT)</h1>
      <p>
        The Galactic Orbital Timestamp (GOT) is a temporal system used by advanced civilizations to
        track time relative to the Milky Way galaxy's full rotation around the galactic core. One
        full Galactic Orbit is approximately 225 million Earth years.
      </p>

      <h2>📏 Time Units</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>GOT Unit</th>
            <th>Division Of</th>
            <th>Earth Time Equivalent</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Galactic Orbit (000–999)</td>
            <td>–</td>
            <td>225 million years</td>
            <td>Milky Way revolution</td>
          </tr>
          <tr>
            <td>Sector (A–J)</td>
            <td>1/10 Orbit</td>
            <td>22.5 million years</td>
            <td>Epochs / eras</td>
          </tr>
          <tr>
            <td>Sector Fraction (α–ω)</td>
            <td>1/10 Sector</td>
            <td>2.25 million years</td>
            <td>Civilizational phases</td>
          </tr>
          <tr>
            <td>Sector Thou Fraction (000–999)</td>
            <td>1/1000 Sector Fraction</td>
            <td>2,250 years</td>
            <td>Historical ages</td>
          </tr>
          <tr>
            <td>Sector Milli Fraction (000–999)</td>
            <td>1/1000 Thou Fraction</td>
            <td>2.25 years</td>
            <td>Decades / cultural trends</td>
          </tr>
          <tr>
            <td>Galactic Day (A000–Z999)</td>
            <td>1/1000 Milli Fraction</td>
            <td>~19h 42m 14s</td>
            <td>Precise timestamps, short-term ops</td>
          </tr>
        </tbody>
      </table>

      <h2>🧭 Earth Reference</h2>
      <p>
        Based on current estimates, Earth year <strong>2100 CE</strong> corresponds to approximately:
      </p>

      <blockquote className={styles.blockquote}>
        <strong>GOT 826-I-ρ-716-429-X712</strong>
      </blockquote>

      <h1 className={styles.translationHeading}>
        This translates to:
        <ul className={styles.translationList}>
          <li><strong>GOT 826</strong> – The 826th galactic orbit</li>
          <li><strong>Sector I</strong> – Late period of the orbit</li>
          <li><strong>Fraction ρ</strong> – Within a specific civilizational phase</li>
          <li><strong>Thou 716</strong> – Placing Earth in the late Iron Age through early Digital Age</li>
          <li><strong>Milli 429</strong> – Early 21st century Earth time</li>
          <li><strong>Day X712</strong> – Precision timestamp representing a point in 2100</li>
        </ul>
      </h1>

      <p>
        While the exact mapping is arbitrary (due to the vast scale of the GOT system), this timestamp
        gives perspective on how a technologically advanced galactic civilization might record
        time across millennia and parse significant developments like Earth’s transition into the
        spacefaring age.
      </p>
    </div>
  );
}
