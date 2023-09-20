"use client";
import Image from "next/image";
import React, { useReducer, useState } from "react";
import styles from "../../../public/css/dizajnerske-rucice/new.module.css";
import axios from "axios";
import { Interface } from "readline";

interface RucicaMaterijal  {
cena:number,
materijal:String
}

export default function New({proizvodi,materijali}:
  { proizvodi: ({
  rucicaMaterijal: ({
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
  })[];
} & {
    id: number;
    image: string;
    name: string;
    opis: string;
    model: number;
    created_at: Date;
    updated_at: Date;
    slug: string;
    dimenzije: string;
})[],materijali: {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  description: string;
  hex: string;
}[]}) {
  const [state, SetState] = useState(styles.not);
  const [name, setName] = useState<string>("name");
  const [description, setDescription] = useState<string>("names");
  const [file,SetFile]=useState<File>()
  const [model, setModel] = useState<number>(5580);
  const [materijal,setMaterijal] = useState<RucicaMaterijal[]>([])
  const [materijalCena,setMaterijalCena] =useState<number>(1)
  const [materijalId,setMaterijalId] =useState<String>('Zlatna')
  const [dimenzije,setDimenzije] = useState('a')
  const [materijalModal,setMaterijalModal] = useState(styles.not)  
  const [_, forceUpdate] = useReducer(x => x + 1, 0);
console.log(materijali)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();



 
    try {
      console.log(name);
      console.log("data");
      const formData = new FormData()
      if(file){
        formData.append('file',file)
        formData.append('upload_preset','Caliper')
        const res = await fetch('https://api.cloudinary.com/v1_1/dzkq4y5z3/image/upload',{
          method:'POST',
          body:formData
        }).then(r=>r.json())



        const finalRes = await axios.post("api/rucice/create", {
          name,
          opis:description,
          materijal,
          model,
          dimenzije,
          image:res.secure_url
        });
        console.log(finalRes)
      }






     
    } catch (e: any) {
      console.log(e);
    }
  };
  return (
    <>
      <div className={styles.createNew}>
        <p onClick={() => SetState(styles.yes)}>+</p>
      </div>
      <form onSubmit={onSubmit}>
        <div className={[styles.modal, state].join(" ")}>
          <h3>Unesite podatke proizvoda:   </h3>
         
          <div>
            <label htmlFor="name">Ime:</label>

            <input
              minLength={2}
              type="text"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="model">Model:</label>

            <input
              type="number"
              name="model"
              onChange={(e) => {
                setModel(Number(e.target.value));
              }}
            />
          </div>
          <div>
            <label htmlFor="name">Dimenzije:</label>

            <input
              minLength={2}
              type="text"
              name="name"
              onChange={(e) => {
                setDimenzije(e.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="file">Izaberi sliku:</label>
            <input
              type="file"
              name="file"
              onChange={(e) => {
                SetFile(e.target.files?.[0]);
              }}
            />
          </div>

          <div>
            <label htmlFor="deskripcija">Deskripcija:</label>

            <textarea
              name="deskripcija"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
          <div>
            {/* <label htmlFor="boje">Izaberi Materijal i Cenu:</label> */}

            {/* <select
              multiple
              name="boje"
              id=""
              onChange={(e) => {
                const selectedValues = Array.from(e.target.options)
                  .filter((o) => o.selected)
                  .map((o) => o.value);
                console.log(selectedValues.toString().split(","));
                console.log(e.target.options[0].value);
         

              }}
            >
              <option value={3}>Zuto</option>
              <option value={1}>Crvena</option>
              <option value={2}>Roze</option>
            </select> */}
            <div className={styles.plus} onClick={()=>setMaterijalModal(styles.materijalModal)}>Izaberi Materijal I Cenu:</div>
       
          </div>
          <div className={styles.doleSkroz}>
            <button
              onClick={() => {
                SetState(styles.not);
              }}
            >
              Cancle
            </button>
            <button
              type="submit"
              onClick={() => {
                SetState(styles.not);
              }}
            >
              Save changes
            </button>
          </div>
        </div>
      </form>
      <div
        className={[styles.outlay, state].join(" ")}
        onClick={() => {
          SetState(styles.not);
        }}
      ></div>
           <div className={materijalModal}>
              <h3>

Unesi Odgovarajucu cenu i materijal:
              </h3>
{materijal.map(p=>{
            return(
              <div>
                <div> 
                <p>{p.materijal.split('-')[0]}</p>
                <p>{p.cena}rsd</p>
                </div>
                
                <button onClick={()=>{
                  
                  function arrayRemove(arr:RucicaMaterijal[], value:RucicaMaterijal) {
                    
                    return arr.filter( (geeks)=> {
                      return geeks.materijal !== value.materijal
                    });
                  }
                  const result = arrayRemove(materijal,{cena:p.cena,materijal:p.materijal})       
                  setMaterijal(result)
                  forceUpdate()
                }}>Delete.</button>
              </div>
            )
          })}
              <div>
              <select name="materijal" onChange={(e)=>{
                setMaterijalId(e.target.value)
              }}>
              {materijali.map(materijal=>{
  return(

   <option value={`${materijal.name}-${materijal.id}`} key={materijal.id}>{materijal.name}</option>
  )
})}
              </select> 
              <input type="number" placeholder="Cena" onChange={(e)=>{
                setMaterijalCena(Number(e.target.value))
              }}/>  
             
              <button onClick={()=>{
                // if (materijal.includes({materijal:materijalId,cena:materijalCena})) {
                //   // materijal.push({cena:materijalCena,materijal:materijalId})
                //   setMaterijal([{cena:materijalCena,materijal:materijalId}])
                // }else(
                //   setMaterijal([])
                // )
                if(materijal.find(e=>{
                  if(e.materijal ===  materijalId){
                    return true
                  }
                })){
                  console.log('Materijal',materijal)

                }else{

                  materijal.push({cena:materijalCena,materijal:materijalId})
                }





                forceUpdate()
              }}>Sacuvaj.</button>
              </div>
              <div className={styles.close}>
                <button onClick={()=>{
                  setMaterijalModal(styles.not)
                }}>Close.</button>
              </div>
            </div>
    </>
  );
}
