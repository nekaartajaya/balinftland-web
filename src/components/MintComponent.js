import { useState, useEffect } from "react";

import Image from "next/image";

import {
  connectWallet,
  getCurrentWalletConnected,
} from "../helpers/metamask-interact";

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

  const onMintPressed = () => {
    if (quantity <= maxQuantity - mintedQuantity) {
      //call metamask here to mint
      console.log(`minted ${quantity} NFTs!`);
      let tempMinted = mintedQuantity + quantity;
      setMintedQuantity(tempMinted);
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
        <div>
          <div style={{ marginLeft: 20 }}>
            <div>
              <h1>
                <img src="/ProperBlockLogo.svg" alt="" />
                PROPERBLOCK
              </h1>
            </div>
          </div>

          <div style={{ paddingRight: 20 }}>
            <div>
              <h1>whitepaper</h1>
            </div>

            <div>
              <h1>how it works</h1>
            </div>

            <div>
              <h1>projects</h1>
            </div>

            <div>
              <button onClick={handleConnect}>
                {walletAddress && walletAddress.length > 0 ? (
                  "Connected: " +
                  String(walletAddress).substring(0, 6) +
                  "..." +
                  String(walletAddress).substring(38)
                ) : (
                  <span>Connect Wallet</span>
                )}
              </button>
            </div>
          </div>
        </div>

        <div style={{ minWidth: 330 }}>
          <div>
            <Image
              src="/RoomDesktop.svg"
              alt="Room-NFT"
              height={30}
              width={30}
            />
            <div>
              <h3>LIMA BEACH NFT</h3>
              <p>Mint Price</p>
              <p>2000 USDC</p>
              <p>Total Supply</p>
              <p>250/250</p>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <h1>STAGE 1 GROUNDING</h1>
                    <h2>Public Sale Stage 1</h2>
                    <p>{`${mintedQuantity}/${maxQuantity} Minted`}</p>
                    <div>
                      <input
                        type="text"
                        name="referral-code"
                        id="referral-code"
                        placeholder="Input Referral Code (Optional)"
                        value={referralCode}
                        onChange={handleChangeReferralCode}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div>
                    <button onClick={handleDecrement}>
                      <span>−</span>
                    </button>
                    <input
                      type="number"
                      name="custom-input-number"
                      value={quantity}
                      onChange={handleChangeQuantity}
                    ></input>
                    <button onClick={handleIncrement}>
                      <span>+</span>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <button onClick={onMintPressed}>Mint Now</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1>{status}</h1>
        </div>
        <footer>
          <div>
            <div>
              <div>
                <h6>
                  <img src="" alt="" />
                  PROPERBLOCK
                </h6>
              </div>
              <div>
                <h6>Discover</h6>
                <p>
                  <a href="#!">Home</a>
                </p>
                <p>
                  <a href="#!">How NFT Developer Works</a>
                </p>
                <p>
                  <a href="#!">What's inside</a>
                </p>
              </div>
              <div>
                <h6>About</h6>
                <p>
                  <a href="#!">Whitepaper</a>
                </p>
                <p>
                  <a href="#!">Terms and Conditions</a>
                </p>
              </div>
              <div>
                <h6>Contact</h6>
                <div>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="home"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                    ></path>
                  </svg>
                  <p>Properblock, Canggu Avenue, Bali, Indonesia</p>
                </div>
                <p>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="envelope"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                    ></path>
                  </svg>
                  info@properblock.io
                </p>
              </div>
            </div>
          </div>
          <div>
            <p>© Copyright Properblock Ltd 2021, All Rights Reserved</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default MintComponent;
