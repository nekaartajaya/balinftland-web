import Subtitle from '@components/global/Subtitle';
import Image from 'next/legacy/image';

const ProfileDistributionSection = () => {
  return (
    <div className="bg-dark-blue md:py-8 pt-8 pb-20">
      <div className="text-white relative md:mb-6 mb-8 pb-10  md:px-24 px-10">
        <Subtitle text="NFT Distribution" classes="!text-white md:!text-left" />
        <span className="absolute left-1/2 md:translate-x-0 translate-x-[-50%] bottom-0">
          1,771 NFT Fragment
        </span>
      </div>

      <div className="w-full mx-auto relative md:block hidden ">
        <Image
          src="/images/pages/profile/dummy-3.png"
          alt="Vision"
          layout="responsive"
          objectFit="contain"
          width={100}
          height={50}
        />
      </div>

      <div className="w-full mx-auto relative mb-12 md:hidden">
        <Image
          src="/images/pages/profile/dummy-9.png"
          alt="Vision"
          layout="responsive"
          objectFit="contain"
          width={100}
          height={50}
        />
      </div>
      <div className="w-full  mx-auto relative md:hidden">
        <Image
          src="/images/pages/profile/dummy-10.png"
          alt="Vision"
          layout="responsive"
          objectFit="contain"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default ProfileDistributionSection;
