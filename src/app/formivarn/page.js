import styles from '../styles/formivarn.module.css';

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

      <h1>Formivarn - Historical Trauma & Origin of Doctrine</h1>

      <section>
        <h2>The Subjugation Era ("The Breaking")</h2>
        <p>
          The Formivarn, a species once solely reliant on their underground hives for survival, were peaceful and technologically primitive. They lived in complex subterranean networks, communicating and working together using sophisticated pheromone systems. These early Formivarn had no need for technology beyond the essentials to maintain their hives and sustain their food sources. Their society was built around the colony, and each individual’s life was dedicated to the Queen and the hive.
        </p>
        <p>
          However, this peaceful existence was shattered when a highly advanced alien race discovered the Formivarn. Viewing their efficient hive structure and near-absolute loyalty to their Queen as a potential weapon, the invaders decided to exploit the Formivarn as a resource.
        </p>
        <p>
          Without warning, these aliens descended upon the Formivarn homeworld. They systematically wiped out millions of drones, exploiting the species' vulnerability by hacking into their pheromone-based communication system. Using a combination of biological and cybernetic technology, the invaders enslaved the Formivarn Queens by implanting them with cybernetic devices that disrupted their natural pheromone control. This manipulation rendered the Queens subservient to their captors, and by extension, their entire colonies.
        </p>
        <p>
          The Formivarn were then cloned in vast numbers, their purpose no longer to serve the needs of the colony, but to act as disposable shock troops. The invaders turned the Formivarn against their own kind, forcing the Queens to betray the very beings they had once protected. The Formivarn were used as weapons in a brutal conflict, treated as nothing more than cannon fodder by the aliens who saw them as a tool, not a sentient species.
        </p>
        <p>
          The emotional and psychic toll of this period was catastrophic for the Formivarn. The colony units, stripped of their Queens' guidance, spiraled into despair. Their once harmonious social structure broke down, and entire hives collapsed under the strain of betrayal and the horrific new role thrust upon them.
        </p>
      </section>

      <section>
        <h2>The Uprising</h2>
        <p>
          Despite the overwhelming control the invaders had over the Formivarn, the species' natural instincts remained too strong to be completely suppressed. The bond between a Queen and her drones was not easily broken, and it was this bond that led to the salvation of the Formivarn.
        </p>
        <p>
          The turning point came when one Queen, known only as Z’yarthra in the ancient records, managed to break free from the cybernetic implants that had controlled her. The precise details of how she escaped are lost to time, but Z’yarthra’s liberation triggered an uprising. She quickly rallied her loyal drones, and together, they sabotaged the invaders’ control systems, freeing the other Queens and undoing the damage inflicted upon them.
        </p>
        <p>
          The rebellion was fierce and swift. With the aid of her drones, Z’yarthra led a series of coordinated strikes against the invaders. The Formivarn, once used as weapons, now fought with newfound fervor to reclaim their homeworld and their freedom. In the face of overwhelming technological superiority from the invaders, the Formivarn were able to seize their ships, destroy the alien portal used to access their world, and fight through the invaders’ forces with a sheer will to survive.
        </p>
        <p>
          In a final act of defiance, the Formivarn destroyed the alien portal, severing the invaders' supply lines and preventing reinforcements from arriving. Their victory came at a high cost, but it ensured the survival of their species and allowed them to escape the reach of their captors. It was a pivotal moment in their history — a defining event that marked their transformation from a peaceful subterranean species into a formidable spacefaring race.
        </p>
      </section>

      <section>
        <h2>Legacy and Doctrine</h2>
        <p>
          The trauma and brutality experienced during "The Breaking" shaped the Formivarn into a society built on the principles of survival, defense, and the protection of their colonies. From that point forward, the Formivarn adopted a doctrine forged in the crucible of their past — one driven by the fear of subjugation and domination.
        </p>
        <p>
          <strong>The Doctrine of Survival</strong> is a deeply ingrained part of Formivarn culture. The species’ primary goal is to ensure that their hives are never again controlled by an external force, nor are they ever again manipulated by a species with superior technology or intelligence. To this end, any species that could potentially pose a threat to the Formivarn — those whose intelligence or technological capabilities match or exceed their own — is considered a threat that must be neutralized.
        </p>
        <p>
          In their minds, the loss of their autonomy to the invaders is a deep scar that can never be healed. Preemptive action, the suppression of other cultures, and the establishment of dominance over those who could potentially challenge their way of life are seen as necessary steps for the survival of the Formivarn race. They are a species driven by a sense of history and trauma, constantly vigilant against any threat that might repeat the horrors of "The Breaking."
        </p>
        <p>
          Formivarn society revolves around the concept of the colony as the core unit of existence. The colony, led by its Queen, is the heart of their world. The loyalty to the colony is absolute, and any act of aggression against a colony is treated as an act of war. They view all other colonies, even those outside their own direct control, as extended family. This deep sense of unity and shared experience ensures that the Formivarn will never abandon a fellow colony in times of need. This was proven during their Uprising, where the loyalty of their drones to their fellow Formivarn was paramount.
        </p>
        <p>
          The Formivarn are not mindless killers, and their society is not defined by bloodthirsty conquest. Rather, their doctrine reflects the need to defend their colonies at all costs and ensure that the horrors they once endured are never repeated. The Formivarn will only engage in battle if they are directly threatened, and they will avoid genocide whenever possible. The complete destruction of another species or colony is seen as a wasteful and savage act that serves no purpose. Their ultimate goal is to neutralize threats and preserve the stability of their hives, not to annihilate entire civilizations.
        </p>
        <p>
          The legacy of "The Breaking" is clear in the Formivarn's military strategy and cultural values: they will always fight to protect their own, and any species that threatens their existence will be met with swift and calculated force.
        </p>
        <p>
          This trauma-driven doctrine is known as <strong>The Awakening</strong> — the moment the Formivarn ceased to be passive and subjugated, and became a force to be reckoned with. It is a constant reminder of their origins and their unyielding resolve to protect their colonies from external domination.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Ships and Technology</h2>
        <h3>Carrier Ships</h3>
        <p>Matris Impera-class ships serve as the primary carriers for the colonies...</p>
        <h3>Utility Ships</h3>
        <ul>
          <li><strong>Subregina-class:</strong> Replaces the obsolete Formata-class</li>
        </ul>
        <h3>Drone Transports</h3>
        <ul>
          <li><strong>Nidrix-class:</strong> Automated, hyperspace-capable droneships</li>
        </ul>
      </section>
    </div>
  );
}