import Meta from '@components/Meta';
import SafeHydrate from '@components/SafeHydrate';
import UnlockableContent from '@components/UnlockableContent';
import Layout from '@components/dashboard/Layout';

const Dashboard = props => {
  return (
    <SafeHydrate>
      <Layout>
        <Meta title="User Dashboard | Bali NFT Land" />
        <UnlockableContent />
      </Layout>
    </SafeHydrate>
  );
};

export async function getStaticProps() {
  return {props: {isDark: false}};
}

export default Dashboard;
