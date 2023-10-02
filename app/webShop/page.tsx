'use client'
import React from 'react'
import validator from 'validator'
import {useState} from 'react'
import styles from '../../public/css/webShop/page.module.css'
export default function webShop() {




    const [logIn, setLogIn] = useState(false)
    const [name, setName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [password,setPassword] = useState<string>()
    const [ppassword,setPpassword] = useState<string>()
    const [status,setStatus] = useState('')

    const signUp = ()=>{
        if(!name)return
        if(name.length<2)return setStatus('Ime je previse malo')
        if(!email)return setStatus('Potrebno je uneti email')
        if(!validator.isEmail(email)) setStatus('Unesite pravi email')
        if(password!== ppassword) return setStatus("Šifre se ne podudaraju")
        if(!password) return setStatus('Potrebno je uneti šifru')
        if (password.length<4) setStatus('Molimo Vas unesite dužu šifru')

    }

  return (
<div className={styles.webShop}>
    <div className={styles.h1}>
        <h1>Web Shop</h1>
    </div>  


{logIn ? (
  <>
     <div className={styles.buttons}>
        <button className={styles.selected} onClick={()=>{
            setLogIn(true)
            setStatus('')
            } }>Log In</button>
        <button onClick={()=>{
            setLogIn(false) 
            setStatus('')}}>Sign Up</button>
    </div>

  <div className={styles.levo} style={{marginInline:'auto'}}>
<p style={{color:'red',fontSize:'var(--font-size-small)'}}>{status}<s/p>
    

  <div className={styles.form}>
  <form >

  <div className={styles.text}>
    <label htmlFor="email">Email:</label>
    <input type="text" placeholder=' '  name='email' onChange={(e)=>setEmail(e.target.value)} />
  </div>
  <div className={styles.text}>
    <label htmlFor="password">Sifra:
    </label>
    <input type="password" placeholder=' '  name='password'  onChange={(e)=>setPassword(e.target.value)}/>
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
        <button  onClick={()=>{
            setLogIn(true)
            setStatus('')
        }}>Log In</button>
        <button   className={styles.selected} onClick={()=>{
            setLogIn(false)
            setStatus('')
            } }>Sign Up</button>
    </div>
<div className={styles.ld}>
  
  <div className={styles.levo}>
    
<p style={{color:'red',fontSize:'var(--font-size-small)'}}>{status}</p>
  <div className={styles.form}>
  <form >
  <div className={styles.text}>
    <label htmlFor="name">Ime:</label>
    <input type="text" name='name' placeholder=' '  onChange={(e)=>setName(e.target.value)} />
  </div>
  <div className={styles.text}>
    <label htmlFor="email">Email:</label>
    <input type="text" name='email' placeholder=' '  onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div className={styles.text}>
    <label htmlFor="password">Sifra:
    </label>
    <input type="password" name='password' placeholder=' '   onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  <div className={styles.text}>
    <label htmlFor="password">Ponovi Sifru:</label>
    <input type="password" name='password' placeholder=' '  onChange={(e)=>setPpassword(e.target.value)} />
  </div>
       
  </form>      
  </div>
  </div>
  <div className={styles.desno}>
    
  <div className={styles.submit}>
      <button type='submit' onClick={()=>signUp()}>Sign Up</button>
  </div> 
  </div>
  </div>
  </>
  )
  
  
  
  
  }




</div>
  )
}
    