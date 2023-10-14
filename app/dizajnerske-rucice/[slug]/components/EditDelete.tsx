"use client";
import React, { useEffect, useReducer, useState } from "react";
import styles from "@/public/css/dizajnerske-rucice/[slug]/editDelete.module.css";
import trash from "@/public/svgs/trash.svg";
import { useRouter } from "next/navigation";

import { useContext } from "react";
import Image from "next/image";
import axios from "axios";
import { useHtmlContext } from "next/dist/shared/lib/html-context.shared-runtime";
import AuthContext, { AuthenticationContext } from "@/app/context/context";
interface RucicaMaterijal {
  cena: number;
  materijal: String;
}

interface rucica {
  id: number;
  image: string;
  name: string;
  opis: string;
  model: number;
  created_at: Date;
  updated_at: Date;
  slug: string;
  dimenzije: string;
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
}

export default function EditDelete({
  product,
  materijali,
}: {
  product: rucica;
  materijali: {
    id: number;
    name: string;
    created_at: Date;
    updated_at: Date;
    description: string;
    hex: string;
  }[];
}) {
  const router = useRouter();
  const [state, SetState] = useState(styles.not);
  const [name, setName] = useState<string>(product.name);
  const [description, setDescription] = useState<string>(product.opis);
  const [file, SetFile] = useState<File>();
  const [model, setModel] = useState<number>(product.model);
  const [materijal, setMaterijal] = useState<RucicaMaterijal[]>([]);
  const [materijalCena, setMaterijalCena] = useState<number>(
    product.rucicaMaterijal[0].cena
  );
  const [materijalId, setMaterijalId] = useState<String>(
    `${materijali[0].name}-${materijali[0].id}`
  );
  const [dimenzije, setDimenzije] = useState(product.dimenzije);
  const [materijalModal, setMaterijalModal] = useState(styles.not);
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);
  const [modal, setModal] = useState(styles.mNo);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fromPrismaToState(product.rucicaMaterijal, materijal);
  }, []);

  const deleteData = async (product: rucica) => {
    console.log(product);
    try {
      const res = await axios.post("/api/rucice/delete", {
        id: product.id,
        materijal,
      });
      setStatus("Sve je proslo kako treba &#128513;");
      console.log(res);
      setTimeout(() => {
        let i = 5;
        const reditectErval = setInterval(() => {
          if (i == 0) {
            setStatus("Prebacivanje...");
            clearInterval(reditectErval);
            return router.push("/dizajnerske-rucice");
          }
          setStatus(`Prebacujem za ${i}s`);
          i--;
        }, 1000);
      }, 2500);
    } catch (e) {
      console.log(e);
      setStatus("Negde je doslo do greske &#128546;");
    }
  };

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

        console.log("fetched");

        const finalRes = await axios.post("/api/rucica/edit", {
          name,
          opis: description,
          materijal,
          model,
          dimenzije,
          image: res.secure_url,
          id: product.id,
        });
        console.log(finalRes);
      }

      const finalRes = await axios.post("/api/rucice/edit", {
        name,
        opis: description,
        materijal,
        model,
        dimenzije,
        image: product.image,
        id: product.id,
      });
      console.log(finalRes);
    } catch (e: any) {
      console.log(e);
    }
  };
  const data = useContext(AuthenticationContext);
  console.log(data, "OVAJ DATA");
  return (
    <div className={styles.container}>
      <div className={styles.edit} onClick={() => SetState(styles.yes)}>
        <Image src="/svgs/edit.svg" width={50} height={50} alt="edit"></Image>
        <h3>Izmeni.</h3>
      </div>
      <div className={[modal, styles.dModal].join(" ")}>
        <h3>Da li ste sigurni da zelite da izbrisete ovaj fajl?</h3>
        <h3
          style={{
            marginInline: "auto",
            color: "var(--font-color-secondary)",
            fontSize: "1rem",
          }}
          dangerouslySetInnerHTML={{ __html: status }}
        ></h3>
        <button
          onClick={() => {
            setStatus("...loading");
            deleteData(product);
          }}
        >
          Izbrisi
        </button>
      </div>
      <div
        onClick={() => {
          setModal(styles.mNo);
        }}
        className={[modal, styles.outlay].join(" ")}
      ></div>
      <div
        className={styles.delete}
        onClick={() => {
          setStatus("");
          setModal(styles.mYes);
        }}
      >
        <Image src={trash} width={50} height={50} alt="edit"></Image>
        <h3>Izbrisi.</h3>
      </div>

      <form onSubmit={onSubmit}>
        <div className={[styles.modal, state].join(" ")}>
          <h3>Unesite podatke proizvoda: </h3>

          <div>
            <label htmlFor="name">Ime:</label>

            <input
              minLength={2}
              type="text"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </div>
          <div>
            <label htmlFor="model">Model:</label>

            <input
              value={model}
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
              value={dimenzije}
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
              value={description}
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
            <div
              className={styles.plus}
              onClick={() => setMaterijalModal(styles.materijalModal)}
            >
              Izaberi Materijal I Cenu:
            </div>
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
        <h3>Unesi Odgovarajucu cenu i materijal:</h3>
        {materijal.map((p) => {
          return (
            <div>
              <div>
                <p>{p.materijal.split("-")[0]}</p>
                <p>{p.cena}rsd</p>
              </div>

              <button
                onClick={() => {
                  function arrayRemove(
                    arr: RucicaMaterijal[],
                    value: RucicaMaterijal
                  ) {
                    return arr.filter((geeks) => {
                      return geeks.materijal !== value.materijal;
                    });
                  }
                  const result = arrayRemove(materijal, {
                    cena: p.cena,
                    materijal: p.materijal,
                  });
                  setMaterijal(result);
                  forceUpdate();
                }}
              >
                Delete.
              </button>
            </div>
          );
        })}
        <div>
          <select
            name="materijal"
            onChange={(e) => {
              setMaterijalId(e.target.value);
            }}
          >
            {materijali.map((materijal) => {
              return (
                <option
                  value={`${materijal.name}-${materijal.id}`}
                  key={materijal.id}
                >
                  {materijal.name}
                </option>
              );
            })}
          </select>
          <input
            type="number"
            placeholder="Cena"
            onChange={(e) => {
              setMaterijalCena(Number(e.target.value));
            }}
          />

          <button
            onClick={() => {
              // if (materijal.includes({materijal:materijalId,cena:materijalCena})) {
              //   // materijal.push({cena:materijalCena,materijal:materijalId})
              //   setMaterijal([{cena:materijalCena,materijal:materijalId}])
              // }else(
              //   setMaterijal([])
              // )
              if (
                materijal.find((e) => {
                  if (e.materijal === materijalId) {
                    return true;
                  }
                })
              ) {
                console.log("Materijal", materijal);
              } else {
                materijal.push({ cena: materijalCena, materijal: materijalId });
              }

              forceUpdate();
            }}
          >
            Sacuvaj.
          </button>
        </div>
        <div className={styles.close}>
          <button
            onClick={() => {
              setMaterijalModal(styles.not);
            }}
          >
            Close.
          </button>
        </div>
      </div>
    </div>
  );
}
function fromPrismaToState(
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
  })[],
  materijal: RucicaMaterijal[]
) {
  rucicaMaterijal.forEach((rucica) => {
    if (materijal.length <= rucicaMaterijal.length) {
      materijal.push({
        cena: rucica.cena,
        materijal: `${rucica.materijal.name}-${rucica.materijal.id}`,
      });
    }
  });
}
