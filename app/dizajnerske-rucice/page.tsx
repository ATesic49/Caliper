'use client'
import Image from 'next/image'
import styles from '../../public/css/grid.module.css'
import Link from 'next/link'
export const dynamic ='force-dynamic'
import rucica from '../../public/imgs/rucice/rucica.jpg'
import rucicadva from '../../public/imgs/rucice/rucicadva.jpg'
import New from './components/New'

export default function page() {
  return (
    <>    <div className={styles.predGrid}>
    <h1>Dizajnerske ručice</h1>
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


  <div className={styles.rGrid}>


    <div className={styles.kartica}>
        <Image className={styles.glavnaSlika} src={rucicadva}
        alt='rucica'></Image>
        <div className={styles.ispod}>
          <h2>APRA 0583</h2>
          <div className={styles.opcije}>
            <div className={styles.boje}><h3>Boje:</h3> <div className={styles.colorContainer} > 
            <div></div>
             <div></div>
               </div></div>
            <div className={styles.boje}> <h3>Dizajnerske Rucice:</h3> <select name="dizajnerske rucice" id="">
              <option value="070">70x37mm</option>
              <option value='1178'>1200mm</option>
              </select></div> 
          </div>
        </div>
        <div className={styles.button}>

        <Link href={'/dizajnerske-rucice/slug'}
     
        >

          Pogledaj Vise.
        </Link>
          </div>
    </div>

    
    <div className={styles.kartica}>
        <Image className={styles.glavnaSlika} src={rucica}
        width={500}
        height={1000}
        quality={100}
        alt='rucica'></Image>
        <div className={styles.ispod}>
          <h2>Naslov</h2>
          <div className={styles.opcije}>
            <div className={styles.boje}><h3>Boje:</h3> <div className={styles.colorContainer} > 
            <div></div>
             <div></div>
               </div></div>
            <div className={styles.boje}> <h3>Dizajnerske Rucice:</h3> <select name="dizajnerske rucice" id="">
              <option value="070">70x37mm</option>
              <option value='1178'>1200mm</option>
              </select></div> 
          </div>
        </div>
        <div className={styles.button}>

        <Link href={'/dizajnerske-rucice/slug'}
       
        >

          Pogledaj Vise.
        </Link>
          </div>
    </div>
  </div>
    <New/>  
   
    </>
  )
}
