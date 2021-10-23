import React from 'react';
import Head from 'next/head';
import Navbar from '../header/Navbar';
import Footer from './Footer';
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
