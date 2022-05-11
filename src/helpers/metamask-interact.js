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
