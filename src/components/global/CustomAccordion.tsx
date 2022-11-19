/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CustomAccordion = ({ data }: { data: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 border-[#5B5B5B] text-blue pb-6 mb-8">
      <div
        className="flex justify-between items-center gap-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-[14px] tablet:text-[16px] desktop:text-[24px] font-bold">
          {data.title}
        </div>
        <div>{isOpen ? <RemoveIcon /> : <AddIcon />}</div>
      </div>
      <div
        className={`text-[14px] tablet:text-[14px] desktop:text-[16px] transition transition-all duration-150 ease-in-out ${
          isOpen
            ? 'opacity-100 visible max-h-[600px]  pt-6'
            : ' opacity-0 invisible max-h-[0px]'
        }`}
      >
        {data.content}
      </div>
    </div>
  );
};

export default CustomAccordion;
