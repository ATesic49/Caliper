'use client'
import React, { useState } from 'react'
import styles from '../../../public/css/dizajnerske-rucice/[slug]/page.module.css'

export default function RucicaMaterijal({ruciceMaterijal}:{ruciceMaterijal: ({
    materijal: {
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
        description: string;
        hex: string;
    };
} & {
    materijalId: number;
    rucicaId: number;
    cena: number;
})[]}) {


const [cena,setCena]=useState(ruciceMaterijal[0].cena)
  return (
   <> 
   
   <li><strong>Materijal</strong><span>
    <select onChange={(e)=>{
        setCena(Number(e.target.value))
    }}>
        {ruciceMaterijal.map(materijal=>{
            return(
                <option value={materijal.cena}>{materijal.materijal.name}</option>
            )
        })}
    </select>
     </span></li>
   <li> <strong>Cena</strong>  <span>{cena}rsd</span> </li>
   
   </>
  )
}
