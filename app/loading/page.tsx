import Image from "next/image";
import styles from "../../public/css/loading.module.css";
export default function loading() {
  return (
    <div className={styles.loading}>
      <Image src={"/svgs/logo.svg"} alt="Loading" width={500} height={500} />
      <h2>Loading...</h2>
    </div>
  );
}
