import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../public/css/grid.module.css";
import { PrismaClient } from "@prisma/client";
import New from "./components/New";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import dynamic from "next/dynamic";
interface Galerija {
  id: number;
  image: String;
  name: String;
  boje: String[];
}
const prisma = new PrismaClient();
export default async function Galerija() {
  const NewDynamic = dynamic(() => import("./components/New"));

  const proizvodi = await prisma.galerija.findMany({
    select: {
      id: true,
      image: true,
      name: true,
      boje: true,
    },
  });
  const toSlug = (name: String) => {
    const lowername = name.toLocaleLowerCase();
    const slug = lowername.replaceAll(" ", "-");
    return slug;
  };
  // const proizvod = await prisma.galerija.create({
  //   data: {
  //     name: "novo",
  //     image: "/imgs/pocetna.jpeg",
  //     description: "Ovo je jako luda zurka",
  //     boje: ["crna", "plava"],
  //   },
  // });
  return (
    <div className={styles.galerija}>
      <div className={styles.slika}>
        <Image
          src="/imgs/pocetna.jpeg"
          alt=""
          width={3400}
          height={3400}
        ></Image>
        <h1>Najveci Izbor u Srbiji</h1>
      </div>
      <div className={styles.predGrid}>
        <h2>Nasa Galerija</h2>
        <div className={styles.searchBar}>
          <div className={styles.filter}>
            <Image
              src={"/svgs/options.svg"}
              alt="filter"
              width={50}
              height={50}
            ></Image>
          </div>
          <input type="text" placeholder="Stolice, Stolovi, Namestaj..." />
          <Image
            className={styles.search}
            src={"/svgs/search.svg"}
            alt="filter"
            width={50}
            height={50}
          ></Image>
        </div>
      </div>
      <div className={styles.grid}>
        {proizvodi.map(
          (proizvod: {
            name: string | String;
            image: string | StaticImport;
          }) => {
            return (
              <div className={styles.container}>
                <Link href={`/galerija/${toSlug(proizvod.name)}`}>
                  <Image
                    src={proizvod.image}
                    alt="slika"
                    width={300}
                    height={300}
                  ></Image>
                  <h4>{proizvod.name}</h4>
                </Link>
              </div>
            );
          }
        )}
      </div>
      <NewDynamic />
    </div>
  );
}
