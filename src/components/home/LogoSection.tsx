import { Logo } from '@interfaces/HomeInterface';
import { Avatar, useMediaQuery } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const HomeLogoSection = () => {
  const isTab = useMediaQuery('(max-width: 768px)', { noSsr: true });

  const Logo: Array<Logo> = [
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

  const responsive = {
    desktop: {
      breakpoint: { max: 9999, min: 769 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 768, min: 401 },
      items: 2,
      slidesToSlide: 2,
    },
    phone: {
      breakpoint: { max: 400, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="bg-[url('/images/pages/home/dummy-11.png')] bg-no-repeat bg-cover px-12 py-10">
      <div className="relative pb-[40px] md:pb-0">
        <div className="text-white md:text-[32px] text-xl font-bold tracking-[16px] relative w-full text-center py-6 px-4">
          <h1>OUR PARTNER</h1>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-y-6 py-10">
          <img
            src="/images/partners/blocksphere.png"
            alt="Logo Blocksphere"
            className="mx-auto"
          />
          <img
            src="/images/partners/paras.png"
            alt="Logo Paras"
            className="mx-auto"
          />
          <img
            src="/images/partners/myriad-town.png"
            alt="Logo Myriad Town"
            className="mx-auto"
          />
          <img
            src="/images/partners/myriad.png"
            alt="Logo Myriad"
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeLogoSection;
