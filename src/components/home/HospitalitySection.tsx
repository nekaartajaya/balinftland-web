import {
  hospitality1,
  hospitality2,
  hospitality3,
  hospitality4,
  hospitality5,
  hospitality6,
} from '@assets/images';
import { Hospitality } from '@interfaces/HomeInterface';
import Image from 'next/image';

const HomeHospitalitySection = () => {
  const Hospitality: Array<Hospitality> = [
    {
      name: 'Dummy',
      desc: 'Reducing human error by up to a 100%',
      image: hospitality1,
    },
    {
      name: 'Dummy 2',
      desc: 'Achieving the highest staff efficiency with a 25% Staff Reduction',
      image: hospitality2,
    },
    {
      name: 'Dummy 3',
      desc: 'Minimizing operating and electricity costs by up to 40%',
      image: hospitality3,
    },
    {
      name: 'Dummy 4',
      desc: 'Increasing Gross Operating Profit between 50-100%',
      image: hospitality4,
    },
    {
      name: 'Dummy 5',
      desc: 'Adopting Health & Safety Protocols for New Normal Hotels.',
      image: hospitality5,
    },
    {
      name: 'Dummy 6',
      desc: 'Future digital app, connects with travel agencies.',
      image: hospitality6,
    },
  ];

  return (
    <div className="md:py-24 py-8 px-6 border-b">
      <h1 className="md:text-[52px] sm:text-3xl text-2xl text-blue font-bold md:text-left text-center sm:mb-16 mb-10">
        Smart 4.0 Hospitality
      </h1>
      <div className="grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-1 relative pb-10 gap-x-6 lg:gap-y-0 sm:gap-y-8 gap-y-12">
        {Hospitality.map(({ name, desc, image }, index) => {
          return (
            <div key={index} className="">
              <div className="mb-4 w-full border">
                <Image src={image ?? ''} alt={name} className={'w-full'} />
              </div>
              <div className="sm:text-center text-left text-blue text-sm font-normal px-2">
                {desc}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeHospitalitySection;
