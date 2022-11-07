import {UnitMetaverse} from '@interfaces/HomeInterface';

const HomeUnitSection = () => {
  const UnitMetaverse: Array<UnitMetaverse> = [
    {
      name: 'Dummy',
      image: '/images/pages/home/dummy-8.png',
    },
    {
      name: 'Dummy 2',
      image: '/images/pages/home/dummy-9.png',
    },
    {
      name: 'Dummy 3',
      image: '/images/pages/home/dummy-10.png',
    },
  ];

  return (
    <div className="bg-dark-blue px-10 py-20">
      <h1 className="text-[52px] font-extrabold text-center text-white mb-8">
        SHOW UNIT METAVERSE
      </h1>
      <div className="grid grid-cols-3 gap-8">
        {UnitMetaverse.map(({name, image}, index) => {
          return (
            <div key={index}>
              <div className="mb-4">
                <img src={image} alt={name} className="w-full" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeUnitSection;
