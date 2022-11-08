const ProjectTopSection = () => {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="max-w-[460px] w-full mx-auto">
        <h1 className="text-[64px] tracking-wider leading-[80px] text-blue text-center">
          <span className="font-bold">LIMA</span> BEACH SIGNATURE NFT.
        </h1>
      </div>

      <div>
        <img
          src="/images/pages/limabeach/dummy-1.png"
          alt="Introduce Lima Beach"
          className="w-full"
        />
      </div>

      <div className="text-blue text-[32px]">
        A limited-edition NFT representing the physical property certificate and physical property
        ownership built with the Internet of Things (IoT) Technology and Web 3.0.
      </div>
    </div>
  );
};

export default ProjectTopSection;
