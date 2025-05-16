"use client";

import React from 'react';
import Link from 'next/link';
import styles from '../../styles/layout.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function FormivarnLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className={styles.racesContainersides}>

      {/* LEFT SIDEBAR */}
      <AnimatePresence mode="wait">
        <motion.aside
          key={`left-${pathname}`}
          className={styles.navSideLeft}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <Link href="/races/formivarn/formivarnHistory2" className={styles.link}>🦾 Formivarn</Link>
          <Link href="/races/formivarn/formivarnHistory21" className={styles.link}>🐾 Sorynari</Link>
          <Link href="/races/formivarn/formivarnStats" className={styles.link}>Stats</Link>
          <Link href="/races/formivarn/formivarnTech" className={styles.link}>🌌 Kalari</Link>
          <Link href="/races/formivarn/formivarnShips" className={styles.link}>🌌 Telnari</Link>
          <Link href="/races/formivarn/formivarnHistory" className={styles.link}>History</Link>
        </motion.aside>
      </AnimatePresence>

      {/* MAIN CONTENT */}
      <main className={styles.main}>
        {children}
      </main>

      {/* RIGHT SIDEBAR */}
      <AnimatePresence mode="wait">
        <motion.aside
          key={`right-${pathname}`}
          className={styles.navSideRight}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <Link href="/races/formivarn/formivarnHistory2" className={styles.link}>🦾 Formivarn</Link>
          <Link href="/races/formivarn/formivarnHistory21" className={styles.link}>🐾 Sorynari</Link>
          <Link href="/races/formivarn/formivarnStats" className={styles.link}>Stats</Link>
          <Link href="/races/formivarn/formivarnTech" className={styles.link}>🌌 Kalari</Link>
          <Link href="/races/formivarn/formivarnShips" className={styles.link}>🌌 Telnari</Link>
          <Link href="/races/formivarn/formivarnHistory" className={styles.link}>History</Link>
        </motion.aside>
      </AnimatePresence>

    </div>
  );
}
