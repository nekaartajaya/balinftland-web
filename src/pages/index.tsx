import HomeLogoSection from '@components/home/LogoSection';
import HomeProjectSection from '@components/home/ProjectSection';
import HomeTopSection from '@components/home/TopSection';
import Layout from '@components/layout';

const Home = () => {
  return (
    <Layout>
      <HomeTopSection />
      <HomeLogoSection />
      <HomeProjectSection />
    </Layout>
  );
};

export default Home;
