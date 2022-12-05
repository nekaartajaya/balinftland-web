import Event from '@components/global/Event';
import Footer from '@components/layout/Footer';
import Navbar from '@components/layout/Navbar';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="pt-[86px]">
        <Event />
        <div className="pt-[70px]">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
