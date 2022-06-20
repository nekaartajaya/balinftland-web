/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/HomeTitleSection.module.css';

const HomeTitleSection = ({
  type,
  imageURL,
  imageAlt,
  miniText,
  descText,
  topLeftText,
  topRightText,
  children,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.left}>{topLeftText}</div>
        <div className={styles.right}>
          {topRightText}
          <span className={styles.dot}>.</span>
        </div>
      </div>
      <div className={styles.border}></div>
      {type === 'leftImage' ? (
        <div
          className={`${styles.bottomLeftImage} ${styles.bottom}`}
          style={{alignItems: imageURL ? 'center' : 'flex-start'}}
        >
          <div className={styles.left}>
            {imageURL ? (
              <div className={styles.imageContainer}>
                <img src={imageURL} className={styles.image} alt={imageAlt} />
              </div>
            ) : null}
            <div className={styles.miniText}>{miniText}</div>
          </div>
          <div className={styles.right}>{descText}</div>
        </div>
      ) : type === 'topImage' ? (
        <div className={`${styles.bottomTopImage} ${styles.bottom}`}>
          <div className={styles.left}>
            {imageURL ? (
              <div className={styles.imageContainer}>
                <img src={imageURL} className={styles.image} alt={imageAlt} />
              </div>
            ) : null}
          </div>
          <div className={styles.right}>{descText}</div>
        </div>
      ) : type === 'custom' ? (
        children
      ) : null}
    </div>
  );
};

export default HomeTitleSection;
