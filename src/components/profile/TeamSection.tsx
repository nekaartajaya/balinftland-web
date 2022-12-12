import Subtitle from '@components/global/Subtitle';
import { TeamInterface } from '@interfaces/ProfileInterface';
import Image from 'next/legacy/image';

const ProfileTeamSection = () => {
  const team: Array<TeamInterface> = [
    {
      imageUrl: '/images/pages/profile/Team/1.png',
      imageAlt: 'BUDI TIANDY',
      name: 'BUDI TIANDY',
      position: 'Chief Executive Officer',
    },
    {
      imageUrl: '/images/pages/profile/Team/2.png',
      imageAlt: 'BOGANK SERPIYADI',
      name: 'BOGANK SERPIYADI',
      position: 'Chief Operating Officer',
    },
    {
      imageUrl: '/images/pages/profile/Team/3.png',
      imageAlt: 'GILANG BHAGASKARA',
      name: 'GILANG BHAGASKARA',
      position: 'Chief Technology Officer',
    },
    {
      imageUrl: '/images/pages/profile/Team/4.png',
      imageAlt: 'IRMAN NUR MUHAMMAD ALAMSYAH',
      name: 'IRMAN NUR MUHAMMAD ALAMSYAH',
      position: 'Software Architect',
    },
    {
      imageUrl: '/images/pages/profile/Team/5.png',
      imageAlt: 'ANTON EMIL',
      name: 'ANTON EMIL',
      position: 'Blockchain Expert',
    },
    {
      imageUrl: '/images/pages/profile/Team/6.png',
      imageAlt: 'MOCHAMMAD HUSNI RIZAL',
      name: 'MOCHAMMAD HUSNI RIZAL',
      position: 'Frontend Dev - Polkadot Ambassador',
    },
    {
      imageUrl: '/images/pages/profile/Team/7.png',
      imageAlt: 'NEKA ARTAJAYA',
      name: 'NEKA ARTAJAYA',
      position: 'Frontend Dev',
    },
    {
      imageUrl: '/images/pages/profile/Team/8.png',
      imageAlt: 'MUHAMMAD HAIDAR AL MUTAWAKKIL',
      name: 'MUHAMMAD HAIDAR AL MUTAWAKKIL',
      position: 'UI/UX Designer',
    },
  ];

  return (
    <div className="py-20 md:px-24 px-6">
      <Subtitle text="Team" classes="md:mb-16 md:!text-left text-3xl" />

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-x-12 gap-x-4 gap-y-6">
        {team.map((item: TeamInterface, index: number) => {
          return (
            <div key={index}>
              <div className="w-full mx-auto relative">
                <Image
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  layout="responsive"
                  objectFit="contain"
                  width={100}
                  height={180}
                />
              </div>
              <div className="text-center text-blue tracking-wider">
                <h1 className="font-bold md:text-[20px] text-base mb-1">
                  {item.name}
                </h1>
                <span className="md:text-base text-sm font-medium">
                  {item.position}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileTeamSection;
