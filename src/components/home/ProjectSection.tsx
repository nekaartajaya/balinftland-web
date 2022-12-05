import CustomButton from '@components/global/Button';
import { useRouter } from 'next/router';

const HomeProjectSection = () => {
  const router = useRouter();
  return (
    <div className="w-full flex md:flex-row flex-col justify-between border-b border-black">
      <div className="w-full bg-[url('/images/pages/home/dummy-1.png')] bg-cover bg-no-repeat bg-center md:h-auto h-[400px]"></div>
      <div className="md:px-14 px-6 md:py-20 py-6">
        <h1 className="md:text-[64px] text-2xl md:tracking-wider md:leading-[80px] text-blue md:text-right md:mb-8 mb-5 md:font-normal font-semibold">
          <span className="font-extrabold">LIMA</span> BEACH SIGNATURE NFT.
        </h1>
        <div className="text-blue text-base md:max-w-[400px] md:text-right ml-auto md:mb-20 mb-6">
          A limited-edition NFT representing the physical property certificate
          and physical property ownership built with the Internet of Things
          (IoT) Technology and Web 3.0.
        </div>
        <div>
          <CustomButton
            text="Go to Lima Beach Signature"
            classes="md:ml-auto !bg-light-blue text-sm md:text-base"
            onClick={() => router.push('/project/lima-beach-signature')}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeProjectSection;
