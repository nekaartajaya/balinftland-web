/* eslint-disable @next/next/no-img-element */
import {useRef} from 'react';
import {useSpring, animated, easings} from 'react-spring';

import styles from '../../styles/HomeTitleSection.module.css';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

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
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: true,
  });
  const fadeIn = useSpring({
    from: {opacity: 0},
    to: {opacity: dataRef?.isIntersecting ? 1 : 0},
    delay: 100,
    config: {
      duration: 1200,
    },
  });
  const borderWidth = useSpring({
    from: {width: '0%'},
    to: {width: dataRef?.isIntersecting ? '100%' : '0%'},
    delay: 100,
    config: {
      duration: 2000,
      easing: easings.easeOutQuint,
    },
  });
  const fadeInUp = useSpring({
    from: {transform: 'translateY(100%)'},
    to: {transform: dataRef?.isIntersecting ? 'translateY(0%)' : 'translateY(100%)'},
    delay: 300,
    config: {
      duration: 800,
    },
  });

  return (
    <div className={styles.container}>
      <div className="overflow-hidden">
        <animated.div style={fadeInUp} className={styles.top} ref={triggerRef}>
          <div className={styles.left}>{topLeftText}</div>
          <div className={styles.right}>
            {topRightText}
            <span className={styles.dot}>.</span>
          </div>
        </animated.div>
      </div>
      <div className="w-full inline-block">
        <animated.div style={borderWidth} className={styles.border} ref={triggerRef}></animated.div>
      </div>
      <animated.div style={fadeIn} ref={triggerRef}>
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
      </animated.div>
    </div>
  );
};

export default HomeTitleSection;
