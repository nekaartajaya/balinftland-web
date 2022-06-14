import Image from "next/image";
import styles from "../../styles/HomeSection.module.css";

const HomeSection = () => {
  return (
    <section>
      <div>
        <div className={styles.titleBig}>
          DIGILANDBALI
        </div>
        <div className={styles.subtitle}>
          WE BUILD TOGETHER, WE OWN TOGETHER
        </div>
        <div className={styles.buttonContainer}>
          <button className={`${styles.button} ${styles.buttonWhite}`}>About Digilandbali</button>
          <button className={styles.button}>Visit Lima Beach Project</button>
        </div>
      </div>
      <div className="relative">
        <div className={`${styles.floatingTextContainer} ${styles.floatingText} ${styles.top}`}>
          <div className={styles.title}>NFT Developer Property</div>
          <div className={styles.subtitle}>Build decentralized property with developer price on Bali, build with community for community</div>
        </div>
        <div className={styles.imageMainContainer}>
          <Image
            src="/Home.svg"
            layout="fill"
            className={styles.imageMain}
            alt="HomePicture"
          />
        </div>
        <div className={`${styles.floatingTextContainer} ${styles.floatingText} ${styles.bottom}`}>
          <div className={styles.title}>NFT Developer Property</div>
          <div className={styles.subtitle}>Build decentralized property with developer price on Bali, build with community for community</div>
        </div>
      </div>
      <div className={styles.imageUnionContainer}>
        <Image
          src="/Union.svg"
          layout="fill"
          className={styles.imageUnion}
          alt="HomePicture"
        />
      </div>
    </section>
  );
};

export default HomeSection;