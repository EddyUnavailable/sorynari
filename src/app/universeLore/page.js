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
      </section>
    </div>
  );
}
