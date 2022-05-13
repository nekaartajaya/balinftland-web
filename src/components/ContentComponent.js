import { useState } from "react";

import Image from "next/image";

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
      <div style={{ minWidth: 330 }}>
        <div>
          <Image src="/RoomDesktop.svg" alt="Room-NFT" height={30} width={30} />
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
