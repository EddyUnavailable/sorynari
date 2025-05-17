import styles from '../../styles/races.module.css';


export default function HumansPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-b pb-2">Human Lore</h2>

      <section>
        <h3 className="text-2xl font-semibold">Biology &amp; Appearance</h3>
        <p>
          Humans are a mammalian species native to Earth, notable for their adaptability, complex emotions, and diverse physical traits.
          Average height ranges from 1.5 to 2 meters. Varying skin tones, hair textures, and body builds due to global evolution.
        </p>
      </section>

      <h2>Human - Description &amp; Stats</h2>

      <table>
        <thead>
          <tr>
            <th>Stat</th>
            <th>Value (0–100)</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Strength (Lifting Capacity)</td>
            <td>35</td>
            <td>Average untrained human can lift ~60–70 kg; strong individuals significantly more.</td>
          </tr>
          <tr>
            <td>Intelligence (IQ)</td>
            <td>100</td>
            <td>Average human IQ is benchmarked at 100; humans exhibit high creativity and abstract reasoning.</td>
          </tr>
          <tr>
            <td>Speed (Running)</td>
            <td>40</td>
            <td>Average sprint speed is ~20–25 km/h; elite athletes can exceed 35 km/h.</td>
          </tr>
          <tr>
            <td>Endurance</td>
            <td>60</td>
            <td>Humans excel at long-distance running compared to many species; evolved for endurance hunting.</td>
          </tr>
          <tr>
            <td>Durability</td>
            <td>40</td>
            <td>Humans can recover from injury, but are susceptible to blunt force and environmental exposure.</td>
          </tr>
          <tr>
            <td>Agility</td>
            <td>50</td>
            <td>Moderately agile; capable of balance, precision movement, and acrobatics depending on training.</td>
          </tr>
          <tr>
            <td>Stamina</td>
            <td>55</td>
            <td>Humans can exert themselves over long periods, though rest is essential to avoid fatigue.</td>
          </tr>
          <tr>
            <td>Reflexes</td>
            <td>50</td>
            <td>Reaction time typically ~200–250 ms; trained individuals (e.g., athletes) can be quicker.</td>
          </tr>
          <tr>
            <td>Hand-Eye Coordination</td>
            <td>60</td>
            <td>Excellent coordination for tasks like sports, surgery, and tool use.</td>
          </tr>
          <tr>
            <td>Pain Tolerance</td>
            <td>45</td>
            <td>Varies greatly between individuals, but generally moderate.</td>
          </tr>
          <tr>
            <td>Hearing</td>
            <td>45</td>
            <td>Average range ~20 Hz – 20 kHz; good spatial awareness but limited compared to some animals.</td>
          </tr>
          <tr>
            <td>Problem-Solving Ability</td>
            <td>85</td>
            <td>Highly skilled in abstract reasoning, strategy, and logic.</td>
          </tr>
          <tr>
            <td>Focus/Concentration</td>
            <td>60</td>
            <td>Good ability to concentrate on tasks; varies with training, environment, and fatigue.</td>
          </tr>
          <tr>
            <td>Creativity</td>
            <td>90</td>
            <td>Extremely creative across arts, engineering, and problem-solving disciplines.</td>
          </tr>
          <tr>
            <td>Social Intelligence</td>
            <td>80</td>
            <td>Highly developed emotional and social understanding; central to cooperation and culture.</td>
          </tr>
          <tr>
            <td>Combat Efficiency</td>
            <td>45</td>
            <td>Baseline humans require training to be effective in combat; natural aptitude is moderate.</td>
          </tr>
          <tr>
            <td>Weapon Handling</td>
            <td>50</td>
            <td>Can operate complex weapons with proper training; versatile.</td>
          </tr>
          <tr>
            <td>Tactical Awareness</td>
            <td>55</td>
            <td>Capable of individual and group tactics, especially under structured systems.</td>
          </tr>
          <tr>
            <td>Environmental Resistance</td>
            <td>35</td>
            <td>Needs clothing and tools to survive extreme temperatures, radiation, or vacuum.</td>
          </tr>
          <tr>
            <td>Adaptability</td>
            <td>85</td>
            <td>Extremely adaptable to new environments, cultures, and challenges.</td>
          </tr>
          <tr>
            <td>Regeneration</td>
            <td>30</td>
            <td>Limited regeneration; can heal cuts and fractures over time, but no limb regrowth.</td>
          </tr>
          <tr>
            <td>Senses (Vision, Smell, etc.)</td>
            <td>50</td>
            <td>Moderate in most senses; some individuals may have enhanced sensory capabilities.</td>
          </tr>
          <tr>
            <td>Technological Adaptation</td>
            <td>95</td>
            <td>Extremely fast learners when it comes to new tools, platforms, and systems.</td>
          </tr>
          <tr>
            <td>Engineering Skill</td>
            <td>80</td>
            <td>Capable of designing and maintaining complex machines and systems.</td>
          </tr>
          <tr>
            <td>Loyalty</td>
            <td>50</td>
            <td>Varies greatly between individuals; influenced by social, emotional, and cultural bonds.</td>
          </tr>
          <tr>
            <td>Emotional Intelligence</td>
            <td>75</td>
            <td>Good ability to interpret, express, and respond to emotional and social cues.</td>
          </tr>
          <tr>
            <td>Pheromonal Sensitivity</td>
            <td>10</td>
            <td>Limited to unconscious responses to scent; not a primary form of communication.</td>
          </tr>
          <tr>
            <td>Height</td>
            <td>—</td>
            <td>Average height ranges from 1.6 to 1.8 meters (5&#39;3&quot; – 5&#39;11&quot;).</td>
          </tr>
          <tr>
            <td>Lifespan</td>
            <td>—</td>
            <td>Average global lifespan is ~72–80 years depending on healthcare and environment.</td>
          </tr>
        </tbody>
      </table>

      <section>
        <h3 className="text-2xl font-semibold">Intelligence &amp; Behavior</h3>
        <p>
          Regarded as one of the most intelligent species in the galaxy. Capable of abstract thought, advanced language, philosophy, and rapid technological development.
          Also prone to self-destructive behavior, war, and resource exploitation.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold">Culture &amp; Society</h3>
        <p>
          Humans are culturally diverse. Their societies range from tribal to post-industrial. They value freedom, individualism, and creativity, but often struggle with unity and sustainability.
          Religions, philosophies, and political systems vary widely across the planet.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold">Technology</h3>
        <p>
          As of contact with the Sorynari and Formivarn, humans are still early in their spacefaring age. Technology includes artificial intelligence, fusion power, early warp research, and limited terraforming.
          Highly innovative and reactive under threat.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold">Current Status in the Galaxy</h3>
        <p>
          Unaware of larger galactic civilizations at first. Considered a critical species by the Sorynari due to their potential.
          Targeted by the Formivarn as a potential threat and resource. Under indirect guidance from the Sorynari, who aim to elevate humanity without sparking galactic war.
        </p>
      </section>
    </div>
  );
}
