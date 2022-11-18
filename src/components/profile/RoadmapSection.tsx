import Subtitle from '@components/global/Subtitle';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useMediaQuery } from '@mui/material';

const ProfileRoadmapSection = () => {
  const isMobile = useMediaQuery('(max-width: 500px)', { noSsr: true });

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

  const roadmap = [];
  for (let i = 0; i < 5; i++) {
    roadmap.push(
      <div key={i} className="max-w-[220px]  mx-auto">
        <div className="bg-[#D9D9D9] w-[220px] h-[220px]  border mx-auto"></div>
        <div className="text-dark-blue">
          <h1 className="text-[40px]  font-semibold text-center mb-2">
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
      </div>,
    );
  }

  return (
    <div className=" py-20">
      <div className="text-center mb-12 px-4">
        <Subtitle text="Bali Land NFT Roadmap" />
        <h6 className="md:text-[22px] text-xl text-blue mt-4">
          We are guided by a simple yet precise vision of Bali Land NFT Roadmap.
          We Build together, We Own Together.
        </h6>
      </div>

      <div className="pb-12 relative">
        <Carousel
          responsive={responsive}
          arrows={false}
          showDots={true}
          renderDotsOutside={true}
          dotListClass={'slider-dot'}
          infinite
          itemClass={'mx-auto'}
          centerMode={!isMobile}
        >
          {roadmap}
        </Carousel>
      </div>
    </div>
  );
};

export default ProfileRoadmapSection;
