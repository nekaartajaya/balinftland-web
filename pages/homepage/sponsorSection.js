import Image from "next/image";
import styles from "../../styles/SponsorSection.module.css";

const SponsorSection = () => {
  return (
    <section className={styles.sponsorContainer}>
      <div className={styles.imageContainer}>
        <Image
          src="/hah.svg"
          layout="fill"
          className={styles.image}
          alt="HomePicture"
        />
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/ftm.svg"
          layout="fill"
          className={styles.image}
          alt="HomePicture"
        />
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/hah.svg"
          layout="fill"
          className={styles.image}
          alt="HomePicture"
        />
      </div>
    </section>
  );
};

export default SponsorSection;