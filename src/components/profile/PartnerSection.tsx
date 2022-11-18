import Subtitle from '@components/global/Subtitle';

const ProfilePartnerSection = () => {
  return (
    <div className="bg-[#6EC4C0]">
      <div className="bg-[#4EA4A0] text-white text-[32px] tracking-[16px] relative w-full text-center py-6 px-4">
        <h1>COMMUNITY & PARTNER</h1>
      </div>

      <div className="grid grid-cols-4 py-10">
        <img
          src="/images/partners/blocksphere.png"
          alt="Logo Blocksphere"
          className="mx-auto"
        />
        <img
          src="/images/partners/paras.png"
          alt="Logo Paras"
          className="mx-auto"
        />
        <img
          src="/images/partners/myriad-town.png"
          alt="Logo Myriad Town"
          className="mx-auto"
        />
        <img
          src="/images/partners/myriad.png"
          alt="Logo Myriad"
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default ProfilePartnerSection;
