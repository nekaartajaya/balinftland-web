import {Logo} from '@interfaces/HomeInterface';
import {Avatar, useMediaQuery} from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const HomeLogoSection = () => {
  const isTab = useMediaQuery('(max-width: 768px)', {noSsr: true});

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
      breakpoint: {max: 9999, min: 769},
      items: 4,
    },
    tablet: {
      breakpoint: {max: 768, min: 401},
      items: 2,
      slidesToSlide: 2,
    },
    phone: {
      breakpoint: {max: 400, min: 0},
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="bg-[url('/images/pages/home/dummy-11.png')] bg-no-repeat bg-cover px-12 py-16">
      <div className="relative pb-[40px] md:pb-0">
        <Carousel
          responsive={responsive}
          arrows={false}
          showDots={isTab ? true : false}
          renderDotsOutside={true}
          dotListClass={'slider-dot'}
        >
          {Logo.map(({name, desc}, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-y-4 text-white"
              >
                <Avatar sx={{width: 100, height: 100}}> </Avatar>
                <h1 className="text-sm">{name}</h1>
                <div className="text-[10px] max-w-[180px]">{desc}</div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default HomeLogoSection;
