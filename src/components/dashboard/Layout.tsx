import {ReactNode, useEffect, useState} from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

import Cookies from 'js-cookie';

const Layout = ({children}: {children: ReactNode}) => {
  const [activeMenu, setActiveMenu] = useState<string>('');
  const [activeTitle, setActiveTitle] = useState<string>('');
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);

  useEffect(() => {
    const menu = Cookies.get('active_menu');
    if (menu) {
      setActiveMenu(JSON.parse(menu).name);
      setActiveTitle(JSON.parse(menu).title);
    } else {
      Cookies.set('active_menu', JSON.stringify({name: 'dashboard', title: 'Dashboard'}));
      setActiveMenu('dashboard');
      setActiveTitle('Dashboard');
    }

    window.addEventListener(
      'contextmenu',
      function (e) {
        console.log('context menu disabled');
        e.preventDefault();
      },
      false,
    );

    document.addEventListener(
      'mouseup',
      function (e) {
        if (e.button === 2) {
          console.log('right-click enabled');
        }
      },
      false,
    );
  }, []);

  return (
    <div className={`w-full h-screen ${isOpenSidebar ? 'overflow-y-hidden' : ''}`}>
      <Sidebar
        activeMenu={activeMenu}
        setIsOpenSidebar={setIsOpenSidebar}
        isOpenSidebar={isOpenSidebar}
      />
      <div className={`desktop:pl-[112px] transition-all ease-in-out`}>
        <Navbar
          title={activeTitle}
          setIsOpenSidebar={setIsOpenSidebar}
          isOpenSidebar={isOpenSidebar}
        />
        <div className="pt-[90px]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
