import Image from 'next/legacy/image';

const ProfileTopSection = () => {
  return (
    <>
      <div className="relative">
        <div className="relative min-h-[430px] md:min-h-[500px] lg:min-h-[740px]">
          <Image
            src="/images/pages/profile/dummy-1.png"
            alt="Bali NFT Land"
            layout="fill"
            objectFit="cover"
            className="w-full"
            priority
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/[.20]"></div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
          <h1 className="text-center md:text-[72px] sm:text-4xl text-[27px] md:leading-[100px] text-white">
            <span className="font-bold">Bali NFT Land,</span>
            <br />
            NFT Property Developer.
          </h1>
        </div>
      </div>
      <div className="italic text-left text-blue md:text-[32px] text-base md:px-24 px-10 py-8 lg:py-14 md:leading-[45px]">
        <span className="font-bold">Bali NFT Land</span> is a decentralized
        property developer with no middleman and no high conventional marketing
        cost. The idea is to create a viable option for the people who are
        struggling to own a property because of the high cost and unavailability
        of liquidity.
      </div>
    </>
  );
};

export default ProfileTopSection;
