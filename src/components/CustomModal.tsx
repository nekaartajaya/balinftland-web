import Modal from '@mui/material/Modal';

import {CSSProperties} from 'react';

import {Add} from 'iconsax-react';

const CustomModal = ({isOpen, onClose, title, type, children}) => {
  const style: CSSProperties = {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: type === 'small' ? 440 : type === 'large' ? 640 : 800,
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 24,
    position: 'relative',
    wordBreak: 'break-word',
  };

  return (
    <Modal open={isOpen}>
      <div style={style}>
        <div>
          <div className="text-[24px] font-semibold text-[#101828]">{title}</div>
          <button className="absolute right-[5px] top-[5px] bg-transparent" onClick={onClose}>
            <Add size="20" color="#000" className="rotate-45" />
          </button>
        </div>
        {children}
      </div>
    </Modal>
  );
};

export default CustomModal;
