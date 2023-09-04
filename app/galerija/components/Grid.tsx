import React from 'react'
import styles from "../../../public/css/grid.module.css";
import Link from 'next/link';
import Image from 'next/image';
import prisma from '@/lib/prisma';
const toSlug = (name: String) => {
    const lowername = name.toLocaleLowerCase();
    const slug = lowername.replaceAll(" ", "-");
    return slug;
  };


const Grid= async () => {
    const proizvodi =await prisma.galerija.findMany()
  return (
    <div className={styles.grid}>
    {proizvodi.map(
      (proizvod: {
        name: string | String;
        image: string ;
      }) => {
        return (
          <div className={styles.container} >
            <Link href={`/galerija/${toSlug(proizvod.name)}`}>
              <Image
                src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
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
  )
}
export default Grid