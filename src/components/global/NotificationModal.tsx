import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import { useState, useEffect } from 'react';

import useWeb3Store from 'src/store';

type NotificationModalProps = {
  title: string;
  subtitle: string;
};

const NotificationModal = ({ title, subtitle }: NotificationModalProps) => {
  const mintedTxHash = useWeb3Store((state) => state.mintedTxHash);

  useEffect(() => {
    if (mintedTxHash.length) handleOpen();
  }, [mintedTxHash]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 mobile:max-w-[250px] max-w-[280px] bg-white rounded-0 flex flex-col justify-center items-center gap-6">
          <img src="/images/icons/success.png" alt="Success" />
          <div>
            <div className="font-semibold text-xl text-center text-blue mb-2">
              {title}
            </div>
            <div className="font-sm text-sm text-center leading-[25px]  text-blue">
              {subtitle}
            </div>
          </div>
          <button
            className="bg-light-blue-2 text-white w-full p-3 text-base font-medium"
            onClick={handleClose}
          >
            Dismiss
          </button>
        </Box>
      </Modal>
    </div>
  );
};

export default NotificationModal;
