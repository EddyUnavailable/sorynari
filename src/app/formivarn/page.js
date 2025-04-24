// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { ScrollArea } from "@/components/ui/scroll-area";

// const data = {
//   speciesName: "Formivarn",
//   population: "30+ trillion",
//   territory: "~1,000 square light years",
//   origin: "Subterranean, now ship-based civilization",
//   primaryColony: "Homeworld (only land-based Formivarn colony)",
//   lifestyle: [
//     "Extremely efficient and tireless workers",
//     "Live aboard carrier ships in Hive colonies",
//     "Highly obedient due to pheromonal influence from Queens",
//     "Enjoy music and simple art in low-alert periods",
//     "Do not eat sentient lifeforms (plant- and root-based diet)"
//   ],
//   behavior: [
//     "Attack any species with intelligence/technology equal or superior",
//     "Do not fully wipe out civilizations—leave a monitoring force",
//     "Allow subdued species limited population and tech",
//     "Maintain permanent presence in conquered systems",
//     "Some systems enslaved for scientific/technical development"
//   ],
//   reproduction: {
//     droneLifespan: "120-150 years",
//     femaleRate: "5% of drones are female",
//     eggProduction: "2-3 eggs every 4 years (age 30-90)",
//     queenSelection: "Upon death or overpopulation, a 90+ female metamorphoses into Queen",
//     mating: "Males mate with females, only males contribute DNA. Cross-colony mating encouraged."
//   },
//   hierarchy: {
//     queenRanks: [
//       "Queenling",
//       "Matron Queen",
//       "Royal Queen",
//       "Fleet Queen",
//       "High Queen",
//       "First Queen (only one)"
//     ],
//     lifespan: "2,200 - 3,100 years",
//     dronePerHive: "1,500 - 2,500 drones per Queen",
//     colonyUnit: "1 Carrier + 90-100 Utility Ships (each with a Queen)"
//   },
//   ships: {
//     carrierShips: "Matris Impera-class",
//     utilityShips: "Subregina-class (replaced obsolete Formata-class)",
//     fighterCraft: "Scintax-class (multi-role)",
//     droneTransports: "Nidrix-class (automated, modular, pathfinding/scouting)"
//   },
//   hiveBuilder: {
//     name: "Hiveweaver Array",
//     formation: "1 Nidrix + 24 modules",
//     assemblyTime: "200 Galactic Units",
//     purpose: "Rapid modular shipyard creation"
//   },
//   pheromonalControl: {
//     range: "10 km (standard), up to 100 km with cybernetic implant",
//     rebellionChance: "Extremely rare due to pheromone addiction",
//     mourning: "After heavy battle, Queens reduce influence briefly to allow mourning"
//   },
//   deathRitual: "The exoskeleton of fallen Formivarn is reforged into armor to protect the living."
// };

// export default function FormivarnLore() {
//   return (
//     <div className="p-8 max-w-5xl mx-auto space-y-8">
//       <h1 className="text-4xl font-bold text-center">Formivarn Species Overview</h1>
//       <ScrollArea className="h-[80vh] pr-4">
//         <Card>
//           <CardContent className="space-y-4 p-6">
//             <Section title="General Info" content={[
//               `Population: ${data.population}`,
//               `Territory: ${data.territory}`,
//               `Origin: ${data.origin}`,
//               `Primary Colony: ${data.primaryColony}`
//             ]} />

//             <Section title="Lifestyle" content={data.lifestyle} />
//             <Section title="Behavior Toward Other Civilizations" content={data.behavior} />

//             <Section title="Reproduction" content={[
//               `Drones live: ${data.reproduction.droneLifespan}`,
//               `Female ratio: ${data.reproduction.femaleRate}`,
//               `Egg production: ${data.reproduction.eggProduction}`,
//               `Queen selection: ${data.reproduction.queenSelection}`,
//               `Mating: ${data.reproduction.mating}`
//             ]} />

//             <Section title="Queen Hierarchy" content={[
//               `Ranks: ${data.hierarchy.queenRanks.join(", ")}`,
//               `Queen lifespan: ${data.hierarchy.lifespan}`,
//               `Drones per Hive: ${data.hierarchy.dronePerHive}`,
//               `Colony Unit: ${data.hierarchy.colonyUnit}`
//             ]} />

//             <Section title="Fleet Structure" content={[
//               `Carriers: ${data.ships.carrierShips}`,
//               `Utility Ships: ${data.ships.utilityShips}`,
//               `Fighters: ${data.ships.fighterCraft}`,
//               `Drone Transports: ${data.ships.droneTransports}`
//             ]} />

//             <Section title="Hiveweaver Array" content={[
//               `Builder Name: ${data.hiveBuilder.name}`,
//               `Formation: ${data.hiveBuilder.formation}`,
//               `Assembly Time: ${data.hiveBuilder.assemblyTime}`,
//               `Purpose: ${data.hiveBuilder.purpose}`
//             ]} />

//             <Section title="Pheromonal Influence" content={[
//               `Standard range: ${data.pheromonalControl.range}`,
//               `Rebellion risk: ${data.pheromonalControl.rebellionChance}`,
//               `Mourning ritual: ${data.pheromonalControl.mourning}`
//             ]} />

//             <Section title="Death Ritual" content={[data.deathRitual]} />
//           </CardContent>
//         </Card>
//       </ScrollArea>
//     </div>
//   );
// }

// function Section({ title, content }) {
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-2">{title}</h2>
//       <ul className="list-disc list-inside space-y-1">
//         {content.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
