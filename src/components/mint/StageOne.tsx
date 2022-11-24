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
import {
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
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
    isUSDCApproved,
    loadingAllowance,
  } = useMintHook();

  const { login, isAuthenticated } = useAuthHook();

  const cookieToken = Cookies.get('access_token');

  const { verifyRefCode, isLoading: isLoadingForm } = useFormHook();

  const connecting = useWeb3Store((state) => state.connecting);
  const toggleConnecting = useWeb3Store((state) => state.toggleConnecting);

  const { address, isConnected, isDisconnected } = useAccount();
  const { connect, connectors, isLoading, status } = useConnect({
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
    // verifyAllowance();
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
      console.log(isLoadingForm);
      if (isValidCode && cookieToken) {
        const refCodeValidity = await verifyRefCode(cookieToken, referralCode);

        if (refCodeValidity) {
          setCodeValidity(true);
        } else {
          setCodeValidity(false);
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
    if (e.target.value) {
      let value = e.target.value;
      if (value.charAt(0) === '0') value = value.substring(1);
      setQuantity(value);
    } else {
      setQuantity(0);
    }
  };

  const handleChangeReferralCode = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setTemp(e.target.value);
  };

  const refRefferal = useRef<HTMLInputElement>(null);
  const handleRemoveReferralCode = () => {
    setTemp('');

    const timeoutRef = setTimeout(() => {
      if (refRefferal.current) {
        refRefferal.current.value = '';
      }
      clearTimeout(timeoutRef);
    }, 1000);
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
    !(
      allowedSupply > 0 &&
      quantity > 0 &&
      isAgreed &&
      allowance === quantity * price
    ) || disableMint
      ? null
      : mintNFT(cookieToken, quantity, referralCode);
  };

  const allowedSupply = maxSupply - mintedQty;

  const formDisabled = !isAuthenticated;

  const [openModalFAQ, setOpenModalFAQ] = useState<boolean>(false);

  return (
    <div className="max-w-[868px] w-full">
      <div className="md:flex border border-dark-blue mb-5">
        <div className="md:border-r flex flex-col w-full md:max-w-[254px] md:min-h-[520px] min-h-[280px]">
          {loading ? (
            <div className="w-[80%] md:h-[83%] h-[180px] mx-auto md:pt-[35px] pt-[18px]">
              <Skeleton height={'90%'} variant="rectangular" />
            </div>
          ) : (
            <div
              className={`md:h-[83%] h-[180px] bg-cover md:bg-left bg-center`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          )}
          <hr className="md:block hidden" />
          <div className="md:h-[17%] h-[100px] flex flex-col items-center justify-center text-blue bg-white  md:border-y-0 border-y">
            {loading ? (
              <div className="w-[80%]">
                <Skeleton height={50} variant="rectangular" />
              </div>
            ) : (
              <>
                <div className="text-xl">Mint Price</div>
                <div className="text-xl font-bold">1 NFT : {price} USDC</div>
                <div className="text-[7px]">STAGE 0{activeStage}</div>
              </>
            )}
          </div>
        </div>

        <div className="bg-white w-full md:px-12 px-4 md:py-6 py-4 flex flex-col justify-between gap-y-12">
          <div className="flex gap-x-16">
            {loading ? (
              <>
                <div className="w-full">
                  <Skeleton height={20} variant="rectangular" />
                </div>
                <div className="w-full">
                  <Skeleton height={20} variant="rectangular" />
                </div>
              </>
            ) : (
              <>
                <div className="text-blue text-[14px] flex items-center gap-x-4">
                  <span>Stage {activeStage} Supply</span>
                  <h5 className="font-bold">
                    {mintedQty}/{maxSupply}
                  </h5>
                </div>
                <div className="text-blue text-[14px] flex items-center gap-x-4">
                  <span>Total Supply</span>
                  <h5 className="font-bold">1,771</h5>
                </div>
              </>
            )}
          </div>
          <div>
            <div className="text-blue tracking-[5px] mb-9">
              {loading ? (
                <div className="w-full">
                  <Skeleton height={50} variant="rectangular" />
                </div>
              ) : (
                <>
                  <h1 className="font-bold text-2xl">
                    STAGE 0{activeStage}: PHYSICAL LAND
                  </h1>
                  <span className="text-base">Lima Beach Signature NFT</span>
                </>
              )}
            </div>

            {loading ? (
              <div className="w-full">
                <Skeleton height={300} variant="rectangular" />
              </div>
            ) : (
              <div>
                <div className="mb-10">
                  <div className="relative mb-1">
                    {codeValidity && (
                      <div className="absolute top-[50%] translate-y-[-50%] left-3">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.7391 8.65217L11.0435 15.3478L7.69565 12M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z"
                            stroke="#2AC610"
                          />
                        </svg>
                      </div>
                    )}
                    {codeValidity && referralCode.length > 0 && (
                      <div className="absolute top-[50%] translate-y-[-50%] right-3 text-[12px]">
                        <button
                          className="text-[#FF0000]"
                          onClick={() => handleRemoveReferralCode()}
                        >
                          Remove
                        </button>
                      </div>
                    )}

                    <input
                      ref={refRefferal}
                      type="text"
                      name={'refferal'}
                      placeholder={'Input Preffereal Code (Optional)'}
                      className={`border border-dark-blue py-3 pl-3 pr-12 placeholder:text-blue/[.30] text-base w-full focus:outline-blue ${
                        codeValidity && '!pl-12'
                      }`}
                      defaultValue={''}
                      onChange={handleChangeReferralCode}
                      disabled={formDisabled}
                    />
                  </div>

                  {isLoadingForm && (
                    <span className="text-blue text-[12px]">Checking...</span>
                  )}
                  {isValidCode || emptyRefCode ? (
                    <></>
                  ) : (
                    <span className="text-[#FF0000] text-[12px]">
                      Invalid Referral code, code has been removed{' '}
                    </span>
                  )}
                  {codeValidity && (
                    <span className="text-light-green text-[12px]">
                      Referral Code Added!
                    </span>
                  )}
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
                      className={`placeholder:text-blue/[.30] text-base w-full text-center text-blue font-bold text-sm focus:outline-none`}
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
                    <span className="text-blue/[.30]">
                      I Agree Bali NFT Land
                    </span>{' '}
                    <a href="https://google.com" className="text-blue">
                      Terms And Conditions
                    </a>
                  </label>
                </div>
                <div className="font-normal text-[12px] text-red h-10 mt-2 text-[#FF0000]">
                  {isUSDCEnough() ? '' : 'Insufficient balance'}
                </div>

                <div className="flex gap-x-12">
                  {isConnected && isAuthenticated ? (
                    <>
                      {!(
                        allowedSupply > 0 &&
                        quantity > 0 &&
                        allowance === quantity * price
                      ) || !isUSDCApproved ? (
                        <button
                          className={`w-1/2 bg-light-blue-2/[.10] py-3 px-1 text-[12px] border-2 border-light-blue-2 ${
                            !isUSDCEnough() ||
                            quantity === 0 ||
                            loadingAllowance
                              ? 'opacity-50'
                              : 'opacity-100'
                          }`}
                          onClick={handleSetAllowance}
                          disabled={
                            !isUSDCEnough() ||
                            quantity === 0 ||
                            loadingAllowance
                          }
                        >
                          <span className="text-light-blue-2 font-semibold">
                            {loadingAllowance
                              ? 'Loading...'
                              : `Allow To Trade ${(
                                  quantity * price
                                ).toLocaleString()} 
                          USDC`}
                          </span>
                        </button>
                      ) : (
                        <div className="w-1/2 flex items-center justify-center gap-x-2 bg-light-green/[.05] border-2 border-light-green py-3">
                          <span className="text-light-green font-bold text-[12px]">
                            Now You Can Trade USDC
                          </span>
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.1739 6.56522L8.30435 11.4348L5.86957 9M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
                              stroke-width="2"
                              className="stroke-light-green"
                            />
                          </svg>
                        </div>
                      )}

                      <button
                        className={`w-1/2 bg-light-blue-2 py-3 px-1 text-[12px]  ${
                          !(
                            allowedSupply > 0 &&
                            quantity > 0 &&
                            isAgreed &&
                            allowance === quantity * price
                          ) ||
                          disableMint ||
                          !isUSDCApproved
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
                          ) ||
                          disableMint ||
                          !isUSDCApproved
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
            )}
          </div>

          <div className="flex justify-end items-end gap-x-2">
            {loading ? (
              <div className="w-1/4">
                <Skeleton height={20} variant="rectangular" />
              </div>
            ) : (
              <>
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
              </>
            )}
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
