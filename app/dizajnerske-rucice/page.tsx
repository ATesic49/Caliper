import Image from 'next/image'
import styles from '../../public/css/grid.module.css'
import Link from 'next/link'
export const dynamic ='force-dynamic'
import rucica from '../../public/imgs/rucice/rucica.jpg'
import rucicadva from '../../public/imgs/rucice/rucicadva.jpg'
import New from './components/New'
import prisma from '@/lib/prisma'
import NewContainer from '../galerija/components/NewContainer'

export default  async function page() {

const proizvodi = await prisma.rucice.findMany({
  include:{
    rucicaMaterijal:{
      include:{
        materijal:true
      }
    }
  }
})
const materiali=await prisma.materijal.findMany({})


console.log(proizvodi)





  return (
    <>  
    <div className={styles.predGrid}>
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


    

    {proizvodi.map(proizvod=>{
      return(
        
        
   
   <div className={styles.kartica} key={proizvod.id}>
        <Image className={styles.glavnaSlika} src={proizvod.image}
        width={500}
        height={1000}
        quality={100}
        alt='rucica'></Image>
        <div className={styles.ispod}>
          <h2>{proizvod.name}</h2>
          <div className={styles.opcije}>
            <div className={styles.boje}><h3>Boje:</h3> <div className={styles.colorContainer} > 
            <div></div>
             <div></div>
               </div></div>
            <div className={styles.boje}> <h3>Dimenzije</h3> <select name="dizajnerske rucice" id="">
              <option value="070">{proizvod.dimenzije}</option>
              <option value='1178'>1200mm</option>
              </select></div> 
          </div>
        </div>
        <div className={styles.button}>

        <Link href={`/dizajnerske-rucice/${proizvod.slug}`}
       
        >

          Pogledaj Vise.
        </Link>
          </div>
    </div>     

)
    })}




  </div>
    <New proizvodi={proizvodi} materijali={materiali}/>  
  
    </>
  )
}
