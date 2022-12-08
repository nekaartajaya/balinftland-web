import CustomButton from '@components/global/Button';
import Title from '@components/global/Title';
import { DocumentTypeInterface } from '@interfaces/DocumentInterface';
import Parser from 'html-react-parser';
import Image from 'next/legacy/image';

const DocumentTypeSection = () => {
  const DocumentType: Array<DocumentTypeInterface> = [
    {
      title: 'Whitepaper',
      desc: `<span className="font-bold">Bali NFT Land</span> - opportunity for investors to develop and lease out high-end properties in Bali with NFTs, which is an excellent choice for individuals who do not wish to use the traditional, illiquid property.<br/><br/>As we know, only the wealthy and well-connected can afford to own property Bali NFT Land aspires for anyone can get a property with an affordable base price (developer price). Thus, we leverage the Web 3.0 blockchain technology with NFTs to develop, leasehold, and fractionalized luxury service properties.`,
      image: '/images/pages/document/dummy-5.png',
      link: '#',
      button: 'Read Whitepaper',
    },
    {
      title: 'Deck',
      desc: '<span className="font-bold">Bali NFT Land</span> - opportunity for investors to develop and lease out high-end properties in Bali with NFTs, which is an excellent choice for individuals who do not wish to use the traditional, illiquid property.<br/><br/> As we know, only the wealthy and well-connected can afford to own property Bali NFT Land aspires for anyone can get a property with an affordable base price (developer price). Thus, we leverage the Web 3.0 blockchain technology with NFTs to develop, leasehold, and fractionalized luxury service properties.',
      image: '/images/pages/document/dummy-5.png',
      link: '#',
      button: 'Read Deck',
    },
    {
      title: 'Legal Standing',
      desc: '<span className="font-bold">Bali NFT Land</span> - opportunity for investors to develop and lease out high-end properties in Bali with NFTs, which is an excellent choice for individuals who do not wish to use the traditional, illiquid property.<br/><br/> As we know, only the wealthy and well-connected can afford to own property Bali NFT Land aspires for anyone can get a property with an affordable base price (developer price). Thus, we leverage the Web 3.0 blockchain technology with NFTs to develop, leasehold, and fractionalized luxury service properties.',
      image: '/images/pages/document/dummy-5.png',
      link: '#',
      button: 'Legal Standing',
    },
  ];
  return (
    <div className="flex flex-col gap-y-20 px-8">
      {DocumentType.map((item: DocumentTypeInterface, index: number) => {
        return (
          <div key={index}>
            <Title text={item.title} classes="md:mb-12 mb-6 !text-left" />

            <div className="grid md:grid-cols-2 gap-x-8 items-start">
              <div className="relative w-full md:h-full h-[380px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="flex flex-col justify-between">
                <p className="text-dark-blue md:text-2xl sm:text-xl text-[14px] text-justify">
                  {Parser(item.desc)}
                </p>

                <CustomButton
                  blue
                  text={item.button}
                  icon={
                    <div className="w-[14px]">
                      <Image
                        src="/images/icons/arrow-right.png"
                        alt={item.title}
                        layout="responsive"
                        width={14}
                        height={22}
                      />
                    </div>
                  }
                  classes="w-max gap-x-4 mx-auto mt-8"
                />
              </div>
            </div>
          </div>
        );
      })}
      <div></div>
    </div>
  );
};

export default DocumentTypeSection;
