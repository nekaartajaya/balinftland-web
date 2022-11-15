import {UnitMetaverse} from '@interfaces/HomeInterface';
import {useMediaQuery} from '@mui/material';
import Carousel from 'react-multi-carousel';

const HomeUnitSection = () => {
  const isTab = useMediaQuery('(max-width: 990px)', {noSsr: true});

  const UnitMetaverse: Array<UnitMetaverse> = [
    {
      name: 'Dummy',
      image: '/images/pages/home/dummy-8.png',
    },
    {
      name: 'Dummy 2',
      image: '/images/pages/home/dummy-9.png',
    },
    {
      name: 'Dummy 3',
      image: '/images/pages/home/dummy-10.png',
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: {max: 9999, min: 991},
      items: 3,
    },
    laptop: {
      breakpoint: {max: 990, min: 769},
      items: 2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: {max: 768, min: 0},
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="bg-dark-blue md:px-10 md:py-20 py-16 px-4">
      <h1 className="md:text-[52px] text-3xl font-extrabold text-center text-white mb-16">
        SHOW UNIT METAVERSE
      </h1>
      <div className="px-4 relative pb-10">
        <Carousel
          responsive={responsive}
          arrows={false}
          showDots={isTab ? true : false}
          renderDotsOutside={true}
          dotListClass={'slider-dot'}
        >
          {UnitMetaverse.map(({name, image}, index) => {
            return (
              <div key={index} className="px-6">
                <div className="mb-4">
                  <img src={image} alt={name} className="w-full" />
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default HomeUnitSection;
