import CustomButton from '@components/global/Button';
import { Divider } from '@mui/material';
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
import {
  stage1clear,
  stage2clear,
  stage3clear,
  stage4clear,
} from '@assets/images';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

const HomeTopSection = () => {
  const router = useRouter();

  const pagination = {
    renderBullet: function (_index: number, className: string) {
      return `<span class="custom-dot ${className}"></span>`;
    },
  };

  return (
    <div className="flex md:flex-row flex-col-reverse justify-between items-center mx-auto">
      <div className="md:w-1/2 w-full lg:px-24 md:px-10 px-6 bg-dark-blue lg:min-h-[700px] md:min-h-[500px] top flex items-center md:justify-center">
        <div className="w-full md:py-0 pt-5 pb-10">
          <div className="lg:text-7xl md:text-5xl text-3xl md:font-bold font-semibold tracking-wider text-white md:mb-8 mb-4">
            <h1 className="leading-tight md:capitalize uppercase">
              NFT, Blockchain, Property,
            </h1>
          </div>
          <h1 className="md:text-xl text-sm text-white tracking-[8px] mb-6 font-normal">
            BALI NFT LAND
          </h1>
          <div>
            <CustomButton
              text="About Bali NFT Land"
              classes="text-base"
              onClick={() => router.push('/profile')}
            />
          </div>
        </div>
      </div>

      {/* <Divider
        orientation="vertical"
        flexItem
        className="border border-dark-blue md:block"
      /> */}

      <div className="md:w-1/2 w-full relative md:mb-0 mb-6">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={pagination}
          autoplay
          modules={[Pagination]}
          loop
          className="swiper-top-home"
        >
          <SwiperSlide>
            <div className="w-[90%] md:h-[400px] h-[250px] relative mx-auto">
              <Image
                src={stage1clear}
                alt="Home Top Section"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[90%] md:h-[400px] h-[250px] relative mx-auto">
              <Image
                src={stage2clear}
                alt="Home Top Section"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[90%] md:h-[400px] h-[250px] relative mx-auto">
              <Image
                src={stage3clear}
                alt="Home Top Section"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[90%] md:h-[400px] h-[250px] relative mx-auto">
              <Image
                src={stage4clear}
                alt="Home Top Section"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeTopSection;
