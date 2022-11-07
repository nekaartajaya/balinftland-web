import CustomButton from '@components/global/Button';

const HomeProjectSection = () => {
  return (
    <div className="w-full flex justify-between border-b border-black">
      <div className="w-full bg-[url('/images/pages/home/dummy-1.png')] bg-cover bg-no-repeat bg-center"></div>
      <div className="px-14 py-20">
        <h1 className="text-[64px] tracking-wider leading-[80px] text-blue text-right mb-8">
          <span className="font-bold">LIMA</span> BEACH SIGNATURE NFT.
        </h1>
        <div className="text-blue text-base max-w-[400px] text-right ml-auto mb-20">
          A limited-edition NFT representing the physical property certificate and physical property
          ownership built with the Internet of Things (IoT) Technology and Web 3.0.
        </div>
        <div>
          <CustomButton text="Lima Beach" classes="ml-auto !bg-light-blue" />
        </div>
      </div>
    </div>
  );
};

export default HomeProjectSection;
