import CustomButton from '@components/global/Button';
import Title from '@components/global/Title';
import Image from 'next/legacy/image';

const DocumentBrochureSection = () => {
  return (
    <div>
      <Title
        text="Property Brochure"
        classes="md:mb-10 mb-6 md:px-24 px-6 !text-left"
      />

      <div className="md:mb-12 mb-6">
        <Image
          src="/images/pages/document/dummy-4.png"
          alt="Property Brochure"
          className="w-full"
          layout="responsive"
          width={1200}
          height={845}
        />
      </div>

      <div className="text-dark-blue md:text-2xl sm:text-xl text-[14px] text-justify mb-8 md:px-24 px-6">
        <span className="font-bold text-black">Bali NFT Land</span> -
        opportunity for investors to develop and lease out high-end properties
        in Bali with NFTs, which is an excellent choice for individuals who do
        not wish to use the traditional, illiquid property.
      </div>

      <div className="w-full md:px-24 px-6">
        <CustomButton
          blue
          text="Read Brochure"
          classes="mx-auto gap-x-4"
          icon={
            <div className="w-[14px]">
              <Image
                src="/images/icons/arrow-right.png"
                alt="Read Brochure"
                layout="responsive"
                width={14}
                height={22}
              />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default DocumentBrochureSection;
