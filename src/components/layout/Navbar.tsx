import {NavMenu} from '@interfaces/NavbarInterface';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {SwipeableDrawer} from '@mui/material';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';

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
      <nav className="w-full h-[86px] fixed top-0 md:px-[60px] px-4 bg-dark-blue flex justify between items-center z-[999]">
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
          {NavMenu.map(({name, link, classes}, index) => {
            if (pathname && pathname[1] === 'mint' && name === 'mint yours') return;

            return (
              <Link key={index} href={link} passHref>
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
              {NavMenu.map(({name, link, classes}, index) => {
                if (pathname && pathname[1] === 'mint' && name === 'mint yours') return;

                return (
                  <Link key={index} href={link} passHref>
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
    </div>
  );
};

export default Navbar;
