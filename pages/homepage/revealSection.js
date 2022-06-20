/* eslint-disable @next/next/no-img-element */
const RevealSection = () => {
  return (
    <section className="pb-20 tablet:pb-32">
      <div className="pb-14">
        <div className="text-xl tablet:text-3xl desktop:text-5xl text-[#FFF] font-bold text-center pb-5">
          NFT Reveal
          <span className="text-xl tablet:text-3xl desktop:text-5xl text-[#406aff] p-0">.</span>
        </div>
        <div className="text-[12px] tablet:text-[14px] desktop:text-base text-[#E2E2E2] tablet:px-24 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor proin
          adipiscing lacus augue gravida et. Vulputate nunc tortor proin adipiscing lacus augue
          gravida et.
        </div>
      </div>
      <div className="tablet:grid tablet:grid-cols-3 tablet:gap-4">
        <img
          src={'/reveal1.svg'}
          className="w-full h-auto rounded-2 mb-4 tablet:mb-0"
          alt={'tes'}
        />
        <img
          src={'/reveal2.svg'}
          className="w-full h-auto rounded-2 mb-4 tablet:mb-0"
          alt={'tes'}
        />
        <img
          src={'/reveal3.svg'}
          className="w-full h-auto rounded-2 mb-4 tablet:mb-0"
          alt={'tes'}
        />
      </div>
    </section>
  );
};

export default RevealSection;
