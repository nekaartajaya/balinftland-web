import { Logo } from '@interfaces/HomeInterface';
import { Avatar, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { blocksphere, myriad, myriadtown, paras } from '@assets/images';

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
    <div className="bg-[url('/images/pages/home/dummy-11.png')] bg-no-repeat bg-cover md:px-12 px-4 md:py-6">
      <div className="relative pb-[40px] md:pb-0">
        <div className="text-white md:text-[32px] text-md font-bold md:tracking-[16px] tracking-[6px] relative w-full text-center py-4 px-4">
          <h1>OUR PARTNER</h1>
        </div>
        <div className="grid grid-cols-4 gap-y-6 md:py-8">
          <div className="w-full md:h-[150px] h-[55px] relative mx-auto">
            <Image
              src={blocksphere}
              alt="Home Top Section"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="w-full md:h-[150px] h-[55px] relative mx-auto">
            <Image
              src={paras}
              alt="Home Top Section"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="w-full md:h-[150px] h-[55px] relative mx-auto">
            <Image
              src={myriadtown}
              alt="Home Top Section"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="w-full md:h-[150px] h-[55px] relative mx-auto">
            <Image
              src={myriad}
              alt="Home Top Section"
              layout="fill"
              objectFit="contain"
            />
          </div>
          {/* <Image
            src="/images/partners/paras.png"
            alt="Logo Paras"
            className="mx-auto"
          />
          <Image
            src="/images/partners/myriad-town.png"
            alt="Logo Myriad Town"
            className="mx-auto"
          />
          <Image
            src="/images/partners/myriad.png"
            alt="Logo Myriad"
            className="mx-auto"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default HomeLogoSection;
