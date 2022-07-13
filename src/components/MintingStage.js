/* eslint-disable @next/next/no-img-element */
import {useRef} from 'react';
import {animated} from 'react-spring';

import styles from '../../styles/limabeach/MintingStage.module.css';
import {borderWidth, fadeIn, fadeInUpText} from '../animation';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const MintingStage = ({imageUrl, imageAlt, title, description}) => {
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {});
  const visible = dataRef?.isIntersecting;

  return (
    <div className={styles.container}>
      <div className="hidden tablet:block">
        <animated.div
          ref={triggerRef}
          style={fadeInUpText(visible)}
          className={`${styles.title} ${styles.top}`}
        >
          {title}
          <span className={styles.dot}>.</span>
        </animated.div>
        <div className="w-full inline-block">
          <animated.div
            className={styles.border}
            ref={triggerRef}
            style={borderWidth(visible)}
          ></animated.div>
        </div>
      </div>

      <div className="tablet:flex tablet:items-start">
        <animated.div ref={triggerRef} style={fadeIn(visible)} className={styles.imageContainer}>
          <img src={imageUrl} className={styles.image} alt={imageAlt} />
        </animated.div>
        <div className={styles.textContainer}>
          <div className="overflow-hidden">
            <animated.div
              ref={triggerRef}
              style={fadeInUpText(visible)}
              className={`${styles.title} ${styles.bottom}`}
            >
              {title}
              <span className={styles.dot}>.</span>
            </animated.div>
            <div className="w-full inline-block">
              <animated.div
                className={styles.border}
                ref={triggerRef}
                style={borderWidth(visible)}
              ></animated.div>
            </div>
          </div>
          <animated.div ref={triggerRef} style={fadeIn(visible)} className={styles.description}>
            {description}
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default MintingStage;
