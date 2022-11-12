import Layout from '@components/layout';
import MintUploadForm from '@components/mint/UploadForm';

const Mint = () => {
  return (
    <Layout>
      <div className="bg-[#F9F9F9] flex justify-center md:px-[60px] px-4 py-10">
        <MintUploadForm />
      </div>
    </Layout>
  );
};

export default Mint;
