import DocumentBrochureSection from '@components/document/BrochureSection';
import DocumentTypeSection from '@components/document/DocumentTypeSection';
import DocumentTopSection from '@components/document/TopSection';
import Layout from '@components/layout';

const PermissiveDocument = () => {
  return (
    <Layout>
      <div className="bg-[#F9F9F9] flex flex-col gap-y-16 pb-10 md:pt-20 pt-16">
        <DocumentTopSection />
        <DocumentBrochureSection />
        <DocumentTypeSection />
      </div>
    </Layout>
  );
};

export default PermissiveDocument;
