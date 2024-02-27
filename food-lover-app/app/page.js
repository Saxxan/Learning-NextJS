import Link from "next/link";
import Image from "next/image";

// Styles
import styles from "./page.module.css";

// Images
import heroImage from "@/public/img-home.jpg";

export default function Home() {
  return (
    <main className="main-content">
      <header className={styles.header}>
        <section className="">
          <Image src={heroImage} alt="Hero image" width={500} priority />
        </section>
        <section className="">
          <section className={styles.hero}>
            <h1>Para los amantes de la comida</h1>
            <p>Prueba y comparte comidas de todo el mundo.</p>
          </section>
          <section className={styles.cta}>
            <Link href="/community">Únete a la comunidad</Link>
            <Link href="/meals">Descubre comidas</Link>
          </section>
        </section>
      </header>
    </main>
  );
}
