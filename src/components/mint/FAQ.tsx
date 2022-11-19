import CustomAccordion from '@components/global/CustomAccordion';
import { CSSProperties } from 'react';
import Modal from '@mui/material/Modal';

const FAQSection = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const data = [
    {
      title: 'Is there a discord?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi est imperdiet mauris, mattis sed morbi. Enim, eget auctor etiam amet habitant. Id sociis consectetur dui elit auctor adipiscing mattis. Nunc metus id a, lacinia in diam. Turpis orci id sit phasellus. Sed nibh habitant ornare vitae augue vel varius odio. Risus, morbi neque, pellentesque venenatis, pharetra. ',
    },
    {
      title: 'How to mint?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi est imperdiet mauris, mattis sed morbi. Enim, eget auctor etiam amet habitant. Id sociis consectetur dui elit auctor adipiscing mattis. Nunc metus id a, lacinia in diam. Turpis orci id sit phasellus. Sed nibh habitant ornare vitae augue vel varius odio. Risus, morbi neque, pellentesque venenatis, pharetra. ',
    },
    {
      title: 'What are the maximum mints per wallet?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi est imperdiet mauris, mattis sed morbi. Enim, eget auctor etiam amet habitant. Id sociis consectetur dui elit auctor adipiscing mattis. Nunc metus id a, lacinia in diam. Turpis orci id sit phasellus. Sed nibh habitant ornare vitae augue vel varius odio. Risus, morbi neque, pellentesque venenatis, pharetra. ',
    },
    {
      title: 'How are the 1.771 NFTs distributed?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi est imperdiet mauris, mattis sed morbi. Enim, eget auctor etiam amet habitant. Id sociis consectetur dui elit auctor adipiscing mattis. Nunc metus id a, lacinia in diam. Turpis orci id sit phasellus. Sed nibh habitant ornare vitae augue vel varius odio. Risus, morbi neque, pellentesque venenatis, pharetra. ',
    },
    {
      title: 'What intellectual property rights do NFT holders receive?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi est imperdiet mauris, mattis sed morbi. Enim, eget auctor etiam amet habitant. Id sociis consectetur dui elit auctor adipiscing mattis. Nunc metus id a, lacinia in diam. Turpis orci id sit phasellus. Sed nibh habitant ornare vitae augue vel varius odio. Risus, morbi neque, pellentesque venenatis, pharetra. ',
    },
    {
      title: 'What are the funds being used for?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi est imperdiet mauris, mattis sed morbi. Enim, eget auctor etiam amet habitant. Id sociis consectetur dui elit auctor adipiscing mattis. Nunc metus id a, lacinia in diam. Turpis orci id sit phasellus. Sed nibh habitant ornare vitae augue vel varius odio. Risus, morbi neque, pellentesque venenatis, pharetra. ',
    },
    {
      title: 'Will Lima Beach Signature NFT be revealed right away?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi est imperdiet mauris, mattis sed morbi. Enim, eget auctor etiam amet habitant. Id sociis consectetur dui elit auctor adipiscing mattis. Nunc metus id a, lacinia in diam. Turpis orci id sit phasellus. Sed nibh habitant ornare vitae augue vel varius odio. Risus, morbi neque, pellentesque venenatis, pharetra. ',
    },
    {
      title: 'Are there other benefits from mint Lima Beach Signature NFT?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi est imperdiet mauris, mattis sed morbi. Enim, eget auctor etiam amet habitant. Id sociis consectetur dui elit auctor adipiscing mattis. Nunc metus id a, lacinia in diam. Turpis orci id sit phasellus. Sed nibh habitant ornare vitae augue vel varius odio. Risus, morbi neque, pellentesque venenatis, pharetra. ',
    },
  ];

  const style: CSSProperties = {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 820,
    width: '90%',
    height: '80%',
    backgroundColor: '#FFF',
    borderRadius: 0,
    padding: 24,
    position: 'relative',
    wordBreak: 'break-word',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="Minted NFT Modal"
      aria-describedby="Description of your Minted NFT"
    >
      <>
        <div style={style}>
          <div className="text-xl tablet:text-3xl desktop:text-5xl text-blue font-bold text-center">
            Frequently Asked Question
          </div>
          <div className="relative !overflow-y-auto max-h-[70%]">
            {data.map((v, i) => {
              return <CustomAccordion data={v} key={i} />;
            })}
          </div>
          <button
            className="bg-light-blue-2 text-white font-bold text-base w-full py-3"
            onClick={onClose}
          >
            Ok, i understand
          </button>
        </div>
      </>
    </Modal>
  );
};

export default FAQSection;
