// app/page.js
import styles from '@/styles/tech.module.css';

const batteries = [
  {
    type: 'Lead-Acid',
    cost: '75M',
    energyDensity: 45,
    mass: 22222,
    volume: 10000,
    rarity: 'Common (lead, sulfuric acid)',
    danger: 'Low: Acid leaks, hydrogen gas, rare fires.',
    chargeTime: 120,
    techLevel: 10,
    description: 'Rugged, ancient tech using heavy lead plates. Powers low-tech colonies and industrial outposts where cost trumps efficiency. Toxic but recyclable.',
  },
  {
    type: 'Lithium Iron Phosphate (LFP)',
    cost: '90M',
    energyDensity: 225,
    mass: 4444,
    volume: 2000,
    rarity: 'Moderate (lithium, iron, phosphate)',
    danger: 'Moderate: Low thermal runaway, rare fires.',
    chargeTime: 15,
    techLevel: 50,
    description: 'Reliable, safe batteries for starships and planetary grids. Uses abundant iron, balancing cost and performance for mid-tier civilizations.',
  },
  {
    type: 'Sodium-Ion (SIB)',
    cost: '60M',
    energyDensity: 215,
    mass: 4651,
    volume: 2222,
    rarity: 'Low (sodium, hard carbon)',
    danger: 'Low: Stable, minimal fire risk.',
    chargeTime: 10,
    techLevel: 60,
    description: 'Eco-friendly power for frontier worlds. Harnesses abundant sodium and bio-derived carbon, ideal for sustainable habitats and budget fleets.',
  },
  {
    type: 'Lithium-Ion NMC 111',
    cost: '120M',
    energyDensity: 220,
    mass: 4545,
    volume: 1667,
    rarity: 'High (nickel, cobalt, lithium)',
    danger: 'High: Thermal runaway, fires/explosions.',
    chargeTime: 25,
    techLevel: 55,
    description: 'Cobalt-rich cells for high-energy trade fleets. Offers solid performance but risky failures and scarce materials limit use in ethical systems.',
  },
  {
    type: 'Low-Cobalt Lithium-Ion (NMC 811)',
    cost: '115M',
    energyDensity: 285,
    mass: 3509,
    volume: 1429,
    rarity: 'High (nickel, low cobalt, lithium)',
    danger: 'High: Thermal runaway, fires/explosions.',
    chargeTime: 20,
    techLevel: 65,
    description: 'High-performance cells for elite starfighters and megacities. Nickel-heavy design reduces cobalt but risks fiery failures without advanced cooling.',
  },
  {
    type: 'Solid-State',
    cost: '150M',
    energyDensity: 425,
    mass: 2353,
    volume: 1000,
    rarity: 'Moderate (lithium, solid electrolytes)',
    danger: 'Low: Solid electrolytes, low fire risk.',
    chargeTime: 10,
    techLevel: 80,
    description: 'Cutting-edge power for advanced fleets and AI cores. Solid electrolytes boost energy and safety, but lithium supply limits mass production.',
  },
  {
    type: 'Lithium-Sulfur (Li-S)',
    cost: '85M',
    energyDensity: 500,
    mass: 2000,
    volume: 1667,
    rarity: 'Low (sulfur, lithium)',
    danger: 'Moderate: Lithium anode fire risk, less than NMC.',
    chargeTime: 30,
    techLevel: 85,
    description: 'Lightweight, high-energy cells for long-range explorers. Sulfur’s abundance cuts costs, but unstable cycles demand sophisticated management.',
  },
  {
    type: 'Lithium-Air (Li-Air)',
    cost: '200M',
    energyDensity: 1500,
    mass: 667,
    volume: 1250,
    rarity: 'Low (lithium, oxygen, carbon; catalysts scarce)',
    danger: 'Moderate: Lithium anode fire risk, mitigated by air design.',
    chargeTime: 60,
    techLevel: 95,
    description: 'Experimental power for interstellar probes. Breathes oxygen for ultra-light energy, but complex catalysts and low durability limit use to elite tech.',
  },
  {
    type: 'Magnesium-Ion (Mg-Ion)',
    cost: '140M',
    energyDensity: 700,
    mass: 1429,
    volume: 1429,
    rarity: 'Low (magnesium, cathodes vary)',
    danger: 'High: Low reactivity, minimal fire risk.',
    chargeTime: 45,
    techLevel: 90,
    description: 'Next-gen batteries for orbital stations. Magnesium’s abundance and safety rival lithium, but slow ion flow requires advanced engineering.',
  },
  {
    type: 'Sodium-Sulfur (Na-S, Room-Temp)',
    cost: '70M',
    energyDensity: 300,
    mass: 3333,
    volume: 2000,
    rarity: 'Very Low (sodium, sulfur)',
    danger: 'Moderate: Low fire risk, safer than high-temp.',
    chargeTime: 25,
    techLevel: 75,
    description: 'Robust power for planetary grids and megastructures. Abundant sodium and sulfur enable cheap, stable energy at room temperature.',
  },
  {
    type: 'BioPolymer Batteries',
    cost: '55M',
    energyDensity: 200,
    mass: 5000,
    volume: 3333,
    rarity: 'Very Low (biomass-derived carbon)',
    danger: 'Very High: Aqueous electrolytes, no fire risk.',
    chargeTime: 30,
    techLevel: 70,
    description: 'Green tech for eco-colonies and bio-domes. Bio-engineered polymers store energy sustainably, but lower power suits stationary uses.',
  },
  {
    type: 'Fluoride-Ion',
    cost: '200M',
    energyDensity: 1250,
    mass: 800,
    volume: 1111,
    rarity: 'Moderate (cerium, lanthanum, solid electrolytes)',
    danger: 'Moderate: Solid electrolytes, fluoride reactivity concern.',
    chargeTime: 40,
    techLevel: 98,
    description: 'Theoretical power for quantum tech and deep-space outposts. Fluoride ions deliver massive energy, but rare materials and instability limit deployment.',
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Battery Technologies for 1 GWh Storage</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Battery Type</th>
            <th>Cost ($)</th>
            <th>Charge Held (Wh/kg)</th>
            <th>Battery Mass (Tons)</th>
            <th>Volume (m³)</th>
            <th>Rarity of Materials</th>
            <th>Danger When Failing</th>
            <th>Charge Time (Min to 80%)</th>
            <th>Tech Level (1–100)</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {batteries.map((battery, index) => (
            <tr key={index} className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
              <td>{battery.type}</td>
              <td>{battery.cost}</td>
              <td>{battery.energyDensity}</td>
              <td>{battery.mass}</td>
              <td>{battery.volume}</td>
              <td>{battery.rarity}</td>
              <td>{battery.danger}</td>
              <td>{battery.chargeTime}</td>
              <td>{battery.techLevel}</td>
              <td>{battery.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}