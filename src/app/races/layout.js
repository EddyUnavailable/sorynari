// Layout for races 2nd layout

"use client";
import React from 'react'
import Link from 'next/link';
import styles from '../styles/layout.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function RacesLayout({ children }) {
  const pathname = usePathname()
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
        
        

        
        
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              className={styles.mainx}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
       
      </div>
    </>
  );
}
