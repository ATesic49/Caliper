import Image from "next/image";
import React from "react";
import styles from "../../public/css/o-nama/o-nama.module.css";
export default function page() {
  return (
    <div className={styles.oNama}>
      <div className={styles.slika}>
        <Image
          src="/imgs/pocetna.jpeg"
          alt="Slika"
          width={3400}
          height={3400}
        />
        <h1>Najbolji Namestaj u Srbiji</h1>
      </div>
      <div className={styles.text}>
        <div className={styles.container}>
          <h2>O NAMA</h2>
          <div className={styles.p}>
            <p>
              Dobrodošli u CALIPER, gde smo specijalizovani za izradu svih vrsta
              nameštaja po meri koji su dizajnirani da zadovolje vaše specifične
              potrebe i stil. Naš tim veštih majstora i dizajnera ima
              dugogodišnje iskustvo u kreiranju nameštaja po meri koji je
              funkcionalan i lep. Bilo da tražite kuhinju po meri, jedinstveni
              komad nameštaja za spavaću sobu ili opremate vaš poslovni prostor,
              imamo znanje i stručnost da oživimo vašu viziju.
            </p>
            <p>
              Naš cilj je da vam pomognemo da kreirate prostor koji zaista
              odražava vaš lični stil i zadovoljava vaše specifične potrebe. Bez
              obzira da li tražite tradicionalni ili moderan dizajn, naš tim ima
              veštine i iskustvo da oživi vaše ideje.
            </p>
            <p>
              Koristimo samo najkvalitetnije materijale i okove od renomiranih
              proizvođača, kako bismo bili sigurni da će vaš nameštaj trajati
              godinama koje dolaze. Naša posvećenost kvalitetu proteže se na
              svaki aspekt naše usluge, od inicijalnih konsultacija do konačne
              isporuke i montaže.
            </p>
            <p>
              Hvala vam na ukazanom poverenju i radujemo se što ćemo vam pomoći
              da stvorite prostor vaših snova.
            </p>
          </div>
          <div className={styles.img}>
            <Image
              src="/imgs/pocetna.jpeg"
              alt=""
              width={1300}
              height={600}
            ></Image>
            <h3>Lorem ipsum dolor sit.</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
