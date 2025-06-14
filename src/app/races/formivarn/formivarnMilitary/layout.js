// layout for Humans-military 4th in row

"use client";

import React from 'react';
import Link from 'next/link';
import styles from '@/styles/layout.module.css';

const basePath = "/races/formivarns/formivarnMilitary";

export default function HumanLayout({ children }) {
  return (
    <div className={styles.racesContainersides}>

      
      {/* MAIN CONTENT */}
      <main className={styles.main2}>
        {children}
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className={styles.navSideRight}>
        <Link href={`${basePath}/formivarnStats`} className={styles.link}>Formivarn</Link>
        <Link href={`${basePath}/formivarnStats`} className={styles.link}>Sorynari</Link>
        <Link href={`${basePath}/formivarnStats`} className={styles.link}>Stats</Link>
        <Link href={`${basePath}/formivarnStats`} className={styles.link}>Kalari</Link>
        <Link href={`${basePath}/formivarnStats`} className={styles.link}>Telnari</Link>
        <Link href={`${basePath}/formivarnStats`} className={styles.link}>History</Link>
      </aside>

    </div>
  );
}
