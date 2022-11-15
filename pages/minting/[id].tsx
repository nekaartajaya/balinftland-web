import ContentComponent from 'src/components/ContentComponent';
import Layout from 'src/components/Layout';
import Meta from 'src/components/Meta';
import SafeHydrate from 'src/components/SafeHydrate';

const MintPage = props => {
  return (
    <Layout>
      <Meta title="Mint Lima Beach NFT | Bali NFT Land" />
      <SafeHydrate>
        <ContentComponent />
      </SafeHydrate>
    </Layout>
  );
};

export default MintPage;

export async function getStaticPaths() {
  return {
    paths: [{params: {id: 'lima-beach-signature'}}],
    fallback: false,
  };
}

export async function getStaticProps() {
  return {props: {isDark: true}};
}
