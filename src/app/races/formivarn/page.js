import styles from '@/styles/formivarn.module.css';

export default function Formivarn() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Formivarn Species Overview</h1>

      <section className={styles.section}>
        <h2>General Information</h2>
        <ul>
          <li><strong>Population:</strong> 30+ trillion</li>
          <li><strong>Territory:</strong> Sphere with 1,000 light-year diameter (~48 million star systems, 10% with active carriers)</li>
          <li><strong>Origin:</strong> Originally subterranean, now an almost entirely ship-based civilization</li>
          <li><strong>Primary Colony:</strong> Their original homeworld, now the only land-based colony</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Lifestyle</h2>
        <ul>
          <li>Extremely efficient and tireless workers</li>
          <li>Live aboard carrier ships organized into Colony Units</li>
          <li>Highly obedient due to pheromonal influence from Queens</li>
          <li>Enjoy music and simple art during low-alert periods</li>
          <li>Do not eat sentient species; diet is plant-, root-, and fruit-based</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Behavior Toward Other Civilizations</h2>
        <ul>
          <li>Attack any lifeform with intelligence or technology equal to or greater than their own</li>
          <li>Do not completely wipe out civilizations—disable and restrict them instead</li>
          <li>Enforce population and technological caps (usually under 1 million individuals)</li>
          <li>Leave behind carrier ships as permanent monitors in subdued systems</li>
          <li>Allow subdued species limited communication for cultural exchange</li>
          <li>Enslave populations only when their knowledge or technology provides benefit</li>
          <li>Maintain long-term relay presence and hyperspace lane control</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Reproduction</h2>
        <ul>
          <li><strong>Drone Lifespan:</strong> 120-150 years</li>
          <li><strong>Female Rate:</strong> 5% of drones are female</li>
          <li><strong>Egg Production:</strong> 2-3 eggs every 4 years from age 30 to 90</li>
          <li><strong>Queen Selection:</strong> Upon Queen's death or hive overcapacity, a female aged 90+ metamorphoses into a Queen</li>
          <li><strong>Mating:</strong> All males allowed to mate; only males contribute DNA; cross-colony mating encouraged</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Queen Hierarchy</h2>
        <ul>
          <li><strong>0: Queenling:</strong> Newly transformed, unproven, often tasked with minor operations (~1.5 billion)</li>
          <li><strong>1: Brood Queen:</strong> Leads a single hive, equivalent to a junior colony operator (~6 billion)</li>
          <li><strong>2: Matron Queen:</strong> Standard queens leading stable hives within a colony unit (~5 billion)</li>
          <li><strong>3: Regent Queen:</strong> Oversees multiple Brood and Matron Queens, intermediary authority (~1.2 billion)</li>
          <li><strong>4: Hive Baroness:</strong> Manage multiple hives, often act as regional overseers (~800 million)</li>
          <li><strong>5: Vicereign:</strong> Assigned dominion over a subdued star system (~480,000)</li>
          <li><strong>6: Fleet Queen:</strong> Military leaders of large campaigns, command several colony units (~100 million)</li>
          <li><strong>7: Grand Fleet Queen:</strong> Veteran tacticians, responsible for multiple battlefronts (~30 million)</li>
          <li><strong>8: Marschalatrix:</strong> Supreme commander of all fleets and colonies (~30 million)</li>
          <li><strong>9: Bellatrix Primus:</strong> The First Queen, ancient progenitor and singular leader of the species (1)</li>
        </ul>
      </section>

      
    </div>
  );
}