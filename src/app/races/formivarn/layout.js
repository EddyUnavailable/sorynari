// layout for Humans main 3rd in row

"use client";

import React from 'react';
import Link from 'next/link';
import styles from '@/styles/layout.module.css';

const basePath = "/races/formivarn";

export default function FormivarnLayout({ children }) {
  return (
    <div className={styles.racesContainersides}>

      {/* LEFT SIDEBAR */}
      <aside className={styles.navSideLeft}>
        <Link href={`${basePath}/formivarnBiology`} className={styles.link}>Biology</Link>
        <Link href={`${basePath}/formivarnCommunications`} className={styles.link}>Communications</Link>
        <Link href={`${basePath}/formivarnStats`} className={styles.link}>Stats</Link>
        <Link href={`${basePath}/formivarnPsychology`} className={styles.link}>Psychology</Link>
        <Link href={`${basePath}/formivarnCulture`} className={styles.link}>Culture</Link>
        <Link href={`${basePath}/formivarnHistory`} className={styles.link}>History</Link>
        <Link href={`${basePath}/formivarnCivilTech`} className={styles.link}>Civil Tech</Link>
        <Link href={`${basePath}/formivarnEnvironment`} className={styles.link}>Environment</Link>
        <Link href={`${basePath}/formivarnPolitics`} className={styles.link}>Politics</Link>
        <Link href={`${basePath}/formivarnMilitary`} className={styles.link}>Military</Link>
      </aside>

      {/* MAIN CONTENT */}
      <main className={styles.main2}>
        {children}
      </main>

      {/* RIGHT SIDEBAR */}
      

    </div>
  );
}
