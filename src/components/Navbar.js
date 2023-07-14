'use client'
import React, { useEffect, useState } from 'react'
import { Menu, Container, Button, Grid } from "semantic-ui-react";
import { FiMoon, FiSun, FiMenu } from "react-icons/fi"
import styles from '../styles/Navbar.module.scss'
import { motion } from "framer-motion"
import data  from '../utils/data'
import Cookies from 'js-cookie';
import {setTheme} from '@/utils/classes/SetCookie';

export const Navbar = ({toggleSidebar}) => {
  const theme = Cookies.get("jmIsDark")
  useEffect(()=>{
    if(theme==='true'){
      document.body.classList.add("dark")
    }else{
      document.body.classList.remove("dark")
    }
  }, )
  const [isDark, setIsDark] = useState(theme==="true");
  const menuItems = data.menuItems

  const toggleMode = ()=>{
    setIsDark(!isDark);
    setTheme(!isDark)
  }

  return (
    <Grid className={[styles.navCont, "generics"].join(" ")} container columns={2}>
      <Grid.Row className={[styles.navbar, styles.section].join(' ')}>
        <Grid.Column className={[styles.noPadding].join(' ')} computer={8} tablet={10}>
          <motion.div className={styles.navbarBrand} initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.1, type: 'tween', duration:0.2} }}>
           <h1>JM <span> Obispo</span></h1> 
          </motion.div>
        </Grid.Column>
        <Grid.Column className={styles.navbarMenu} computer={8} only='computer'>
            {
              menuItems.map((item, index) => (
                <motion.div className={styles.navbarItem} key={index}
                  initial={{ opacity: 0, y: -50 }} 
                  animate={{ opacity: 1, y: 0, transition: { delay: index * 0.15  + 0.3, type: 'tween', duration:0.2 } }}
                >
                  <a href={`#${item.label.toLowerCase()}`} className={styles.navbarItemLink}>
                    <Menu.Item >
                      <p>{item.label}</p>
                    </Menu.Item>
                  </a>
                </motion.div>

                ))
            }
          <motion.div className={styles.navbarItem}
              initial={{ opacity: 0, y: -50 }} 
              animate={{ opacity: 1, y: 0, transition: { delay: 0.9, type: 'tween', duration:0.2 } }}
            >

              <Button className={[styles.modeToggler, isDark ? "":styles.noDisplay].join(" ")} onClick={toggleMode}>
                <p><FiSun size={'2rem'} ></FiSun></p>
              </Button>

              <Button className={[styles.modeToggler, isDark ? styles.noDisplay : ""].join(" ")} onClick={toggleMode}>
                <p><FiMoon size={'2rem'} ></FiMoon></p>
              </Button>

          </motion.div>
        </Grid.Column>
        <Grid.Column textAlign='right' verticalAlign='top' tablet={6} className={styles.sideTogglerCol}>
          <motion.div
            initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.2, type: 'tween', duration:0.2} }}
          >
            <Button className={styles.sideToggler} onClick={toggleSidebar}>
              <p><FiMenu size={'2rem'} /></p>
            </Button>
          </motion.div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

