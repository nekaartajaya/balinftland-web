import Layout from '@components/layout';
import ProjectFragmentSection from '@components/project/FragmentSection';
import ProjectMintingSection from '@components/project/MintingSection';
import ProjectTopSection from '@components/project/TopSection';
import ProjectWhatSection from '@components/project/WhatSection';

const LimaBeachSiganture = () => {
  return (
    <Layout>
      <div className="flex flex-col sm:gap-y-16 gap-y-12 pb-10">
        <ProjectTopSection />
        <div className="md:px-24 px-10">
          <ProjectWhatSection />
          <hr />
          <ProjectFragmentSection />
          <ProjectMintingSection />
        </div>
      </div>
    </Layout>
  );
};

export default LimaBeachSiganture;
