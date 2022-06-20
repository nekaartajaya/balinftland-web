/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/PeopleCard.module.css';

const PeopleCard = ({imageUrl, imageAlt, name, position}) => {
  return (
    <div className="max-w-[220px] mb-8 tablet:mb-0 tablet:max-w-full mx-auto">
      <img src={imageUrl} className="w-full" alt={imageAlt} />
      <div className={styles.textContainer}>
        <div className={styles.name}>Luis Carlos Almeida Da Cunha</div>
        <div className={styles.position}>Chief Executive Officer</div>
      </div>
    </div>
  );
};

export default PeopleCard;
