import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/images/pokeball.png"
          width={35}
          height={35}
          alt="PokeNext"
        />
        <h1>PokeNext</h1>
      </div>
      <ul className={styles.link_itens}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Sobre</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
