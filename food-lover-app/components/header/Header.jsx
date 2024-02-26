import React from "react";

// Styles
import styles from "./styles.module.css";

// Components
import Link from "next/link";
import Image from "next/image";

// Images
import logo from "@/public/icon.svg";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <Link href="/">
          <Image
            src={logo}
            alt="Logo food lover app"
            width={50}
            height={50}
            priority
          />
        </Link>
        <ul className={styles.menu}>
          <li className={styles.menu_item}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.menu_item}>
            <Link href="/meals">Meals</Link>
          </li>
          <li className={styles.menu_item}>
            <Link href="/community">Community</Link>
          </li>
          <li className={styles.menu_item}>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
