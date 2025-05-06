'use client';

import React from 'react';

const futureRaces = [
  "Drexari", "Quon’thar", "Yelvani", "Virexis", "Zulmekh", "Isariun", "Thareen", "Kovara",
  "Nythari", "Voquell", "Shadrin", "Umariad", "Veltraan", "Ik’telak", "Xyleni", "Braxune",
  "Cindari", "Orrak-huun", "Fel'kari", "Namaru", "Thornaxi", "Iquari", "Jorynnai", "T'voss",
  "Zirvathen", "Almari", "Graxith", "Olurex", "Yllarion", "Dromekar", "Xevari", "Kelshan",
  "Lirvahn", "Esh’korr", "Mavari", "Thessix", "Gundrathi", "Val’zineth", "Turokai", "Zheralli",
  "Norvessa", "Ik’ranthi", "Vael’thun", "Xaruun", "Illmorath", "Coraithi", "Elymnar", "Dravenn"
];

export default function FutureRaces() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🌌 Future Races</h1>
      <ul className="space-y-1 list-disc list-inside">
        {futureRaces.map((race, index) => (
          <li key={index}>{race}</li>
        ))}
      </ul>
    </div>
  );
}