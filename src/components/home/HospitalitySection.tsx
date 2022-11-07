import {Hospitality} from '@interfaces/HomeInterface';

const HomeHospitalitySection = () => {
  const Hospitality: Array<Hospitality> = [
    {
      name: 'Dummy',
      desc: 'Reducing human error by up to a 100%',
      image: '/images/pages/home/dummy-2.png',
    },
    {
      name: 'Dummy 2',
      desc: 'Achieving the highest staff efficiency with a 25% Staff Reduction',
      image: '/images/pages/home/dummy-3.png',
    },
    {
      name: 'Dummy 3',
      desc: 'Minimizing operating and electricity costs by up to 40%',
      image: '/images/pages/home/dummy-4.png',
    },
    {
      name: 'Dummy 4',
      desc: 'Increasing Gross Operating Profit between 50-100%',
      image: '/images/pages/home/dummy-5.png',
    },
    {
      name: 'Dummy 5',
      desc: 'Adopting Health & Safety Protocols for New Normal Hotels.',
      image: '/images/pages/home/dummy-6.png',
    },
    {
      name: 'Dummy 6',
      desc: 'Future digital app, connects with travel agencies.',
      image: '/images/pages/home/dummy-7.png',
    },
  ];

  return (
    <div className="py-24">
      <h1 className="text-[52px] text-blue font-bold text-center mb-16">Smart 4.0 Hospitality</h1>
      <div className="grid grid-cols-6 gap-x-6 px-4">
        {Hospitality.map(({name, desc, image}, index) => {
          return (
            <div key={index}>
              <div className="mb-4">
                <img src={image} alt={name} className="w-full" />
              </div>
              <div className="text-center text-blue text-sm font-normal px-2">{desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeHospitalitySection;
