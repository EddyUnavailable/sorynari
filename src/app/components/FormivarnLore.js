import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const data = {
  speciesName: "Formivarn",
  population: "30+ trillion",
  territory: "Sphere with 1,000 light-year diameter (~48 million star systems, 10% with active carriers)",
  origin: "Originally subterranean, now an almost entirely ship-based civilization",
  primaryColony: "Their original homeworld, now the only land-based colony",
  lifestyle: [
    "Extremely efficient and tireless workers",
    "Live aboard carrier ships organized into Colony Units",
    "Highly obedient due to pheromonal influence from Queens",
    "Enjoy music and simple art during low-alert periods",
    "Do not eat sentient species; diet is plant-, root-, and fruit-based"
  ],
  behavior: [
    "Attack any lifeform with intelligence or technology equal to or greater than their own",
    "Do not completely wipe out civilizations—disable and restrict them instead",
    "Enforce population and technological caps (usually under 1 million individuals)",
    "Leave behind carrier ships as permanent monitors in subdued systems",
    "Allow subdued species limited communication for cultural exchange",
    "Enslave populations only when their knowledge or technology provides benefit",
    "Maintain long-term relay presence and hyperspace lane control"
  ],
  reproduction: {
    droneLifespan: "120-150 years",
    femaleRate: "5% of drones are female",
    eggProduction: "2-3 eggs every 4 years from age 30 to 90",
    queenSelection: "Upon Queen's death or hive overcapacity, a female aged 90+ metamorphoses into a Queen",
    mating: "All males allowed to mate; only males contribute DNA; cross-colony mating encouraged"
  },
  hierarchy: {
    queenRanks: [
      "Queenling - Newly transformed, unproven, often tasked with minor operations (~1.5 billion)",
      "Brood Queen - Leads a single hive, equivalent to a junior colony operator (~6 billion)",
      "Matron Queen - Standard queens leading stable hives within a colony unit (~5 billion)",
      "Regent Queen - Oversees multiple Brood and Matron Queens, intermediary authority (~1.2 billion)",
      "Hive Baroness - Manage multiple hives, often act as regional overseers (~800 million)",
      "Vicereign - Assigned dominion over a subdued star system. Commands patrol carriers and rarely leaves their system. Outranked only by a passing Marschalatrix unless in extreme emergency. (~480,000)",
      "Fleet Queen - Military leaders of large campaigns, command several colony units (~100 million)",
      "Grand Fleet Queen - Veteran tacticians, responsible for multiple battlefronts (~30 million)",
      "Marschalatrix - Supreme commander of all fleets and colonies, 1 per billion population (~30 million)",
      "Bellatrix Primus - The First Queen, ancient progenitor and singular leader of the species (1)"
    ],
    lifespan: "2,200 - 3,100 years",
    dronePerHive: "1,500 - 2,500 drones per Queen",
    colonyUnit: "1 Carrier (Matris Impera-class) + 90-100 Utility Ships (Subregina-class)",
    estimatedQueens: "~15 billion queens total (1 per 2,000 individuals)",
    estimatedCarriers: "~158 million (based on 95 utility ships per carrier)"
  },
  ships: {
    carrierShips: "Matris Impera-class",
    utilityShips: "Subregina-class (replaced obsolete Formata-class)",
    utilityShipFunctions: [
      "Home and command base for a Queen and her hive",
      "Planetary drop ship for surface operations",
      "Light carrier with underbelly module (25 Scintax-class fighters)",
      "Heavy armor and ground support weapons without module"
    ],
    fighterCraft: "Scintax-class (fighter, bomber, torpedo, or mining variants)",
    droneTransports: "Nidrix-class: fully automated, hyperspace-capable, modular support ships"
  },
  nidrixDetails: {
    description: "Automated droneships with no life support",
    roles: ["Scout", "Cargo transporter", "Resource transporter", "Shipyard builder"],
    hyperspaceCapable: true,
    storage: "Supplies, power plant, 7 modular ports",
    docking: "Compatible with utility ship's Hiveforge Cradle underbelly module"
  },
  hiveBuilder: {
    name: "Hiveweaver Array",
    formation: "1 Nidrix + 24 attached modules",
    assemblyTime: "200 Galactic Units",
    purpose: "Rapid modular shipyard deployment"
  },
  pheromonalControl: {
    range: "10 km (standard), up to 100 km with cybernetic implants",
    rebellionChance: "Extremely rare due to addiction to Queen's pheromones",
    mourning: "After heavy battles, Queen reduces control slightly to allow mourning"
  },
  deathRitual: "Exoskeletons of fallen drones are reforged into armor to protect the living.",
  religionBeliefs: "Drones live and die for their Queen. There is no spiritual worship, only loyalty.",
  queenDeath: "Upon Queen's death, one female undergoes metamorphosis. If hive size exceeds 2,500, a new Queen forms and takes 10% of the hive.",
  queenColonyRelation: [
    "Each Queen maintains a deep empathic and pheromonal connection with her drones, guiding them emotionally and mentally.",
    "A Queen serves as both commander and caretaker; her presence brings psychological stability and drive.",
    "Queens know every drone in their hive by pheromonal signature and can sense distress or deviation.",
    "Hives reflect their Queen’s temperament—more aggressive, methodical, or nurturing, depending on her personality.",
    "A Queen personally oversees education, conditioning, and bonding of new drones.",
    "Emotional feedback loops allow the Queen to adjust pheromone levels dynamically in response to hive morale or battlefield stress.",
    "A hive without a Queen enters emotional collapse within days unless a new Queen is formed.",
    "Despite extreme discipline, Queens allow ceremonial rest and simple artistic expression as morale tools.",
    "Utility ships are designed to amplify a Queen’s presence, making them deeply sacred spaces to her hive."
  ]
};

export default function FormivarnLore() {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-center">Formivarn Species Overview</h1>
      <ScrollArea className="h-[80vh] pr-4">
        <Card>
          <CardContent className="space-y-4 p-6">
            <Section title="General Info" content={[
              `Population: ${data.population}`,
              `Territory: ${data.territory}`,
              `Origin: ${data.origin}`,
              `Primary Colony: ${data.primaryColony}`
            ]} />

            <Section title="Lifestyle" content={data.lifestyle} />
            <Section title="Behavior Toward Other Civilizations" content={data.behavior} />

            <Section title="Reproduction" content={[
              `Drones live: ${data.reproduction.droneLifespan}`,
              `Female ratio: ${data.reproduction.femaleRate}`,
              `Egg production: ${data.reproduction.eggProduction}`,
              `Queen selection: ${data.reproduction.queenSelection}`,
              `Mating: ${data.reproduction.mating}`
            ]} />

            <Section title="Queen Hierarchy" content={[
              `Ranks:`,
              ...Object.entries(data.hierarchy.queenRanks).map(
                ([rank, description]) => `${rank}: ${description}`
              ),
              `Queen lifespan: ${data.hierarchy.lifespan}`,
              `Drones per Hive: ${data.hierarchy.dronePerHive}`,
              `Colony Unit: ${data.hierarchy.colonyUnit}`,
              `Estimated Queens: ${data.hierarchy.estimatedQueens}`,
              `Estimated Carrier Ships: ${data.hierarchy.estimatedCarriers}`
            ]} />

           
          </CardContent>
        </Card>
      </ScrollArea>
    </div>
  );
}

function Section({ title, content }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <ul className="list-disc list-inside space-y-1">
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}