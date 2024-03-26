import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header/Header'
import styles from '@/styles/Home.module.css'

export default function plats() {
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
        <h2 id= "plats" className={styles.hours}> Escalope Milanaise </h2>   
      </div>
      <section className={styles.banner}>
      <div className={styles.bannerTxt}> 
        <p> L'escalope Milanaise  </p> <br></br>
        <p> Originaire de Lombardie, plus précisément de Milan, (comme son nom l'indique)
            l'escalope milanaise est une recette très ancienne remontant d'avant 1183. Composée d'une esacalope de veau, de chapelure, d'oeufs et de parmesan, l'escalope de veau milanaise et
            un incontournable de la gastronomie italienne.
        </p>
        <div className={styles.boxBtn}> 
          <Link href='/#contact' className={styles.btn}> Commander </Link>
        </div>
      </div>
        <Image 
          src='/milan.jpg'
          fill
          priority       
          alt='banner'
          className={styles.background}
        />
      </section>
      <div className={styles.intro}>
        <h2 id= "plats" className={styles.hours}> Cordon bleu </h2>   
      </div>
      <section className={styles.banner}>
      <div className={styles.bannerTxt}> 
        <p> Le cordon bleu  </p> <br></br>
        <p> D'origine suisse, le cordon bleu serait né d'une variante de l'escalope viennoise en 1949. Composé d'une escalope, (dinde veau ou porc)
            d'une tranche de jambon et de fromage, son enrobage dans la chapelure a fait de ce plat un incontournable dans tous les pays d'europe.
        </p>
        <div className={styles.boxBtn}> 
          <Link href='/#contact' className={styles.btn}> Commander </Link>
        </div>
      </div>
        <Image 
          src='/cordon.webp'
          fill
          priority       
          alt='banner'
          className={styles.background}
        />
      </section>
      <div className={styles.intro}>
        <h2 id= "plats" className={styles.hours}> Emincé de dinde </h2>   
      </div>
      <section className={styles.banner}>
      <div className={styles.bannerTxt}> 
        <p> Emincé de dinde sauce crème  </p> <br></br>
        <p> L'emincé de dinde à la sauce crème et champignons est un classique de la gastronomie française. Composé d'emincé de dinde, de champignons et de crème
            ce plat se mange un peu partout en europe et il est très apprécié des petits comme des grands.
        </p>
        <div className={styles.boxBtn}> 
          <Link href='/#contact' className={styles.btn}> Commander </Link>
        </div>
      </div>
        <Image 
          src='/poulet.webp'
          fill
          priority       
          alt='banner'
          className={styles.background}
        />
      </section>
      <div className={styles.intro}>
        <h2 id= "plats" className={styles.hours}> Pennes Carbonara </h2>   
      </div>
      <section className={styles.banner}>
      <div className={styles.bannerTxt}> 
        <p> Les pâtes carbonara </p> <br></br>
        <p> Originaire de Rome, la recette traditionelle des pâtes à la carbonara est composée de pâtes, d'oeufs, de parmesan et de lardons.
            En France, la recette de la carbonara utlise de la crème fraîche en remplacement ou compléments des jaunes d'oeufs ce qui a tendance à scandaliser les italiens...
        </p>
        <div className={styles.boxBtn}> 
          <Link href='/#contact' className={styles.btn}> Commander </Link>
        </div>
      </div>
        <Image 
          src='/carbonara.jpg'
          fill
          priority       
          alt='banner'
          className={styles.background}
        />
      </section>
      <div className={styles.intro}>
        <h2 id= "plats" className={styles.hours}> Pennes Bolognaise </h2>   
      </div>
      <section className={styles.banner}>
      <div className={styles.bannerTxt}> 
        <p> Les pâtes bolognaise  </p> <br></br>
        <p> Les pâtes à la sauce bolognaise est un plat italien traditionnel originaire de la région de Bologne en Emilie-Romagne. A base de 
            boeuf haché, de sauce tomate, oignon, celeri, carottes et huile d'olive.
        </p>
        <div className={styles.boxBtn}> 
          <Link href='/#contact' className={styles.btn}> Commander </Link>
        </div>
      </div>
        <Image 
          src='/bolognaise.jpg'
          fill
          priority       
          alt='banner'
          className={styles.background}
        />
      </section>
      <div className={styles.intro}>
        <h2 id= "plats" className={styles.hours}> Pennes au Saumon </h2>   
      </div>
      <section className={styles.banner}>
      <div className={styles.bannerTxt}> 
        <p> Les pâtes au saumon </p> <br></br>
        <p> Les pâtes au saumon sont l’une des recettes phare de la cuisine italienne. 
            A l’origine, préparées pour les repas de fêtes ou les occasions spéciales, elles sont aujourd’hui largement consommées du sud au nord de l’Italie et même dans le reste du monde..
            Composée de saumon, d'oeufs de crème fraîche et d'herbes aromatiques. (aneth et basilic)
        </p>
        <div className={styles.boxBtn}> 
          <Link href='/#contact' className={styles.btn}> Commander </Link>
        </div>
      </div>
        <Image 
          src='/saumon.jpg'
          fill
          priority       
          alt='banner'
          className={styles.background}
        />
      </section>
      <div className={styles.intro}>
        <h2 id= "plats" className={styles.hours}> Tiramisu </h2>   
      </div>
      <section className={styles.banner}>
      <div className={styles.bannerTxt}> 
        <p> Tiramisu </p> <br></br>
        <p> L'origine du tiramisu reste assez vague. On attribue sa création au chef pâtissier Roberto Linguanotto dans la région de Trévise dans les 
            années 1960. Composé de mascarpone, de biscuits à la cuillère, de café , d'oeufs et de cacao, ce dessert et une référence dans la gastronomie italienne.
        </p>
        <div className={styles.boxBtn}> 
          <Link href='/#contact' className={styles.btn}> Commander </Link>
        </div>
      </div>
        <Image 
          src='/tiramisu.webp'
          fill
          priority       
          alt='banner'
          className={styles.background}
        />
      </section>
      <div className={styles.intro}>
        <h2 id= "plats" className={styles.hours}> Mousse au chocolat </h2>   
      </div>
      <section className={styles.banner}>
      <div className={styles.bannerTxt}> 
        <p> Mousse au chocolat </p> <br></br>
        <p> La mousse au chocolat est créée par le Suisse Charles Fazi, cuisinier de Louis XVI1 en 1755.
        Elle est composée traditionnellement avec au minimum du chocolat et du blanc d'œuf, monté en neige.
        </p>
        <div className={styles.boxBtn}> 
          <Link href='/#contact' className={styles.btn}> Commander </Link>
        </div>
      </div>
        <Image 
          src='/chocolat.jpg'
          fill
          priority       
          alt='banner'
          className={styles.background}
        />
      </section>
     
      <footer className={styles.footer}>
        <p> © pastafood66 - 2024</p>
      </footer>
  </main>
</>
)
}
