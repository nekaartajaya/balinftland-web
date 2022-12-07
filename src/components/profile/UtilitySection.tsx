import Subtitle from '@components/global/Subtitle';
import { ImageInterface } from '@interfaces/GlobalInterface';
import Image from 'next/legacy/image';
import { Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const ProfileUtilitySection = () => {
  const Utility: Array<ImageInterface> = [
    {
      url: '/images/pages/profile/dummy-4.png',
      alt: 'BREEDING',
    },
    {
      url: '/images/pages/profile/dummy-5.png',
      alt: 'BUYBACK',
    },
    {
      url: '/images/pages/profile/dummy-6.png',
      alt: 'RENT',
    },
    {
      url: '/images/pages/profile/dummy-7.png',
      alt: 'STACKING',
    },
  ];

  return (
    <div className="border-y border-dark-blue md:py-16 pt-5 pb-8">
      <Subtitle text="Utility" classes=" md:px-24 px-10 !text-left" />

      <div className="md:grid grid-cols-4 gap-y-4 mt-10 px-8 hidden">
        {Utility.map((item: ImageInterface, index: number) => {
          return (
            <div key={index} className="text-center">
              <div className=" w-full min-h-[250px] relative">
                <Image
                  src={item.url}
                  alt={item.alt}
                  className="w-full"
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              <h5 className="text-dark-blue md:text-2xl text-xl font-semibold">
                {item.alt}
              </h5>
            </div>
          );
        })}
      </div>

      <div className="md:hidden mt-4">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.5}
          modules={[Pagination]}
          pagination={{ type: 'progressbar' }}
          centeredSlidesBounds={true}
          className="swiper-profile swiper-utility-profile"
        >
          {Utility.map((item: ImageInterface, index: number) => {
            return (
              <SwiperSlide key={index}>
                <div className="text-center bg-[#E7E7E7] w-full h-auto pb-7 relative shadow-[2px_4px_6px_2px_rgba(0,0,0,0.15)]">
                  <div className="w-[200px] h-[200px] relative mx-auto">
                    <Image
                      src={item.url}
                      alt={item.alt}
                      layout="fill"
                      objectFit="contain"
                      priority
                    />
                  </div>
                  <h5 className="text-dark-blue md:text-2xl text-xl font-semibold absolute bottom-4 left-1/2 translate-x-[-50%]">
                    {item.alt}
                  </h5>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ProfileUtilitySection;
