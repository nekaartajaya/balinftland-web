import { createAlchemyWeb3 } from "@alch/alchemy-web3";
const contractABI = require("../../contracts/LBSFragment.json");

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

  const contractAddress = "0x3a0508AF8eCDE61C99083Fbb263d6a99BFe05eCe";

  const tokenId = 4; // Active stage
  const data = "0x00";

  //load smart contract
  window.contract = await new web3.eth.Contract(
    contractABI.abi,
    contractAddress
  ); //loadContract();

  //set up your Ethereum transaction
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    data: window.contract.methods.mint(tokenId, quantity, data).encodeABI(), //make call to NFT smart contract
  };

  console.log({ tokenId });

  //sign transaction via Metamask
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return {
      success: true,
      status:
        "✅ Check out your transaction on Etherscan: https://rinkeby.etherscan.io/tx/" +
        txHash,
    };
  } catch (error) {
    return {
      success: false,
      status: "😥 Something went wrong: " + error.message,
    };
  }
};
