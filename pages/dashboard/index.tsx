import Meta from '@components/Meta';
import SafeHydrate from '@components/SafeHydrate';
import Layout from '@components/dashboard/Layout';

const Dashboard = () => {
  return (
    <SafeHydrate>
      <Layout>
        <Meta title="DigilandBali | Mint Lima Beach NFT" />
      </Layout>
    </SafeHydrate>
  );
};

export default Dashboard;
