"use client";
import { Ubuntu } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Router from "next/navigation";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "../../public/css/navbar.module.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
});
export default function Navbar() {
  const pathname = usePathname();
  const [upGallery, SetUpGallery] = useState(styles.down);
  const [upShop, SetUpShop] = useState(styles.down);
  const [options, SetOptions] = useState(styles.notSlide);
  useEffect(() => {
    SetUpGallery(styles.down);
    SetUpShop(styles.down);
  }, [pathname]);

  return (
    <div className={[styles.nav, ubuntu.className].join(" ")}>
      <div className={styles.options}>
        <Image
          src="/svgs/options.svg"
          width={20}
          height={20}
          alt="options"
          onClick={() => {
            if (options === styles.notSlide) SetOptions(styles.slide);
            else SetOptions(styles.notSlide);
          }}
        ></Image>
      </div>
      <Link href="/" className={styles.logo}>
        <Image src="/svgs/logo.svg" alt="Caliper" width={20} height={1}></Image>
      </Link>
      <nav>
        <ul className={options}>
          <li>
            <Link href="/o-nama">O Nama</Link>
          </li>
          <li>
            <Link href="/galerija">Galerija</Link>
            <Image
              className={upGallery}
              src="/svgs/down.svg"
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
                <Link href="/galerija" onClick={() => {}}>
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
                <Link href="">
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
            <Link href="/o-nama">Dizajnerske Rucice</Link>
            <Image
              className={upShop}
              src="/svgs/down.svg"
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
                <Link href="/fotelje" onClick={() => {}}>
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
            <Link href="">Kontakt</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.buttons}>
        <a href="">Web Shop</a>
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
