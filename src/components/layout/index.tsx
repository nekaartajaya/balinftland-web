import Footer from '@components/layout/Footer';
import Navbar from '@components/layout/Navbar';
import {ReactNode} from 'react';

const Layout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <Navbar />
      <div className="pt-[86px]">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
