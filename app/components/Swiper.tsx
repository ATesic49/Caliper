"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import styles from "../../public/css/swiper.module.css";
import "node_modules/swiper/swiper-bundle.min.css";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
export default function Swipper() {
  return (
    <div className={styles.swiper}>
      <Swiper
        //@ts-ignore
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide className={styles.slide}>
          <Image
            src="/imgs/pocetna.jpeg"
            alt="Fotelja"
            width={3840}
            height={2160}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Image
            src="/imgs/pocetna.jpeg"
            alt="Fotelja"
            width={3840}
            height={2160}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Image
            src="/imgs/pocetna.jpeg"
            alt="Fotelja"
            width={3840}
            height={2160}
          />
        </SwiperSlide>
      </Swiper>
      <h1> Dobro dosli u najbolje mesto za namestaj u Srbji</h1>
      <Link href="/">Detalnije</Link>
    </div>
  );
}
