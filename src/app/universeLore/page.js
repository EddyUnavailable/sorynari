export default function UniverseLore() {
  return (
    <div className="p-6 space-y-8 text-white">
      <h1 className="text-4xl font-bold mb-4">Universal Lore</h1>

      {/* Hyperspace Travel Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">🚀 Hyperspace Travel</h2>
        <p>
          Hyperspace lanes allow travel through an alternate dimension, bypassing normal spacetime.
          Most advanced species have developed specialized hyperdrives to take advantage of this.
        </p>
        <p className="mt-2">
          <strong>Optimal travel time:</strong> 1,000 light-years can be traversed in approximately <strong>12–18 Galactic Units (GUs)</strong>, 
          equating to roughly <strong>10–15 Earth days</strong> using high-end military or colonial-grade drives.
        </p>

        {/* Reference Table */}
        <div className="overflow-x-auto mt-4">
          <h3 className="text-xl font-bold mb-2">Hyperspace Drive Reference Table</h3>
          <table className="w-full table-auto border border-gray-700 text-sm">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="border border-gray-700 px-4 py-2">Drive Model</th>
                <th className="border border-gray-700 px-4 py-2">Travel Time per Light-Year</th>
                <th className="border border-gray-700 px-4 py-2">Relative Speed</th>
                <th className="border border-gray-700 px-4 py-2">Notes</th>
              </tr>
            </thead>
            <tbody className="text-gray-200">
              <tr>
                <td className="border border-gray-700 px-4 py-2">Hyperspace 1</td>
                <td className="border border-gray-700 px-4 py-2">3000 GUs (~2057 Earth days)</td>
                <td className="border border-gray-700 px-4 py-2">1×</td>
                <td className="border border-gray-700 px-4 py-2">First-gen. Stable, slow. For probes/exploration.</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Hyperspace 2</td>
                <td className="border border-gray-700 px-4 py-2">1500 GUs (~1028 Earth days)</td>
                <td className="border border-gray-700 px-4 py-2">2×</td>
                <td className="border border-gray-700 px-4 py-2">Early military and mid-tier fleets.</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Hyperspace 3</td>
                <td className="border border-gray-700 px-4 py-2">1000 GUs (~685 Earth days)</td>
                <td className="border border-gray-700 px-4 py-2">3×</td>
                <td className="border border-gray-700 px-4 py-2">Improved shielding stability.</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Hyperspace 4</td>
                <td className="border border-gray-700 px-4 py-2">500 GUs (~343 Earth days)</td>
                <td className="border border-gray-700 px-4 py-2">6×</td>
                <td className="border border-gray-700 px-4 py-2">Used by elite military and colony ships.</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Hyperspace 5</td>
                <td className="border border-gray-700 px-4 py-2">~250 Earth days</td>
                <td className="border border-gray-700 px-4 py-2">~8.25×</td>
                <td className="border border-gray-700 px-4 py-2">Experimental. Limited availability.</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Hyperspace 6</td>
                <td className="border border-gray-700 px-4 py-2">~100 Earth days</td>
                <td className="border border-gray-700 px-4 py-2">~20.57×</td>
                <td className="border border-gray-700 px-4 py-2">Hypothetical. Likely destabilizing to shielding.</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Hyperspace 7</td>
                <td className="border border-gray-700 px-4 py-2">~50 Earth days</td>
                <td className="border border-gray-700 px-4 py-2">~41.14×</td>
                <td className="border border-gray-700 px-4 py-2">Mythical. Only one ship known to possess this.</td>
              </tr>
            </tbody>
          </table>


          <h2 className="text-2xl font-semibold mt-4 mb-2">📜 Galactic Tech Rules</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>No Warp Drive:</strong> Hyperspace is the only method of interstellar travel, and it is slow and dangerous.</li>
        <li><strong>Small-Scale Nanotech Only:</strong> Used in medicine and fine tech repair. No replication, no macro-construction.</li>
        <li><strong>Fragile Computing:</strong> Advanced but unreliable. Systems fail regularly. No galactic internet.</li>
        <li><strong>Limited AI:</strong> No sentient AI. Expert systems only. Human or alien input is still vital.</li>
        <li><strong>Cargo Ships:</strong> Semi-autonomous but require manual course correction. Vulnerable to interception.</li>
        <li><strong>No Instant Healing:</strong> Biological damage is real. Clones or implants help but need time and precision.</li>
        <li><strong>Delayed Communication:</strong> Quantum systems are unreliable at distance. Most messages are relayed or carried physically.</li>
        <li><strong>Risky Hyperspace:</strong> Drives degrade. Accidents common. Elite drives are rare and costly to maintain.</li>
      </ul>
        </div>
      </section>

      {/* GOST Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">🕰️ Galactic Orbital Timestamp (GOST)</h2>
        <p>
          The GOST system tracks time based on the Milky Way’s rotation. One full orbit = ~225 million Earth years.
        </p>

        <div className="overflow-x-auto mt-4">
          <table className="w-full table-auto border border-gray-700 text-sm">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="border border-gray-700 px-4 py-2">GOST Unit</th>
                <th className="border border-gray-700 px-4 py-2">Division Of</th>
                <th className="border border-gray-700 px-4 py-2">Earth Time Equivalent</th>
                <th className="border border-gray-700 px-4 py-2">Use / Purpose</th>
              </tr>
            </thead>
            <tbody className="text-gray-200">
              <tr>
                <td className="border border-gray-700 px-4 py-2">Galactic Orbit (000–999)</td>
                <td className="border border-gray-700 px-4 py-2">–</td>
                <td className="border border-gray-700 px-4 py-2">225 million years</td>
                <td className="border border-gray-700 px-4 py-2">Milky Way revolution</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Sector (A–J)</td>
                <td className="border border-gray-700 px-4 py-2">1/10 Orbit</td>
                <td className="border border-gray-700 px-4 py-2">22.5 million years</td>
                <td className="border border-gray-700 px-4 py-2">Epochs / eras</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Sector Fraction (α–ω)</td>
                <td className="border border-gray-700 px-4 py-2">1/10 Sector</td>
                <td className="border border-gray-700 px-4 py-2">2.25 million years</td>
                <td className="border border-gray-700 px-4 py-2">Civilizational phases</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Sector Thou Fraction (000–999)</td>
                <td className="border border-gray-700 px-4 py-2">1/1000 Sector Fraction</td>
                <td className="border border-gray-700 px-4 py-2">2,250 years</td>
                <td className="border border-gray-700 px-4 py-2">Historical ages</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Sector Milli Fraction (000–999)</td>
                <td className="border border-gray-700 px-4 py-2">1/1000 Thou Fraction</td>
                <td className="border border-gray-700 px-4 py-2">2.25 years</td>
                <td className="border border-gray-700 px-4 py-2">Decades / trends</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Galactic Day (A000–Z999)</td>
                <td className="border border-gray-700 px-4 py-2">1/1000 Milli Fraction</td>
                <td className="border border-gray-700 px-4 py-2">~19h 42m 14s</td>
                <td className="border border-gray-700 px-4 py-2">Precise timestamps, short-term ops</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div> Max Ship Sizes & Hull Thickness (Steel Alloy Reference Table)</div>
       

<table className="table-auto border-collapse border border-gray-400 w-full text-sm text-left">
  <thead className="bg-gray-100">
    <tr>
      <th className="border border-gray-300 px-4 py-2">Layer</th>
      <th className="border border-gray-300 px-4 py-2">Purpose</th>
      <th className="border border-gray-300 px-4 py-2">Notes / Modules</th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-gray-50">
      <td className="border px-4 py-2">1. Padding (Optional)</td>
      <td className="border px-4 py-2">Encases wires, pipes; adds crew cushioning</td>
      <td className="border px-4 py-2">Thermal insulation, minor impact resistance</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">2. Hull (Mandatory)</td>
      <td className="border px-4 py-2">Primary structural frame</td>
      <td className="border px-4 py-2">Made from steel alloy, composites, or exotic materials</td>
    </tr>
    <tr className="bg-gray-50">
      <td className="border px-4 py-2">3. Thermal/Radiation Layer</td>
      <td className="border px-4 py-2">Protects from space radiation and heat extremes</td>
      <td className="border px-4 py-2">
        <ul className="list-disc list-inside">
          <li>Coolant Systems – circulates heat away from core modules</li>
          <li>Heat Radiators / Sinks – expel heat into space via fins/panels</li>
          <li>Radiation-absorbing composites</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td className="border px-4 py-2">4. Specialized Thermal Layer</td>
      <td className="border px-4 py-2">Optional redundancy or regional reinforcement</td>
      <td className="border px-4 py-2">
        <ul className="list-disc list-inside">
          <li>Localized coolant reservoirs</li>
          <li>Adaptive thermal barriers</li>
        </ul>
      </td>
    </tr>
    <tr className="bg-gray-50">
      <td className="border px-4 py-2">5. Radiation Dampening (Factional)</td>
      <td className="border px-4 py-2">Shields crew from stellar storms, warp backlash</td>
      <td className="border px-4 py-2">
        <ul className="list-disc list-inside">
          <li>Lead-lattice, exotic matter, or quantum filters</li>
          <li>Coolant overflow channels</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td className="border px-4 py-2">6. Armour (Mandatory)</td>
      <td className="border px-4 py-2">Defends against weapons & micrometeor impacts</td>
      <td className="border px-4 py-2">Layered alloys, ceramic plates, reactive panels</td>
    </tr>
    <tr className="bg-gray-50">
      <td className="border px-4 py-2">7. Shield Layer</td>
      <td className="border px-4 py-2">Projected or static energy shields</td>
      <td className="border px-4 py-2">Magnetic, plasma, or phase field technology</td>
    </tr>
  </tbody>
</table>


<table className="table-auto border-collapse border border-gray-400 w-full text-sm text-left">
  <thead className="bg-gray-100">
    <tr>
      <th className="border border-gray-300 px-4 py-2">Category</th>
      <th className="border border-gray-300 px-4 py-2">System / Module</th>
      <th className="border border-gray-300 px-4 py-2">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-gray-50">
      <td className="border px-4 py-2" rowSpan="5">🧠 Core Control</td>
      <td className="border px-4 py-2">Cockpit / Bridge</td>
      <td className="border px-4 py-2">Command and navigation center</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">Power Control</td>
      <td className="border px-4 py-2">Manages power distribution and failover</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">Fire Control</td>
      <td className="border px-4 py-2">Coordinates weapon targeting and timing</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">Shield Control</td>
      <td className="border px-4 py-2">Regulates shields or forcefield defenses</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">Damage Control</td>
      <td className="border px-4 py-2">Monitors ship integrity, automates repairs</td>
    </tr>

    <tr className="bg-gray-50">
      <td className="border px-4 py-2" rowSpan="6">⚡ Power</td>
      <td className="border px-4 py-2">Reactor / Core</td>
      <td className="border px-4 py-2">Generates ship-wide power (fusion, antimatter, etc.)</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">Power Conduits / Backup</td>
      <td className="border px-4 py-2">Distributes and stores power internally</td>
    </tr>

    <tr className="bg-gray-50">
      <td className="border px-4 py-2" rowSpan="2">🧬 Life Systems</td>
      <td className="border px-4 py-2">Life Support</td>
      <td className="border px-4 py-2">Air, water, waste, temperature, internal biosphere</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">Living Quarters</td>
      <td className="border px-4 py-2">Crew accommodations</td>
    </tr>

    <tr className="bg-gray-50">
      <td className="border px-4 py-2" rowSpan="4">🔧 Engineering & Maintenance</td>
      <td className="border px-4 py-2">Maintenance Bots / Drones</td>
      <td className="border px-4 py-2">Auto-repair, cleaning, hull walkarounds</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">Spare Parts Storage</td>
      <td className="border px-4 py-2">Onboard mechanical stockpiles</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">Nanite Repair Systems</td>
      <td className="border px-4 py-2">Automated nano-level internal repairs (high-tech)</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">Fuel Storage / Transfer</td>
      <td className="border px-4 py-2">Stores and manages fuel for engines or reactors</td>
    </tr>

    {/* <!-- You can continue appending other categories like Habitation, Defense, Mobility, etc. --> */}
  </tbody>
</table>
      </section>
    </div>
  );
}
