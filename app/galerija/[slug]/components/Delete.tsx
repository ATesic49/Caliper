'use client'
import React, { useState } from 'react'
import trash from '@/public/svgs/Trash.svg'
import Image from 'next/image'
import styles from '@/public/css/gallery/slug/components/delete.module.css'
import axios from 'axios'
import { useRouter } from 'next/navigation'
interface Product{
  name: string;
  image: string;
  description: string;
  boje: string[];
  id: number;
}


export default function Delete({product}:{product:Product}) {
  const router = useRouter()

  const [modal, setModal] = useState(styles.mNo)
  const [status, setStatus] = useState('')
  
const deleteData =async (product:Product)=>{

  console.log(product)
  try{
    const res = await axios.post('/api/galerija/delete',{id:product.id})
    setStatus('Sve je proslo kako treba &#128513;')
    console.log(res)
    setTimeout(()=>{
      let i =5
      const reditectErval = setInterval(()=>{
        if(i==0){
            
          setStatus('Prebacivanje...')
          clearInterval(reditectErval)
          return router.push('/galerija')

        }
        setStatus(`Prebacujem za ${i}s`)
        i--
      },1000)
    },2500)
  }catch(e){
console.log(e)
setStatus('Negde je doslo do greske &#128546;')
  }
}
  return (
    <>  
    <div className={styles.delete} onClick={()=>{

      setModal(styles.mYes)
      setStatus('')
      
    }  
    }>
        <Image src={trash} alt='Izbrisi'></Image>
        <h4>Izbrisi</h4>
    </div>
    <div className={[modal,styles.modal].join(' ')}>
      <h3>Da li ste sigurni da zelite da izbrisete ovaj fajl?</h3>
      <h3 style={{marginInline:'auto',color:'var(--font-color-secondary)',fontSize:'1rem'}} dangerouslySetInnerHTML={{__html:status }}></h3>
      <button
      onClick={()=>{


        
        setStatus('loading...')
        deleteData(product)
      }
        
      }
      >Izbrisi</button>
    </div>
    <div
    onClick={()=>{
  setModal(styles.mNo)
      
    }
    }
    className={[modal,styles.outlay].join(' ')}
    ></div>
    </>
  )
}
