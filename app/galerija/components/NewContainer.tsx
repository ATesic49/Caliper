'use client'
import React, { useState } from 'react'
import New from './New'
import styles from '../../../public/css/grid.module.css';
import DOMPurify from "dompurify";
export default function NewContainer() {
    const [status,SetStatus] =useState('')
    return (
    <>
          <div className={styles.h2}>


<h2 dangerouslySetInnerHTML={{__html:status }}></h2>
</div>
    <New SetStatus={SetStatus}/>    
    </>
  )
}
