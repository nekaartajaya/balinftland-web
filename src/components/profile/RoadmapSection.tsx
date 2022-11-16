import Subtitle from '@components/global/Subtitle';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ProfileRoadmapSection = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 3,
      slidesToSlide: 1,
    },
  };

  const roadmap = [];
  for (let i = 0; i < 5; i++) {
    roadmap.push(
      <div className="max-w-[220px] mx-auto">
        <div className="bg-[#D9D9D9] w-[220px] h-[220px] border mx-auto"></div>
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
    <div className="border-y border-dark-blue py-20">
      <div className="text-center mb-12">
        <Subtitle text="Bali Land NFT Roadmap" />
        <h6 className="text-[22px] text-blue">
          We are guided by a simple yet precise vision of Bali Land NFT Roadmap.
          We Build together, We Own Together.
        </h6>
      </div>

      <div className="pb-10 relative">
        <Carousel
          responsive={responsive}
          arrows={false}
          showDots={true}
          renderDotsOutside={true}
          dotListClass={'slider-dot'}
          infinite
          itemClass={'mx-auto'}
          centerMode
        >
          {roadmap}
        </Carousel>
      </div>
    </div>
  );
};

export default ProfileRoadmapSection;
