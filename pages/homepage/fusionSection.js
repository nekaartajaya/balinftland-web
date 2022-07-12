/* eslint-disable @next/next/no-img-element */
import {useRef} from 'react';
import {animated} from 'react-spring';

import {fadeIn, fadeInUpText} from '../../src/animation';
import useIntersectionObserver from '../../src/hooks/useIntersectionObserver';

const FusionSection = () => {
  // animation trigger
  const triggerAnimation = {
    title: useRef(),
    subtitle: useRef(),
    content: useRef(),
  };

  // visible on viewport
  const visibleAnimation = {
    title: useIntersectionObserver(triggerAnimation.title, {})?.isIntersecting,
    subtitle: useIntersectionObserver(triggerAnimation.subtitle, {})?.isIntersecting,
    content: useIntersectionObserver(triggerAnimation.content, {})?.isIntersecting,
  };

  return (
    <section className="pb-20 tablet:pb-32">
      <div className="pb-8 tablet:pb-14">
        <div className="overflow-hidden">
          <animated.div
            className="text-xl tablet:text-3xl desktop:text-5xl text-[#FFF] font-bold text-center pb-5"
            ref={triggerAnimation.title}
            style={fadeInUpText(visibleAnimation.title)}
          >
            Apartment Fusion
            <span className="text-xl tablet:text-3xl desktop:text-5xl text-[#406aff] p-0">.</span>
          </animated.div>
        </div>
        <animated.div
          className="text-[12px] tablet:text-[14px] desktop:text-base text-[#E2E2E2] desktop:px-24 text-center"
          ref={triggerAnimation.subtitle}
          style={fadeIn(visibleAnimation.subtitle)}
        >
          All four-stage fragments of the NFT can be combined, the possibility of obtaining an NFT
          SkyVilla is between 1 - 4 %. The 7 NFT fragments form one NFT Apartment or SkyVilla. Each
          stage's fragments will have a distinct possibility of obtaining a SkyVilla. People with 7
          NFT fragments on the most recent stage have a greater chance of obtaining Skyvilla through
          Fusion, as there are only 3 NFT SkyVillas out of 253.
        </animated.div>
      </div>
      <animated.div
        className="w-full"
        ref={triggerAnimation.content}
        style={fadeIn(visibleAnimation.content)}
      >
        <img src={'/Fusion.svg'} className="w-full h-auto mb-4 tablet:mb-0" alt={'Image Fusion'} />
      </animated.div>
    </section>
  );
};

export default FusionSection;
