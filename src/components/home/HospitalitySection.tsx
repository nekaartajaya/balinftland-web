import { Hospitality } from '@interfaces/HomeInterface';
import { useMediaQuery } from '@mui/material';
import Carousel from 'react-multi-carousel';

const HomeHospitalitySection = () => {
  const isLaptop = useMediaQuery('(max-width: 990px)', { noSsr: true });

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

  const responsive = {
    desktop: {
      breakpoint: { max: 9999, min: 991 },
      items: 6,
    },
    laptop: {
      breakpoint: { max: 990, min: 769 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 401 },
      items: 2,
      slidesToSlide: 1,
    },
    phone: {
      breakpoint: { max: 400, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="md:py-24 py-16 md:px-0 px-4">
      <h1 className="md:text-[52px] text-3xl text-blue font-bold text-center mb-16">
        Smart 4.0 Hospitality
      </h1>
      <div className="px-4 relative pb-10">
        <Carousel
          responsive={responsive}
          arrows={false}
          showDots={isLaptop ? true : false}
          renderDotsOutside={true}
          dotListClass={'slider-dot'}
        >
          {Hospitality.map(({ name, desc, image }, index) => {
            return (
              <div key={index} className="px-2">
                <div className="mb-4">
                  <img src={image} alt={name} className="w-full" />
                </div>
                <div className="text-center text-blue text-sm font-normal px-2">
                  {desc}
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default HomeHospitalitySection;
