import UpcomingFragmentCard from '../../src/components/UpcomingFragmentCard';

const FragmentSection = () => {
  return (
    <section className="pb-32">
      <div className="pb-14">
        <div className="text-5xl text-[#FFF] font-bold text-center pb-5">
          Upcoming Fragment Collection
          <span className="text-5xl text-[#406aff] p-0">.</span>
        </div>
        <div className="text-base text-[#E2E2E2] px-24 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor proin
          adipiscing lacus augue gravida et. Vulputate nunc tortor proin adipiscing lacus augue
          gravida et.
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <UpcomingFragmentCard type="ongoing" />
        <UpcomingFragmentCard />
        <UpcomingFragmentCard />
        <UpcomingFragmentCard />
      </div>
    </section>
  );
};

export default FragmentSection;
