import CustomButton from '@components/global/Button';
import Title from '@components/global/Title';

const DocumentBrochureSection = () => {
  return (
    <div>
      <Title text="Property Brochure" classes="mb-10" />

      <div className="mb-12">
        <img
          src="/images/pages/document/dummy-4.png"
          alt="Property Brochure"
          className="w-full"
        />
      </div>

      <div className="text-dark-blue md:text-2xl text-xl text-justify mb-8 md:px-32 px-8">
        <span className="font-bold text-black">Bali NFT Land</span> -
        opportunity for investors to develop and lease out high-end properties
        in Bali with NFTs, which is an excellent choice for individuals who do
        not wish to use the traditional, illiquid property.
      </div>

      <div className="w-full">
        <CustomButton text="Read Brochure" classes="mx-auto gap-x-4" />
      </div>
    </div>
  );
};

export default DocumentBrochureSection;
