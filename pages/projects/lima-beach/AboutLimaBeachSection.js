import {Location} from 'iconsax-react';
import SponsorSection from 'pages/homepage/sponsorSection';
import SectionBreak from 'src/components/SectionBreak';
import styles from 'styles/limabeach/AboutLimaBeachSection.module.css';
import sharedStyles from 'styles/limabeach/SharedStyles.module.css';

const AboutLimaBeachSection = () => {
  return (
    <>
      <SponsorSection />
      <div className={styles.root}>
        <div className={`mb-5 desktop:mb-0 w-full`}>
          <img
            src={'/Limabeach/what.png'}
            alt="Lima Beach illustration"
            className="w-full h-[250px] object-cover object-center desktop:h-auto"
          />
        </div>
        <div className={styles.descriptionContainer}>
          <h1 className={styles.titleBig}>
            What is Lima Beach NFT<span className={sharedStyles.titleDot}>.</span>
          </h1>

          <div className={styles.locationContainer}>
            <Location color="#fff" variant="Bold" size={20} />

            <div className="font-normal text-base text-[#E2E2E2] whitespace-nowrap">
              Canggu, Bali, Indonesia
            </div>
          </div>
          <div className={styles.description}>
            The first decentralised property project from Bali NFT Land is called The Lima Beach
            Signature. Each Lima Beach Signature NFT represents the physical ownership of an
            apartment that leaseholders in Pantai Lima, Canggu, Bali, may use for occupancy. Each
            physical apartment in Lima Beach Signature is a luxury, IoT Technology enabled smart
            condo with premium services.
          </div>
          <div className={styles.description}>
            Having a housing that is affordable is beneficial for the growth of communities. When
            there are more affordable houses in a community, it becomes more sustainable, and the
            neighbourhood becomes safer and more secure, since the significant economic effects
            improve local purchasing power and career opportunities.
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutLimaBeachSection;
