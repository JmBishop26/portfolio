import React from 'react'
import { Navbar } from './Navbar'
import { Hero } from './Hero';
import { Projects } from './Projects';
import { About } from './About';
export const Layout = ({ children }) => {
    return (
      <>
        <Navbar />
        <Hero/>
        <Projects/>
        <About/>
        {children}
      </>
    );
  };

