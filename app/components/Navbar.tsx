"use client";
import { Ubuntu } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Router from "next/navigation";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "../../public/css/navbar.module.css";
import { Galerija } from "@prisma/client";
const toSlug = (name: String) => {
  const lowername = name.toLocaleLowerCase();
  const slug = lowername.replaceAll(" ", "-");
  return slug;
};
interface rucice {
  name: string;
  slug: string;
}
interface galerija {
  name: string;
}
[];
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
});

export default function Navbar({
  rucice,
  galerija,
}: {
  rucice: rucice[];
  galerija: { name: string }[];
}) {
  const pathname = usePathname();
  const [upGallery, SetUpGallery] = useState(styles.down);
  const [upShop, SetUpShop] = useState(styles.down);
  const [options, SetOptions] = useState(styles.notSlide);
  useEffect(() => {
    SetUpGallery(styles.down);
    SetUpShop(styles.down);
  }, [pathname]);
  const groupedGallery = groupByFirstWord(galerija);
  const groupedRucice = groupByFirstWord(rucice);

  console.log(groupedGallery, "grouped gallery");
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
        <Image
          src="/svgs/BetterLogo.svg"
          alt="Caliper"
          width={80}
          height={26}
        ></Image>
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
                e.preventDefault();
                if (upGallery === styles.up) SetUpGallery(styles.down);
                else SetUpGallery(styles.up);
                SetUpShop(styles.down);
              }}
            ></Image>
            <div className={styles.menu}>
              {groupedGallery.map((gallery) => {
                return (
                  <>
                    <div className={styles.container}>
                      <Link href="/galerija" onClick={() => {}}>
                        {" "}
                        <h4 style={{ textTransform: "capitalize" }}>
                          {gallery[0].split(" ")[0]}
                        </h4>{" "}
                      </Link>
                      <ul>
                        {gallery.map((gal) => (
                          <li>
                            <Link href={`/galerija/${toSlug(gal)}`}>{gal}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                );
              })}
            </div>
          </li>
          <li>
            <Link href="/dizajnerske-rucice">Dizajnerske Rucice</Link>
            <Image
              className={upShop}
              src="/svgs/down.svg"
              alt="down"
              width={5}
              height={5}
              onClick={(e) => {
                e.preventDefault();
                if (upShop === styles.up) SetUpShop(styles.down);
                else SetUpShop(styles.up);
                SetUpGallery(styles.down);
              }}
            ></Image>
            <div className={styles.menu}>
              {groupedRucice.map((rucice) => {
                return (
                  <>
                    <div className={styles.container}>
                      <Link href="/fotelje" onClick={() => {}}>
                        {" "}
                        <h4>{rucice[0].split(" ")[0]}</h4>{" "}
                      </Link>
                      <ul>
                        {rucice.map((rucica) => {
                          return (
                            <li>
                              <Link
                                href={`/dizajnerske-rucice/${toSlug(rucica)}`}
                              >
                                {rucica}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </>
                );
              })}
            </div>
          </li>
          <li>
            <Link href="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.buttons}>
        <Link className={styles.webShop} href="/webShop">
          Web Shop
        </Link>
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
function groupByFirstWord(arr: galerija[] | rucice[]): string[][] {
  const result: Record<string, string[]> = {};

  arr.forEach((str) => {
    const firstWord = str.name.split(" ")[0].toLowerCase();

    if (!result[firstWord]) {
      result[firstWord] = [str.name];
    } else {
      result[firstWord].push(str.name);
    }
  });

  return Object.values(result);
}
