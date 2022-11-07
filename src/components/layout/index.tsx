import Footer from '@components/layout/Footer';
import Navbar from '@components/layout/Navbar';
import {ReactNode, useState} from 'react';

const Layout = ({children}: {children: ReactNode}) => {
  const [isOpenNavbar, setIsOpenNavbar] = useState<boolean>(false);

  return (
    <>
      <Navbar isOpenNav={setIsOpenNavbar} />
      <div className="pt-[86px]">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
