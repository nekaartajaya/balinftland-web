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
  status,
  onMintPressed,
}) => {
  return (
    <div id="content">
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <Image src="/Hexagon.svg" alt="NFT-display" height={30} width={30} />
          <h3>LIMA BEACH NFT</h3>
          <p>Mint Price</p>
          <p>2000 USDC</p>
          <p>Total Supply</p>
          <p>250/250</p>
        </div>
        <div className={styles.rightColumn}>
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
                      onChange={onChangeReferralCode}
                    />
                  </div>
                </div>
              </div>

              <div>
                <div>
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
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={onMintPressed}
                disabled={quantity > 0 ? false : true}
              >
                Mint Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>{status}</h1>
      </div>
    </div>
  );
};

export default ContentComponent;
