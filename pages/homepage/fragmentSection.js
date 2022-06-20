import UpcomingFragmentCard from '../../src/components/UpcomingFragmentCard';

const FragmentSection = () => {
  return (
    <section className="pb-20 tablet:pb-32">
      <div className="pb-14">
        <div className="text-xl tablet:text-3xl desktop:text-5xl text-[#FFF] font-bold text-center pb-5">
          Upcoming Fragment Collection
          <span className="text-xl tablet:text-3xl desktop:text-5xl text-[#406aff] p-0">.</span>
        </div>
        <div className="text-[12px] tablet:text-[14px] desktop:text-base text-[#E2E2E2] tablet:px-24 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor proin
          adipiscing lacus augue gravida et. Vulputate nunc tortor proin adipiscing lacus augue
          gravida et.
        </div>
      </div>
      <div className="tablet:grid grid-cols-4 gap-4">
        <UpcomingFragmentCard
          type="ongoing"
          title={'LIMA BEACH SIGNATURE NFT'}
          description={'CANGGU, BALI'}
          imageUrl={'/fragment1.svg'}
        />
        <UpcomingFragmentCard imageUrl={'/fragment2.svg'} />
        <UpcomingFragmentCard imageUrl={'/fragment3.svg'} />
        <UpcomingFragmentCard imageUrl={'/fragment4.svg'} />
      </div>
    </section>
  );
};

export default FragmentSection;
