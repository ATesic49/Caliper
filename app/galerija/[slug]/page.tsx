import React from "react";
import styles from "../../../public/css/gallery/slug/page.module.css";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default function page() {
  return (
    <div className={styles.page}>
      <h1>NASLOV I IME</h1>
    </div>
  );
}
