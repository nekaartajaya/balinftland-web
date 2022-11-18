import Subtitle from '@components/global/Subtitle';

const ProfileVisionSection = () => {
  return (
    <div className="py-10">
      <div className="relative mb-8 border-t border-dark-blue bg-[url('/images/pages/profile/dummy-2.png')] bg-top bg-cover bg-no-repeat md:min-h-[1000px] min-h-[500px]">
        <Subtitle
          text="Vision"
          classes="absolute md:top-6 top-1 left-[50%] translate-x-[-50%]"
        />
      </div>

      <div className="md:text-[32px] text-xl text-blue text-center px-4">
        We <span className="font-bold">Build</span> The Property Together, We{' '}
        <span className="font-bold">Own</span> The Property Together.
      </div>
    </div>
  );
};

export default ProfileVisionSection;
