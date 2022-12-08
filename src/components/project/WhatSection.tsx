import { useMediaQuery } from '@mui/material';
import Image from 'next/legacy/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const ProjectWhatSection = () => {
  const isMobile = useMediaQuery('(max-width: 768px)', { noSsr: true });

  const pagination = {
    renderBullet: function (_index: number, className: string) {
      return `<span class="custom-dot ${className}"></span>`;
    },
  };

  return (
    <div className="flex flex-col gap-y-8 md:pt-8">
      {/* Introduce */}
      <div>
        <h1 className="md:text-[40px] text-2xl md:tracking-wider  text-blue md text-center:md:text-left text-center font-bold">
          What is Lima Beach NFT?
        </h1>
      </div>

      <div className="relative sm:bg-[url('/images/pages/limabeach/dummy-2.png')] bg-[url('/images/pages/limabeach/dummy-8.png')] bg-no-repeat bg-cover bg-center h-[500px] "></div>

      <div className="text-blue md:text-[22px] md:leading-[30px] text-sm text-justify md:px-0 px-4">
        The first decentralised property project from Digilandbali is called The
        Lima Beach Signature. Each Lima Beach Signature NFT represents the
        physical ownership of an apartment that leaseholders in Pantai Lima,
        Canggu, Bali, may use for occupancy. Each physical apartment in Lima
        Beach Signature is a luxury, IoT Technology enabled smart condo with
        premium services.
      </div>

      {/* Facility */}
      <div>
        <h1 className="md:text-[42px] text-2xl text-blue font-bold mb-6 md:mb-8 text-center md:text-left">
          Facility
        </h1>
        <div className="md:pb-12 pb-6 relative grid md:grid-cols-3 grid-cols-1 gap-x-4 gap-y-8">
          <Image
            src="/images/pages/limabeach/dummy-3.png"
            alt="Facility 1"
            className="w-full"
            layout="responsive"
            width={100}
            height={100}
          />
          <Image
            src="/images/pages/limabeach/dummy-4.png"
            alt="Facility 2"
            className="w-full"
            layout="responsive"
            width={100}
            height={100}
          />
          <Image
            src="/images/pages/limabeach/dummy-5.png"
            alt="Facility 3"
            className="w-full"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
      </div>

      {/* Rooms */}
      <div className="relative md:pb-12 pb-4">
        <h1 className="md:text-[42px] text-2xl text-blue font-bold mb-6 md:mb-8 text-left">
          Room
        </h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={!isMobile && pagination}
          autoplay
          modules={[Pagination]}
          loop
          className="md:!pb-12"
        >
          <SwiperSlide>
            <div
              key={1}
              className="relative md:bg-[url('/images/pages/limabeach/dummy-6.png')] bg-[url('/images/pages/limabeach/dummy-10.png')] bg-no-repeat bg-cover bg-center h-[340px] md:h-[500px]"
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              key={2}
              className="relative  md:bg-[url('/images/pages/limabeach/dummy-6.png')] bg-[url('/images/pages/limabeach/dummy-10.png')] bg-no-repeat bg-cover bg-center h-[340px] md:h-[500px]"
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              key={3}
              className="relative  md:bg-[url('/images/pages/limabeach/dummy-6.png')] bg-[url('/images/pages/limabeach/dummy-10.png')] bg-no-repeat bg-cover bg-center h-[340px] md:h-[500px]"
            ></div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Apartment */}
      <div>
        <h1 className="md:text-[42px] text-2xl text-blue font-bold mb-6 md:mb-8 text-left">
          Apartement Value
        </h1>
        <div className="relative  md:bg-[url('/images/pages/limabeach/dummy-7.png')] bg-[url('/images/pages/limabeach/dummy-9.png')] bg-no-repeat bg-cover bg-center h-[400px] md:h-[500px]"></div>
      </div>
    </div>
  );
};

export default ProjectWhatSection;
