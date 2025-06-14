// Main Layout
"use client";
import Link from 'next/link';
import styles from '@/styles/layout.module.css';
import "./globals.css";

// export const metadata = {
//   title: 'Galactic Lore Archive',
//   description: 'A universe of stories and civilizations.',
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <div className={styles.container_Root}>
          <header className={styles.header}>
            <div className={styles.button}></div>
            <nav className={styles.navBar}>
              <Link href="/" className={styles.link}>🏠 Home</Link>
              <Link href="/universeLore" className={styles.link}>🌌 Universal Lore</Link>
              <Link href="/hyperspaceNotes" className={styles.link}>🌌 Todo</Link>
              <Link href="/storyIdeas" className={styles.link}>🌌 Story Ideas</Link>
              <Link href="/races" className={styles.link}>🌌 Races</Link>
              <Link href="/storyRules" className={styles.link}>🌌 Story Rules</Link>
              <Link href="/chapterOne" className={styles.link}>🌌 The Story</Link>
              <Link href="/starTable" className={styles.link}>🌌 Star Types</Link>
              <Link href="/planetTypes" className={styles.link}>🌌 Planets</Link>
              <Link href="/spaceTravelCalculator2" className={styles.link}>🌌 Planets</Link>
            </nav>
            <div className={styles.button}></div>
          </header>
          <div className={styles.header2}>
            <nav className={styles.navBar}>
              <Link href="/wittenAxisumChannels" className={styles.link}>WAC</Link>
              <Link href="/" className={styles.link}>X</Link>
              <Link href="/" className={styles.link}>X</Link>
              <Link href="/" className={styles.link}>X</Link>
              <Link href="/species/speciesCreator" className={styles.link}>X</Link>
              <Link href="/species/new" className={styles.link}>X</Link>
              <Link href="/species/newSpeciesForm" className={styles.link}>X</Link>
              <Link href="/species" className={styles.link}>X</Link>
              <Link href="/species/list" className={styles.link}>X</Link>

            </nav>
          </div>
          <div className={styles.main_Container}>
            <div className={styles.sideBarLeft}>
              <p>Left</p>
            </div>
            <main className={styles.main}>
              {children}
            </main>
            <div className={styles.sideBarRight}></div>
          </div>
        </div>
      </body>
    </html>
  );
}
