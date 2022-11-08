import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ProjectWhatSection = () => {
  const responsive = {
    desktop: {
      breakpoint: {max: 3000, min: 0},
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="flex flex-col gap-y-8">
      {/* Introduce */}
      <div className="mb-8">
        <h1 className="text-[64px] tracking-wider leading-[80px] text-blue text-center font-bold">
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

      <div className="text-blue text-[22px]">
        The first decentralised property project from Digilandbali is called The Lima Beach
        Signature. Each Lima Beach Signature NFT represents the physical ownership of an apartment
        that leaseholders in Pantai Lima, Canggu, Bali, may use for occupancy. Each physical
        apartment in Lima Beach Signature is a luxury, IoT Technology enabled smart condo with
        premium services.
      </div>

      {/* Facility */}
      <div>
        <h1 className="text-[42px] text-blue font-bold mb-6">Facility</h1>
        <div className="grid grid-cols-3 gap-x-6">
          <img src="/images/pages/limabeach/dummy-3.png" alt="Facility 1" className="w-full" />
          <img src="/images/pages/limabeach/dummy-4.png" alt="Facility 2" className="w-full" />
          <img src="/images/pages/limabeach/dummy-5.png" alt="Facility 3" className="w-full" />
        </div>
      </div>

      {/* Rooms */}
      <div className="relative pb-[50px]">
        <h1 className="text-[42px] text-blue font-bold mb-6">Room</h1>
        <Carousel
          responsive={responsive}
          arrows={false}
          showDots={true}
          renderDotsOutside={true}
          dotListClass={'slider-dot'}
        >
          <img src="/images/pages/limabeach/dummy-6.png" alt="Room 1" className="w-full" />
          <img src="/images/pages/limabeach/dummy-6.png" alt="Room 2" className="w-full" />
          <img src="/images/pages/limabeach/dummy-6.png" alt="Room 3" className="w-full" />
        </Carousel>
      </div>

      {/* Apartment */}
      <div>
        <h1 className="text-[42px] text-blue font-bold mb-6">Apartement Value</h1>
        <img src="/images/pages/limabeach/dummy-7.png" alt="Apartment 1" className="w-full" />
      </div>
    </div>
  );
};

export default ProjectWhatSection;
