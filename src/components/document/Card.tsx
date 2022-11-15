import {DocumentCardInterface} from '@interfaces/DocumentInterface';

const DocumentCard = ({item}: {item: DocumentCardInterface}) => {
  return (
    <div className="bg-dark-blue text-white p-5">
      <div className="text-[18px] font-bold mb-2 tracking-[2px] uppercase">{item.title}</div>
      <div className="flex items-start gap-x-8">
        <div className="w-3/4 text-[10px] leading-[18px] tracking-[1px] font-light text-justify">
          {item.desc}
        </div>
        <div className="w-1/4">
          <img src={item.image} alt={item.title} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default DocumentCard;
