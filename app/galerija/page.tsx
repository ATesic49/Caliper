import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../public/css/grid.module.css";
import Grid from "./components/Grid";
import New from "./components/New";
export const dynamic ='force-dynamic'


async function getProizvodi() {
  const res = await fetch('http://localhost:3000/api/galerija/db',{
    cache:'no-store'
  })
  if(!res){
    console.log('error')
  }
  const proizvodi = await res.json()
  console.log(proizvodi)
  return proizvodi
}

const Galerija = async function () {
  // const NewDynamic = dynamic(() => import("./components/New"));
  // const GridDynamic = dynamic(()=>import('./components/Grid'))
  console.log('rs')
  // console.log(proizvodi)
  
  // const proizvod = await prisma.galerija.create({
  //   data: {
  //     name: "novo",
  //     image: "/imgs/pocetna.jpeg",
  //     description: "Ovo je jako luda zurka",
  //     boje: ["crn cfca", "plava"],
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
      <Grid/>
      <New />
    </div>
  );
};
export default Galerija;

