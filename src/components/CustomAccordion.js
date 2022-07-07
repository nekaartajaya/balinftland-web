/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable jsx-a11y/no-static-element-interactions */
import {useState} from 'react';

import {Minus, Add} from 'iconsax-react';

const CustomAccordion = ({data}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 border-[#5B5B5B] text-white pb-6 mb-8">
      <div
        className="flex justify-between items-center gap-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-[14px] tablet:text-[16px] desktop:text-[24px] font-bold">
          {data.title}
        </div>
        <div>
          {isOpen ? <Minus size="24" color="#D9BA6A" /> : <Add size="24" color="#D9BA6A" />}
        </div>
      </div>
      <div
        className={`ttext-[14px] tablet:text-[14px] desktop:text-[16px] transition transition-all duration-150 ease-in-out ${
          isOpen ? 'opacity-100 visible max-h-[600px]  pt-6' : ' opacity-0 invisible max-h-[0px]'
        }`}
      >
        {data.content}
      </div>
    </div>
  );
};

export default CustomAccordion;
