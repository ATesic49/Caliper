import React from "react";
import styles from "../../../public/css/gallery/slug/page.module.css";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";
const prisma = new PrismaClient();
interface Params {
  params: { slug: string };
}

export default async function page({ params }: Params) {
  const fromSlugToName = (slug: String) => {
    const replaced = slug.replace("-", " ");
    return replaced;
  };
  const product = await prisma.galerija.findFirst({
    where: {
      name: fromSlugToName(params.slug),
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
    throw new Error("Produkt Nije Nadjen");
  }
  return (
    <div className={styles.page}>
      <h1>{product.name}</h1>
      <div className={styles.paragraf}>
        <p>{product.description}</p>
      </div>
      <div className={styles.slika}>
        <Image
          src={"/imgs/pocetna.jpeg"}
          width={1000}
          height={1000}
          alt="ime"
        />
        <div className={styles.boje}>
          <p>Boje:</p>{" "}
          <div className={styles.container}>
            {product.boje.map((boja) => {
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
  );
}
