import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import MobileBottomBar from './MobileBottomBar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      {/* <ScrollToTop /> */}
      <MobileBottomBar />
    </div>
  );
};

export default Layout;