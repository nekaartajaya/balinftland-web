import {useRef} from 'react';
import {animated} from 'react-spring';

import {borderWidth, fadeIn, fadeInUpText} from '../../src/animation';
import PeopleCard from '../../src/components/PeopleCard';
import useIntersectionObserver from '../../src/hooks/useIntersectionObserver';

const StakingSection = () => {
  // animation trigger
  const triggerAnimation = {
    title: useRef(),
    image: useRef(),
    content: useRef(),
  };

  // visible on viewport
  const visibleAnimation = {
    title: useIntersectionObserver(triggerAnimation.title, {})?.isIntersecting,
    image: useIntersectionObserver(triggerAnimation.image, {})?.isIntersecting,
    content: useIntersectionObserver(triggerAnimation.image, {})?.isIntersecting,
  };

  return (
    <section className="pb-20 tablet:pb-32">
      <div className="pb-8 tablet:pb-12">
        <div className="overflow-hidden mb-4 tablet:mb-6">
          <animated.div
            className="text-xl tablet:text-3xl desktop:text-5xl text-[#FFF] font-bold"
            ref={triggerAnimation.title}
            style={fadeInUpText(visibleAnimation.title)}
          >
            DeFi NFT Staking and Collateral
            <span className="text-xl tablet:text-3xl desktop:text-5xl text-[#406aff] p-0">.</span>
          </animated.div>
        </div>
        <animated.div
          className="border-b-2 border-[#5B5B5B] float-right"
          style={borderWidth(visibleAnimation.title)}
        ></animated.div>
      </div>
      <animated.div
        className=""
        ref={triggerAnimation.image}
        style={fadeIn(visibleAnimation.image)}
      >
        <img
          src={'/Staking.svg'}
          className="w-full h-auto rounded-2 mb-4 tablet:mb-6"
          alt={'Staking Image'}
        />
      </animated.div>
      <animated.div
        className=""
        ref={triggerAnimation.content}
        style={fadeIn(visibleAnimation.content)}
      >
        <div className="text-[12px] tablet:text-[14px] desktop:text-base text-[#E2E2E2] leading-5 mb-8">
          NFT Owners will get guaranteed staking rewards for $1,650/fragment or $11,550/apartment
          per year. The occupants meet more than 210 days threshold, then there are any additional
          staking rewards for NFT Owners who stake their NFT Apartment / NFT SkyVilla. The
          additional staking rewards are considered floating profit calculated from the rest of 155
          days out of 365 days.
        </div>
        <div className="desktop:grid desktop:grid-cols-2 desktop:gap-x-32 text-[#E2E2E2]">
          <div>
            <div className="text-[#FFF] text-[14px] tablet:text-[24px] mb-4 font-semibold">
              Staking+ to get 1 NFT Apartment
            </div>
            <div className="text-[12px] tablet:text-[14px] desktop:text-base leading-6">
              NFT Owners can stake their NFT Apartment in the DeFi DApp where they will be unable to
              use staked NFT Apartment and doesn’t get staking APY (based on staking APY table
              above) for 5 years in order to get 1 additional NFT apartments in the second project
              (TBA) after 5 years.
            </div>
          </div>
          <div>
            <div className="text-[#FFF] text-[14px] tablet:text-[24px] mb-4 font-semibold">
              Collateral
            </div>
            <div className="text-[12px] tablet:text-[14px] desktop:text-base leading-6">
              NFT Owners can get a stable coin loan from the hospitality management by putting up
              NFT fragments or NFT Apartment/SkyVilla as collateral. If the loan and interest aren't
              paid back by a certain date, hospitality Management will take the NFT as collateral.
            </div>
          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default StakingSection;
