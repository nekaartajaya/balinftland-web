import Layout from '@components/layout';
import ProfileRoadmapSection from '@components/profile/RoadmapSection';
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
      </div>
    </Layout>
  );
};

export default Profile;
