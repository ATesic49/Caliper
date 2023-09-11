"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../../../public/css/grid.module.css";
import axios from "axios";
export default function New({SetStatus}:{SetStatus: React.Dispatch<React.SetStateAction<string>>}) {
  const [state, SetState] = useState(styles.not);
  const [name, setName] = useState<string>("name");
  const [description, setDescription] = useState<string>("name");
  const [boje, setBoje] = useState<string[]>(['plava','crvena']);
  const [image, SetImage] = useState<string>('/');
  const [file,SetFile]=useState<File>()

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

        const finalRes = await axios.post("/api/galerija/create", {
          name:name.toLowerCase(),
          description,
          boje,
          image:res.secure_url
        });
        console.log(finalRes)
        if(finalRes.status===200){
          SetStatus('Sve je proslo kako treba &#128515;')
        }else{
        }
      }






     
    } catch (e: any) {
      console.error(e);
      SetStatus('Negde je doslo do greske &#128546;')

    }
  };
  return (
    <>
      <div
      
      onClick={() => SetState(styles.yes)}
      style={{aspectRatio:1}} className={styles.createNew}>
        <p >+</p>
      </div>
      <form onSubmit={onSubmit}>
        <div className={[styles.modal, state].join(" ")}>


          <h3>Unesite podatke proizvoda:</h3>
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
                setBoje(selectedValues);
              }}
            >
              <option value={"plavaBojaNamestaj"}>Plava</option>
              <option value={"crvenaBojaNamestaj"}>Crvena</option>
              <option value={"rozeBojaNamestaj"}>Roze</option>
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
