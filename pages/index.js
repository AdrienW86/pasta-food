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
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
          <div className={styles.intro}>
            <h2 id= "home" className={styles.hours}> Livraison de 20h à 4h </h2>
            <Image
              src='/halal.png'
              height={60} 
              width={60}
              priority
            />
          </div>
          <section className={styles.banner}>

          <div className={styles.bannerTxt}> 
            <p> Venez déguster nos plats et dsesserts fait maison  </p> <br></br>
            <p> Nous sommes ouverts tous les jours de 20h à 4h du matin.</p>
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
                priority
              />
              <p className={styles.number}> 06.01.58.40.07  </p>  
            </div>
            <div className={styles.phone}> 
              <Image
                src='/snap.png'
                height={120} 
                width={120}
                priority
              />
              <div className={styles.snap}>
                <p className={styles.number}> ou scannez directement  </p>
                <p className={styles.number}> Pasta food 66  </p>
              
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
