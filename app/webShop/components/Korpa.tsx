"use client";
import React, { useContext, useState } from "react";
import styles from "../../../public/css/webShop/page.module.css";
import { AuthenticationContext } from "@/app/context/context";
import Image from "next/image";
import path from "path";

export default function Korpa() {
  const { data } = useContext(AuthenticationContext);
  const [userOptions, setUserOptions] = useState(styles.closedOptions);
  return (
    <>
      {" "}
      {data ? (
        <div className={styles.shop}>
          {userOptions === styles.openOptions ? (
            <div
              className={styles.overflow}
              onClick={() => {
                setUserOptions(styles.closedOptions);
              }}
            ></div>
          ) : null}

          <div className={styles.sideBar}>
            <div
              onClick={() => {
                setUserOptions(styles.openOptions);
              }}
              className={styles.avatar}
              style={{ backgroundColor: data.hex }}
            >
              {data.name.at(0)}
            </div>
          </div>
          <div className={[styles.userOptions, userOptions].join(" ")}>
            <div className={styles.podatci}>
              <p>Ime:</p> <strong>{data.name}</strong>
            </div>
            <div className={styles.podatci}>
              <p>Email:</p> <strong>{data.email}</strong>
            </div>
            <div className={styles.podatci}>
              <p>Istorija Plaćanja:</p> <strong>nema</strong>
            </div>
            <button>Izloguj se.</button>
          </div>
          <div className={styles.leva}>
            <div className={styles.korpa}>
              <Image
                alt={""}
                src="/svgs/korpa.svg"
                width={50}
                height={50}
              ></Image>
              <p>Vaša korpa je prazna</p>
            </div>
            <button className={styles.buttonDole}>Poruči</button>
          </div>
          <div className={styles.desna}>
            <button className={styles.buttonDole}>Poruči</button>
          </div>
        </div>
      ) : null}
    </>
  );
}
