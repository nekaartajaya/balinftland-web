import { DocumentCardInterface } from '@interfaces/DocumentInterface';
import Image from 'next/legacy/image';

const DocumentCard = ({ item }: { item: DocumentCardInterface }) => {
  return (
    <div className="bg-dark-blue text-white md:p-5 p-6">
      <div className="md:text-[18px] text-[16px] font-bold mb-2 tracking-[2px] uppercase">
        {item.title}
      </div>
      <div className="flex md:flex-row flex-row-reverse items-start gap-x-8">
        <div className="md:w-3/4 w-[60%] text-[10px] leading-[18px] tracking-[1px] font-light text-justify">
          {item.desc}
        </div>
        <div className="md:w-1/4 w-[40%]">
          <Image
            src={item.image}
            alt={item.title}
            className="w-full"
            layout="responsive"
            width={80}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentCard;
