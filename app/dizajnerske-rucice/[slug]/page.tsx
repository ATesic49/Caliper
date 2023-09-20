import Image from 'next/image'
import React from 'react'


import styles from '../../../public/css/dizajnerske-rucice/[slug]/page.module.css'
import rucicadva from '../../../public/imgs/rucice/rucica.jpg'
import Swiperrr from './components/Swiperrr'
import prisma from '@/lib/prisma'
import { notFound } from "next/navigation";
import RucicaMaterijal from './components/RucicaMaterijal'


export const dynamic ='force-dynamic'

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
    include:{
      rucicaMaterijal:{
        include:{
          materijal:true
        }
      }
    }
  });
  if (!product) {
    notFound()
  }
  console.log(product)
  console.log(product.rucicaMaterijal[0].materijal)
  return (
    <div>
      <div className={styles.naslov}>
        <h1 style={{textTransform:'capitalize'}}>{product.name}</h1>
      </div>
<Swiperrr/>
      <div className={styles.ispod}>


      <div className={styles.text}>
        <p>

      <b>{product.opis}</b>
        </p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, esse nesciunt, vel praesentium facere repudiandae minima, modi dignissimos voluptate ipsum deleniti quis quia dolorum delectus quam numquam repellat nisi vitae veniam ab ad ipsa blanditiis maiores. Ducimus sequi eos cupiditate ut labore excepturi iusto nostrum nemo repudiandae accusamus natus praesentium quidem quis aut, nulla cum harum, consequatur consequuntur cumque a ad perspiciatis? Nemo cum aliquam corrupti, minus harum obcaecati perferendis omnis architecto asperiores commodi vitae reiciendis nostrum quis, corporis maxime facere labore numquam cumque blanditiis neque libero voluptate unde. Explicabo perspiciatis officiis consequatur suscipit odit minus consequuntur ab dignissimos non!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora quis aliquam optio minus reprehenderit fugit autem libero numquam provident nostrum?</p>
      </div>
      <div className={styles.tabla}>

        <ul >
          <li><strong>Ime</strong> <span>{product.name}</span></li>
          <li><strong>Model</strong>{product.model}</li>
          <RucicaMaterijal ruciceMaterijal={product.rucicaMaterijal}/>
        </ul>
        <div className={styles.button}>

          <button>Poruci.</button>
        </div>
      </div>
    </div> 
      </div>
  )
}
