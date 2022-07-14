import {useCallback, useMemo, useRef, useState} from 'react';
import Carousel from 'react-material-ui-carousel';
import {animated} from 'react-spring';

import styles from '../../../styles/limabeach/LuxuryPropertySection.module.css';
import sharedStyles from '../../../styles/limabeach/SharedStyles.module.css';

import {ArrowCircleLeft, ArrowCircleRight} from 'iconsax-react';
import {borderWidth, fadeIn, fadeInUpText} from 'src/animation';
import ListWithIcon from 'src/components/ListWithIcon';
import nftApartment from 'src/data/nftApartment';
import sliderApartment from 'src/data/sliderApartment';
import useIntersectionObserver from 'src/hooks/useIntersectionObserver';

const NFTApartment = () => {
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {});
  const visible = dataRef?.isIntersecting;

  // Slide
  const [activeChild, setActiveChild] = useState(0);

  const items = useMemo(() => sliderApartment, []);

  const changeChild = useCallback(
    type => {
      if (type === 'prev') {
        setActiveChild(a => (a - 1 < 0 ? items.length - 1 : a - 1));
      } else if (type === 'next') {
        setActiveChild(a => (a + 1 > items.length - 1 ? 0 : a + 1));
      }
    },
    [items],
  );

  return (
    <>
      <div
        className={`${sharedStyles.flexColumnStartContainer} ${sharedStyles.flexOrder3} ${styles.root} w-full`}
      >
        <div className="overflow-hidden flex justify-between items-center w-full">
          <animated.div
            className={`text-[24px] desktop:text-[48px] text-white font-bold`}
            ref={triggerRef}
            style={fadeInUpText(visible)}
          >
            NFT Apartment<span className={sharedStyles.titleDot}>.</span>
          </animated.div>
          <div className="flex items-center gap-x-3 desktop:gap-x-4">
            <ArrowCircleLeft
              className="w-[26px] h-[26px] desktop:w-[33px] desktop:h-[33px] cursor-pointer"
              color="#FFF"
              onClick={() => changeChild('prev')}
            />
            <ArrowCircleRight
              className="w-[26px] h-[26px] desktop:w-[33px] desktop:h-[33px] cursor-pointer"
              color="#FFF"
              onClick={() => changeChild('next')}
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
        <div className="w-full">
          <animated.div className="w-full mb-8" ref={triggerRef} style={fadeIn(visible)}>
            <Carousel
              indicatorContainerProps={{
                style: {
                  marginTop: '-30px',
                  position: 'absolute',
                  zIndex: 1,
                },
              }}
              activeIndicatorIconButtonProps={{
                style: {
                  color: '#406AFF',
                },
              }}
              indicatorIconButtonProps={{
                style: {
                  color: 'rgba(255, 255, 255, 0.4)',
                },
              }}
              navButtonsAlwaysInvisible
              index={activeChild}
              autoPlay={false}
            >
              {items.map((item, i) => (
                <div key={i} className={sharedStyles.responsive}>
                  <img src={item.imageUrl} alt={item.imageAlt} className="w-full" />
                </div>
              ))}
            </Carousel>
          </animated.div>
          <div className="desktop:grid grid-cols-2">
            {nftApartment.map((v, i) => {
              return <ListWithIcon key={i} title={v.title} list={v.list} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTApartment;
