/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/ImageDescComponent.module.css';

const ImageDescComponent = ({imageUrl, imageAlt, title, description}) => {
  return (
    <div className={styles.container}>
      {title ? (
        <div className={`${styles.title} ${styles.top}`}>
          {title}
          <span className={styles.dot}>.</span>
        </div>
      ) : null}
      <div className="flex">
        <div className={styles.imageContainer}>
          <img src={imageUrl} className={styles.image} alt={imageAlt} />
        </div>
        <div className={styles.textContainer}>
          {title ? (
            <div className={`${styles.title} ${styles.bottom}`}>
              {title}
              <span className={styles.dot}>.</span>
            </div>
          ) : null}
          <div className={styles.description}>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default ImageDescComponent;
