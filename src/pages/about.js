import Image from "next/image";
import styles from "../styles/About.module.css";

const about = () => {
  return (
    <>
      <div className={styles.about}>
        <h1>Sobre o projeto</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          nihil corporis consectetur. Ratione quasi esse quaerat, doloremque
          quae fugit, natus numquam tempora recusandae cupiditate quibusdam. Ab
          nihil enim nobis architecto?
        </p>
        <Image
          src="/images/charizard.png"
          width={300}
          height={300}
          alt="charizard"
        />
      </div>
    </>
  );
};

export default about;
