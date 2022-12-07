import Subtitle from '@components/global/Subtitle';

const ProfileVisionSection = () => {
  return (
    <div className="border-t border-dark-blue">
      <Subtitle
        text="Vision"
        classes="!text-left md:px-24 px-10 bg-[#F3F4F3] md:pt-10 pt-4"
      />
      <div className="relative  bg-[url('/images/pages/profile/dummy-2.png')] bg-top bg-cover bg-no-repeat md:min-h-[1000px] min-h-[500px]"></div>

      <div className="md:text-[32px] text-xl text-blue text-center bg-[#F3F4F3] md:bg-[#f9f9f9] md:px-24 px-10 md:py-16 py-10">
        We <span className="font-bold">Build</span> The Property Together, We{' '}
        <span className="font-bold">Own</span> The Property Together.
      </div>
    </div>
  );
};

export default ProfileVisionSection;
