import React from 'react'
import { Navbar } from './Navbar'
import { Hero } from './Hero';
import { Projects } from './Projects';
import { About } from './About';
import { Contact } from './Contact';
import { Footer } from './Footer';
export const Layout = () => {
    return (
      <>
        <Navbar />
        <Hero/>
        <Projects/>
        <About/>
        <Contact />
        <Footer/>
      </>
    );
  };

