import PeopleCard from '../../src/components/PeopleCard';

const PeopleBehindSection = () => {
  const list = [];

  for (let i = 1; i <= 4; i++) {
    list.push(<PeopleCard imageUrl={`/people${i}.svg`} />);
  }

  return (
    <section className="pb-32">
      <div className="pb-12">
        <div className="text-5xl text-[#FFF] font-bold pb-6 border-b-2 border-[#5B5B5B]">
          People Behind The Voyage
          <span className="text-5xl text-[#406aff] p-0">.</span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">{list}</div>
    </section>
  );
};

export default PeopleBehindSection;
