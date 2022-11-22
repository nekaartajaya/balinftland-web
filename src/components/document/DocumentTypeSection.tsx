import CustomButton from '@components/global/Button';
import Title from '@components/global/Title';
import { DocumentTypeInterface } from '@interfaces/DocumentInterface';
import Parser from 'html-react-parser';

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
            <Title text={item.title} classes="md:mb-12 mb-6" />

            <div className="grid md:grid-cols-2 gap-x-8">
              <div className="mb-8 md:mb-0">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="flex flex-col justify-between">
                <p className="text-dark-blue md:text-2xl text-xl text-justify">
                  {Parser(item.desc)}
                </p>

                <CustomButton
                  text={item.button}
                  icon={
                    <img
                      src="/images/icons/arrow-right.png"
                      alt="Read Brochure"
                    />
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
