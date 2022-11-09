const ProfileTopSection = () => {
  return (
    <>
      <div className="relative">
        <img src="/images/pages/profile/dummy-1.png" alt="Bali NFT Land" className="w-full" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/[.20]"></div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
          <h1 className="text-center text-[72px] text-white">
            <span className="font-bold">Bali NFT Land,</span>
            <br />
            NFT Property Developer.
          </h1>
        </div>
      </div>
      <div className="italic text-center text-blue text-[32px] px-24 py-10">
        <span className="font-bold">Bali NFT Land</span> is a decentralized property developer with
        no middleman and no high conventional marketing cost. The idea is to create a viable option
        for the people who are struggling to own a property because of the high cost and
        unavailability of liquidity.
      </div>
    </>
  );
};

export default ProfileTopSection;
