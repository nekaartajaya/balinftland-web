import Layout from '@components/layout';
import ProfileDistributionSection from '@components/profile/DistributionSection';
import ProfileRoadmapSection from '@components/profile/RoadmapSection';
import ProfileTeamSection from '@components/profile/TeamSection';
import ProfileTopSection from '@components/profile/TopSection';
import ProfileUtilitySection from '@components/profile/UtilitySection';
import ProfileVisionSection from '@components/profile/VisionSection';

const Profile = () => {
  return (
    <Layout>
      <div>
        <ProfileTopSection />
        <ProfileUtilitySection />
        <ProfileRoadmapSection />
        <ProfileVisionSection />
        <ProfileDistributionSection />
        <ProfileTeamSection />
      </div>
    </Layout>
  );
};

export default Profile;
