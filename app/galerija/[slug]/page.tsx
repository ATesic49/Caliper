import React from "react";
import styles from "../../../public/css/gallery/slug/page.module.css";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import { notFound } from "next/navigation";
import Edit from "./components/Edit";
import Delete from "./components/Delete";
const prisma = new PrismaClient();



export const dynamic ='force-dynamic'
interface Params {
  params: { slug: string };
}

export default async function page({ params }: Params) {
  const fromSlugToName = (slug: String) => {
    const replaced = slug.replaceAll("-", " ");
    return replaced;
  };
  console.log(fromSlugToName(params.slug),'sluggg')
  const product = await prisma.galerija.findFirst({
    where: {
      name: fromSlugToName(params.slug.toLowerCase()),
    },
    select: {
      id: true,
      name: true,
      image: true,
      description: true,
      boje: true,
    },
  });
  if (!product) {
    notFound();
  }
  return (
    <>
    <Edit product={product}/>
    <Delete product={product}/>

    <div className={styles.page}>
      <h1>{product.name}</h1>
      <div className={styles.paragraf}>
        <p>{product.description}</p>
      </div>
      <div className={styles.slika}>
        <Image
          src={`${product.image}`}
          width={1000}
          height={1000}
          alt="ime"
        />
        <div className={styles.boje}>
          <p>Boje:</p>{" "}
          <div className={styles.container}>
            {product.boje.map((boja: string) => {
              return (
                <div>
                  <p>{boja}</p> <span></span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
