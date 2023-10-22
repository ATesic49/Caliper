import Image from "next/image";
import React from "react";

import styles from "../../../public/css/dizajnerske-rucice/[slug]/page.module.css";
import rucicadva from "../../../public/imgs/rucice/rucica.jpg";
import Swiperrr from "./components/Swiperrr";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import RucicaMaterijal from "./components/RucicaMaterijal";
import EditDelete from "./components/EditDelete";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import Opis from "./components/Opis";

export const dynamic = "force-dynamic";

interface Params {
  params: { slug: string };
}
export default async function page({ params }: Params) {
  const fromSlugToName = (slug: String) => {
    const replaced = slug.replaceAll("-", " ");
    return replaced;
  };
  const product = await prisma.rucice.findFirst({
    where: {
      name: fromSlugToName(params.slug.toLowerCase()),
    },
    include: {
      rucicaMaterijal: {
        include: {
          materijal: true,
        },
      },
    },
  });
  const materijali = await prisma.materijal.findMany({});
  if (!product) {
    notFound();
  }

  return (
    <div>
      <EditDelete materijali={materijali} product={product} />
      <div className={styles.naslov}>
        <h1 style={{ textTransform: "capitalize" }}>{product.name}</h1>
      </div>
      <Swiperrr />
      <div className={styles.ispod}>
        <div className={styles.text}>
          <Opis opis={product.opis} />
        </div>

        <div className={styles.tabla}>
          <ul>
            <li>
              <strong>Ime</strong> <span>{product.name}</span>
            </li>
            <li>
              <strong>Model</strong>
              {product.model}
            </li>
            <RucicaMaterijal ruciceMaterijal={product.rucicaMaterijal} />
          </ul>
          <div className={styles.button}>
            <button>Poruci.</button>
          </div>
        </div>
      </div>
    </div>
  );
}
