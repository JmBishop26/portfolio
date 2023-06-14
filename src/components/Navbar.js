import React, { useEffect, useState } from 'react'
import { Menu, Container, Button, Grid } from "semantic-ui-react";
import { FiMoon, FiSun, FiMenu } from "react-icons/fi"
import styles from '../styles/Navbar.module.scss'
import { motion } from "framer-motion"
import data  from '../utils/data'


export const Navbar = ({toggleSidebar}) => {
  const [isDark, setIsDark]=useState(false);

  const menuItems = data.menuItems

  const toggleMode = ()=>{
    setIsDark(!isDark);
    // document.body.classList.toggle("dark")
  }


  return (
    <Grid className={styles.navCont} container columns={2}>
      <Grid.Row className={[styles.navbar, styles.section].join(' ')}>
        <Grid.Column className={[styles.noPadding].join(' ')} computer={8} tablet={10}>
          <motion.div className={styles.navbarBrand} initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.1, type: 'tween', duration:0.2} }}>
            JM <span> Obispo</span>
          </motion.div>
        </Grid.Column>
        <Grid.Column className={styles.navbarMenu} computer={8} only='computer'>
            {
              menuItems.map((item, index) => (
                <motion.div className={styles.navbarItem} key={index}
                  initial={{ opacity: 0, y: -50 }} 
                  animate={{ opacity: 1, y: 0, transition: { delay: index * 0.15  + 0.3, type: 'tween', duration:0.2 } }}
                >
                  <a href={`#${item.label.toLowerCase()}`} className={styles.navbarItemLink}><Menu.Item content={item.label}/></a>
                </motion.div>

                ))
            }
          <motion.div className={styles.navbarItem}
              initial={{ opacity: 0, y: -50 }} 
              animate={{ opacity: 1, y: 0, transition: { delay: 0.9, type: 'tween', duration:0.2 } }}
            >
              <Button className={[styles.modeToggler].join(" ")} onClick={toggleMode}>
                <FiMoon size={'2rem'} className={ !isDark ? "" : styles.noDisplay}></FiMoon>
                <FiSun size={'2rem'} className={ !isDark ? styles.noDisplay : ""}></FiSun>
              </Button>
          </motion.div>
        </Grid.Column>
        <Grid.Column textAlign='right' verticalAlign='top' tablet={6} className={styles.sideTogglerCol}>
          <motion.div
            initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.2, type: 'tween', duration:0.2} }}
          >
            <Button className={styles.sideToggler} onClick={toggleSidebar}>
              <p><FiMenu size={'3rem'} /></p>
            </Button>
          </motion.div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

