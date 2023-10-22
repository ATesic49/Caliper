"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../../../../public/css/grid.module.css";
import axios from "axios";
interface Product {
  name: string;
  image: string;
  description: string;
  boje: string[];
  id: number;
}
export default function Edit({ product }: { product: Product }) {
  const [state, SetState] = useState(styles.not);
  const [name, setName] = useState<string>(product.name);
  const [description, setDescription] = useState<string>(product.description);
  const [boje, setBoje] = useState<string[]>(product.boje);
  const [image, SetImage] = useState<string>(product.image);
  const [file, SetFile] = useState<File>();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log(name);
      console.log("data");
      const formData = new FormData();
      if (file) {
        formData.append("file", file);
        formData.append("upload_preset", "Caliper");
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/dzkq4y5z3/image/upload",
          {
            method: "POST",
            body: formData,
          }
        ).then((r) => r.json());

        await SetImage(res.secure_url);

        const finalRes = await axios.post("/api/galerija/edit", {
          name,
          description,
          boje,
          image: res.secure_url,
          id: product.id,
        });
        console.log(finalRes);
      }

      const finalRes = await axios.post("api/galerija/edit", {
        name,
        description,
        boje,
        image,
        id: product.id,
      });
      console.log(finalRes);
    } catch (e: any) {
      console.error(e);
    }
  };
  return (
    <>
      <div className={styles.edit}>
        <Image
          onClick={() => SetState(styles.yes)}
          src="/svgs/edit.svg"
          width={50}
          height={50}
          alt=";"
        ></Image>
        <h5>Izmeni.</h5>
      </div>
      <form onSubmit={onSubmit}>
        <div className={[styles.modal, state].join(" ")}>
          <h3>Izmenite</h3>
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
