import Layout from '@components/layout';
import ProjectFragmentSection from '@components/project/FragmentSection';
import ProjectMintingSection from '@components/project/MintingSection';
import ProjectTopSection from '@components/project/TopSection';
import ProjectWhatSection from '@components/project/WhatSection';

const LimaBeachSiganture = () => {
  return (
    <Layout>
      <ProjectTopSection />
      <ProjectWhatSection />
      <ProjectFragmentSection />
      <ProjectMintingSection />
    </Layout>
  );
};

export default LimaBeachSiganture;
