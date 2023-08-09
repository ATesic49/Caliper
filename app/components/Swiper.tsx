"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../public/css/swiper.module.css";
import "node_modules/swiper/swiper-bundle.min.css";
import Image from "next/image";
import Link from "next/link";

export default function Swipper() {
  return (
    <div className={styles.swiper}>
      {}
      <Swiper
        //@ts-ignore
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
      >
        <SwiperSlide className={styles.slide}>
          <Image
            loading="lazy"
            src="/imgs/pocetna.jpeg"
            alt="Fotelja"
            width={3840}
            height={2160}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Image
            loading="lazy"
            src="/imgs/pocetna.jpeg"
            alt="Fotelja"
            width={3840}
            height={2160}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Image
            loading="lazy"
            src="/imgs/pocetna.jpeg"
            alt="Fotelja"
            width={3840}
            height={2160}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
