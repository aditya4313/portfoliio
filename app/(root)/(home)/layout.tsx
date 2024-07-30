import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
   
      <Header />
      {children}
       <div  className="flex flex-col min-h-screen" >
      <Footer />
      </div>
    </>
  );
};

export default Layout;
