import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Image
          src="/images/pokeball.png"
          width={35}
          height={35}
          alt="PokeNext"
        />
        <h1>PokeNext</h1>
      </div>
      <ul>
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
