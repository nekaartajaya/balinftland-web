import {useState} from 'react';

import Link from 'next/link';

import {ArrowDown2} from 'iconsax-react';

const NavbarComponent = ({onConnect, walletAddress, isOpenNav}) => {
  const language = ['ENGLISH', 'MANDARIN', 'RUSSIA', 'VIETNAM'];
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <div>
      <nav className="flex justify-between items-center desktop">
        <div id="logo" className="w-[25%]">
          <Link href="/">
            <img
              src="/Digiland_Symbol.svg"
              className="w-[27px] h-[27px] cursor-pointer"
              alt="Digiland-logo"
            />
          </Link>
        </div>

        <div className="link flex gap-9 justify-center w-[50%]">
          <Link href="/">home</Link>
          <Link href="">whitepaper</Link>
          <div className="dropdown-menu relative cursor-pointer">
            <div className="flex items-center gap-2">
              project
              <div className="arrow">
                <ArrowDown2 size="20" color="#FFF" />
              </div>
            </div>
            <div className="dropdown-item">
              <Link href="/projects/lima-beach" passHref>
                <div className="hover:opacity-100 opacity-50 cursor-pointer">
                  lima beach signature nft
                </div>
              </Link>
              <Link href="" passHref>
                <div className="opacity-50 cursor-pointer">coming soon</div>
              </Link>
            </div>
          </div>
          <Link href="">career</Link>
        </div>

        <div className="w-[25%] flex justify-end items-center gap-4">
          <div className="link dropdown-menu relative cursor-pointer mr-0">
            <div className="flex items-center gap-2">
              EN
              <div className="arrow">
                <ArrowDown2 size="20" color="#FFF" />
              </div>
            </div>
            <div className="dropdown-item">
              {language.map((v, i) => {
                return (
                  <Link href="" passHref key={v}>
                    <div className="hover:opacity-100 opacity-50 cursor-pointer">{v}</div>
                  </Link>
                );
              })}
            </div>
          </div>
          <button onClick={onConnect} className="">
            <span>mint yours</span>
          </button>
        </div>
      </nav>
      <nav
        className={`h-[70px] tablet:h-[100px] flex justify-between items-center transition transition-colors duration-200 mobile ${
          openNavbar ? 'bg-[#050910]' : 'bg-transparent'
        }`}>
        <div id="logo" className="w-[50%]">
          <Link href="/" passHref>
            <div className=" flex items-center text-white text-[12px] tablet:text-[28px] font-bold tracking-wide gap-2">
              <img
                src="/Digiland_Symbol.svg"
                className="w-[14px] h-[14px] tablet:w-[32px] tablet:h-[32px]"
                alt="Digiland-logo"
              />
              DIGILANDBALI
            </div>
          </Link>
        </div>
        <div>
          <button
            className="bg-transparent border-0"
            onClick={() => {
              setOpenNavbar(!openNavbar);
              if (!openNavbar) {
                setTimeout(() => {
                  isOpenNav(!openNavbar);
                }, 200);
              } else {
                isOpenNav(!openNavbar);
              }
            }}>
            <img
              src={`${openNavbar ? '/close-icon.svg' : '/hamburger-icon.svg'}`}
              className="w-[18px] tablet:w-[32px]"
              alt="logo"
            />
          </button>
        </div>
        <div
          className={`mobile-inner link text-[16px] tablet:text-[24px] tracking-wide gap-10 right-0 flex flex-col bg-[#050910] w-[100%] h-screen top-[60px] tablet:top-[100px] z-[999] overflow-y-auto ${
            openNavbar ? 'open' : ''
          }`}>
          <Link href="/">home</Link>
          <Link href="">whitepaper</Link>
          <div>
            <div>projects</div>
            <div>
              <Link href="/projects/lima-beach" passHref>
                <div className="hover:text[#FFF] text-[#E2E2E2] font-medium cursor-pointer mt-[26px] px-6">
                  lima beach signature nft
                </div>
              </Link>
              <Link href="" passHref>
                <div className="text-[#E2E2E2] font-medium cursor-pointer mt-[26px] px-6">
                  coming soon
                </div>
              </Link>
            </div>
          </div>
          <Link href="">career</Link>
          <div>
            <div>language</div>
            <div>
              {language.map((v, i) => {
                return (
                  <Link href="" passHref key={i}>
                    <div className="hover:text[#FFF] text-[#E2E2E2] font-medium cursor-pointer mt-[26px] px-6">
                      {v}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <Link href="">go to mint page</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
