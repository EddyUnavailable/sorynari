import styles from '../../styles/universeLore.module.css';

export default function WittenAxisumChannels() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title1}>Witten Axisum Channels (WAC) Rules</h1>
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
      <div className={styles.wrapper}>
      <h1 className={styles.heading}>Witten Axisum Channels (WAC) Travel Rules</h1>

      <ol className={styles.ruleList}>
        <li><strong>Direct Connections:</strong> WAC lanes connect star to star, usually originating from the primary star in each system. Most systems have multiple connections to nearby stars.</li>
        <li><strong>Safe Entry/Exit Zones:</strong> Ships can only enter or exit lanes at 5–10 AU from a system's main star to avoid gravitational distortion.</li>
        <li><strong>Lane Range Limits:</strong> Lanes are ideally kept under 10 light years. Longer connections are extremely dangerous and generally avoided except by specialists.</li>
        <li><strong>Universal Movement:</strong> Lanes shift over time as they are influenced by galactic rotation. Navigating them requires constant positional updates and engine adjustments.</li>
        <li><strong>Power Scaling:</strong> Larger ships require exponentially more energy to open and traverse WAC lanes due to mass scaling and inertia.</li>
        <li><strong>Message Speed:</strong> Small, unmanned probes and data packets can travel faster through WAC lanes due to lower mass and acceleration requirements.</li>
        <li><strong>Basic Piloting System:</strong> Most WAC-capable vessels use semi-automated navigation systems that allow trained pilots to initiate and monitor jumps without advanced technology like neural links.</li>
        <li><strong>Piloting Interface:</strong> Pilots operate with tactile controls (joysticks, HUDs, touchscreens). No neural interface is required, though high-end ships may include advanced assistance.</li>
        <li><strong>Navigation Aids:</strong> Pre-calculated lanes, buoy markers, and interstellar maps assist ships in aligning correctly. Entry without guidance is dangerous.</li>
        <li><strong>G-Force Constraints:</strong> Speed changes are gradual to avoid dangerous g-forces. Larger ships or living cargo require longer acceleration and deceleration windows.</li>
        <li><strong>Pilot Skill Matters:</strong> While basic systems are user-friendly, skilled pilots gain efficiency and safety advantages, especially in irregular or shifting lanes.</li>
      </ol>
    </div>
    </main>
  );
}
