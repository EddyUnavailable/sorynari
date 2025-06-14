// layout for UniverseLore main 2rd in row

"use client";

import React from 'react';
import Link from 'next/link';
import styles from '@/styles/layout.module.css';

const basePath = "/universeLore";

export default function UniverseLoreLayout({ children }) {
  return (
    <div className={styles.racesContainersides}>

      {/* LEFT SIDEBAR */}
      <aside className={styles.navSideLeft}>
        <Link href={`${basePath}/wittenAxisumChannels`} className={styles.link}>WAC</Link>
        <Link href={`${basePath}/starField`} className={styles.link}>Starfield</Link>
        <Link href={`${basePath}/galacticTime`} className={styles.link}>Galactic Time</Link>
        <Link href={`${basePath}/humanPsychology`} className={styles.link}>Psychology</Link>
        <Link href={`${basePath}/humanCulture`} className={styles.link}>Culture</Link>
        <Link href={`${basePath}/humanHistory`} className={styles.link}>History</Link>
        <Link href={`${basePath}/humanCivilTech`} className={styles.link}>Civil Tech</Link>
        <Link href={`${basePath}/humanEnvironment`} className={styles.link}>Environment</Link>
        <Link href={`${basePath}/humanPolitics`} className={styles.link}>Politics</Link>
        <Link href={`${basePath}/humanMilitary`} className={styles.link}>Military</Link>
      </aside>

      {/* MAIN CONTENT */}
      <main className={styles.main2}>
        {children}
      </main>

      {/* RIGHT SIDEBAR */}
      

    </div>
  );
}
