import Image from "next/image";
import styles from "../../styles/ContentComponent.module.css";

const ContentComponent = ({
  onIncrement,
  onDecrement,
  onChangeReferralCode,
  referralCode,
  onChangeQuantity,
  quantity,
  mintedQuantity,
  maxQuantity,
  walletAddress,
  onMintPressed,
}) => {
  return (
    <div id="content">
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <Image
            src="/Hexagon.svg"
            alt="NFT-display"
            height={180}
            width={180}
          />
          <h3>LIMA BEACH NFT</h3>
          <div>
            <p>Mint Price</p>
            <p>2000 USDC</p>
          </div>
          <div>
            <p>Total Supply</p>
            <p>250/250</p>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.rightColumnContent}>
            <div className={styles.header}>
              <h1>PUBLIC SALE STAGE 1</h1>
              <label>
                {`${mintedQuantity}/${maxQuantity} Minted`}{" "}
                <span>Stage 1 supply left</span>
              </label>
            </div>

            <div className={styles.inputMint}>
              <input
                className={styles.inputReferralCode}
                type="text"
                name="referral-code"
                id="referral-code"
                placeholder="Input Referral Code (Optional)"
                value={referralCode}
                onChange={onChangeReferralCode}
              />

              <div className={styles.containerReferralCode}>
                <button onClick={onDecrement}>
                  <span>−</span>
                </button>
                <input
                  type="number"
                  name="custom-input-number"
                  value={quantity}
                  onChange={onChangeQuantity}
                ></input>
                <button onClick={onIncrement}>
                  <span>+</span>
                </button>
                <p>
                  Total <span>6,000 USDC</span>
                </p>
              </div>

              <div>
                <input type="checkbox" id="tnc" name="tnc" value="Agreed" />
                <label for="vehicle1">
                  I agree with{" "}
                  <a href="" style={{ color: "#406aff" }}>
                    terms and conditions
                  </a>
                </label>
              </div>
            </div>

            <p>
              Wallet address :{" "}
              {walletAddress && walletAddress.length > 0 ? (
                String(walletAddress).substring(0, 6) +
                "..." +
                String(walletAddress).substring(38)
              ) : (
                <span>Not connected</span>
              )}
            </p>
            <p>Minted supply : {mintedQuantity}</p>

            <div>
              <button
                onClick={onMintPressed}
                disabled={quantity > 0 ? false : true}
              >
                <span>Mint Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentComponent;
