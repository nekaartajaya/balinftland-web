import Subtitle from '@components/global/Subtitle';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useMediaQuery } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar } from 'swiper';

const ProfileRoadmapSection = () => {
  const isTab = useMediaQuery('(max-width: 768px)', { noSsr: false });
  const isMobile = useMediaQuery('(max-width: 639px)', { noSsr: false });
  const isLaptop = useMediaQuery('(max-width: 1199px)', { noSsr: false });

  const responsive = {
    desktop: {
      breakpoint: { max: 9999, min: 1440 },
      items: 3,
      slidesToSlide: 1,
    },
    laptop: {
      breakpoint: { max: 1439, min: 769 },
      items: 2,
      slidesToSlide: 1,
    },
    tab: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const pagination = {
    renderBullet: function (_index: number, className: string) {
      return `<span class="custom-dot ${className}"></span>`;
    },
  };

  const roadmap = [];
  for (let i = 0; i < 5; i++) {
    roadmap.push(
      <SwiperSlide key={i}>
        <div className="md:max-w-[220px] max-w-[210px]">
          <div className="bg-[#D9D9D9] md:w-[220px] md:h-[220px] w-[210px] h-[210px]  border mx-auto"></div>
          <div className="text-dark-blue">
            <h1 className="md:text-[34px] text-3xl  font-semibold text-center my-2">
              Q5 2022
            </h1>
            <ul className="text-[10px] tracking-wider gap-y-4">
              <li className="mb-2">
                <CheckCircleOutlineIcon fontSize="small" /> NFT Fragment
                Development
              </li>
              <li className="mb-2">
                <CheckCircleOutlineIcon fontSize="small" /> Marketing Campaign
              </li>
              <li className="mb-2">
                <CheckCircleOutlineIcon fontSize="small" /> Legal Preparation
              </li>
              <li className="mb-2">
                <CheckCircleOutlineIcon fontSize="small" /> Landing Page
                Development
              </li>
              <li className="mb-2">
                <CheckCircleOutlineIcon fontSize="small" /> Lima Beach Page
                Development
              </li>
            </ul>
          </div>
        </div>
      </SwiperSlide>,
    );
  }

  return (
    <div className=" md:py-20 py-10 ">
      <div className="text-left mb-12 md:px-24 px-10">
        <Subtitle text="Bali Land NFT Roadmap" classes="!text-left " />
        <h6 className="md:text-[22px] text-sm text-blue mt-4">
          We are guided by a simple yet precise vision of Bali Land NFT Roadmap.
          We Build together, We Own Together.
        </h6>
      </div>

      <div className="md:hidden">
        <Swiper
          spaceBetween={50}
          slidesPerView={isMobile ? 1.3 : isTab ? 2.3 : isLaptop ? 3.3 : 4.3}
          modules={[Pagination]}
          pagination={{
            type: 'progressbar',
          }}
          centeredSlidesBounds={true}
          className="swiper-profile  swiper-roadmap-profile"
        >
          {roadmap}
        </Swiper>
      </div>

      <div className="hidden md:block">
        <Swiper
          spaceBetween={50}
          slidesPerView={isMobile ? 1.3 : isTab ? 2.3 : isLaptop ? 3.3 : 4.3}
          modules={[Pagination]}
          pagination={pagination}
          centeredSlidesBounds={true}
          className="swiper-profile  swiper-roadmap-profile"
        >
          {roadmap}
        </Swiper>
      </div>
    </div>
  );
};

export default ProfileRoadmapSection;
