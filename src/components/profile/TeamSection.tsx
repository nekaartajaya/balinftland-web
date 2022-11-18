import Subtitle from '@components/global/Subtitle';
import { TeamInterface } from '@interfaces/ProfileInterface';

const ProfileTeamSection = () => {
  const team: Array<TeamInterface> = [
    {
      imageUrl: 'images/pages/profile/team/1.png',
      imageAlt: 'BUDI TIANDY',
      name: 'BUDI TIANDY',
      position: 'Chief Executive Officer',
    },
    {
      imageUrl: 'images/pages/profile/team/2.png',
      imageAlt: 'BOGANK SERPIYADI',
      name: 'BOGANK SERPIYADI',
      position: 'Chief Operating Officer',
    },
    {
      imageUrl: 'images/pages/profile/team/3.png',
      imageAlt: 'GILANG BHAGASKARA',
      name: 'GILANG BHAGASKARA',
      position: 'Chief Technology Officer',
    },
    {
      imageUrl: 'images/pages/profile/team/4.png',
      imageAlt: 'IRMAN NUR MUHAMMAD ALAMSYAH',
      name: 'IRMAN NUR MUHAMMAD ALAMSYAH',
      position: 'Software Architect',
    },
    {
      imageUrl: 'images/pages/profile/team/5.png',
      imageAlt: 'ANTON EMIL',
      name: 'ANTON EMIL',
      position: 'Blockchain Expert',
    },
    {
      imageUrl: 'images/pages/profile/team/6.png',
      imageAlt: 'MOCHAMMAD HUSNI RIZAL',
      name: 'MOCHAMMAD HUSNI RIZAL',
      position: 'Frontend Dev - Polkadot Ambassador',
    },
    {
      imageUrl: 'images/pages/profile/team/7.png',
      imageAlt: 'NEKA ARTAJAYA',
      name: 'NEKA ARTAJAYA',
      position: 'Frontend Dev',
    },
    {
      imageUrl: 'images/pages/profile/team/8.png',
      imageAlt: 'MUHAMMAD HAIDAR AL MUTAWAKKIL',
      name: 'MUHAMMAD HAIDAR AL MUTAWAKKIL',
      position: 'UI/UX Designer',
    },
  ];

  return (
    <div className="py-20 md:px-8 px-4">
      <Subtitle text="Team" classes="mb-10" />

      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-x-12 gap-x-4 gap-y-6 md:px-10 px-0">
        {team.map((item: TeamInterface, index: number) => {
          return (
            <div key={index}>
              <img
                src={item.imageUrl}
                alt={item.imageAlt}
                className="w-full mb-4"
              />
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
