import Layout from '@components/layout';
import ProfileTopSection from '@components/profile/TopSection';
import ProfileUtilitySection from '@components/profile/UtilitySection';

const Profile = () => {
  return (
    <Layout>
      <div>
        <ProfileTopSection />
        <ProfileUtilitySection />
      </div>
    </Layout>
  );
};

export default Profile;
