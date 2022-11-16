import Title from '@components/global/Title';
import { DocumentCardInterface } from '@interfaces/DocumentInterface';
import DocumentCard from './Card';

const DocumentTopSection = () => {
  const DocumentCardArray: Array<DocumentCardInterface> = [
    {
      title: 'Leasehold Documents',
      desc: 'NFT`s smart contract includes a notarized leasehold agreement with an agreement number. All NFT buyers can cross-check legal proof with a notary for transparency. The NFT owner has 60 years to use the leasehold, according to the SPV. Address of 1 NFT Apartment determines the leasehold rights. If the apartment NFT relocate, so do the leasehold rights.',
      image: '/images/pages/document/dummy-1.png',
    },
    {
      title: 'Land Certificate',
      desc: 'Digilandbali`s "NFT Burning" feature helps NFT owners receive a Physical Leasehold Rights Certificate from a notary. This certificate grants the NFT owner 58 years of leasehold rights and centralised access to the apartment through an IoT app.',
      image: '/images/pages/document/dummy-2.png',
    },
    {
      title: 'Time Share',
      desc: 'While there will be a total of 1,771 NFT Fragments, each of which will be shown in the metadata as an ERC-1155 with a Timeshare Agreement document.',
      image: '/images/pages/document/dummy-3.png',
    },
  ];

  return (
    <section>
      <Title text="Permissive Document" classes="mb-8" />

      <div className="text-dark-blue text-2xl flex flex-col gap-y-6 mb-10 text-justify">
        <p>
          To what extent does Bali NFT Land ensure the safety and security of
          your physical apartment authentication certificate?
        </p>
        <p>
          We are aware that crypto users may consider this when determining
          whether the property blockchain you have chosen will meet your
          security needs. Today, we are pleased to announce a prominent
          Indonesian company will establish the Special Purpose Vehicle (SPV),
          which holds the physical apartment certificate of all the NFT owners.
        </p>
        <p>
          The SPV will have 30 years of leasehold rights for the first license,
          and the leasehold rights will be renewed or extended for 30 years
        </p>
      </div>

      <div className="grid grid-cols-3 gap-x-4">
        {DocumentCardArray.map((item: DocumentCardInterface, index: number) => {
          return <DocumentCard key={index} item={item} />;
        })}
      </div>
    </section>
  );
};

export default DocumentTopSection;
