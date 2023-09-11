import Image from 'next/image'
import React from 'react'
import styles from '../../../public/css/dizajnerske-rucice/[slug]/page.module.css'
import rucicadva from '../../../public/imgs/rucice/rucica.jpg'
import Swiperrr from './components/Swiperrr'
export default function page


() {
  return (
    <div>
      <div className={styles.naslov}>
        <h1>ARPA 0530</h1>
      </div>
<Swiperrr/>
      <div className={styles.ispod}>


      <div className={styles.text}>
        <p>

      <b>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime repudiandae minima at repellendus, ipsam obcaecati distinctio eveniet quod deserunt vero doloremque. Dicta facere esse eius dolorem dignissimos sequi tenetur eaque.</b>
        </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus explicabo saepe incidunt architecto a vitae vero repudiandae, veniam, est fugit possimus adipisci? Ab minus, veniam quam excepturi iste eveniet iure dicta, consequuntur labore quaerat perspiciatis nisi tempore officiis molestiae officia doloribus fuga molestias culpa nemo rem totam. Aliquid, facere amet?</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, alias rem omnis culpa quod minus maiores vero velit recusandae praesentium saepe. Itaque voluptates dolor recusandae minus placeat nesciunt odio ipsum.</p>
      </div>
      <div className={styles.tabla}>

        <ul >
          <li><strong>Ime</strong> <span>ARPA</span></li>
          <li><strong>Model</strong>5888</li>
          <li><strong>Materijal</strong><span>Brushed Black </span></li>
          <li> <strong>Cena</strong>  <span>300e</span> </li>
        </ul>
        <div className={styles.button}>

          <button>Poruci.</button>
        </div>
      </div>
    </div> 
      </div>
  )
}
