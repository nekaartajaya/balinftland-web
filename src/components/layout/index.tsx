import Navbar from '@components/layout/Navbar';
import Footer from '@components/layout/Footer';
import {ReactNode} from 'react';

const Layout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
