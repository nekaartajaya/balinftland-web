import HomeHospitalitySection from '@components/home/HospitalitySection';
import HomeLogoSection from '@components/home/LogoSection';
import HomeMapSection from '@components/home/MapSection';
import HomeProjectSection from '@components/home/ProjectSection';
import HomeTopSection from '@components/home/TopSection';
import HomeUnitSection from '@components/home/UnitSection';
import Layout from '@components/layout';

const Home = () => {
  return (
    <Layout>
      <HomeTopSection />
      <HomeLogoSection />
      <HomeProjectSection />
      <HomeHospitalitySection />
      <HomeMapSection />
      <HomeUnitSection />
    </Layout>
  );
};

export default Home;
