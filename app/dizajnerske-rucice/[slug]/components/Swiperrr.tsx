'use client'
import React from 'react'
import { Navigation } from 'swiper/modules';
import { Swiper,SwiperSlide } from 'swiper/react';
import rucicadva from '@/public/imgs/rucice/rucicadva.jpg'
import rucica from '@/public/imgs/rucice/rucica.jpg'
import rucicatri from '@/public/imgs/rucice/rucicatri.jpg'
import Image from 'next/image';
import styles from '../../../../public/css/dizajnerske-rucice/[slug]/page.module.css'

import { EffectCube, Pagination ,Autoplay,} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/navigation';


export default function Swiperrr() {
  return (
    <div style={{marginBlock:'15vh'}}>
    <Swiper navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
    modules={[EffectCube,Navigation,Autoplay]} className="mySwiper" loop={true}
     
    style={{width:'80vw', marginBlock:'15vh 0 '}} >

        <SwiperSlide className={styles.slika}> 
               <div className={styles.slika}>
    <Image src={rucicadva} objectPosition="center" alt='as' ></Image>


      </div></SwiperSlide>
      <SwiperSlide> 
               <div className={styles.slika}>
    <Image src={rucicatri} objectPosition="center" alt='as' ></Image>


      </div>
      
      </SwiperSlide>
      <SwiperSlide> 
               <div className={styles.slika}>
    <Image src={rucica} objectPosition="center" alt='as' ></Image>


      </div></SwiperSlide>
      
  
      </Swiper>
      </div>
  )
}
