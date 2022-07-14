import {useRef} from 'react';
import Carousel from 'react-multi-carousel';
import {animated} from 'react-spring';

import {ArrowCircleLeft, ArrowCircleRight} from 'iconsax-react';
import 'react-multi-carousel/lib/styles.css';
import {borderWidth, fadeIn, fadeInUpText} from 'src/animation';
import sliderBlueprint from 'src/data/sliderBlueprint';
import useIntersectionObserver from 'src/hooks/useIntersectionObserver';
import styles from 'styles/limabeach/BluePrintSection.module.css';
import sharedStyles from 'styles/limabeach/SharedStyles.module.css';

const BluePrintSection = () => {
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {});
  const visible = dataRef?.isIntersecting;

  const items = sliderBlueprint;

  const carouselRef = useRef();

  const responsive = {
    desktop: {
      breakpoint: {max: 4000, min: 921},
      items: 4,
    },
    tablet: {
      breakpoint: {max: 920, min: 426},
      items: 4,
    },
    mobile: {
      breakpoint: {max: 425, min: 0},
      items: 2,
    },
  };

  return (
    <div
      className={`${sharedStyles.flexColumnStartContainer} ${sharedStyles.flexOrder5} ${styles.root}`}
    >
      <div className="overflow-hidden flex justify-between items-center w-full">
        <animated.div
          className={`text-[24px] desktop:text-[48px] text-white font-bold`}
          ref={triggerRef}
          style={fadeInUpText(visible)}
        >
          Blue Print Sneak Peak<span className={sharedStyles.titleDot}>.</span>
        </animated.div>
        <div className="flex items-center gap-x-3 desktop:gap-x-4">
          <ArrowCircleLeft
            className="w-[26px] h-[26px] desktop:w-[33px] desktop:h-[33px] cursor-pointer"
            color="#FFF"
            onClick={() => {
              carouselRef.current.previous();
            }}
          />
          <ArrowCircleRight
            className="w-[26px] h-[26px] desktop:w-[33px] desktop:h-[33px] cursor-pointer"
            color="#FFF"
            onClick={() => {
              carouselRef.current.next();
            }}
          />
        </div>
      </div>
      <div className="w-full inline-block">
        <animated.div
          className={sharedStyles.titleBorder}
          ref={triggerRef}
          style={borderWidth(visible)}
        ></animated.div>
      </div>
      <animated.div className="w-full" ref={triggerRef} style={fadeIn(visible)}>
        <Carousel
          ref={carouselRef}
          arrows={false}
          responsive={responsive}
          infinite
          itemClass="px-2"
          containerClass="mx-[-8px]"
        >
          {items.map((item, i) => (
            <div key={i}>
              <img src={item.imageUrl} alt={item.imageAlt} className="w-full" />
            </div>
          ))}
        </Carousel>
      </animated.div>
    </div>
  );
};

export default BluePrintSection;
