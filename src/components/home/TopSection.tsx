import CustomButton from '@components/global/Button';
import { Divider } from '@mui/material';
import { useRouter } from 'next/router';
import Carousel from 'react-multi-carousel';

const HomeTopSection = () => {
  const router = useRouter();

  const responsive = {
    desktop: {
      breakpoint: { max: 9999, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="md:flex justify-between items-center lg:min-h-[600px] md:min-h-[500px] px-4 md:py-0 py-10 mx-auto">
      <div className="lg:w-1/2 md:w-[60%] lg:px-24 px-10 mb-10">
        <h1 className="text-xl text-blue tracking-[8px] mb-4 font-semibold">
          BALI NFT LAND
        </h1>
        <div className="lg:text-7xl text-5xl font-bold tracking-wider text-blue mb-8">
          <h1 className="leading-tight">NFT,</h1>
          <h1 className="leading-tight">Blockchain,</h1>
          <h1 className="leading-tight">Property,</h1>
        </div>
        <div className="md:block hidden">
          <CustomButton
            text="About Bali NFT Land"
            classes="text-base"
            onClick={() => router.push('/profile')}
          />
        </div>
      </div>

      {/* <Divider
        orientation="vertical"
        flexItem
        className="border border-dark-blue md:block"
      /> */}

      <div className="lg:w-1/2 md:w-[40%] relative pb-6">
        <Carousel
          responsive={responsive}
          arrows={false}
          showDots={true}
          renderDotsOutside={true}
          dotListClass={'slider-dot'}
          infinite
        >
          <img
            src="images/stages/stage-1-clear.png"
            alt="Home Top Section"
            className="w-[90%] mx-auto"
          />
          <img
            src="images/stages/stage-2-clear.png"
            alt="Home Top Section"
            className="w-[90%] mx-auto"
          />
          <img
            src="images/stages/stage-3-clear.png"
            alt="Home Top Section"
            className="w-[90%] mx-auto"
          />
          <img
            src="images/stages/stage-4-clear.png"
            alt="Home Top Section"
            className="w-[90%] mx-auto"
          />
        </Carousel>
      </div>
      <div className="md:hidden block mt-10">
        <CustomButton
          text="About Bali NFT Land"
          classes="text-base mx-auto"
          onClick={() => router.push('/profile')}
        />
      </div>
    </div>
  );
};

export default HomeTopSection;
