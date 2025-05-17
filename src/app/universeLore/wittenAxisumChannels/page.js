import styles from '../../styles/universeLore.module.css';

export default function WittenAxisumChannels() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Witten Axisum Channels (WAC) Rules</h1>
      <ol className={styles.rulesList}>
        <li>
          <strong>Lane Connections: Sun to Sun</strong>
          <p>Each WAC lane connects star system centers (suns). Multiple-star systems have local sub-lanes connecting their stars.</p>
        </li>
        <li>
          <strong>Lane Length Limits: Max 10 Light-Years</strong>
          <p>Lanes are max ~10 light-years long. Shorter lanes (2-8 ly) are preferred. Lanes over 10 ly are extremely dangerous.</p>
        </li>
        <li>
          <strong>Safe Entry/Exit Zones: 5–10 AU from Sun</strong>
          <p>Ships can only enter or exit lanes within 5–10 AU from the star to avoid hazardous gravitational and radiation effects.</p>
        </li>
        <li>
          <strong>Network Topology</strong>
          <p>Star systems form nodes connected by lanes to closest neighbors, creating a mesh network with multiple routing options.</p>
        </li>
        <li>
          <strong>Dynamic Lanes & Movement</strong>
          <p>Lanes move with galaxy rotation and gravity waves; ships must adjust navigation and engine power accordingly.</p>
        </li>
        <li>
          <strong>Implications for Story & Tech</strong>
          <p>Strategic hubs form at safe zones. Ships balance power and shielding to use dangerous lanes. Communication pulses travel faster than ships.</p>
        </li>
      </ol>
    </main>
  );
}
