import CustomButton from '@components/global/Button';
import { useRouter } from 'next/router';

const HomeTopSection = () => {
  const router = useRouter();

  return (
    <div className="md:flex justify-between items-center lg:min-h-[772px] md:min-h-[500px] px-4 py-10">
      <div className="lg:w-1/2 md:w-[60%] lg:px-24 px-10 mb-10">
        <h1 className="text-xl text-blue tracking-[8px] mb-4">BALI NFT LAND</h1>
        <div className="lg:text-7xl text-5xl font-bold tracking-wider leading-tight text-blue mb-8">
          <h1>NFT,</h1>
          <h1>Blockchain,</h1>
          <h1>Property,</h1>
        </div>
        <div className="md:block hidden">
          <CustomButton
            text="About Bali NFT Land"
            classes="text-base"
            onClick={() => router.push('/profile')}
          />
        </div>
      </div>

      <div className="lg:w-1/2 md:w-[40%]">
        <img
          src="images/stages/stage-4.png"
          alt="Home Top Section"
          className="w-full"
        />
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
