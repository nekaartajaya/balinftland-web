/* eslint-disable @next/next/no-img-element */
import {useRef} from 'react';
import {useSpring, animated, easings} from 'react-spring';

import styles from '../../styles/ImageDescComponent.module.css';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const ImageDescComponent = ({imageUrl, imageAlt, title, description}) => {
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
  const fadeInUp = useSpring({
    from: {transform: 'translateY(120%)'},
    to: {transform: dataRef?.isIntersecting ? 'translateY(0%)' : 'translateY(120%)'},
    delay: 300,
    config: {
      duration: 800,
    },
  });

  return (
    <div className={styles.container}>
      {title ? (
        <animated.div ref={triggerRef} style={fadeInUp} className={`${styles.title} ${styles.top}`}>
          {title}
          <span className={styles.dot}>.</span>
        </animated.div>
      ) : null}
      <div className="flex">
        <animated.div ref={triggerRef} style={fadeIn} className={styles.imageContainer}>
          <img src={imageUrl} className={styles.image} alt={imageAlt} />
        </animated.div>
        <div className={styles.textContainer}>
          {title ? (
            <div className="overflow-hidden">
              <animated.div
                ref={triggerRef}
                style={fadeInUp}
                className={`${styles.title} ${styles.bottom}`}
              >
                {title}
                <span className={styles.dot}>.</span>
              </animated.div>
            </div>
          ) : null}
          <animated.div ref={triggerRef} style={fadeIn} className={styles.description}>
            {description}
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default ImageDescComponent;
