"use client";
import React, { useContext } from "react";
import validator from "validator";
import { useState } from "react";
import styles from "../../public/css/webShop/page.module.css";
import axios from "axios";
import { AuthenticationContext } from "../context/context";
import Korpa from "./components/Korpa";

export default function webShop() {
  const [logIn, setLogIn] = useState(false);
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [ppassword, setPpassword] = useState<string>();
  const [status, setStatus] = useState("");
  const { data } = useContext(AuthenticationContext);
  const sighUpEndpoint = async () => {
    try {
      const res = await axios.post("/api/logInRegister/register", {
        email,
        name,
        password,
      });
      console.log(res);

      if (res.status === 200) return setStatus("Sve je proslo kako treba :)");
    } catch (e) {
      console.log(e);
      //@ts-ignore
      setStatus(e.response.data.errorMessage);
    }
  };

  const logInEndpoint = async () => {
    try {
      const res = await axios.post("/api/logInRegister/logIn", {
        email,
        password,
      });
      console.log(res);
      if (res.status === 200) return setStatus("Sve je proslo kako treba :)");
    } catch (e) {
      console.log(e);
      // @ts-ignore
      setStatus(e.response.data.errorMessage);
    }
  };

  const signUp = () => {
    setStatus("");
    if (!name) return;
    if (name.length < 2) return setStatus("Ime je previse malo");
    if (!email) return setStatus("Potrebno je uneti email");
    if (!validator.isEmail(email)) setStatus("Unesite pravi email");
    if (password !== ppassword) return setStatus("Šifre se ne podudaraju");
    if (!password) return setStatus("Potrebno je uneti šifru");
    if (password.length < 4) setStatus("Molimo Vas unesite dužu šifru");
    sighUpEndpoint();
  };

  const logInF = async () => {
    setStatus("");

    if (!email) return setStatus("Potrebno je uneti email");
    if (!password) return setStatus("Potrebno je uneti šifru");

    if (!validator.isEmail(email))
      setStatus("Molimo Vas da unesete ispravan email");
    setStatus("");
    await logInEndpoint();
  };

  return (
    <>
      {data ? (
        <div className={styles.webShop}>
          <div className={styles.h1}>
            <h1>Web Shop</h1>
          </div>
          <Korpa />
        </div>
      ) : (
        <div className={styles.webShop}>
          <div className={styles.h1}>
            <h1>Web Shop</h1>
          </div>

          {logIn ? (
            <>
              <div className={styles.buttons}>
                <button
                  className={styles.selected}
                  onClick={() => {
                    setLogIn(true);
                    setStatus("");
                  }}
                >
                  Log In
                </button>
                <button
                  onClick={() => {
                    setLogIn(false);
                    setStatus("");
                  }}
                >
                  Sign Up
                </button>
              </div>

              <div className={styles.levo} style={{ marginInline: "auto" }}>
                {status !== "Sve je proslo kako treba :)" ? (
                  <p
                    style={{ color: "red", fontSize: "var(--font-size-small)" }}
                  >
                    {status}
                  </p>
                ) : (
                  <p
                    style={{
                      color: "green",
                      fontSize: "var(--font-size-small)",
                    }}
                  >
                    {status}
                  </p>
                )}

                <div className={styles.form}>
                  <form>
                    <div className={styles.text}>
                      <label htmlFor="email">Email:</label>
                      <input
                        type="text"
                        placeholder=" "
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className={styles.text}>
                      <label htmlFor="password">Sifra:</label>
                      <input
                        type="password" //pass
                        placeholder=" "
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </form>
                </div>
                <div className={styles.submit}>
                  <button type="submit" onClick={() => logInF()}>
                    Log In
                  </button>
                </div>
              </div>

              {/* <div className={styles.desno}>
    
 
  </div> */}
            </>
          ) : (
            <>
              <div className={styles.buttons}>
                <button
                  onClick={() => {
                    setLogIn(true);
                    setStatus("");
                  }}
                >
                  Log In
                </button>
                <button
                  className={styles.selected}
                  onClick={() => {
                    setLogIn(false);
                    setStatus("");
                  }}
                >
                  Sign Up
                </button>
              </div>
              <div className={styles.ld}>
                <div className={styles.levo}>
                  {status !== "Sve je proslo kako treba :)" ? (
                    <p
                      style={{
                        color: "red",
                        fontSize: "var(--font-size-small)",
                      }}
                    >
                      {status}
                    </p>
                  ) : (
                    <p
                      style={{
                        color: "green",
                        fontSize: "var(--font-size-small)",
                      }}
                    >
                      {status}
                    </p>
                  )}
                  <div className={styles.form}>
                    <form>
                      <div className={styles.text}>
                        <label htmlFor="name">Ime:</label>
                        <input
                          type="text"
                          name="name"
                          placeholder=" "
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className={styles.text}>
                        <label htmlFor="email">Email:</label>
                        <input
                          type="text"
                          name="email"
                          placeholder=" "
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className={styles.text}>
                        <label htmlFor="password">Sifra:</label>
                        <input
                          type="password" //pass
                          name="password"
                          placeholder=" "
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className={styles.text}>
                        <label htmlFor="password">Ponovi Sifru:</label>
                        <input
                          type="password" //pass
                          name="password"
                          placeholder=" "
                          onChange={(e) => setPpassword(e.target.value)}
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className={styles.desno}>
                  <div className={styles.submit}>
                    <button type="submit" onClick={() => signUp()}>
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
