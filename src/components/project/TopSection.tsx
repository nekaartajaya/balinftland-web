const ProjectTopSection = () => {
  return (
    <div>
      <div className="relative bg-[url('/images/pages/limabeach/dummy-1.png')] bg-no-repeat bg-cover bg-center md:h-[500px] h-[430px] mb-10">
        {/* <img
          src="/images/pages/limabeach/dummy-1.png"
          alt="Lima Beach Signature NFT"
          className="w-full"
        /> */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/[.10]"></div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
          <h1 className="text-center md:text-[72px] text-2xl md:leading-[100px] text-white font-bold tracking-wide">
            LIMA BEACH SIGNATURE NFT.
          </h1>
        </div>
      </div>
      <div className="md:text-justify text-center text-blue md:text-[30px] text-sm md:px-24 px-6 md:leading-[45px]">
        A limited-edition NFT representing the physical property certificate and
        physical property ownership built with the Internet of Things (IoT)
        Technology and Web 3.0.
      </div>

      <div className="md:px-24 px-6 pt-8 md:block hidden">
        <hr />
      </div>
    </div>
  );
};

export default ProjectTopSection;
