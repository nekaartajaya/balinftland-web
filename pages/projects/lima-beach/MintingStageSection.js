import useMediaQuery from '@mui/material/useMediaQuery';

import {useRef} from 'react';
import {animated} from 'react-spring';

import {fadeIn, fadeInUpText} from 'src/animation';
import MintingStage from 'src/components/MintingStage';
import useIntersectionObserver from 'src/hooks/useIntersectionObserver';
import styles from 'styles/limabeach/MintingStage.module.css';
import sharedStyles from 'styles/limabeach/SharedStyles.module.css';

const MintingStageSection = () => {
  const isDesktop = useMediaQuery('(min-width:920px)', {noSsr: true});
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
    <div className={`${styles.root} ${sharedStyles.flexOrder9}`}>
      <div className="pb-8 tablet:pb-14">
        <div className="overflow-hidden">
          <animated.div
            className="text-xl tablet:text-3xl desktop:text-5xl text-[#FFF] font-bold text-center pb-5"
            ref={triggerAnimation.title}
            style={fadeInUpText(visibleAnimation.title)}
          >
            Lima Beach NFT Minting Stage
            <span className="text-xl tablet:text-3xl desktop:text-5xl text-[#406aff] p-0">.</span>
          </animated.div>
        </div>
        <animated.div
          className="text-[12px] tablet:text-[14px] desktop:text-base text-[#E2E2E2] desktop:px-24 text-center"
          ref={triggerAnimation.subtitle}
          style={fadeIn(visibleAnimation.subtitle)}
        >
          Currently, the market price of a luxury apartment is $210,000. If you enter the project
          early, each NFT fragment will cost $10,000, making the total cost of seven NFT fragments
          around $70,000, a third (33%) of the current market price.
        </animated.div>
      </div>
      <div className={styles.imageDescContainer}>
        <MintingStage
          title="Physical Land Stage, with $10,000 each Fragment"
          description="The first NFT auction will be to purchase physical land on which to build the property. Anyone who participates in the first auction will mint an $US10,000 NFT fragment. In this stage, each NFT apartment will cost $US70,000, and it is the lowest stage to get the best price."
          imageUrl="/NFTStage1_1.svg"
          imageAlt="NFT Stage 1 illustration"
        />
        <MintingStage
          title="Physical Land Stage, with $10,000 each Fragment"
          description="The first NFT auction will be to purchase physical land on which to build the property. Anyone who participates in the first auction will mint an $US10,000 NFT fragment. In this stage, each NFT apartment will cost $US70,000, and it is the lowest stage to get the best price."
          imageUrl="/NFTStage2_1.svg"
          imageAlt="NFT Stage 2 illustration"
        />
        <MintingStage
          title="Physical Land Stage, with $10,000 each Fragment"
          description="The first NFT auction will be to purchase physical land on which to build the property. Anyone who participates in the first auction will mint an $US10,000 NFT fragment. In this stage, each NFT apartment will cost $US70,000, and it is the lowest stage to get the best price."
          imageUrl="/NFTStage3_1.svg"
          imageAlt="NFT Stage 3 illustration"
        />
        <MintingStage
          title="Physical Land Stage, with $10,000 each Fragment"
          description="The first NFT auction will be to purchase physical land on which to build the property. Anyone who participates in the first auction will mint an $US10,000 NFT fragment. In this stage, each NFT apartment will cost $US70,000, and it is the lowest stage to get the best price."
          imageUrl="/NFTStage4.svg"
          imageAlt="NFT Stage 4 illustration"
        />
      </div>
      <div
        className={`bg-[#344054] min-h-[200px] mt-6 flex tablet:flex-row flex-col tablet:justify-between justify-center tablet:items-center items-start w-full tablet:px-8 px-[20%] gap-4`}
      >
        <h1 className="text-white text-[16px] tablet:text-[24px] desktop:text-[32px]">
          Are you interested? {isDesktop ? '' : <br />}Mint Now!
        </h1>
        <button className="min-w-max text-white uppercase px-6 py-4" disabled>
          Go to minting page
        </button>
      </div>
    </div>
  );
};

export default MintingStageSection;
