import Subtitle from '@components/global/Subtitle';

const ProfileVisionSection = () => {
  return (
    <div className="py-10">
      <div className="relative mb-8">
        <Subtitle text="Vision" classes="absolute top-0 left-[50%] translate-x-[-50%]" />
        <img src="/images/pages/profile/dummy-2.png" alt="Vision" className="w-full" />
      </div>

      <div className="text-[32px] text-blue text-center px-4">
        We <span className="font-bold">Build</span> The Property Together, We{' '}
        <span className="font-bold">Own</span> The Property Together.
      </div>
    </div>
  );
};

export default ProfileVisionSection;
