// layout for Humans main 3rd in row

"use client";

import React from 'react';
import Link from 'next/link';
import styles from '@/styles/layout.module.css';

const basePath = "/races/elvens";

export default function HumanLayout({ children }) {
  return (
    <div className={styles.racesContainersides}>

      {/* LEFT SIDEBAR */}
      <aside className={styles.navSideLeft}>
        <Link href={`${basePath}/elvenBiology`} className={styles.link}>Biology</Link>
        <Link href={`${basePath}/elvenCommunications`} className={styles.link}>Communications</Link>
        <Link href={`${basePath}/elvenStats`} className={styles.link}>Stats</Link>
        <Link href={`${basePath}/elvenPsychology`} className={styles.link}>Psychology</Link>
        <Link href={`${basePath}/elvenCulture`} className={styles.link}>Culture</Link>
        <Link href={`${basePath}/elvenHistory`} className={styles.link}>History</Link>
        <Link href={`${basePath}/elvenCivilTech`} className={styles.link}>Civil Tech</Link>
        <Link href={`${basePath}/elvenEnvironment`} className={styles.link}>Environment</Link>
        <Link href={`${basePath}/elvenPolitics`} className={styles.link}>Politics</Link>
        <Link href={`${basePath}/elvenMilitary`} className={styles.link}>Military</Link>
      </aside>

      {/* MAIN CONTENT */}
      <main className={styles.main2}>
        {children}
      </main>

      {/* RIGHT SIDEBAR */}
      

    </div>
  );
}
