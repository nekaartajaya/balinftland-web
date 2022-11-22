import Layout from '@components/layout';
import ProjectFragmentSection from '@components/project/FragmentSection';
import ProjectMintingSection from '@components/project/MintingSection';
import ProjectTopSection from '@components/project/TopSection';
import ProjectWhatSection from '@components/project/WhatSection';

const LimaBeachSiganture = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-y-16 pb-10">
        <ProjectTopSection />
        <hr />
        <ProjectWhatSection />
        <hr />
        <ProjectFragmentSection />
        <ProjectMintingSection />
      </div>
    </Layout>
  );
};

export default LimaBeachSiganture;
