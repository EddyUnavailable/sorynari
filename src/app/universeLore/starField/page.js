import styles from '../../styles/universeLore.module.css';
export default function UniverseLore() {
  return (
    <main className={styles.container}>
      <div className={styles.starfield}>
        <div className={styles.stars}></div>
        <div className={styles.stars2}></div>
        <div className={styles.stars3}></div>
      </div>
      
      <h1 className={styles.title}>Witten Axisum Channels (WAC) Rules</h1>
      <ol className={styles.rulesList}>
        {/* your list items */}
      </ol>
    </main>
  );
}
