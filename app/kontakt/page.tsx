"use client";
import React, { useState } from "react";
import classNames from "classnames";
import styles from "../../public/css/kontakt.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faViber } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import axios from "axios";
import validator from "validator";

export default function Form() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const containerClass = classNames(styles.container, {
    [styles["right-panel-active"]]: isRightPanelActive,
  });

  const handleMailClick = () => {
    setIsRightPanelActive(true);
  };

  const handleCallInClick = () => {
    setIsRightPanelActive(false);
  };

  const [ime, SetIme] = useState("Petar");
  const [text, SetText] = useState("U vezi sa namestajem...");
  const [email, SetEmail] = useState("petar.petrovic@gmail.com");
  const [prezime, SetPrezime] = useState("");
  const [status, SetStatus] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios.post(`/api/kontakt/email`, {
        email,
        text,
        ime,
        prezime,
      });
      if (res.data.status === "success") {
        return SetStatus("Uspesno ste poslali Email!");
      } else {
        return SetStatus("Prilikom Slanja Emila doslo je do greske");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className={styles.status}>
        <h3>{status}</h3>
      </div>
      <div className={styles.pocetak}>
        <div className={containerClass} id="container">
          <div
            className={classNames(
              styles["form-container"],
              styles["sign-up-container"]
            )}
          >
            <form action="#">
              <h1>Pozovite Nas</h1>
              <div className={styles["social-container"]}>
                <Link href="tel:+1234567890" className={styles.social}>
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ color: "#000000" }}
                  />
                </Link>
                <Link
                  href="viber://contact?number=%2B381644737375"
                  className={styles.social}
                >
                  <FontAwesomeIcon
                    icon={faViber}
                    style={{ color: "#000000" }}
                  />
                </Link>
                <Link
                  href="https://wa.me/381644737375"
                  className={styles.social}
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    style={{ color: "#000000" }}
                  />
                </Link>
              </div>
              <span
                style={{
                  fontSize: ".75rem",
                  fontWeight: "bold",
                  margin: "1rem",
                }}
              >
                Ili nas posetite
              </span>
              <div className={styles.mapa}>
                <iframe
                  title="My Map"
                  width="300"
                  height="200"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22641.51925868682!2d20.44252195!3d44.81769565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6561a8c27169%3A0x81b82df6278d741a!2s%C5%A0tark%20Arena!5e0!3m2!1sen!2srs!4v1693664708631!5m2!1sen!2srs&output=embed"
                  loading="lazy"
                  allowFullScreen={false}
                  aria-hidden="false"
                  tabIndex={0}
                ></iframe>
              </div>
            </form>
          </div>
          <div
            className={classNames(
              styles["form-container"],
              styles["sign-in-container"]
            )}
          >
            <form action="#">
              <h1>Posaljite nam Mail</h1>

              <input
                type="text"
                placeholder="Ime"
                onChange={(e) => {
                  return input(e, SetIme);
                }}
              ></input>
              <input
                type="text"
                placeholder="Prezime"
                onChange={(e) => {
                  return input(e, SetPrezime);
                }}
              ></input>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  return input(e, SetEmail);
                }}
              />
              <textarea
                placeholder="Dobar Dan u vezi sa..."
                onChange={(e) => {
                  return textArea(e, SetText);
                }}
                style={{ resize: "none" }}
              ></textarea>

              <button
                onClick={(e) => {
                  e.preventDefault();

                  if (!validator.isEmail(email)) {
                    e.preventDefault();
                    SetStatus("Unesite pravilan imejl");
                  }

                  if (
                    !validator.isLength(ime, {
                      min: 1,
                    })
                  ) {
                    e.preventDefault();
                    SetStatus("Unesite Ime");
                  }
                  if (
                    !validator.isLength(text, {
                      min: 1,
                    })
                  ) {
                    e.preventDefault();
                    SetStatus("Unesite text");
                  }
                  if (
                    validator.isEmail(email) &&
                    validator.isLength(ime, {
                      min: 1,
                    }) &&
                    validator.isLength(text, {
                      min: 1,
                    }) &&
                    validator.isLength(ime, {
                      min: 1,
                    })
                  )
                    fetchData();
                }}
              >
                Posalji
              </button>
            </form>
          </div>
          <div className={styles["overlay-container"]}>
            <div className={styles.overlay}>
              <div
                className={classNames(
                  styles["overlay-panel"],
                  styles["overlay-left"]
                )}
              >
                <h1>Posaljite nam Mail</h1>
                <p>Voleli bi ste da nam se obratite direktno? </p>
                <button
                  className={classNames(styles.ghost)}
                  id="signIn"
                  onClick={handleCallInClick}
                >
                  Pošaljite nam mejl
                </button>
              </div>
              <div
                className={classNames(
                  styles["overlay-panel"],
                  styles["overlay-right"]
                )}
              >
                <h1>Kontaktirajte nas </h1>
                <p>Kontanktirajte nas na druge nacine.</p>
                <button
                  className={classNames(styles.ghost)}
                  id="signUp"
                  onClick={handleMailClick}
                >
                  Pozovite Nas
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.seperator}></div>
      </div>
    </>
  );
}

function input(
  e: React.ChangeEvent<HTMLInputElement>,
  parametar: React.Dispatch<React.SetStateAction<string>>
) {
  return parametar(e.target.value);
}
function select(
  e: React.ChangeEvent<HTMLSelectElement>,
  parametar: React.Dispatch<React.SetStateAction<string>>
) {
  return parametar(e.target.value);
}
function textArea(
  e: React.ChangeEvent<HTMLTextAreaElement>,
  parametar: React.Dispatch<React.SetStateAction<string>>
) {
  return parametar(e.target.value);
}
