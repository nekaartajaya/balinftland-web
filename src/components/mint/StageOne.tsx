/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import { IconButton, Skeleton, TextField } from '@mui/material';
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

const StageOne = () => {
  const [quantity, setQuantity] = useState(0);
  const [isAgreed, setIsAgreed] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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
  const [temp, setTemp] = useState('');
  const [referralCode] = useDebounce(temp, 1000);
  const [codeValidity, setCodeValidity] = useState(false);
  const cookieToken = Cookies.get('access_token');

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

  const { verifyRefCode, isLoading: isLoadingForm } = useFormHook();

  const connecting = useWeb3Store((state) => state.connecting);
  const toggleConnecting = useWeb3Store((state) => state.toggleConnecting);

  const { address, isConnected, isDisconnected } = useAccount();
  const { connect, connectors, isLoading, status } = useConnect({
    onSuccess() {
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

  const handleConnectWallet = (connector: InjectedConnector) => {
    connect({ connector });
    toggleConnecting();
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
  const handleMintPressed = () => {
    mintNFT(cookieToken, quantity, referralCode);
  };

  const allowedSupply = maxSupply - mintedQty;

  const formDisabled = !isAuthenticated;

  return (
    <div className="max-w-[868px] w-full">
      <div className="flex border border-dark-blue">
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
              {isLoadingForm ? <p>Checking...</p> : <></>}
              {isValidCode || emptyRefCode ? (
                <></>
              ) : (
                <p className="text-red">
                  Invalid Referral code, code has been removed{' '}
                </p>
              )}
              {codeValidity ? (
                <p className="text-light-green">Referral Code Added!</p>
              ) : (
                <></>
              )}
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

            <p className="font-normal text-lg text-red">
              {quantity > 0 && quantity >= allowedSupply
                ? `Max supply reached`
                : ''}
              {/* {allowedSupply === 0 ? `Sold out!` : ''} */}
            </p>

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
            <div className="font-normal text-lg text-red mb-10">
              {isUSDCEnough() ? '' : 'Insufficient balance'}
            </div>

            <div className="flex flex-col gap-4 desktop:grid desktop:grid-cols-[1fr_1fr]">
              {isConnected ? (
                <div className="flex gap-x-10">
                  <div className="w-full">
                    <button
                      disabled={
                        loading ||
                        quantity * price > balance ||
                        quantity * price === allowance ||
                        quantity > allowedSupply ||
                        formDisabled
                      }
                      onClick={handleSetAllowance}
                      className="bg-light-blue-2/[0.10] w-full h-full border-2 border-light-blue-2"
                    >
                      {/* {quantity > 0 ? 'Set New Allowance' : ''} */}
                      <div className="ml-2 text-light-blue-2 font-bold text-[12px]">
                        Allow To Trade {(quantity * price).toLocaleString()}{' '}
                        USDC
                      </div>
                    </button>
                    {allowance > 0 && (
                      <p className="mt-1 text-light-green">
                        {allowance ? (
                          `Congratulations ! Now you can trade your ${allowance} USDC`
                        ) : (
                          <Skeleton />
                        )}
                      </p>
                    )}
                  </div>
                  <button
                    className="w-full bg-light-blue-2 text-white font-bold py-3 px-[14px] text-[12px]"
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
                    <span>Mint Now</span>
                  </button>
                </div>
              ) : (
                <>
                  {connectors.map((connector: any) => (
                    <button
                      className="w-full p-2 bg-light-blue-2 text-white font-bold w-1/2"
                      disabled={
                        !connector.ready ||
                        isLoading ||
                        status === 'loading' ||
                        connecting
                      }
                      key={connector.id}
                      onClick={() => handleConnectWallet(connector)}
                    >
                      <span>{connecting ? 'Connecting' : 'Connect'}</span>
                    </button>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StageOne;
