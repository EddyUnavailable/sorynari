"use client";

import React from 'react';
import Link from 'next/link';
import styles from '../../styles/layout.module.css';

export default function FormivarnLayout({ children }) {
  return (
    <div className={styles.racesContainersides}>

      {/* LEFT SIDEBAR */}
      <aside className={styles.navSideLeft}>
        <Link href="/races/formivarn/formivarnHistory2" className={styles.link}>🦾 Formivarn</Link>
        <Link href="/races/formivarn/formivarnHistory21" className={styles.link}>🐾 Sorynari</Link>
        <Link href="/races/formivarn/formivarnStats" className={styles.link}>Stats</Link>
        <Link href="/races/formivarn/formivarnTech" className={styles.link}>🌌 Kalari</Link>
        <Link href="/races/formivarn/formivarnShips" className={styles.link}>🌌 Telnari</Link>
        <Link href="/races/formivarn/formivarnHistory" className={styles.link}>History</Link>
      </aside>

      {/* MAIN CONTENT */}
      <main className={styles.main2}>
        {children}
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className={styles.navSideRight}>
        <Link href="/races/formivarn/formivarnHistory2" className={styles.link}>🦾 Formivarn</Link>
        <Link href="/races/formivarn/formivarnHistory21" className={styles.link}>🐾 Sorynari</Link>
        <Link href="/races/formivarn/formivarnStats" className={styles.link}>Stats</Link>
        <Link href="/races/formivarn/formivarnTech" className={styles.link}>🌌 Kalari</Link>
        <Link href="/races/formivarn/formivarnShips" className={styles.link}>🌌 Telnari</Link>
        <Link href="/races/formivarn/formivarnHistory" className={styles.link}>History</Link>
      </aside>

    </div>
  );
}
