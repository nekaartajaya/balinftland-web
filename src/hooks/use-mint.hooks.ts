import { createAlchemyWeb3 } from '@alch/alchemy-web3';
import detectEthereumProvider from '@metamask/detect-provider';

import { useState } from 'react';

import getConfig from 'next/config';

import contractABI from '../../public/contracts/LBSFragment.json';

import {
  getCurrentWalletConnected,
  connectWallet,
  approveUSDC,
  checkAllowanceUSDC,
  getPrice,
  getActiveStage,
  getUSDCDecimals,
  getUSDCBalance,
  getMaxSaleSupply,
  getTokenToMintedQty,
  getMintedNFTQty,
  getNFTImage,
  getNFTImageByTokenId,
} from '@helpers/metamask-interact';
import { mintNFTWithRefCode } from '@api/referral';
import useWeb3Store from '@store/index';
import { AbiItem } from 'web3-utils';

const { publicRuntimeConfig } = getConfig();
const lbsfContractAddress = publicRuntimeConfig.lbsfContractAddress;
const usdcContractAddress = publicRuntimeConfig.usdcContractAddress;
const web3ProviderURL = publicRuntimeConfig.web3ProviderURL;

const useMintHook = () => {
  //TODO: move some of the states to store level
  const [loading, setLoading] = useState<boolean>(false);
  const [minting, setMinting] = useState<boolean>(false);
  const [isMintSuccess, setIsMintSuccess] = useState<boolean>(false);
  const [isUSDCApproved, setIsUSDCApproved] = useState<boolean>(false);
  const [allowance, setAllowance] = useState<number>(0);
  const [activeStage, setActiveStage] = useState<number>(0);
  const [maxSupply, setMaxSupply] = useState<number>(0);
  const [image, setImage] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [usdcDecimals, setDecimals] = useState<number>(0);
  const [balance, setBalance] = useState<number>(0);
  const [mintedQty, setMintedQty] = useState<number>(0);
  const [mintedNFT, setMintedNFT] = useState<number>(0);
  const [loadingAllowance, setLoadingAllowance] = useState<boolean>(false);

  const [ownedImage, setOwnedImage] = useState<string>('');

  const currentWallet = useWeb3Store((state: any) => state.currentWallet);
  const updateWallet = useWeb3Store((state: any) => state.updateWallet);

  const updateMintedTxHash = useWeb3Store(
    (state: any) => state.updateMintedTxHash,
  );

  const fetchCurrentWallet = async () => {
    setLoading(true);

    try {
      if (currentWallet === '') {
        const respObj = await getCurrentWalletConnected();
        const { address }: any = respObj;
        updateWallet(address);
      }
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  const linkWallet = async () => {
    setLoading(true);

    try {
      const address = await connectWallet();

      updateWallet(address);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  const fetchNFTImage = async () => {
    setLoading(true);

    try {
      const image = await getNFTImage();

      setImage(image);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  const fetchNFTImageByTokenId = async (tokenId: string) => {
    setLoading(true);

    try {
      const image = await getNFTImageByTokenId(tokenId);

      setOwnedImage(image);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  const fetchMintedByUserQty = async (currentAddress: string) => {
    setLoading(true);

    let tempAddress = '';

    if (currentWallet.length > 0) {
      tempAddress = currentWallet;
    } else {
      tempAddress = currentAddress;
    }

    try {
      const mintedNFT = await getMintedNFTQty(tempAddress);
      setMintedNFT(mintedNFT ?? 0);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  const fetchMintedQty = async () => {
    setLoading(true);

    try {
      const mintedQty = await getTokenToMintedQty();

      setMintedQty(mintedQty);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  const fetchMaxSupply = async () => {
    try {
      setLoading(true);

      const maxSupply = await getMaxSaleSupply();
      setMaxSupply(maxSupply);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  const fetchBalance = async (address: string) => {
    setLoading(true);

    try {
      const decimals = await getUSDCDecimals();
      const balance = await getUSDCBalance(address);

      setBalance((balance ?? 0) / 10 ** decimals);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  const fetchDecimals = async () => {
    try {
      const decimals = await getUSDCDecimals();

      setDecimals(decimals);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  const fetchActiveStage = async () => {
    setLoading(true);

    try {
      const activeStage = await getActiveStage();

      setActiveStage(activeStage);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  const fetchPrice = async () => {
    setLoading(true);

    try {
      const price = await getPrice();

      setPrice(price ?? 0);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  const verifyAllowance = async () => {
    setLoading(true);

    try {
      const allowance = await checkAllowanceUSDC();
      setAllowance(allowance ?? 0);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  const allowUSDC = async (amount: number) => {
    setLoadingAllowance(true);

    try {
      const isSuccess = await approveUSDC(amount);

      const allowance = await checkAllowanceUSDC();
      setAllowance(allowance ?? 0);

      setIsUSDCApproved(isSuccess ?? false);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoadingAllowance(false);
    }
  };

  const mintNFT = async (
    token: string,
    quantity: number,
    referralCode = '',
  ) => {
    const web3 = createAlchemyWeb3(web3ProviderURL);

    const contract = new web3.eth.Contract(
      contractABI.abi as any,
      lbsfContractAddress,
    );

    setMinting(true);

    try {
      const provider = await detectEthereumProvider({ timeout: 2000 });

      if (provider) {
        const addressArray: any = await window.ethereum?.request({
          method: 'eth_requestAccounts',
        });

        if (addressArray?.length === 0)
          throw Error('Please connect an account!');

        const currentAccount = addressArray[0];

        const tokenId = await contract.methods.activeStage().call();

        const transactionParameters = {
          to: lbsfContractAddress,
          from: currentAccount,
          data: contract.methods.mint(tokenId, quantity, '0x00').encodeABI(),
        };

        const txHash = await web3.eth
          .sendTransaction(transactionParameters)

          .on('confirmation', (confNumber, receipt) => {
            const { status } = receipt;
            if (status) {
              setMinting(false);
              setAllowance(0);
            }
          })

          .on('error', console.error);

        if (txHash) {
          const { transactionHash } = txHash;

          updateMintedTxHash(transactionHash);
          setIsMintSuccess(true);

          const data = await mintNFTWithRefCode(token, {
            id: transactionHash,
            projectId: 'lima-beach-signature',
            nftId: lbsfContractAddress,
            walletAddress: currentAccount,
            tokenId,
            quantity,
            currencyId: usdcContractAddress,
            amount: quantity,
            referralCode,
          });

          if (data) {
            return data;
          } else {
            throw new Error('minting data not logged!');
          }
        } else {
          console.log('refCode not recorded!');
        }
      } else {
        console.log('please install metamask!');
      }
    } catch (error) {
      console.log({ error });
    } finally {
      setMinting(false);
    }
  };

  return {
    loading,
    fetchCurrentWallet,
    linkWallet,
    mintNFT,
    minting,
    isMintSuccess,
    allowUSDC,
    isUSDCApproved,
    verifyAllowance,
    allowance,
    fetchPrice,
    price,
    fetchActiveStage,
    activeStage,
    fetchDecimals,
    usdcDecimals,
    fetchBalance,
    balance,
    fetchMaxSupply,
    maxSupply,
    fetchMintedQty,
    mintedQty,
    fetchMintedByUserQty,
    mintedNFT,
    fetchNFTImage,
    image,
    fetchNFTImageByTokenId,
    ownedImage,
    loadingAllowance,
  };
};

export default useMintHook;
