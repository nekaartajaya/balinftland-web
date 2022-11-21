/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Box, IconButton, Skeleton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';
import useMintHook from '@hooks/use-mint.hooks';
import { useConnect, useAccount } from 'wagmi';
import useWeb3Store from '@store/index';
import { InjectedConnector } from '@wagmi/core';
import useAuthHook from '@hooks/use-auth.hooks';
import CheckIcon from '@mui/icons-material/Check';
import { SetStateAction, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useDebounce } from 'use-debounce';
import useFormHook from '@hooks/use-form.hooks';
import useStore from '@store/index';
import FAQSection from './FAQ';

const StageOne = () => {
  const [openModalFAQ, setOpenModalFAQ] = useState<boolean>(false);
  return (
    <div className="max-w-[868px] w-full">
      <div className="flex border border-dark-blue mb-5">
        <div className="px-10 py-10 bg-[#EDF4F7] flex flex-col gap-y-6 w-full max-w-[254px]">
          <div className="text-center">
            <Image
              src={'/images/icons/stage-1.png'}
              alt="Stage 1"
              width={100}
              height={100}
              className="mx-auto mb-2"
            />
            <h1 className="font-bold text-2xl tracking-wide text-blue">
              5 DAYS LEFT!
            </h1>
          </div>

          <div className="text-blue text-[14px] text-center">
            <h5 className="font-bold mb-2">Mint Price</h5>
            <span>1 NFT : 10.000 USDC</span>
          </div>

          <div className="text-blue text-[14px] text-center">
            <h5 className="font-bold mb-2">Stage Supply</h5>
            <span>0/120</span>
          </div>

          <div className="text-blue text-[14px] text-center">
            <h5 className="font-bold mb-2">Total Supply</h5>
            <span>1,771</span>
          </div>

          <div className="flex justify-center gap-x-2 mb-6">
            <button
              className="bg-light-blue-2 text-white h-6 w-6"
              onClick={() => null}
            >
              <TwitterIcon className="h-4 w-4" />
            </button>
            <button
              className="bg-light-blue-2 text-white h-6 w-6"
              onClick={() => null}
            >
              <TelegramIcon className="h-4 w-4" />
            </button>
            <button
              className="bg-light-blue-2 text-white h-6 w-6"
              onClick={() => null}
            >
              <Image
                src={'/images/icons/discord.png'}
                alt="Discord"
                width={14}
                height={14}
                className="mx-auto"
              />
            </button>
            <button
              className="bg-light-blue-2 text-white h-6 w-6"
              onClick={() => null}
            >
              <Image
                src={'/images/icons/opensea.png'}
                alt="Opensea"
                width={14}
                height={14}
                className="mx-auto"
              />
            </button>
          </div>
        </div>

        <div className="bg-white w-full px-12 flex flex-col justify-center">
          <div className="text-blue tracking-[5px] mb-9">
            <h1 className="font-bold text-2xl">STAGE 01: PHYSICAL LAND</h1>
            <span className="text-base">Lima Beach Signature NFT</span>
          </div>

          <div>
            <div className="mb-10">
              <input
                type="text"
                name={'tes'}
                placeholder={'Input Preffereal Code (Optional)'}
                className={`border border-dark-blue p-3 placeholder:text-blue/[.30] text-base w-full`}
              />
            </div>

            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center h-12 border border-dark-blue justify-around w-[45%]">
                <div>
                  <IconButton disabled={false} onClick={() => null}>
                    <RemoveIcon
                      fontSize="small"
                      className="border border-dark-blue rounded-full w-7 h-7 p-1"
                    />
                  </IconButton>
                </div>
                <input
                  type="number"
                  name="input-mint-quantity"
                  value={'10'}
                  disabled={false}
                  onChange={() => null}
                  className={`placeholder:text-blue/[.30] text-base w-full text-center text-blue font-bold text-sm`}
                ></input>
                <div>
                  <IconButton disabled={false} onClick={() => null}>
                    <AddIcon
                      fontSize="small"
                      className="border border-dark-blue rounded-full w-7 h-7 p-1"
                    />
                  </IconButton>
                </div>
              </div>
              <SwapHorizOutlinedIcon />
              <div className="flex items-center justify-center h-12 border border-dark-blue w-[45%]">
                <h4 className="font-bold text-sm whitespace-nowrap text-blue">
                  100.000 USDC
                </h4>
              </div>
            </div>

            <p className="font-normal text-lg text-red"></p>

            <div className="flex flex-row gap-x-2">
              <input
                type="checkbox"
                name="tnc"
                onChange={() => null}
                disabled={false}
                className="w-5 !rounded-none"
              />
              <label>
                <span className="text-blue/[.30]">I Agree Bali NFT Land</span>{' '}
                <a href="https://google.com" className="text-blue">
                  Terms And Conditions
                </a>
              </label>
            </div>
            <div className="font-normal text-lg text-red mb-10"></div>

            <div className="flex flex-col gap-4 desktop:grid desktop:grid-cols-[1fr_1fr]">
              <>
                <button
                  className="w-full p-2 bg-light-blue-2 text-white font-bold w-1/2"
                  disabled={false}
                >
                  <span>Connect</span>
                </button>
              </>
            </div>
          </div>
        </div>
      </div>
      <button
        className="bg-light-blue-2 text-white font-bold text-base w-full py-3"
        onClick={() => setOpenModalFAQ(true)}
      >
        Learn more About Minting
      </button>
      <FAQSection open={openModalFAQ} onClose={() => setOpenModalFAQ(false)} />
    </div>
  );
};

export default StageOne;
