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
  const connecting = useWeb3Store((state) => state.connecting);
  const toggleConnecting = useWeb3Store((state) => state.toggleConnecting);
  const { address, isConnected, isDisconnected } = useAccount();
  const { connect, connectors, isLoading, status } = useConnect({
    onSuccess() {
      toggleConnecting();
    },
  });

  const handleConnectWallet = (connector: InjectedConnector) => {
    connect({ connector });
    toggleConnecting();
  };

  const [openModalFAQ, setOpenModalFAQ] = useState<boolean>(false);
  return (
    <div className="max-w-[868px] w-full">
      <div className="md:flex border border-dark-blue mb-5">
        <div className=" border-r flex flex-col w-full md:max-w-[254px] md:min-h-[520px]">
          <div className="md:h-[83%] bg-[url('/images/stages/stage-1-new.png')] bg-cover bg-[14%]"></div>
          <hr />
          <div className="md:h-[17%] flex flex-col items-center justify-center text-blue">
            <div className="text-xl">Mint Price</div>
            <div className="text-xl font-bold">1 NFT : 10.000 USDC</div>
            <div className="text-[7px]">STAGE 1</div>
          </div>
        </div>

        <div className="bg-white w-full md:px-12 px-4 md:py-6 py-4 flex flex-col justify-between">
          <div className="flex gap-x-16">
            <div className="text-blue text-[14px] flex items-center gap-x-4">
              <span>Stage 1 Supply</span>
              <h5 className="font-bold">0/120</h5>
            </div>
            <div className="text-blue text-[14px] flex items-center gap-x-4">
              <span>Total Supply</span>
              <h5 className="font-bold">1,771</h5>
            </div>
          </div>
          <div>
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
                <label className="md:text-base text-sm">
                  <span className="text-blue/[.30]">I Agree Bali NFT Land</span>{' '}
                  <a href="https://google.com" className="text-blue">
                    Terms And Conditions
                  </a>
                </label>
              </div>
              <div className="font-normal text-lg text-red mb-10"></div>

              <div className="flex flex-col gap-4 desktop:grid desktop:grid-cols-[1fr_1fr]">
                {isConnected ? (
                  <button
                    className="w-1/2 bg-[#406aff] py-[8px] px-[14px]"
                    // onClick={() => handleMintPressed()}
                    // disabled={
                    //   !(
                    //     allowedSupply > 0 &&
                    //     quantity > 0 &&
                    //     isAgreed &&
                    //     allowance === quantity * price
                    //   ) || disableMint
                    //     ? true
                    //     : false
                    // }
                  >
                    <span className="text-white font-semibold">Mint Now</span>
                  </button>
                ) : (
                  <>
                    {connectors.map((connector: any) => (
                      <button
                        className="w-1/2 p-2 bg-[#406aff]"
                        disabled={
                          !connector.ready ||
                          isLoading ||
                          status === 'loading' ||
                          connecting
                        }
                        key={connector.id}
                        onClick={() => handleConnectWallet(connector)}
                      >
                        <span className="text-white font-semibold">
                          {connecting ? 'Connecting...' : 'Connect'}
                        </span>
                      </button>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-end items-end gap-x-2">
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
      </div>
      <button
        className="bg-light-green text-white font-semibold text-base w-full py-3 underline tracking-wider"
        onClick={() => setOpenModalFAQ(true)}
      >
        Learn more About Minting
      </button>
      <FAQSection open={openModalFAQ} onClose={() => setOpenModalFAQ(false)} />
    </div>
  );
};

export default StageOne;
