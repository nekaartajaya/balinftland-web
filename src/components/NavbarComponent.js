import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/NavbarComponent.module.css";

const NavbarComponent = ({ onConnect, walletAddress }) => {
  return (
    <nav id="navbar">
      <div id="logo">
        <Image
          src="/Digiland_Symbol.svg"
          width={27}
          height={27}
          alt="Digiland-logo"
        />
      </div>

      <div className="link">
        <Link href="">whitepaper</Link>
        <Link href="">project</Link>
        <Link href="">partners</Link>
        <Link href="">career</Link>
      </div>

      <label className={styles.walletAddress}>
        {walletAddress && walletAddress.length > 0 ? (
          <span>
            {String(walletAddress).substring(0, 6)}...
            {String(walletAddress).substring(38)}
          </span>
        ) : (
          <span></span>
        )}
      </label>

      <button onClick={onConnect}>
        {walletAddress && walletAddress.length > 0 ? (
          <span>Disconnect</span>
        ) : (
          <span>Mint Yours</span>
        )}
      </button>
    </nav>
  );
};

export default NavbarComponent;
