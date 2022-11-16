import Layout from '@components/layout';
import MintFormData from '@components/mint/FormData';
import MintFormUpload from '@components/mint/FormUpload';
import { Slide } from '@mui/material';
import { useState } from 'react';

const Mint = () => {
  const [step, setStep] = useState<string>('upload');
  return (
    <Layout>
      <div className="bg-[#F9F9F9] flex justify-center md:px-[60px] px-4 py-10">
        {step === 'upload' ? (
          <MintFormUpload onNext={() => setStep('data')} />
        ) : (
          <Slide direction="left" in={step === 'data'}>
            <div className="max-w-[800px] w-full border border-dark-blue">
              <MintFormData />
            </div>
          </Slide>
        )}
      </div>
    </Layout>
  );
};

export default Mint;
