import GenerateSolarSystem from '@/components/GenerateSolarSystem';
import styles from '@/styles/galaxyBodies.module.css';


export default function GalaxyBodies() {
  return (
    <div>
        <h3 className={styles.categoryTitle}>Building a Galaxy</h3>
            <p className={styles.paragraph}>
            Build a galaxy by placing stars using type, luminosity, and metallicity. High-luminosity O and B-type stars (10^4–10^6 solar units) go in spiral arms, triggering star formation via supernovae. Low-luminosity M and K-type stars (0.001–0.6 solar units) with solar metallicity ([Fe/H] ~0.0) fill the disk, hosting planets in tight habitable zones. Brown dwarfs (L, T, Y) scatter across regions, while White Dwarfs, Neutron Stars, and Black Holes mark past evolution. The Initial Mass Function sets ~76.5% M-type and &lt;0.01% O-type stars. Place planets around metal-rich disk stars, leaving halo stars ([Fe/H] &lt;-1.0) mostly planet-free.
            </p>
            <GenerateSolarSystem />;
    </div>
  );
}
