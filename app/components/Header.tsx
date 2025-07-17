'use client'
import React from 'react'
import styles from './Header.module.css';
import Image from 'next/image';
const Header = () => {
  return (
    <>
    <div className={styles.boxy}>
    <h1 className={styles.motto}>
        Revolutionizing<br/>
        Pharmacy Access.<br/>
        Simplifying Operations.
    </h1>
    <p className={styles.desc}>
        Search medicines nearby,manage inventory and serve patients effeciently.
    </p>
    <Image src="/Rectangle 4.png" alt="Logo" width ={ 600}height = {400} className={styles.img}/>
    </div>
    </>
  )
}

export default Header
