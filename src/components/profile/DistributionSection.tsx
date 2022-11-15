import Subtitle from '@components/global/Subtitle';

const ProfileDistributionSection = () => {
  return (
    <div className="bg-dark-blue py-8">
      <div className="text-white relative max-w-max mx-auto mb-6">
        <Subtitle text="NFT Distribution" classes="!text-white" />
        <span className="absolute right-[-30px]">1,771 NFT Fragment</span>
      </div>

      <img src="/images/pages/profile/dummy-3.png" alt="Vision" className="w-full px-20" />
    </div>
  );
};

export default ProfileDistributionSection;
