"use client";

import React from "react";
import styles from "@/styles/layout.module.css";

export default function FormivarnStats3() {
  return (
    <div className={styles.main2}>
      <h1>Formivarn Trait and Stat Guide</h1>
      <p><strong>Scale Reference:</strong><br/>
      Most stats use a <strong>0–200</strong> scale.<br/>
      <strong>Intelligence:</strong> 0–300 (based on IQ).<br/>
      <strong>Speed:</strong> measured in <strong>km/h</strong>.<br/>
      <strong>Height:</strong> measured in <strong>cm</strong> (0–500 cm scale).</p>

      <h2>🦾 Physical Attributes</h2>
      <ul>
        <li><strong>Strength:</strong> 170 avg / 200 max — Can lift ~350 kg; optimized for heavy labor and combat.</li>
        <li><strong>Speed:</strong> 45 avg / 50 max km/h — Capable of quick bursts; ideal for ambush or flanking.</li>
        <li><strong>Endurance:</strong> 190 avg / 200 max — Operates for days without rest; excels under stress.</li>
        <li><strong>Durability:</strong> 130 avg / 160 max — Thick exoskeleton resists blunt force and minor energy damage.</li>
        <li><strong>Agility:</strong> 100 avg / 120 max — Adequate maneuverability; not graceful, but efficient.</li>
        <li><strong>Height:</strong> 150 avg / 160 max cm — Compact size ideal for hive environments and tunnels.</li>
        <li><strong>Stamina:</strong> 190 avg / 200 max — Can function without food or sleep under command.</li>
        <li><strong>Reflexes:</strong> 100 avg / 110 max — Average reaction speed; reliable in formation maneuvers.</li>
        <li><strong>Hand-Eye Coordination:</strong> 150 avg / 160 max — Fine motor control for tech use and precise tasks.</li>
        <li><strong>Pain Tolerance:</strong> 170 avg / 180 max — Can fight through severe trauma with minimal hindrance.</li>
        <li><strong>Acrobatics:</strong> 90 avg / 110 max — Grounded but capable of fast, calculated movement and climbing.</li>
      </ul>

      <h2>🧠 Mental & Cognitive Attributes</h2>
      <ul>
        <li><strong>Intelligence (IQ):</strong> 90 avg / 110 max — Limited individual logic, strong collective coordination.</li>
        <li><strong>Problem-Solving:</strong> 100 avg / 120 max — Efficient under known patterns; struggles with novelty.</li>
        <li><strong>Focus:</strong> 180 avg / 200 max — Exceptional under command; pheromonal triggers enhance fixation.</li>
        <li><strong>Creativity:</strong> 70 avg / 90 max — Minimal innovation; prefers optimization of known systems.</li>
        <li><strong>Social Intelligence:</strong> 100 avg / 120 max — Intra-hive communication strong; weak externally.</li>
        <li><strong>Tactical Awareness:</strong> 110 avg / 130 max — Learns from group behavior; relies on central command.</li>
      </ul>

      <h2>⚔️ Combat Proficiency</h2>
      <ul>
        <li><strong>Combat Efficiency:</strong> 160 avg / 180 max — Extremely lethal in swarm tactics and formation combat.</li>
        <li><strong>Weapon Handling:</strong> 130 avg / 150 max — Proficient with energy weapons, turrets, and melee tools.</li>
        <li><strong>Regeneration:</strong> 50 avg / 70 max — Slow self-healing; prefers to replace limbs or units.</li>
        <li><strong>Pheromonal Sensitivity:</strong> 200 avg / 200 max — Core to communication, coordination, and strategy.</li>
      </ul>

      <h2>🌐 Environmental & Technological Traits</h2>
      <ul>
        <li><strong>Heat Resistance:</strong> 130 avg / 150 max — Can endure high temperatures up to ~55°C; exoskeleton disperses heat efficiently.</li>
        <li><strong>Cold Resistance:</strong> 100 avg / 130 max — Tolerant of moderate cold; sluggish in freezing temperatures without assistance.</li>
        <li><strong>Gravity Tolerance:</strong> 160 avg / 180 max — Adapted to high-gravity environments; strong skeletal-muscular support.</li>
        <li><strong>Humidity Tolerance:</strong> 200 avg / 200 max — Thrives in high-humidity and moisture-rich tunnels; vulnerable to desiccation in dry zones.</li>
        <li><strong>Water Tolerance (incl. Swimming):</strong> 80 avg / 100 max — Can handle damp environments; poor swimmers, prefer shallow water or stable ground.</li>
        <li><strong>Pressure Resistance:</strong> 100 avg / 130 max — Can tolerate mild pressure extremes; limited depth range underwater and elevation without gear.</li>
        <li><strong>Radiation Resistance:</strong> 120 avg / 140 max — Withstands moderate radiation exposure; requires shielding in high-radiation zones.</li>
        <li><strong>Toxic Atmosphere Tolerance:</strong> 110 avg / 130 max — Can operate in low-oxygen or mildly toxic air; uses filter membranes or gear in extremes.</li>
        <li><strong>Adaptability:</strong> 110 avg / 130 max — Handles environmental change decently under structured learning.</li>
        <li><strong>Sensory Perception:</strong> 140 avg / 160 max — Acute compound vision and heat/pheromone detection.</li>
        <li><strong>Tech Adaptation:</strong> 150 avg / 170 max — Efficient in retooling or integrating foreign systems.</li>
        <li><strong>Engineering Skill:</strong> 130 avg / 150 max — Practical repair and field fabrication; relies on templates.</li>
      </ul>

      <h2>❤️ Loyalty & Emotion</h2>
      <ul>
        <li><strong>Loyalty:</strong> 200 avg / 200 max — Absolute allegiance to Queen and hive, even to death.</li>
        <li><strong>Emotional Intelligence:</strong> 80 avg / 100 max — Basic empathy within hive; struggles externally.</li>
      </ul>
    </div>
  );
}
