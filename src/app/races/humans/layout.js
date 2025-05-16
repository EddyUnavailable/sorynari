"use client";

import React from 'react';
import Link from 'next/link';
import styles from '../../styles/layout.module.css';

const basePath = "/races/humans";

export default function HumanLayout({ children }) {
  return (
    <div className={styles.racesContainersides}>

      {/* LEFT SIDEBAR */}
      <aside className={styles.navSideLeft}>
        <Link href={`${basePath}/humanBiology`} className={styles.link}>Biology</Link>
        <Link href={`${basePath}/humanStats`} className={styles.link}>Sorynari</Link>
        <Link href={`${basePath}/humanStats`} className={styles.link}>Stats</Link>
        <Link href={`${basePath}/humanPsychology`} className={styles.link}>Psychology</Link>
        <Link href={`${basePath}/humanCulture`} className={styles.link}>Culture</Link>
        <Link href={`${basePath}/humanHistory`} className={styles.link}>History</Link>
      </aside>

      {/* MAIN CONTENT */}
      <main className={styles.main2}>
        {children}
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className={styles.navSideRight}>
        <Link href={`${basePath}/humanStats`} className={styles.link}>Formivarn</Link>
        <Link href={`${basePath}/humanStats`} className={styles.link}>Sorynari</Link>
        <Link href={`${basePath}/humanStats`} className={styles.link}>Stats</Link>
        <Link href={`${basePath}/humanStats`} className={styles.link}>Kalari</Link>
        <Link href={`${basePath}/humanStats`} className={styles.link}>Telnari</Link>
        <Link href={`${basePath}/humanStats`} className={styles.link}>History</Link>
      </aside>

    </div>
  );
}
