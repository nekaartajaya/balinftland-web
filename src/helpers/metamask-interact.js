import { createAlchemyWeb3 } from "@alch/alchemy-web3";
const contractABI = require("../../contracts/LBSFragment.json");
const usdcContractABI = require("../../contracts/USDC.json");

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "🦊 Metamask connected.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        status: "an error occured",
        address: "",
      };
    }
  } else {
    return {
      address: "",
      status: "please install metamask",
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "🦊 Metamask connected.",
        };
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask using the top right button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 an error occured",
      };
    }
  } else {
    return {
      address: "",
      status: "please install metamask",
    };
  }
};

export const mintDigilandNFT = async (quantity) => {
  const alchemyKey = process.env.NEXT_PUBLIC_REACT_APP_ALCHEMY_KEY;
  console.log({ alchemyKey });
  const web3 = createAlchemyWeb3(alchemyKey);

  const contractAddress = "0x5fE5ba58A537a6430e26C248b85a7Dc1AA563087";
  const usdcContractAddress = "0x4DBCdF9B62e891a7cec5A2568C3F4FAF9E8Abe2b";

  const tokenId = 1; // Active stage
  const data = "0x00";

  //load smart contract
  window.contract = await new web3.eth.Contract(
    contractABI.abi,
    contractAddress
  ); //loadContract();

  window.usdcContract = await new web3.eth.Contract(
    usdcContractABI,
    usdcContractAddress
  );

  const currentAccount = await window.ethereum.selectedAddress;
  const contractOwner = await window.contract.methods.owner().call();
  const price = await window.contract.methods.getPrice("1").call();
  console.log({ currentAccount });
  console.log({ contractOwner });
  console.log({ price });
  const approved = await window.usdcContract.methods
    .approve(contractOwner, web3.utils.toBN(quantity * price))
    .send({
      from: currentAccount,
    });
  let status = approved ? "approved" : "rejected";

  return {
    success: approved,
    status: status,
  };

  // //set up your Ethereum transaction
  // const transactionParameters = {
  //   to: contractAddress, // Required except during contract publications.
  //   from: window.ethereum.selectedAddress, // must match user's active address.
  //   data: window.contract.methods.mint(tokenId, quantity, data).encodeABI(), //make call to NFT smart contract
  // };

  // console.log({ tokenId });

  // //sign transaction via Metamask
  // try {
  //   const txHash = await window.ethereum.request({
  //     method: "eth_sendTransaction",
  //     params: [transactionParameters],
  //   });
  //   return {
  //     success: true,
  //     status:
  //       "✅ Check out your transaction on Etherscan: https://rinkeby.etherscan.io/tx/" +
  //       txHash,
  //   };
  // } catch (error) {
  //   return {
  //     success: false,
  //     status: "😥 Something went wrong: " + error.message,
  //   };
  // }
};
