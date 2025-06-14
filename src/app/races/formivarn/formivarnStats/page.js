// src/app/races/formivarn/formivarnStats.js
import styles from '@/styles/formivarn.module.css';

export default function FormivarnStats() {
  return (
    <div>
      <h1 className={styles.title}>Formivarn Species Stats</h1>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Stat</th>
            <th>Value (0–100)</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="3" style={{ fontStyle: 'italic', backgroundColor: '#e0e0e0' }}>
              <strong>Scale Guide:</strong> 0 = Nonexistent, 25 = Low, 50 = Moderate, 75 = High, 100 = Extreme
            </td>
          </tr>
          {/* stats rows here, unchanged */}
          <tr><td>Strength (Lifting Capacity)</td><td>85</td><td>Can lift up to 350 kg; adapted for heavy labor and utility operations.</td></tr>
          <tr><td>Intelligence (Average IQ)</td><td>30</td><td>Limited individual reasoning; excels in specialized, collective coordination.</td></tr>
          <tr><td>Speed (Running)</td><td>70</td><td>Top speed of 50 km/h, useful in ambush tactics and battlefield response.</td></tr>
  <tr><td>Endurance</td><td>95</td><td>Can function for prolonged periods without fatigue, even in hostile conditions.</td></tr>
  <tr><td>Durability</td><td>65</td><td>Exoskeleton resists damage from physical impacts and minor energy weapons.</td></tr>
  <tr><td>Agility</td><td>50</td><td>Functional movement and reaction speed; sufficient for combat and navigation.</td></tr>
  <tr><td>Height</td><td>—</td><td>Average height is 1.5 meters (5 ft), optimized for subterranean and interior spaces.</td></tr>
  <tr><td>Stamina</td><td>95</td><td>Can operate for days without sleep or sustenance, especially under Queen command.</td></tr>
  <tr><td>Reflexes</td><td>50</td><td>Standard reflexes; good for formation response, less suited to individual reactions.</td></tr>
  <tr><td>Hand-Eye Coordination</td><td>75</td><td>Skilled in fine motor control for tools, machinery, and weapons.</td></tr>
  <tr><td>Pain Tolerance</td><td>85</td><td>High resistance to pain; can maintain functionality under severe trauma.</td></tr>
  <tr><td>Hearing</td><td>80</td><td>Can detect faint or distant sounds and subtle environmental changes.</td></tr>
  <tr><td>Problem-Solving</td><td>50</td><td>Effective within mission parameters, poor at creative improvisation.</td></tr>
  <tr><td>Focus</td><td>85</td><td>Extreme concentration and task commitment when following pheromonal commands.</td></tr>
  <tr><td>Creativity</td><td>35</td><td>Rarely shows innovation; more efficient at iteration and mimicry.</td></tr>
  <tr><td>Social Intelligence</td><td>50</td><td>Communicates well in-hive, struggles with alien diplomacy or emotional nuance.</td></tr>
  <tr><td>Combat Efficiency</td><td>80</td><td>Highly lethal in group tactics and synchronized swarm warfare.</td></tr>
  <tr><td>Weapon Handling</td><td>60</td><td>Trained in practical weapons and tools, especially for hive defense.</td></tr>
  <tr><td>Tactical Awareness</td><td>55</td><td>Recognizes threats and adapts well to group commands; not independently tactical.</td></tr>
  <tr><td>Environmental Resistance</td><td>60</td><td>Resistant to heat, radiation, and pressure; requires support gear for extremes.</td></tr>
  <tr><td>Adaptability</td><td>55</td><td>Moderately capable of adjusting to new environments and threats.</td></tr>
  <tr><td>Regeneration</td><td>25</td><td>Minimal self-healing; relies on hive medics or replacement over recovery.</td></tr>
  <tr><td>Sensory Perception</td><td>70</td><td>Can sense heat, motion, pheromones, and faint light through compound eyes.</td></tr>
  <tr><td>Tech Adaptation</td><td>75</td><td>Quick to interface and deploy foreign tech, especially if it enhances hive function.</td></tr>
  <tr><td>Engineering Skill</td><td>60</td><td>Competent at repairing ships and fabricating components for field use.</td></tr>
  <tr><td>Loyalty</td><td>100</td><td>Total, unwavering dedication to the Queen and hive directives.</td></tr>
  <tr><td>Emotional Intelligence</td><td>40</td><td>Capable of simple emotional bonding, primarily toward the Queen or kin.</td></tr>
  <tr><td>Pheromonal Sensitivity</td><td>100</td><td>Crucial to all communication, strategy, and morale; a biological imperative.</td></tr>
  </tbody>
  </table>
</div>
  );
};