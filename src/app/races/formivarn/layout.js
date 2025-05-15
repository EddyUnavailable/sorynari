import React from 'react'
import Link from 'next/link';
import styles from '../../styles/formivarn.module.css';

export default function formivarnLayout({ children }) {
  return (
    <>
      <div className={styles.racesContainer}>
        <div className={styles.header}>
          <aside className={styles.nav}>
            <Link href="/races/formivarn/formivarnHistory2" className={styles.link}>🦾 Formivarn</Link>
            <Link href="/races/formivarn/formivarnHistory21" className={styles.link}>🐾 Sorynari</Link>
            <Link href="/races/formivarn/formivarnStats" className={styles.link}>Stats</Link>
            <Link href="/races/formivarn/formivarnTech" className={styles.link}>🌌 Kalari</Link>
            <Link href="/races/formivarn/formivarnShips" className={styles.link}>🌌 Telnari</Link>
            <Link href="/races/formivarn/formivarnHistory" className={styles.link}>History</Link>
          </aside>
        </div>

        
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </>
  );
}
