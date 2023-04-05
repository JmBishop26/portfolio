import React from 'react'
import { Navbar } from './Navbar'
import { Hero } from './Hero';

export const Layout = ({ children }) => {
    return (
      <>
        <Navbar />
        <Hero/>
        {children}
      </>
    );
  };

