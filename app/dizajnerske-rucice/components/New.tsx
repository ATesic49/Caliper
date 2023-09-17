"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../../../public/css/dizajnerske-rucice/new.module.css";
import axios from "axios";
import { Interface } from "readline";

interface RucicaMaterijal  {
cena:number,
materijal:number
}

export default function New() {
  const [state, SetState] = useState(styles.not);
  const [name, setName] = useState<string>("name");
  const [description, setDescription] = useState<string>("names");
  const [image, SetImage] = useState<string>('/');
  const [file,SetFile]=useState<File>()
  const [model, setModel] = useState<number>(5580);
  const [materijal_id,setMaterijal_id] = useState<RucicaMaterijal[]>([])
  const [dimenzije,setDimenzije] = useState('a')


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


        await SetImage(res.secure_url)

        const finalRes = await axios.post("api/rucice/create", {
          name,
          opis:description,
          // materijal_id,
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
            <label htmlFor="boje">Izaberi boju:</label>

            <select
              multiple
              name="boje"
              id=""
              onChange={(e) => {
                const selectedValues = Array.from(e.target.options)
                  .filter((o) => o.selected)
                  .map((o) => o.value);
                console.log(selectedValues.toString().split(","));
                console.log(e.target.options[0].value);
                const realArray:Number[] = []
                const numberArray = selectedValues.map(e=>{
                  const number = parseInt(e)
                  realArray.push(number)
                  console.log(realArray)
                })

              }}
            >
              <option value={"3"}>Zuto</option>
              <option value={"1"}>Crvena</option>
              <option value={"2"}>Roze</option>
            </select>
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
    </>
  );
}
