import Link from 'next/link';

import styles from '../../styles/FooterComponent.module.css';

const FooterComponent = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className="flex justify-between items-center desktop:hidden tabler:mb-14 mb-8">
        <div className=" flex items-center text-white text-[12px] tablet:text-[24px] font-bold tracking-wide gap-2">
          <img
            src="/DigilandBali.svg"
            className="w-[14px] h-[14px] tablet:w-[27px] tablet:h-[27px]"
            alt="Logo-DigilandBali"
          />
          DIGILANDBALI
        </div>
        <div className={`${styles.contactIcons} ${styles.top}`}>
          <img
            src="/Discord_White.svg"
            className="tablet:w-5 tablet:h-5 w-4 h-4"
            alt="Discord-white"
          />
          <img
            src="/Telegram_White.svg"
            className="tablet:w-5 tablet:h-5 w-4 h-4"
            alt="Discord-white"
          />
          <img
            src="/Twitter_White.svg"
            className="tablet:w-5 tablet:h-5 w-4 h-4"
            alt="Discord-white"
          />
          <img
            src="/Opensea_White.svg"
            className="tablet:w-5 tablet:h-5 w-4 h-4"
            alt="Discord-white"
          />
        </div>
      </div>
      <div className={styles.container}>
        <div className="desktop:block hidden mr-10">
          <div className="flex text-white items-center text-[12px] tablet:text-[24px] font-bold tracking-wide gap-2">
            <img src="/DigilandBali.svg" className="max-w-25 w-25 h-8" alt="Logo-DigilandBali" />
            DIGILANDBALI
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.inner}>
            <label className={styles.title}>Discover</label>
            <div className="flex flex-col tablet:gap-4">
              <label className={styles.link}>
                <a href="#!">Digilandbali Whitepaper</a>
              </label>
              <label className={styles.link}>
                <a href="#!">Digilandbali Partners</a>
              </label>
              <label className={styles.link}>
                <a href="#!">Digilandbali Career</a>
              </label>
            </div>
          </div>
          <div className={styles.inner}>
            <label className={styles.title}>Project</label>
            <div className="flex flex-col tablet:gap-4">
              <label className={styles.link}>
                <a href="#!">Lima Beach Signature NFT</a>
              </label>
            </div>
          </div>
          <div className={styles.inner}>
            <label className={styles.title}>Contact</label>
            <div className="flex flex-col tablet:gap-4">
              <label className={styles.link}>Properblock, Canggu Avenue, Bali, Indonesia</label>
              <label className={styles.link}>info@properblock.io</label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center tablet:mt-[115px] desktop:mt-16">
        <div className="flex desktop:flex-row flex-col justify-start desktop:text-[16px] text-[14px]">
          <label className={`text-left mr-1 ${styles.link}`}>Verified Contract: </label>
          <a
            className={styles.link}
            href="https://rinkeby.etherscan.io/address/0x7a4d1b54dd21dde804c18b7a830b5bc6e586a7f6s"
            target="_blank"
            rel="noopener noreferrer"
          >
            0x7a4d1b54dd21dde804c18b7a830b5bc6e586a7f6s
          </a>
        </div>
        <div className={`${styles.contactIcons} ${styles.bottom}`}>
          <img src="/Discord_White.svg" className="w-6 h-6" alt="Discord-white" />
          <img src="/Telegram_White.svg" className="w-6 h-6" alt="Discord-white" />
          <img src="/Twitter_White.svg" className="w-6 h-6" alt="Discord-white" />
          <img src="/Opensea_White.svg" className="w-6 h-6" alt="Discord-white" />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between mt-6 border-t-2 border-[#FFF] pt-6 text-[#e2e2e2]">
        <label className="text-[8px] tablet:text-[12px] desktop:text-[16px]">
          2022 © DIGILANDBALI
        </label>
        <div className="flex items-center">
          <label className="text-[8px] tablet:text-[12px] desktop:text-[16px]">
            <Link href="/terms-and-condition" passHref>
              <div className="text-[#e2e2e2]">TERMS AND CONDITION</div>
            </Link>
          </label>
          <label className={`text-[8px] tablet:text-[12px] desktop:text-[16px] px-2`}>-</label>
          <label className="text-[8px] tablet:text-[12px] desktop:text-[16px]">
            <Link href="/privacy-policy" passHref>
              <div className="text-[#e2e2e2]">PRIVACY POLICY</div>
            </Link>
          </label>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
