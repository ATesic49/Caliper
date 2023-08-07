import Image from "next/image";
import styles from "../public/css/pocetna.module.css";
export default function Home() {
  return (
    <main>
      <p className={styles.xlarge}>Xlarge</p>
      <p className={styles.large}>I</p>
      <p className={styles.mid}>Middle</p>
      <p className={styles.small}>Small</p>
    </main>
  );
}
