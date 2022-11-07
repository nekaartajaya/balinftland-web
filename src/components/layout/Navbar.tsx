import {NavMenu} from '@interfaces/NavbarInterface';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {SwipeableDrawer} from '@mui/material';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {Dispatch, SetStateAction, useEffect, useState} from 'react';

const Navbar = () => {
  const router = useRouter();
  const [openNavbar, setOpenNavbar] = useState<boolean>(false);
  const [pathname, setPathname] = useState<Array<string> | undefined>();

  const handleOpenNavbar = () => {
    setOpenNavbar(true);
  };

  const handleCloseNavbar = () => {
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
      link: '/mint/tes',
      classes:
        '!capitalize !font-medium !text-base bg-light-green px-4 py-2 hover:bg-light-green/[.80] whitespace-nowrap !text-[#FFF]',
    },
  ];

  const handleActiveMenu = (name: string) => {
    if (pathname && (pathname[1] === name || (pathname[1] === '' && name === 'home'))) return true;
  };

  useEffect(() => {
    setPathname(router.asPath.split('/'));
    handleCloseNavbar;
  }, [router]);

  useEffect(() => {
    window.addEventListener('resize', handleCloseNavbar);
    return () => {
      window.removeEventListener('resize', handleCloseNavbar);
    };
  }, []);

  return (
    <div>
      {/* Desktop */}
      <nav className="w-full h-[86px] fixed top-0 md:px-[60px] px-4 bg-dark-blue flex justify between items-center">
        <div className="w-1/2">
          <Link href="/">
            <img
              src="/images/logo/logo-white.png"
              className="cursor-pointer min-"
              alt="BaliNFTLand-logo"
            />
          </Link>
        </div>

        {/* Desktop */}
        <div className="link md:flex hidden gap-9 justify-end items-center w-1/2">
          {NavMenu.map(({name, link, classes}) => {
            if (pathname && pathname[1] === 'mint' && name === 'mint yours') return;

            return (
              <Link href={link} passHref>
                <div
                  className={`${classes} nav-item uppercase text-[#FFF] text-sm tracking-wider font-normal cursor-pointer ${
                    handleActiveMenu(name) && 'active'
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

        {/* Tablet & Mobile */}
        <div className="md:hidden flex justify-end w-1/2">
          <button
            className="text-[#FFF]"
            onClick={!openNavbar ? handleOpenNavbar : handleCloseNavbar}
          >
            {!openNavbar ? (
              <MenuIcon color="inherit" fontSize="large" />
            ) : (
              <CloseIcon color="inherit" fontSize="large" />
            )}
          </button>
          <SwipeableDrawer
            anchor={'left'}
            open={openNavbar}
            onClose={handleCloseNavbar}
            onOpen={handleOpenNavbar}
            sx={{
              '& .MuiBackdrop-root': {top: '86px'},
              '& .MuiDrawer-paper': {boxSizing: 'border-box', width: '100%', top: '86px'},
            }}
            className="!top-[86px]"
          >
            <div className="px-4 pt-4">
              {NavMenu.map(({name, link, classes}) => {
                if (pathname && pathname[1] === 'mint' && name === 'mint yours') return;

                return (
                  <Link href={link} passHref>
                    <div
                      className={`${classes} nav-item-mobile uppercase text-blue text-sm tracking-wider font-normal cursor-pointer mb-4 ${
                        name !== 'mint yours' ? 'w-fit' : 'text-center'
                      }`}
                      onClick={handleCloseNavbar}
                    >
                      {name}
                      {pathname && pathname[1] !== 'mint' && (
                        <div
                          className={`nav-border h-[2px] bg-blue ${
                            handleActiveMenu(name) && '!w-full'
                          }`}
                        ></div>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </SwipeableDrawer>
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
              <div onClick={() => handleCloseNavbar()}>home</div>
            </Link>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1TCMsMaM9lTXmywLc_rCW01XHw8R6OJms/view?usp=sharin"
              rel="noopener noreferrer"
            >
              <div onClick={() => handleCloseNavbar()}>whitepaper</div>
            </a>
            <div>
              <div>projects</div>
              <div>
                <Link href="/projects/lima-beach" passHref>
                  <div
                    onClick={() => handleCloseNavbar()}
                    className="hover:text[#FFF] text-[#E2E2E2] font-medium cursor-pointer mt-[26px] px-6"
                  >
                    lima beach signature nft
                  </div>
                </Link>
                <Link href="" passHref>
                  <div
                    onClick={() => handleCloseNavbar()}
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
