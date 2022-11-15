import Layout from '@components/layout';
import ProjectFragmentSection from '@components/project/FragmentSection';
import ProjectMintingSection from '@components/project/MintingSection';
import ProjectTopSection from '@components/project/TopSection';
import ProjectWhatSection from '@components/project/WhatSection';

const LimaBeachSiganture = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-y-16 md:px-[60px] px-4 py-10">
        <ProjectTopSection />
        <ProjectWhatSection />
        <ProjectFragmentSection />
        <ProjectMintingSection />
      </div>
    </Layout>
  );
};

export default LimaBeachSiganture;
