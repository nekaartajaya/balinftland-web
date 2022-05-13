const NavbarComponent = ({ onConnect, walletAddress }) => {
  return (
    <div id="navbar">
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
          <button onClick={onConnect}>
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
  );
};

export default NavbarComponent;
