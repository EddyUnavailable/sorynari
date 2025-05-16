// Layout for races 2nd layout

"use client";
import React from 'react'
import Link from 'next/link';
import styles from '../styles/layout.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function RacesLayout({ children }) {
  
  return (
    <>
      <div className={styles.racesContainer2}>
       
        <nav className={styles.navBar2}>
          <Link href="/races/formivarn" className={styles.link}>🦾 Formivarn</Link>
          <Link href="/races/sorynari" className={styles.link}>🐾 Sorynari</Link>
          <Link href="/races/humans" className={styles.link}>👤 Humans</Link>
          <Link href="/races/kalariLore" className={styles.link}>🌌 Kalari</Link>
          <Link href="/races/telnariLore" className={styles.link}>🌌 Telnari</Link>
          <Link href="/races/futureRaces" className={styles.link}>🌌 Future Races</Link>
        </nav>
        
        

        
        
      <main className={styles.main}>
        {children} {/* No AnimatePresence here */}
      </main>
       
      </div>
    </>
  );
}
