'use client'
import React from 'react'
import {useState} from 'react'
import styles from '../../public/css/webShop/page.module.css'
export default function webShop() {
    const [logIn, setLogIn] = useState(false)
    const [name, setName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [password,setPassword] = useState<string>()
    const [ppassword,setPpassword] = useState<string>()
  return (
<div className={styles.webShop}>
    <div className={styles.h1}>
        <h1>Web Shop</h1>
    </div>  


{logIn ? (
  <>
     <div className={styles.buttons}>
        <button className={styles.selected} onClick={()=>setLogIn(true) }>Log In</button>
        <button onClick={()=>setLogIn(false)}>Sign Up</button>
    </div>
  <div className={styles.levo} style={{marginInline:'auto'}}>
    

  <div className={styles.form}>
  <form >

  <div className={styles.text}>
    <label htmlFor="email">Email:</label>
    <input type="text" name='email' onChange={(e)=>setEmail(e.target.value)} />
  </div>
  <div className={styles.text}>
    <label htmlFor="password">Sifra:
    </label>
    <input type="password" name='password'  onChange={(e)=>setPassword(e.target.value)}/>
  </div>         
  </form>      
  </div>
  <div className={styles.submit}>
      <button type='submit'>Log In</button>
  </div> 
  </div>

  {/* <div className={styles.desno}>
    
 
  </div> */}
  </>
):(
<>
    <div className={styles.buttons}>
        <button  onClick={()=>setLogIn(true)}>Log In</button>
        <button   className={styles.selected} onClick={()=>setLogIn(false)}>Sign Up</button>
    </div>
<div className={styles.ld}>
  
  <div className={styles.levo}>
    

  <div className={styles.form}>
  <form >
  <div className={styles.text}>
    <label htmlFor="name">Ime:</label>
    <input type="text" name='name'  onChange={(e)=>setName(e.target.value)} />
  </div>
  <div className={styles.text}>
    <label htmlFor="email">Email:</label>
    <input type="text" name='email'  onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div className={styles.text}>
    <label htmlFor="password">Sifra:
    </label>
    <input type="password" name='password'  onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  <div className={styles.text}>
    <label htmlFor="password">Ponovi Sifru:</label>
    <input type="password" name='password' onChange={(e)=>setPpassword(e.target.value)} />
  </div>
       
  </form>      
  </div>
  </div>
  <div className={styles.desno}>
    
  <div className={styles.submit}>
      <button type='submit'>Sign Up</button>
  </div> 
  </div>
  </div>
  </>
  )
  
  
  
  
  }




</div>
  )
}
    