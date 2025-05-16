// Layout nav on sides only Formivarn 3rd layout


import React from 'react'
import Link from 'next/link';
import styles from '../../styles/layout.module.css';


export default function FormivarnLayout({ children }) {
  return (
    <>
      <div className={styles.racesContainersides}>
        
          <aside className={styles.navSideLeft}>
            <Link href="/races/formivarn/formivarnHistory2" className={styles.link}>🦾 Formivarn</Link>
            <Link href="/races/formivarn/formivarnHistory21" className={styles.link}>🐾 Sorynari</Link>
            <Link href="/races/formivarn/formivarnStats" className={styles.link}>Stats</Link>
            <Link href="/races/formivarn/formivarnTech" className={styles.link}>🌌 Kalari</Link>
            <Link href="/races/formivarn/formivarnShips" className={styles.link}>🌌 Telnari</Link>
            <Link href="/races/formivarn/formivarnHistory" className={styles.link}>History</Link>
          </aside>

          <main className={styles.main}>
          {children}
          </main>


          <aside className={styles.navSideRight}>
            <Link href="/races/formivarn/formivarnHistory2" className={styles.link}>🦾 Formivarn</Link>
            <Link href="/races/formivarn/formivarnHistory21" className={styles.link}>🐾 Sorynari</Link>
            <Link href="/races/formivarn/formivarnStats" className={styles.link}>Stats</Link>
            <Link href="/races/formivarn/formivarnTech" className={styles.link}>🌌 Kalari</Link>
            <Link href="/races/formivarn/formivarnShips" className={styles.link}>🌌 Telnari</Link>
            <Link href="/races/formivarn/formivarnHistory" className={styles.link}>History</Link>
          </aside>
      
        
      </div>
    </>
  );
}
