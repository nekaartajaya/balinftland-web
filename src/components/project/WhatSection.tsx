import { useMediaQuery } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ProjectWhatSection = () => {
  const isMobile = useMediaQuery('(max-width: 768px)', { noSsr: true });

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const responsiveFacility = {
    desktop: {
      breakpoint: { max: 9999, min: 769 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 500 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 499, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="flex flex-col gap-y-8">
      {/* Introduce */}
      <div>
        <h1 className="md:text-[64px] text-4xl tracking-wider md:leading-[80px] text-blue text-center font-bold">
          What is Lima Beach NFT.
        </h1>
      </div>

      <div>
        <img
          src="/images/pages/limabeach/dummy-2.png"
          alt="What Is Lima Beach NFT"
          className="w-full"
        />
      </div>

      <div className="text-blue md:text-[22px] text-lg md:px-24 px-10 text-justify">
        The first decentralised property project from Digilandbali is called The
        Lima Beach Signature. Each Lima Beach Signature NFT represents the
        physical ownership of an apartment that leaseholders in Pantai Lima,
        Canggu, Bali, may use for occupancy. Each physical apartment in Lima
        Beach Signature is a luxury, IoT Technology enabled smart condo with
        premium services.
      </div>

      {/* Facility */}
      <div>
        <h1 className="md:text-[42px] text-3xl text-blue font-bold mb-6 text-center">
          Facility
        </h1>
        <div className="pb-12 relative">
          <Carousel
            responsive={responsiveFacility}
            arrows={false}
            showDots={isMobile}
            renderDotsOutside={true}
            dotListClass={'slider-dot'}
            infinite={isMobile}
            itemClass={'mx-auto'}
            sliderClass="gap-x-4"
          >
            <img
              src="/images/pages/limabeach/dummy-3.png"
              alt="Facility 1"
              className="w-full"
            />
            <img
              src="/images/pages/limabeach/dummy-4.png"
              alt="Facility 2"
              className="w-full"
            />
            <img
              src="/images/pages/limabeach/dummy-5.png"
              alt="Facility 3"
              className="w-full"
            />
          </Carousel>
        </div>
      </div>

      {/* Rooms */}
      <div className="relative pb-[50px]">
        <h1 className="md:text-[42px] text-3xl text-blue font-bold mb-6 text-center">
          Room
        </h1>
        <Carousel
          responsive={responsive}
          arrows={false}
          showDots={true}
          renderDotsOutside={true}
          dotListClass={'slider-dot'}
        >
          <img
            key={1}
            src="/images/pages/limabeach/dummy-6.png"
            alt="Room 1"
            className="w-full"
          />
          <img
            key={2}
            src="/images/pages/limabeach/dummy-6.png"
            alt="Room 2"
            className="w-full"
          />
          <img
            key={3}
            src="/images/pages/limabeach/dummy-6.png"
            alt="Room 3"
            className="w-full"
          />
        </Carousel>
      </div>

      {/* Apartment */}
      <div>
        <h1 className="md:text-[42px] text-3xl text-blue font-bold mb-6 text-center">
          Apartement Value
        </h1>
        <img
          src="/images/pages/limabeach/dummy-7.png"
          alt="Apartment 1"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default ProjectWhatSection;
