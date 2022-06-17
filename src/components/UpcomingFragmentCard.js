/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/UpcomingFragmentCard.module.css';

const UpcomingFragmentCard = ({type = 'upcoming', imageUrl, imageAlt, title, description}) => {
  return (
    <div className="relative">
      <img src={imageUrl} className="w-full" alt={imageAlt} />
      {type === 'upcoming' ? (
        <div className={styles.overlayUp}>
          <div className={styles.textUp}>
            <div className={styles.titleUp}>COMING SOON</div>
          </div>
        </div>
      ) : (
        <div className={styles.overlay}>
          <div className={styles.text}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpcomingFragmentCard;
