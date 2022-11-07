import HomeLogoSection from '@components/home/LogoSection';
import HomeTopSection from '@components/home/TopSection';
import Layout from '@components/layout';

const Home = () => {
  return (
    <Layout>
      <HomeTopSection />
      <HomeLogoSection />
    </Layout>
  );
};

export default Home;
