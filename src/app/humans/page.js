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
            <th>Value (0&ndash;100)</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Strength (Lifting Capacity)</td>
            <td>35</td>
            <td>Average untrained human can lift ~60&ndash;70 kg; strong individuals significantly more.</td>
          </tr>
          <tr>
            <td>Intelligence (IQ)</td>
            <td>100</td>
            <td>Average human IQ is benchmarked at 100; humans exhibit high creativity and abstract reasoning.</td>
          </tr>
          <tr>
            <td>Speed (Running)</td>
            <td>40</td>
            <td>Average sprint speed is ~20&ndash;25 km/h; elite athletes can exceed 35 km/h.</td>
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
            <td>Height</td>
            <td>&mdash;</td>
            <td>Average height ranges from 1.6 to 1.8 meters (5&#39;3&quot; &ndash; 5&#39;11&quot;).</td>
          </tr>
          <tr>
            <td>Lifespan</td>
            <td>&mdash;</td>
            <td>Average global lifespan is ~72&ndash;80 years depending on healthcare and environment.</td>
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