import { logowhite } from '@assets/images';
import { NavMenu } from '@interfaces/NavbarInterface';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { SwipeableDrawer } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

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
      link: '/mint/lima-beach-signature',
      classes:
        'md:!capitalize !font-medium !text-base bg-light-green px-4 py-2 hover:bg-light-green/[.80] whitespace-nowrap !text-[#FFF]',
    },
  ];

  const handleActiveMenu = (name: string) => {
    if (
      pathname &&
      (pathname[1] === name || (pathname[1] === '' && name === 'home'))
    )
      return true;
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
      <nav
        className={`w-full h-[86px] fixed top-0 md:px-[60px] px-6 flex justify between items-center z-[999] transition-all ease-in-out duration-150 ${
          openNavbar ? 'bg-white' : 'bg-dark-blue'
        }`}
      >
        <div className="w-1/2">
          <Link href="/">
            <Image
              src={logowhite}
              className={`cursor-pointer ${openNavbar && 'invert'}`}
              alt="BaliNFTLand-logo"
            />
          </Link>
        </div>

        {/* Desktop */}
        <div className="link md:flex hidden gap-9 justify-end items-center w-1/2">
          {NavMenu.map(({ name, link, classes }, index) => {
            if (pathname && pathname[1] === 'mint' && name === 'mint yours')
              return;

            return (
              <Link
                key={index}
                href={link}
                className={`nav-item  ${handleActiveMenu(name) && 'active'}`}
              >
                <div
                  className={`${classes} uppercase text-[#FFF] text-sm tracking-wider font-normal cursor-pointer`}
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
              <div className="text-black">
                <CloseIcon color="inherit" fontSize="large" />
              </div>
            )}
          </button>
          <SwipeableDrawer
            anchor={'left'}
            open={openNavbar}
            onClose={handleCloseNavbar}
            onOpen={handleOpenNavbar}
            sx={{
              '& .MuiBackdrop-root': { top: '86px' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: '100%',
                top: '85px',
                boxShadow: 'none !important',
                border: 'none !important',
              },
            }}
            className="!top-[86px]"
          >
            <div className="px-6 pt-8">
              {NavMenu.map(({ name, link, classes }, index) => {
                if (
                  (pathname &&
                    pathname[1] === 'mint' &&
                    name === 'mint yours') ||
                  name === 'home'
                )
                  return;

                return (
                  <Link key={index} href={link}>
                    <div
                      className={`${classes} nav-item-mobile uppercase text-black text-lg tracking-wider font-semibold cursor-pointer mb-4 w-fit`}
                      onClick={handleCloseNavbar}
                    >
                      {name}
                      {pathname && pathname[1] !== 'mint' && (
                        <div
                          className={`nav-border h-[2px] bg-black ${
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
    </div>
  );
};

export default Navbar;
