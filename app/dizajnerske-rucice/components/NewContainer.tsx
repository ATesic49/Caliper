// import React from 'react'
// import styles from '../../../public/css/grid.module.css'
// import Link from 'next/link'
// import Image from 'next/image'
// import New from './New';

// interface materijali {
//     id: number;
//     name: string;
//     created_at: Date;
//     updated_at: Date;
//     description: string;
//     hex: string;
//   }
// interface proizvodi{
//     id: number;
//     image: string;
//     name: string;
//     opis: string;
//     model: number;
//     created_at: Date;
//     updated_at: Date;
//     slug: string;
//     dimenzije: string;
//     rucicaMaterijal:{
//         materijal: {
//             id: number;
//             name: string;
//             created_at: Date;
//             updated_at: Date;
//             description: string;
//             hex: string;
//         };
//         materijalId:number,
//         rucicaId:number,
//         cena:number
//     }

// }

// export default function NewContainer({proizvodi,materiali}:{proizvodi: ({
//   rucicaMaterijal: ({
//       materijal: {
//           id: number;
//           name: string;
//           created_at: Date;
//           updated_at: Date;
//           description: string;
//           hex: string;
//       };
//   } & {
//       materijalId: number;
//       rucicaId: number;
//       cena: number;
//   })[];
// } & {
//     id: number;
//     image: string;
//     name: string;
//     opis: string;
//     model: number;
//     created_at: Date;
//     updated_at: Date;
//     slug: string;
//     dimenzije: string;
// })[],materiali:materijali[]}) {
//   return (
//     <>
    
    
//   <div className={styles.rGrid}>


    

// {proizvodi.map(proizvod=>{
//   return(
    
    

// <div className={styles.kartica} key={proizvod.id}>
//     <Image className={styles.glavnaSlika} src={proizvod.image}
//     width={500}
//     height={1000}
//     quality={100}
//     alt='rucica'></Image>
//     <div className={styles.ispod}>
//       <h2>{proizvod.name}</h2>
//       <div className={styles.opcije}>
//         <div className={styles.boje}><h3>Boje:</h3> <div className={styles.colorContainer} > 
//         <div></div>
//          <div></div>
//            </div></div>
//         <div className={styles.boje}> <h3>Dimenzije</h3> <select name="dizajnerske rucice" id="">
//           <option value="070">{proizvod.dimenzije}</option>
//           <option value='1178'>1200mm</option>
//           </select></div> 
//       </div>
//     </div>
//     <div className={styles.button}>

//     <Link href={`/dizajnerske-rucice/${proizvod.slug}`}
   
//     >

//       Pogledaj Vise.
//     </Link>
//       </div>
// </div>     

// )
// })}




// </div>
// <New proizvodi={proizvodi} materijali={materiali}/>  

//     </>
//   )
// }
