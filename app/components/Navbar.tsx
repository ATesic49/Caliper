"use client";
import { Ubuntu } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../../public/css/navbar.module.css";
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
});
export default function Navbar() {
  const [upGallery, SetUpGallery] = useState(styles.down);
  const [upShop, SetUpShop] = useState(styles.down);
  return (
    <div className={[styles.nav, ubuntu.className].join(" ")}>
      <Link href="/" className={styles.logo}>
        <Image src="/imgs/logo.svg" alt="Caliper" width={20} height={1}></Image>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/o-nama">O Nama</Link>
          </li>
          <li>
            <Link href="/usluge">Galerija</Link>
            <Image
              className={upGallery}
              src="/imgs/down.svg"
              alt="down"
              width={5}
              height={5}
              onClick={(e) => {
                console.log(e);
                e.preventDefault();
                if (upGallery === styles.up) SetUpGallery(styles.down);
                else SetUpGallery(styles.up);
                SetUpShop(styles.down);
              }}
            ></Image>
            <div className={styles.menu}>
              <div className={styles.container}>
                <Link href="/fotelje">
                  {" "}
                  <h4>Fotelje</h4>{" "}
                </Link>
                <ul>
                  <li>
                    <Link href="">Fotelja #1</Link>
                  </li>
                  <li>
                    <Link href="">Fotelja #2</Link>
                  </li>
                  <li>
                    <Link href="">Fotelja #3</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.container}>
                <Link href="/fotelje">
                  {" "}
                  <h4>Fotelje</h4>{" "}
                </Link>
                <ul>
                  <li>
                    <Link href="">Fotelja #1</Link>
                  </li>
                  <li>
                    <Link href="">Fotelja #2</Link>
                  </li>
                  <li>
                    <Link href="">Fotelja #3</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.container}>
                <Link href="/fotelje">
                  {" "}
                  <h4>Fotelje</h4>{" "}
                </Link>
                <ul>
                  <li>
                    <Link href="">Fotelja #1</Link>
                  </li>
                  <li>
                    <Link href="">Fotelja #2</Link>
                  </li>
                  <li>
                    <Link href="">Fotelja #3</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.container}>
                <Link href="/fotelje">
                  {" "}
                  <h4>Fotelje</h4>{" "}
                </Link>
                <ul>
                  <li>
                    <Link href="">Fotelja #1</Link>
                  </li>
                  <li>
                    <Link href="">Fotelja #2</Link>
                  </li>
                  <li>
                    <Link href="">Fotelja #3</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.container}>
                <Link href="/fotelje">
                  {" "}
                  <h4>Fotelje</h4>{" "}
                </Link>
                <ul>
                  <li>
                    <Link href="">Fotelja #1</Link>
                  </li>
                  <li>
                    <Link href="">Fotelja #2</Link>
                  </li>
                  <li>
                    <Link href="">Fotelja #3</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.container}>
                <Link href="/fotelje">
                  {" "}
                  <h4>Fotelje</h4>{" "}
                </Link>
                <ul>
                  <li>
                    <Link href="">Fotelja #1</Link>
                  </li>
                  <li>
                    <Link href="">Fotelja #2</Link>
                  </li>
                  <li>
                    <Link href="">Fotelja #3</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <Link href="/o-nama">Web Shop</Link>
            <Image
              className={upShop}
              src="/imgs/down.svg"
              alt="down"
              width={5}
              height={5}
              onClick={(e) => {
                console.log(e);
                e.preventDefault();
                if (upShop === styles.up) SetUpShop(styles.down);
                else SetUpShop(styles.up);
                SetUpGallery(styles.down);
              }}
            ></Image>
            <div className={styles.menu}>
              <div className={styles.container}>
                <Link href="/fotelje">
                  {" "}
                  <h4>Fotelje</h4>{" "}
                </Link>
                <ul>
                  <li>
                    <Link href="">Fotelja #1</Link>
                  </li>
                  <li>
                    <Link href="">Fotelja #2</Link>
                  </li>
                  <li>
                    <Link href="">Fotelja #3</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.container}>
                <Link href="/fotelje">
                  {" "}
                  <h4>Fotelje</h4>{" "}
                </Link>
                <ul>
                  <li>
                    <Link href="">Fotelja #1</Link>
                  </li>
                  <li>
                    <Link href="">Fotelja #2</Link>
                  </li>
                  <li>
                    <Link href="">Fotelja #3</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.container}>
                <Link href="/fotelje">
                  {" "}
                  <h4>Fotelje</h4>{" "}
                </Link>
                <ul>
                  <li>
                    <Link href="">Fotelja #1</Link>
                  </li>
                  <li>
                    <Link href="">Fotelja #2</Link>
                  </li>
                  <li>
                    <Link href="">Fotelja #3</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.container}>
                <Link href="/fotelje">
                  {" "}
                  <h4>Fotelje</h4>{" "}
                </Link>
                <ul>
                  <li>
                    <Link href="">Fotelja #1</Link>
                  </li>
                  <li>
                    <Link href="">Fotelja #2</Link>
                  </li>
                  <li>
                    <Link href="">Fotelja #3</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.container}>
                <Link href="/fotelje">
                  {" "}
                  <h4>Fotelje</h4>{" "}
                </Link>
                <ul>
                  <li>
                    <Link href="">Fotelja #1</Link>
                  </li>
                  <li>
                    <Link href="">Fotelja #2</Link>
                  </li>
                  <li>
                    <Link href="">Fotelja #3</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.container}>
                <Link href="/fotelje">
                  {" "}
                  <h4>Fotelje</h4>{" "}
                </Link>
                <ul>
                  <li>
                    <Link href="">Fotelja #1</Link>
                  </li>
                  <li>
                    <Link href="">Fotelja #2</Link>
                  </li>
                  <li>
                    <Link href="">Fotelja #3</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <Link href="/usluge">Kontakt</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.buttons}>
        <button>Log In</button>
        <button>Sing Up</button>
      </div>
      <div className={styles.logIn}>
        <h2>Uloguj se</h2>
        <label htmlFor="name">Korisničko Ime:</label>
        <input type="text" name="name" />
        <label htmlFor="password">Lozinka:</label>
        <input type="password" name="password" />
        <label htmlFor="tel">Broj Telefona:</label>
        <input type="tel" name="tel" />
        <button>Submit</button>
      </div>
    </div>
  );
}
