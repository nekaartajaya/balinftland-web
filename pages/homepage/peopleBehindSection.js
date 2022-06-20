import PeopleCard from '../../src/components/PeopleCard';

const PeopleBehindSection = () => {
  const list = [];

  for (let i = 1; i <= 4; i++) {
    list.push(<PeopleCard imageUrl={`/people${i}.svg`} />);
  }

  return (
    <section className="pb-20 tablet:pb-32">
      <div className="pb-8 tablet:pb-12">
        <div className="text-xl tablet:text-3xl desktop:text-5xl text-[#FFF] font-bold pb-4 tablet:pb-6 border-b-2 border-[#5B5B5B]">
          People Behind The Voyage
          <span className="text-xl tablet:text-3xl desktop:text-5xl text-[#406aff] p-0">.</span>
        </div>
      </div>
      <div className="tablet:grid grid-cols-4 tablet:gap-4">{list}</div>
    </section>
  );
};

export default PeopleBehindSection;
