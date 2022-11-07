import Link from 'next/link';
import {useRouter} from 'next/router';
import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {NavMenu} from 'src/interfaces/NavbarInterface';

const Navbar = ({isOpenNav}: {isOpenNav: Dispatch<SetStateAction<boolean>>}) => {
  const router = useRouter();
  const [openNavbar, setOpenNavbar] = useState<boolean>(false);
  const [pathname, setPathname] = useState<Array<string> | undefined>();

  const closeNavbar = () => {
    setOpenNavbar(false);
  };

  const NavMenu: Array<NavMenu> = [
    {
      name: 'home',
      link: '/',
      classes: '',
    },
    {
      name: 'profile',
      link: '/profile',
      classes: '',
    },
    {
      name: 'project',
      link: '/project/lima-beach-signature',
      classes: '',
    },
    {
      name: 'document',
      link: '/document',
      classes: '',
    },
    {
      name: 'mint yours',
      link: '/mint',
      classes:
        '!capitalize !font-medium !text-base bg-light-green px-4 py-2 hover:bg-light-green/[.80]',
    },
  ];

  useEffect(() => {
    setPathname(router.asPath.split('/'));
    console.log(pathname);
  }, [router]);

  return (
    <div>
      {/* Desktop */}
      <nav className="w-full h-[86px] fixed top-0 px-[60px] bg-dark-blue flex justify between items-center">
        <div className="w-[25%]">
          <Link href="/">
            <img
              src="/images/logo/logo-white.png"
              className="cursor-pointer"
              alt="BaliNFTLand-logo"
            />
          </Link>
        </div>

        <div className="link flex gap-9 justify-end items-center w-full">
          {NavMenu.map(({name, link, classes}) => {
            return (
              <Link href={link} passHref>
                <div
                  onClick={() => closeNavbar()}
                  className={`${classes} nav-item uppercase text-[#FFF] text-sm tracking-wider font-normal cursor-pointer ${
                    pathname &&
                    (pathname[1] === name || (pathname[1] === '' && name === 'home')) &&
                    'active'
                  }`}
                >
                  {name}
                  {pathname && pathname[1] !== 'mint' && (
                    <div className="nav-border h-[2px] bg-[#FFF]"></div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </nav>
      {/* Tablet & Mobile */}
      {/* <nav
        className={`h-[70px] tablet:h-[100px] flex justify-between items-center transition transition-colors duration-200 mobile ${
          openNavbar ? 'bg-[#050910]' : 'bg-transparent'
        }`}
      >
        <div id="logo" className="w-[50%]">
          <Link href="/" passHref>
            <div className=" flex items-center text-white text-[12px] tablet:text-[28px] font-bold tracking-wide gap-2">
              <img
                src="/DigilandBali.svg"
                className="w-[14px] h-[14px] tablet:w-[32px] tablet:h-[32px]"
                alt="Digiland-logo"
              />
              DIGILANDBALI
            </div>
          </Link>
        </div>
        <>
          <div id="three-lines-menu">
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
              }}
            >
              <img
                src={`${openNavbar ? '/close-icon.svg' : '/hamburger-icon.svg'}`}
                className="w-[18px] tablet:w-[32px]"
                alt="logo"
              />
            </button>
          </div>
          <div
            className={`mobile-inner link text-[16px] tablet:text-[24px] tracking-wide gap-10 right-0 flex flex-col bg-[#050910] w-[100%] h-screen top-[60px] tablet:top-[90px] z-[999] overflow-y-auto ${
              openNavbar ? 'open' : ''
            }`}
          >
            <Link href="/#home" passHref>
              <div onClick={() => closeNavbar()}>home</div>
            </Link>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1TCMsMaM9lTXmywLc_rCW01XHw8R6OJms/view?usp=sharin"
              rel="noopener noreferrer"
            >
              <div onClick={() => closeNavbar()}>whitepaper</div>
            </a>
            <div>
              <div>projects</div>
              <div>
                <Link href="/projects/lima-beach" passHref>
                  <div
                    onClick={() => closeNavbar()}
                    className="hover:text[#FFF] text-[#E2E2E2] font-medium cursor-pointer mt-[26px] px-6"
                  >
                    lima beach signature nft
                  </div>
                </Link>
                <Link href="" passHref>
                  <div
                    onClick={() => closeNavbar()}
                    className="text-[#E2E2E2] font-medium cursor-pointer mt-[26px] px-6"
                  >
                    coming soon
                  </div>
                </Link>
              </div>
            </div>
            <Link href="/minting/lima-beach-signature">go to mint page</Link>
          </div>
        </>
      </nav> */}
    </div>
  );
};

export default Navbar;
