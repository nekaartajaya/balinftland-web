import Link from "next/link";

const NavbarComponent = ({ onConnect, walletAddress }) => {
  return (
    <nav id="navbar">
      <div id="logo">
        <img src="/ProperBlockLogo.svg" alt="ProperBlock-logo" />
        <h1>PROPERBLOCK</h1>
      </div>

      <div className="link">
        <Link href="">whitepaper</Link>
        <Link href="">how it works</Link>
        <Link href="">projects</Link>
      </div>

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
    </nav>
  );
};

export default NavbarComponent;
