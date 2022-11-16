import CustomButton from '@components/global/Button';
import Title from '@components/global/Title';

const DocumentBrochureSection = () => {
  return (
    <div className="px-12">
      <Title text="Property Brochure" classes="mb-6" />

      <div className="mb-12">
        <img
          src="/images/pages/document/dummy-4.png"
          alt="Property Brochure"
          className="w-full"
        />
      </div>

      <div className="text-dark-blue text-2xl text-justify mb-8">
        <span className="font-bold text-black">Bali NFT Land</span> -
        opportunity for investors to develop and lease out high-end properties
        in Bali with NFTs, which is an excellent choice for individuals who do
        not wish to use the traditional, illiquid property.
      </div>

      <div className="w-full">
        <CustomButton
          text="Read Brochure"
          classes="mx-auto gap-x-4"
          icon={<img src="/images/icons/arrow-right.png" alt="Read Brochure" />}
        />
      </div>
    </div>
  );
};

export default DocumentBrochureSection;
