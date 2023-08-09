import React from "react";
import styles from "../../public/css/footer.module.css";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>Made by Caliper © {new Date().getFullYear()} </p>
    </div>
  );
}
