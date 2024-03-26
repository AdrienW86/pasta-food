import React from 'react'
import Link from 'next/link'
import Hamburger from '@/components/Hamburger/Hamburger'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}> 
     <Link className={styles.link} href="/"> 
      <h1 className={styles.h1}> 
          <span className={styles.green}>Pas</span>
          <span className={styles.white}>ta foo</span>
          <span className={styles.red}>d 66</span> 
        </h1>
     </Link>     
      <Hamburger />
    </header>
  )
}