export default function UniverseLore() {
  return (
    <div className="p-6 space-y-8 text-white">
      <h1 className="text-4xl font-bold mb-4">Universal Lore</h1>

      {/* Hyperspace Travel Section */}
      

      {/* GOST Section */}
      <section className="mt-10">
        
        
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


<table className="min-w-full border border-gray-300 text-sm text-left">
  <thead className="bg-gray-100">
    <tr>
      <th className="border px-2 py-1">Weapon Type</th>
      <th className="border px-2 py-1">Ship Atmosphere</th>
      <th className="border px-2 py-1">Zero-G</th>
      <th className="border px-2 py-1">Tech Level</th>
      <th className="border px-2 py-1">Cost / Upkeep</th>
      <th className="border px-2 py-1">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr><td className="border px-2 py-1">Ballistic Rifle</td><td>✅</td><td>✅</td><td>5</td><td>5</td><td>Reliable, simple, widespread</td></tr>
    <tr><td className="border px-2 py-1">Caseless Rifle</td><td>✅</td><td>✅</td><td>6</td><td>4</td><td>Lower maintenance, less ejection heat</td></tr>
    <tr><td className="border px-2 py-1">Armor-Piercing Rounds</td><td>✅</td><td>✅</td><td>7</td><td>6</td><td>Great vs. heavy suits or internal defenses</td></tr>
    <tr><td className="border px-2 py-1">Shotgun / Scattergun</td><td>✅</td><td>⚠️</td><td>3</td><td>4</td><td>Devastating close range, risky in hulls</td></tr>
    <tr><td className="border px-2 py-1">Compact SMG (Chemical)</td><td>✅</td><td>✅</td><td>5</td><td>4</td><td>CQB standard, low recoil</td></tr>
    <tr><td className="border px-2 py-1">Gauss Rifle</td><td>✅</td><td>✅✅✅</td><td>12</td><td>10</td><td>High-velocity, low-recoil, quiet</td></tr>
    <tr><td className="border px-2 py-1">Laser Sidearm</td><td>✅✅</td><td>✅✅✅</td><td>11</td><td>9</td><td>Silent, ammo-less, precision</td></tr>
    <tr><td className="border px-2 py-1">Plasma Torch / Breacher</td><td>✅✅✅</td><td>✅</td><td>14</td><td>11</td><td>Breaching & boarding tool</td></tr>
    <tr><td className="border px-2 py-1">Microwave Gun</td><td>✅✅</td><td>✅</td><td>13</td><td>10</td><td>Non-lethal, disables electronics</td></tr>
  </tbody>
</table>


<table className="min-w-full border border-gray-300 text-sm text-left mt-6">
  <thead className="bg-gray-100">
    <tr>
      <th className="border px-2 py-1">Weapon</th>
      <th className="border px-2 py-1">Platform</th>
      <th className="border px-2 py-1">Atmosphere</th>
      <th className="border px-2 py-1">Space</th>
      <th className="border px-2 py-1">Tech Level</th>
      <th className="border px-2 py-1">Cost / Upkeep</th>
      <th className="border px-2 py-1">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr><td className="border px-2 py-1">Autocannon</td><td>Ship, Tank</td><td>✅✅✅</td><td>✅✅</td><td>7</td><td>6</td><td>Shells or smart rounds</td></tr>
    <tr><td className="border px-2 py-1">Missile System</td><td>Ship, Aircraft</td><td>✅✅✅</td><td>✅✅✅</td><td>10</td><td>8</td><td>High agility, countered by defenses</td></tr>
    <tr><td className="border px-2 py-1">Railgun</td><td>Ship, Tank</td><td>✅</td><td>✅✅✅</td><td>15</td><td>14</td><td>Slug acceleration, massive recoil</td></tr>
    <tr><td className="border px-2 py-1">Gauss Cannon</td><td>Ship, Vehicle</td><td>✅✅</td><td>✅✅✅</td><td>13</td><td>11</td><td>Less recoil, very precise</td></tr>
    <tr><td className="border px-2 py-1">Laser Cannon</td><td>Ship, Turret</td><td>✅✅</td><td>✅✅✅</td><td>14</td><td>13</td><td>Point defense or anti-light armor</td></tr>
    <tr><td className="border px-2 py-1">Plasma Projector</td><td>Ship, Tank</td><td>✅✅</td><td>✅</td><td>14</td><td>12</td><td>Short-range high heat</td></tr>
    <tr><td className="border px-2 py-1">Explosive Launchers</td><td>Ship, Ground</td><td>✅✅✅</td><td>✅✅</td><td>5</td><td>6</td><td>HE or cluster munitions</td></tr>
    <tr><td className="border px-2 py-1">Flak Cannons</td><td>Ship, AA</td><td>✅✅✅</td><td>✅</td><td>6</td><td>5</td><td>Drone/missile point defense</td></tr>
    <tr><td className="border px-2 py-1">EMP Launcher</td><td>Ship, Stealth</td><td>✅</td><td>✅✅✅</td><td>13</td><td>12</td><td>System disruption, no physical damage</td></tr>
    <tr><td className="border px-2 py-1">Particle Beam Cannon</td><td>Ship, Station</td><td>⚠️</td><td>✅✅✅✅</td><td><strong>20</strong></td><td><strong>18</strong></td><td>Extreme range & damage; energy-intensive</td></tr>
  </tbody>
</table>


<table className="min-w-full border border-gray-600 text-sm text-left bg-gray-900 text-gray-200">
  <thead className="bg-gray-800 text-xs uppercase text-gray-400">
    <tr>
      <th className="px-4 py-3">Armor Type</th>
      <th className="px-4 py-3">Description</th>
      <th className="px-4 py-3">Effective vs</th>
      <th className="px-4 py-3">Tech Level</th>
      <th className="px-4 py-3">Mass</th>
      <th className="px-4 py-3">Cost</th>
      <th className="px-4 py-3">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-t border-gray-700">
      <td className="px-4 py-2 font-semibold">Steel Alloy Plating</td>
      <td className="px-4 py-2">Standard hardened steel</td>
      <td className="px-4 py-2">Kinetics, low-power weapons</td>
      <td className="px-4 py-2">3</td>
      <td className="px-4 py-2">High</td>
      <td className="px-4 py-2">Low</td>
      <td className="px-4 py-2">Durable but heavy — base hulls</td>
    </tr>
    <tr className="border-t border-gray-700">
      <td className="px-4 py-2 font-semibold">Reinforced Steel Alloy</td>
      <td className="px-4 py-2">Military-spec upgraded steel</td>
      <td className="px-4 py-2">Kinetics, shrapnel</td>
      <td className="px-4 py-2">4</td>
      <td className="px-4 py-2">High</td>
      <td className="px-4 py-2">Low</td>
      <td className="px-4 py-2">Common, better balance of strength and weight</td>
    </tr>
    <tr className="border-t border-gray-700">
      <td className="px-4 py-2 font-semibold">Titanium Alloy Armor</td>
      <td className="px-4 py-2">Aerospace structural armor</td>
      <td className="px-4 py-2">Kinetics, gauss</td>
      <td className="px-4 py-2">6</td>
      <td className="px-4 py-2">Med-Low</td>
      <td className="px-4 py-2">Medium</td>
      <td className="px-4 py-2">Ideal for deep-space use; corrosion resistant</td>
    </tr>
    <tr className="border-t border-gray-700">
      <td className="px-4 py-2 font-semibold">Aerotitanium Alloy</td>
      <td className="px-4 py-2">Ultra-light aerospace composite</td>
      <td className="px-4 py-2">Ballistics, heat, micro-impacts</td>
      <td className="px-4 py-2">8</td>
      <td className="px-4 py-2">Very Low</td>
      <td className="px-4 py-2">High</td>
      <td className="px-4 py-2">Fighter/interceptor use; poor against heavy hits</td>
    </tr>
    <tr className="border-t border-gray-700">
      <td className="px-4 py-2 font-semibold">Ceramic Matrix Armor</td>
      <td className="px-4 py-2">Lightweight ceramic composite</td>
      <td className="px-4 py-2">Lasers, gauss</td>
      <td className="px-4 py-2">7</td>
      <td className="px-4 py-2">Medium</td>
      <td className="px-4 py-2">Medium</td>
      <td className="px-4 py-2">Versatile, vulnerable to fragmentation</td>
    </tr>
    <tr className="border-t border-gray-700">
      <td className="px-4 py-2 font-semibold">Tungsten Laminate</td>
      <td className="px-4 py-2">Dense heavy metal composite</td>
      <td className="px-4 py-2">Gauss, rail, plasma</td>
      <td className="px-4 py-2">9</td>
      <td className="px-4 py-2">Very High</td>
      <td className="px-4 py-2">Medium</td>
      <td className="px-4 py-2">Critical internal zones or tanky frontline armor</td>
    </tr>
    <tr className="border-t border-gray-700">
      <td className="px-4 py-2 font-semibold">Ablative Foam Layers</td>
      <td className="px-4 py-2">Vaporizes under heat</td>
      <td className="px-4 py-2">Plasma, lasers</td>
      <td className="px-4 py-2">8</td>
      <td className="px-4 py-2">Low</td>
      <td className="px-4 py-2">Medium</td>
      <td className="px-4 py-2">Outer layer defense against energy weapons</td>
    </tr>
    <tr className="border-t border-gray-700">
      <td className="px-4 py-2 font-semibold">Active Armor (Vehicle)</td>
      <td className="px-4 py-2">Sensor-triggered explosive tiles</td>
      <td className="px-4 py-2">Missiles, AP</td>
      <td className="px-4 py-2">10</td>
      <td className="px-4 py-2">High</td>
      <td className="px-4 py-2">High</td>
      <td className="px-4 py-2">Powerful against shaped charges; limited reuse</td>
    </tr>
    <tr className="border-t border-gray-700">
      <td className="px-4 py-2 font-semibold">Magnetic Reactive Plates</td>
      <td className="px-4 py-2">EM-based deflection armor</td>
      <td className="px-4 py-2">Railguns, gauss</td>
      <td className="px-4 py-2">15</td>
      <td className="px-4 py-2">Medium</td>
      <td className="px-4 py-2">High</td>
      <td className="px-4 py-2">Great against EM-powered kinetic weapons</td>
    </tr>
    <tr className="border-t border-gray-700">
      <td className="px-4 py-2 font-semibold">Advanced Magnetic Reactive Plates</td>
      <td className="px-4 py-2">High-end magnetic armor w/ active deflection</td>
      <td className="px-4 py-2">Railguns, gauss</td>
      <td className="px-4 py-2">20</td>
      <td className="px-4 py-2">Medium</td>
      <td className="px-4 py-2">Very High</td>
      <td className="px-4 py-2">Top-tier defense; power-hungry; capital ship grade</td>
    </tr>
    <tr className="border-t border-gray-700">
      <td className="px-4 py-2 font-semibold">Adaptive Nanoarmor</td>
      <td className="px-4 py-2">Self-modifying nanometal skin</td>
      <td className="px-4 py-2">All threats</td>
      <td className="px-4 py-2">20</td>
      <td className="px-4 py-2">Medium</td>
      <td className="px-4 py-2">Very High</td>
      <td className="px-4 py-2">Elite/experimental flagship armor</td>
    </tr>
  </tbody>
</table>


<table className="min-w-full border border-gray-600 text-sm text-left bg-gray-900 text-gray-200">
  <thead className="bg-gray-800 text-xs uppercase text-gray-400">
    <tr>
      <th className="px-4 py-3">Armor Type</th>
      <th className="px-4 py-3">Description</th>
      <th className="px-4 py-3">Effective vs</th>
      <th className="px-4 py-3">Tech Level</th>
      <th className="px-4 py-3">Mass</th>
      <th className="px-4 py-3">Cost</th>
      <th className="px-4 py-3">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-t border-gray-700">
      <td className="px-4 py-2 font-semibold">Kevlar-Based Armor</td>
      <td className="px-4 py-2">Woven ballistic fiber</td>
      <td className="px-4 py-2">Bullets, shrapnel</td>
      <td className="px-4 py-2">3</td>
      <td className="px-4 py-2">Low</td>
      <td className="px-4 py-2">Low</td>
      <td className="px-4 py-2">Widely used by low-tech factions</td>
    </tr>
    <tr className="border-t border-gray-700">
      <td className="px-4 py-2 font-semibold">Steel Plate</td>
      <td className="px-4 py-2">Solid reinforced steel sections</td>
      <td className="px-4 py-2">Blunt, bullets</td>
      <td className="px-4 py-2">4</td>
      <td className="px-4 py-2">High</td>
      <td className="px-4 py-2">Low</td>
      <td className="px-4 py-2">Heavy and reliable; old-school</td>
    </tr>
    <tr className="border-t border-gray-700">
      <td className="px-4 py-2 font-semibold">Titanium-Weave</td>
      <td className="px-4 py-2">Flexible titanium mesh layers</td>
      <td className="px-4 py-2">Bullets, energy scatter</td>
      <td className="px-4 py-2">6</td>
      <td className="px-4 py-2">Medium</td>
      <td className="px-4 py-2">Medium</td>
      <td className="px-4 py-2">Excellent mobility; elite infantry</td>
    </tr>
    <tr className="border-t border-gray-700">
      <td className="px-4 py-2 font-semibold">Composite Armor Vest</td>
      <td className="px-4 py-2">Layered ceramic + polymer plates</td>
      <td className="px-4 py-2">AP rounds, stab, some heat</td>
      <td className="px-4 py-2">7</td>
      <td className="px-4 py-2">Medium</td>
      <td className="px-4 py-2">Medium</td>
      <td className="px-4 py-2">Versatile defense; mix of flexibility and bulk</td>
    </tr>
    <tr className="border-t border-gray-700">
      <td className="px-4 py-2 font-semibold">Powered Kinetic Absorbers</td>
      <td className="px-4 py-2">Shock-displacement armor</td>
      <td className="px-4 py-2">Kinetic/impact weapons</td>
      <td className="px-4 py-2">10</td>
      <td className="px-4 py-2">Medium</td>
      <td className="px-4 py-2">High</td>
      <td className="px-4 py-2">Powered exosuits only; absorbs massive force</td>
    </tr>
    <tr className="border-t border-gray-700">
      <td className="px-4 py-2 font-semibold">Magnetic Reactive Plates</td>
      <td className="px-4 py-2">Miniaturized EM armor tiles</td>
      <td className="px-4 py-2">High-velocity rounds, gauss</td>
      <td className="px-4 py-2">15</td>
      <td className="px-4 py-2">Medium</td>
      <td className="px-4 py-2">High</td>
      <td className="px-4 py-2">Top-tier special forces; powered armor only</td>
    </tr>
    <tr className="border-t border-gray-700">
      <td className="px-4 py-2 font-semibold">Adaptive Nanoarmor</td>
      <td className="px-4 py-2">Morphing smart skin</td>
      <td className="px-4 py-2">Energy, kinetics, ambient threats</td>
      <td className="px-4 py-2">20</td>
      <td className="px-4 py-2">Medium</td>
      <td className="px-4 py-2">Very High</td>
      <td className="px-4 py-2">Elite infiltration suits or commandos</td>
    </tr>
  </tbody>
</table>
      </section>
    </div>
  );
}
