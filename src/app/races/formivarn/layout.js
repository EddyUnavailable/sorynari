import React from 'react'
import Link from 'next/link';
import styles from '../../styles/formivarn.module.css';

export default function formivarnLayout({ children }) {
  return (
    <>
      <div className={styles.racesContainer}>
        <div className={styles.header}>
          <nav className={styles.nav}>
            <Link href="/formivarnHistory" className={styles.link}>🦾 Formivarn</Link>
            <Link href="/formivarnHistory" className={styles.link}>🐾 Sorynari</Link>
            <Link href="/formivarnHistory" className={styles.link}>👤 Humans</Link>
            <Link href="/formivarnHistory" className={styles.link}>🌌 Kalari</Link>
            <Link href="/formivarnHistory" className={styles.link}>🌌 Telnari</Link>
            <Link href="/formivarnHistory" className={styles.link}>🌌 History</Link>
          </nav>
        </div>

        
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </>
  );
}
