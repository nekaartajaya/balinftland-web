import { useState, useEffect } from "react";

import {
  connectWallet,
  getCurrentWalletConnected,
  mintDigilandNFT,
} from "../helpers/metamask-interact";

import NavbarComponent from "./NavbarComponent";
import ContentComponent from "./ContentComponent";
import FooterComponent from "./FooterComponent";

const MintComponent = () => {
  //State for forms
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [isMinted, setMinted] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [mintedQuantity, setMintedQuantity] = useState(0);

  //Constant state
  const [maxQuantity] = useState(80);

  const addWalletListener = () => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  };

  const fetchCurrentWallet = async () => {
    const { address, status } = await getCurrentWalletConnected();
    return { address, status };
  };

  useEffect(() => {
    const { address, status } = fetchCurrentWallet();
    setWallet(address);
    setStatus(status);

    addWalletListener();
  }, []);

  const handleConnect = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const handleMintPressed = async () => {
    if (quantity <= maxQuantity - mintedQuantity) {
      //call metamask here to mint
      console.log(`minted ${quantity} NFTs!`);
      let tempMinted = mintedQuantity + quantity;
      setMintedQuantity(tempMinted);

      const { status } = await mintDigilandNFT(quantity);
      setStatus(status);
    }
  };

  const handleDecrement = () => {
    if (quantity !== 0) {
      let decreasedQuantity = quantity - 1;
      setQuantity(decreasedQuantity);
    }
  };

  const handleIncrement = () => {
    let increasedQuantity = quantity + 1;
    setQuantity(increasedQuantity);
  };

  const handleChangeQuantity = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleChangeReferralCode = (e) => {
    setReferralCode(e.target.value);
  };

  return (
    <>
      <div>
        <NavbarComponent
          onConnect={handleConnect}
          walletAddress={walletAddress}
        />

        <ContentComponent
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onChangeReferralCode={handleChangeReferralCode}
          referralCode={referralCode}
          onChangeQuantity={handleChangeQuantity}
          quantity={quantity}
          mintedQuantity={mintedQuantity}
          maxQuantity={maxQuantity}
          status={status}
          onMintPressed={handleMintPressed}
        />

        <FooterComponent />
      </div>
    </>
  );
};

export default MintComponent;
