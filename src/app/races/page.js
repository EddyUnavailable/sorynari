import Link from 'next/link';
import styles from '../styles/races.module.css';


export default function Races({ children }) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/races/formivarn" className={styles.link}>🦾 Formivarn</Link>
        <Link href="/races/sorynari" className={styles.link}>🐾 Sorynari</Link>
        <Link href="/races/humans" className={styles.link}>👤 Humans</Link>
        <Link href="/races/kalariLore" className={styles.link}>🌌 Kalari</Link>
        <Link href="/races/telnariLore" className={styles.link}>🌌 Telnari</Link>
        <Link href="/races/futureRaces" className={styles.link}>🌌 Future Races</Link>
      </nav>
      <main className={styles.main}>
        {children}
      </main>
    </>
  );
}
