import Subtitle from '@components/global/Subtitle';
import {TeamInterface} from '@interfaces/ProfileInterface';

const ProfileTeamSection = () => {
  const team: Array<TeamInterface> = [
    {
      imageUrl: '/images/pages/profile/team/1.png',
      imageAlt: 'BUDI TIANDY',
      name: 'BUDI TIANDY',
      position: 'Chief Executive Officer',
    },
    {
      imageUrl: '/images/pages/profile/team/2.png',
      imageAlt: 'BOGANK SERPIYADI',
      name: 'BOGANK SERPIYADI',
      position: 'Chief Operating Officer',
    },
    {
      imageUrl: '/images/pages/profile/team/3.png',
      imageAlt: 'GILANG BHAGASKARA',
      name: 'GILANG BHAGASKARA',
      position: 'Chief Technology Officer',
    },
    {
      imageUrl: '/images/pages/profile/team/4.png',
      imageAlt: 'IRMAN NUR MUHAMMAD ALAMSYAH',
      name: 'IRMAN NUR MUHAMMAD ALAMSYAH',
      position: 'Software Architect',
    },
    {
      imageUrl: '/images/pages/profile/team/5.png',
      imageAlt: 'ANTON EMIL',
      name: 'ANTON EMIL',
      position: 'Blockchain Expert',
    },
    {
      imageUrl: '/images/pages/profile/team/6.png',
      imageAlt: 'MOCHAMMAD HUSNI RIZAL',
      name: 'MOCHAMMAD HUSNI RIZAL',
      position: 'Frontend Dev - Polkadot Ambassador',
    },
    {
      imageUrl: '/images/pages/profile/team/7.png',
      imageAlt: 'NEKA ARTAJAYA',
      name: 'NEKA ARTAJAYA',
      position: 'Frontend Dev',
    },
    {
      imageUrl: '/images/pages/profile/team/8.png',
      imageAlt: 'MUHAMMAD HAIDAR AL MUTAWAKKIL',
      name: 'MUHAMMAD HAIDAR AL MUTAWAKKIL',
      position: 'UI/UX Designer',
    },
  ];

  return (
    <div className="py-20 px-8">
      <Subtitle text="Team" classes="mb-10" />

      <div className="grid grid-cols-4 gap-8">
        {team.map((item: TeamInterface, index: number) => {
          return (
            <div key={index}>
              <img src={item.imageUrl} alt={item.imageAlt} className="w-full mb-4" />
              <div className="text-center text-blue tracking-wider">
                <h1 className="font-bold text-[20px]">{item.name}</h1>
                <span className="text-base font-medium">{item.position}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileTeamSection;
