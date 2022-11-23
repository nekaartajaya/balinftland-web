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
  const {
    mintNFT,
    minting,
    isMintSuccess,
    allowUSDC,
    verifyAllowance,
    allowance,
    fetchBalance,
    balance,
    fetchMintedByUserQty,
    mintedNFT,
    fetchPrice,
    price,
    fetchActiveStage,
    activeStage,
    fetchMaxSupply,
    maxSupply,
    fetchMintedQty,
    mintedQty,
    fetchNFTImage,
    image,
    loading,
  } = useMintHook();

  const { login, isAuthenticated } = useAuthHook();

  const cookieToken = Cookies.get('access_token');

  const { verifyRefCode, isLoading: isLoadingForm } = useFormHook();

  const connecting = useWeb3Store((state) => state.connecting);
  const toggleConnecting = useWeb3Store((state) => state.toggleConnecting);

  const { address, isConnected, isDisconnected } = useAccount();
  const { connect, connectors, isLoading, status } = useConnect({
    onSuccess() {
      toggleConnecting();
    },
    onError() {
      toggleConnecting();
    },
  });

  const currentWallet = useStore((state) => state.currentWallet);
  const updateWallet = useStore((state) => state.updateWallet);

  if (isDisconnected) {
    Cookies.remove('access_token');
    Cookies.remove('user');
  }

  useEffect(() => {
    verifyAllowance();
    fetchMintedQty();
    fetchPrice();
    fetchActiveStage();
    fetchMaxSupply();
    fetchNFTImage();
  }, []);

  useEffect(() => {
    if (address && !cookieToken) {
      login(address);
    }
  }, [address, cookieToken]);

  useEffect(() => {
    if (isConnected && address) {
      updateWallet(address);
      Cookies.set('user', JSON.stringify(address));
      fetchMintedByUserQty(address);
      fetchBalance(address);
    }
  }, [isConnected, address, isAuthenticated]);

  useEffect(() => {
    if (isMintSuccess && address) {
      fetchMintedByUserQty(address);
    }
  }, [isMintSuccess, address]);

  const [temp, setTemp] = useState('');
  const [referralCode] = useDebounce(temp, 1000);
  const [codeValidity, setCodeValidity] = useState(false);

  //Prerequisite for refCode
  const isAlphaNumeric = (str: string) => /^[a-z0-9]+$/gi.test(str);
  const isValidCode = referralCode.length === 6 && isAlphaNumeric(referralCode);
  const emptyRefCode = referralCode.length === 0;
  const refCodeConfirmed =
    (codeValidity && referralCode.length === 6) || referralCode.length === 0;

  const disableMint = minting || !refCodeConfirmed;

  useEffect(() => {
    async function check() {
      if (isValidCode && cookieToken) {
        const refCodeValidity = await verifyRefCode(cookieToken, referralCode);

        if (refCodeValidity) {
          setCodeValidity(true);
        }
      } else {
        setCodeValidity(false);
      }
    }

    check();
  }, [isValidCode, referralCode, cookieToken]);

  const [quantity, setQuantity] = useState(0);

  const [isAgreed, setIsAgreed] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);

  const [copy, setCopy] = useState(false);

  const handleTooltipClose = () => {
    setCopy(false);
  };

  const handleTooltipOpen = () => {
    setCopy(true);
  };

  const handleDecrement = () => {
    if (quantity !== 0) {
      const decreasedQuantity = quantity - 1;
      setQuantity(decreasedQuantity);
    }
  };

  const handleIncrement = () => {
    const increasedQuantity = quantity + 1;
    setQuantity(increasedQuantity);
  };

  const handleChangeQuantity = (e: { target: { value: any } }) => {
    setQuantity(Number(e.target.value));
  };

  const handleChangeReferralCode = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setTemp(e.target.value);
  };

  const isUSDCEnough = () => {
    if (balance < quantity * price) return false;
    return true;
  };

  const handleChangeAgreement = () => {
    setIsAgreed(!isAgreed);
  };

  const handleSetAllowance = () => {
    allowUSDC(quantity * price);
  };

  const handleConnectWallet = (connector: InjectedConnector) => {
    connect({ connector });
    toggleConnecting();
  };

  const handleMintPressed = () => {
    mintNFT(cookieToken, quantity, referralCode);
  };

  const allowedSupply = maxSupply - mintedQty;

  const formDisabled = !isAuthenticated;

  const [openModalFAQ, setOpenModalFAQ] = useState<boolean>(false);

  return (
    <div className="max-w-[868px] w-full">
      <div className="md:flex border border-dark-blue mb-5">
        <div className="md:border-r flex flex-col w-full md:max-w-[254px] md:min-h-[520px] min-h-[280px]">
          <div
            className={`md:h-[83%] h-[180px] bg-cover md:bg-left bg-center`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <hr className="md:block hidden" />
          <div className="md:h-[17%] h-[100px] flex flex-col items-center justify-center text-blue bg-white  md:border-y-0 border-y">
            <div className="text-xl">Mint Price</div>
            <div className="text-xl font-bold">1 NFT : 10.000 USDC</div>
            <div className="text-[7px]">STAGE 0{activeStage}</div>
          </div>
        </div>

        <div className="bg-white w-full md:px-12 px-4 md:py-6 py-4 flex flex-col justify-between gap-y-12">
          <div className="flex gap-x-16">
            <div className="text-blue text-[14px] flex items-center gap-x-4">
              <span>Stage 1 Supply</span>
              <h5 className="font-bold">
                {mintedQty}/{maxSupply}
              </h5>
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
                    <IconButton
                      disabled={false}
                      onClick={() => handleDecrement()}
                    >
                      <RemoveIcon
                        fontSize="small"
                        className="border border-dark-blue rounded-full w-7 h-7 p-1"
                      />
                    </IconButton>
                  </div>
                  <input
                    type="number"
                    name="input-mint-quantity"
                    value={quantity}
                    disabled={false}
                    onChange={handleChangeQuantity}
                    className={`placeholder:text-blue/[.30] text-base w-full text-center text-blue font-bold text-sm`}
                  ></input>
                  <div>
                    <IconButton
                      disabled={false}
                      onClick={() => handleIncrement()}
                    >
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
                    {(quantity * price).toLocaleString()} USDC
                  </h4>
                </div>
              </div>

              <p className="font-normal text-lg text-red"></p>

              <div className="flex flex-row gap-x-2">
                <input
                  type="checkbox"
                  name="tnc"
                  onChange={() => handleChangeAgreement()}
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
              <div className="font-normal text-lg text-red mb-10">
                {isUSDCEnough() ? '' : 'Insufficient balance'}
              </div>

              <div className="flex gap-x-12">
                {isConnected ? (
                  <>
                    <button
                      className="w-1/2 bg-light-blue-2/[.10] py-3 px-1 text-[12px] border-2 border-light-blue-2"
                      onClick={handleSetAllowance}
                    >
                      <span className="text-light-blue-2 font-semibold">
                        Allow To Trade {(quantity * price).toLocaleString()}{' '}
                        USDC
                      </span>
                    </button>
                    <button
                      className={`w-1/2 bg-light-blue-2 py-3 px-1 text-[12px]  ${
                        !(
                          allowedSupply > 0 &&
                          quantity > 0 &&
                          isAgreed &&
                          allowance === quantity * price
                        ) || disableMint
                          ? 'opacity-50'
                          : 'opacity-100'
                      }`}
                      onClick={() => handleMintPressed()}
                      disabled={
                        !(
                          allowedSupply > 0 &&
                          quantity > 0 &&
                          isAgreed &&
                          allowance === quantity * price
                        ) || disableMint
                          ? true
                          : false
                      }
                    >
                      <span className={`text-white font-semibold`}>
                        Mint Now
                      </span>
                    </button>
                  </>
                ) : (
                  <>
                    {connectors.map((connector: any) => (
                      <button
                        className="w-1/2 py-3 bg-[#406aff] text-[12px] px-1"
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
                          {connecting ? 'Connecting...' : 'Connect Wallet'}
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
