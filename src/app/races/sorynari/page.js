import React from "react";

const data = {
  speciesName: "Sorynari",
  origin: "Evolved from a cat-monkey hybrid species",
  population: "Was ~16 billion, now <10 million due to Formivarn conflict",
  physiology: {
    height: "Average 2 meters",
    build: "Slender (10% more so than humans)",
    traits: "Agile, short cat-like tails, orange/yellow skin tones"
  },
  clothing: [
    "Originally wore minimal clothing — jackets, belts, backpacks",
    "Adopted kilts and skirts after meeting humans, to accommodate tails and express modesty",
    "Practical and respectful dress culture"
  ],
  intelligence: "Higher than Formivarn but still slightly below humans",
  technology: "10,000 years ahead of human baseline tech",
  culture: [
    "Peaceful and highly social",
    "Pragmatic and emotionally intuitive",
    "Nudity is not taboo, but modesty developed out of interspecies respect"
  ],
  history: {
    homeSystem: "Nari system (names of worlds TBD)",
    populationPreWar: "16 billion across homeworld and two moons",
    formivarnInvasion: [
      "Formivarn invaded without warning",
      "Sorynari fought back valiantly but were overwhelmed",
      "Population reduced to under 10 million, most now enslaved"
    ],
    exodus: [
      "Approx. 1,000 Sorynari stole a partially-complete Formivarn colony ship on Tavuun moon",
      "Rescued thousands more from Nari system",
      "Destroyed Formivarn infrastructure during escape",
      "~200,000 survivors now live aboard a repurposed Formivarn ship called VIV"
    ]
  },
  theVIV: {
    name: "VIV",
    description: "70km-long Formivarn colony ship retrofitted as a refugee vessel",
    capabilities: [
      "Mining",
      "Docking",
      "Support for planetary development"
    ],
    mission: [
      "Travel through systems to avoid Formivarn expansion",
      "Advance the evolution and technology of native species to resist Formivarn",
      "Mask these efforts as an invasion to avoid cultural contamination"
    ],
    currentLocation: "Orbiting a gas giant, preparing jump to Earth-like planet"
  }
};

export default function SorynariLore() {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "2rem" }}>
        Sorynari Species Overview
      </h1>
      <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1.5rem" }}>
        <Section title="General Info" content={[
          `Origin: ${data.origin}`,
          `Population: ${data.population}`,
          `Intelligence: ${data.intelligence}`,
          `Technology Level: ${data.technology}`
        ]} />

        <Section title="Physiology" content={[
          `Height: ${data.physiology.height}`,
          `Build: ${data.physiology.build}`,
          `Traits: ${data.physiology.traits}`
        ]} />

        <Section title="Clothing & Culture" content={[
          ...data.clothing,
          ...data.culture
        ]} />

        <Section title="History and Conflict" content={[
          `Home System: ${data.history.homeSystem}`,
          `Population Before War: ${data.history.populationPreWar}`,
          ...data.history.formivarnInvasion,
          ...data.history.exodus
        ]} />

        <Section title="The VIV" content={[
          `Ship Name: ${data.theVIV.name}`,
          `Description: ${data.theVIV.description}`,
          ...data.theVIV.capabilities.map(cap => `Capability: ${cap}`),
          ...data.theVIV.mission.map(m => `Mission Objective: ${m}`),
          `Current Location: ${data.theVIV.currentLocation}`
        ]} />
      </div>
    </div>
  );
}

function Section({ title, content }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{title}</h2>
      <ul style={{ paddingLeft: "1.25rem" }}>
        {content.map((item, index) => (
          <li key={index} style={{ marginBottom: "0.25rem" }}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
