// layout for UniverseLore main 2rd in row

"use client";

import React from 'react';
import Link from 'next/link';
import styles from '@/styles/layout.module.css';

const basePath = "/galaxyBodies";

export default function GalaxyBodiesLayout({ children }) {
  return (
    <div className={styles.racesContainersides}>

      {/* LEFT SIDEBAR */}
      <aside className={styles.navSideLeft}>
        <Link href={`${basePath}/`} className={styles.link}>Home</Link>
        <Link href={`${basePath}/asteroids`} className={styles.link}>Asteroids</Link>
        <Link href={`${basePath}/comets`} className={styles.link}>Comets</Link>
        <Link href={`${basePath}/dwarfPlanets`} className={styles.link}>DwarfPlanets</Link>
        <Link href={`${basePath}/meteoroids`} className={styles.link}>Meteroids</Link>
        <Link href={`${basePath}/moons`} className={styles.link}>Moons</Link>
        <Link href={`${basePath}/nebulaes`} className={styles.link}>Nebulaes</Link>
        <Link href={`${basePath}/planetTypes`} className={styles.link}>Planets</Link>
        <Link href={`${basePath}/starTable`} className={styles.link}>Stars</Link>
        <Link href={`${basePath}/subTypes`} className={styles.link}>Sub Type</Link>
      </aside>

      {/* MAIN CONTENT */}
      <main className={styles.main2}>
        {children}
      </main>

      {/* RIGHT SIDEBAR */}
      

    </div>
  );
}
