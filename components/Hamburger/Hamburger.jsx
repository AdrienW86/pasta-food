import React, {useState} from 'react'
import Link from 'next/link'
import styles from './hamburger.module.css'

export default function Hamburger() {
    const [open, setIsOpen] = useState(false)

    const handleMenuToggle = () => {
        setIsOpen(!open)
    }

  return (
    <section className={styles.container}>
    <div className={styles.buttonBox}>
        <button className={`${styles.hamburger} ${open ? styles.open : styles.close}`} onClick={handleMenuToggle} aria-label="hamburger button">
            <span className={styles.line}> </span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
        </button>      
    </div>
    {open &&
        <section className={styles.menu}>
            <Link className={styles.link} href="/#home"> Accueil </Link>
            <Link className={styles.link} href="/#carte" > Carte </Link>
            <Link className={styles.link} href="/#contact"> Contact </Link>
        </section>
    }
    </section>
  )
}