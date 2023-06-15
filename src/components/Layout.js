import React, {useState} from 'react'
import { Navbar } from './Navbar'
import { Hero } from './Hero';
import { Projects } from './Projects';
import { About } from './About';
import { Contact } from './Contact';
import { Footer } from './Footer';
import SideBar from './SideBar';
export const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = ()=>{
    setSidebarOpen(!sidebarOpen)
  }
  
    return (
      <>
        <SideBar isOpen={sidebarOpen}>
          <Navbar toggleSidebar={toggleSidebar}/>
          <Hero/>
          <Projects/>
          <About/>
          <Contact />
          <Footer/>
        </SideBar>
      </>
    );
  };

