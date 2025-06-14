import styles from '@/styles/universeLore.module.css';
export default function UniverseLore() {
  return (
    <div className={styles.body}>
      <div className={styles.space}>
        <div className={`${styles.stars} ${styles.stars1}`}></div>
        <div className={`${styles.stars} ${styles.stars2}`}></div>
        <div className={`${styles.stars} ${styles.stars3}`}></div>
        <div className={`${styles.stars} ${styles.stars4}`}></div>
        <div className={`${styles.stars} ${styles.stars5}`}></div>
        <h1 className={styles.title}>
          <span className={styles.titleFirstLine}>Hello</span>
          <br />
          World
        </h1>
      </div>
    </div>
  );
}