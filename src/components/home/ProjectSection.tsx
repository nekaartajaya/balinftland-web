import CustomButton from '@components/global/Button';
import { useRouter } from 'next/router';

const HomeProjectSection = () => {
  const router = useRouter();
  return (
    <div className="w-full flex md:flex-row flex-col-reverse justify-between border-b border-black">
      <div className="w-full bg-[url('/images/pages/home/dummy-1.png')] bg-cover bg-no-repeat bg-center md:h-auto h-60"></div>
      <div className="px-14 md:py-20 py-12">
        <h1 className="md:text-[64px] text-4xl tracking-wider md:leading-[80px] text-blue text-right mb-8">
          <span className="font-bold">LIMA</span> BEACH SIGNATURE NFT.
        </h1>
        <div className="text-blue text-base md:max-w-[400px] text-right ml-auto mb-20">
          A limited-edition NFT representing the physical property certificate
          and physical property ownership built with the Internet of Things
          (IoT) Technology and Web 3.0.
        </div>
        <div>
          <CustomButton
            text="Lima Beach"
            classes="ml-auto !bg-light-blue"
            onClick={() => router.push('/project/lima-beach-signature')}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeProjectSection;
