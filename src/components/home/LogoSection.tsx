import {Avatar} from '@mui/material';

const HomeLogoSection = () => {
  const Logo = [
    {
      name: 'Logo',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam',
      logo: '',
    },
    {
      name: 'Logo 2',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam',
      logo: '',
    },
    {
      name: 'Logo 3',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam',
      logo: '',
    },
    {
      name: 'Logo 4',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam',
      logo: '',
    },
  ];
  return (
    <div className="flex justify-around items-center bg-[url('/images/pages/home/dummy-11.png')] px-12 py-16">
      {Logo.map(({name, desc, logo}, index) => {
        return (
          <div key={index} className="flex flex-col items-center text-center gap-y-4 text-white">
            <Avatar sx={{width: 100, height: 100}}> </Avatar>
            <h1 className="text-sm">{name}</h1>
            <div className="text-[10px] max-w-[180px]">{desc}</div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeLogoSection;
