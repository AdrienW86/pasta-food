import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header/Header'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title> Pasta Food</title>
        <meta name="description" content="Livraison sur Perpignan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
          <div className={styles.intro}>
            <h2 id= "home" className={styles.hours}> Livraison de 19h à 23h </h2>
           
          </div>
          <section className={styles.banner}>
          <div className={styles.bannerTxt}> 
            <p> Venez déguster nos plats et desserts fait maison  </p> <br></br>
            <p> Nous sommes ouverts tous les jours de 19h à 23h.</p>
            <div className={styles.boxBtn}> 
              <Link href='/#contact' className={styles.btn}> Commander </Link>
            </div>
          </div>
            <Image 
              src='/banner.jpg'
              fill
              priority       
              alt='banner'
              className={styles.background}
            />
          </section>
          <div className={styles.intro}>
            <h2 id="carte" className={styles.hours2}> Notre carte </h2>      
            <Link href='/plats' className={styles.introLink}> Voir nos plats en image </Link>
          </div>
          <div className={styles.banner2}>
            <Image 
              src='/menu.png'
              fill
              priority       
              alt='banner'
          />
          </div>
          <div className={styles.intro}>
            <h2 className={styles.hours2}> Contact </h2>           
          </div>
          <div> 
            <h3 id="contact" className={styles.h3}>  Pour passer votre commande : </h3>
            <div className={styles.phone}> 
              <Image
                src='/telephone.png'
                height={30} 
                width={30}
                alt='logo phone'
              />
              <p className={styles.number}> 06.66.67.27.09  </p>  
            </div>
            <div className={styles.phone}> 
              <Image
                src='/snap.png'
                height={120} 
                width={120}
                alt='logo snapchat'
              />
              <div className={styles.snap}>
                <Link className={styles.number2} href="https://t.snapchat.com/BKmqg3v6"> Cliquer ici </Link>
                <p className={styles.number}> ou scannez directement </p>             
              </div>  
            </div>
          </div>
          <footer className={styles.footer}>
            <p> © pastafood66 - 2024</p>
          </footer>
      </main>
    </>
  )
}