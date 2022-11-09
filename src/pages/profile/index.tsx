import Layout from '@components/layout';
import ProfileRoadmapSection from '@components/profile/RoadmapSection';
import ProfileTopSection from '@components/profile/TopSection';
import ProfileUtilitySection from '@components/profile/UtilitySection';

const Profile = () => {
  return (
    <Layout>
      <div>
        <ProfileTopSection />
        <ProfileUtilitySection />
        <ProfileRoadmapSection />
      </div>
    </Layout>
  );
};

export default Profile;
