import SafeHydrate from '@components/global/SafeHydrate';
import Layout from '@components/layout';
import MintFormData from '@components/mint/FormData';
import MintFormUpload from '@components/mint/FormUpload';
import StageOne from '@components/mint/StageOne';
import { Slide } from '@mui/material';
import { useState } from 'react';

const Mint = () => {
  const [step, setStep] = useState<string>('upload');
  return (
    <Layout>
      <SafeHydrate>
        <div className="bg-[#F9F9F9] flex justify-center md:px-[60px] px-4 pb-10">
          <StageOne />
        </div>
      </SafeHydrate>
    </Layout>
  );
};

export default Mint;

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: 'lima-beach-signature' } }],
    fallback: false,
  };
}

export async function getStaticProps() {
  return { props: { isDark: false } };
}
