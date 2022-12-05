import { unitmetaverse1, unitmetaverse2, unitmetaverse3 } from '@assets/images';
import { UnitMetaverse } from '@interfaces/HomeInterface';
import { useMediaQuery } from '@mui/material';
import Image from 'next/image';

const HomeUnitSection = () => {
  const isTab = useMediaQuery('(max-width: 990px)', { noSsr: true });

  const UnitMetaverse: Array<UnitMetaverse> = [
    {
      name: 'Dummy',
      image: unitmetaverse1,
    },
    {
      name: 'Dummy 2',
      image: unitmetaverse2,
    },
    {
      name: 'Dummy 3',
      image: unitmetaverse3,
    },
  ];

  return (
    <div className="bg-dark-blue md:px-10 md:py-20 py-6 px-4">
      <h1 className="lg:text-[52px] md:text-3xl text-2xl font-extrabold text-center text-white md:mb-16 mb-10 mt-6">
        SHOW UNIT METAVERSE
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-x-6 gap-y-10 px-4 relative pb-10">
        {UnitMetaverse.map(({ name, image }, index) => {
          return (
            <div key={index}>
              <Image src={image ?? ''} alt={name} className="w-full" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeUnitSection;
