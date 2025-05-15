import Link from 'next/link';
import styles from './styles/layout.module.css';
import "./globals.css";

export const metadata = {
  title: 'Galactic Lore Archive',
  description: 'A universe of stories and civilizations.',
};

export default function layout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <div className={styles.container}>
          <header className={styles.header}>
            <nav className={styles.nav}>
              <Link href="/" className={styles.link}>🏠 Home</Link>
              <Link href="/universeLore" className={styles.link}>🌌 Universal Lore</Link>
              <Link href="/hyperspaceNotes" className={styles.link}>🌌 Todo</Link>
              <Link href="/storyIdeas" className={styles.link}>🌌 Story Ideas</Link>
              <Link href="/races" className={styles.link}>🌌 Races</Link>
              <Link href="/storyRules" className={styles.link}>🌌 Story Ruless</Link>
              <Link href="/chapterOne" className={styles.link}>🌌 The Story</Link>
              <Link href="/starTable" className={styles.link}>🌌 Star Types</Link>
              <Link href="/planetTypes" className={styles.link}>🌌 Planets</Link>
            </nav>
          </header>
          <main className={styles.main}>{children}</main>
          </div>
      </body>
    </html>
  );
}
