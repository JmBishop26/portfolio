import React, { useEffect, useState } from 'react'
import { Menu, Container, Button, Grid } from "semantic-ui-react";
import { FiMoon, FiSun } from "react-icons/fi"
import styles from '../styles/Navbar.module.scss'
import { motion } from "framer-motion"
import data  from '../utils/data'


export const Navbar = () => {

  const menuItems = data.menuItems

  return (
    <Grid className={styles.navCont} container columns={2}>
      <Grid.Row className={[styles.navbar, styles.section].join(' ')}>
        <Grid.Column className={[styles.noPadding].join(' ')} computer={8} tablet={16}>
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
                  <a href={'#'+item.label.toLowerCase()} className={styles.navbarItemLink}><Menu.Item content={item.label}/></a>
                </motion.div>

                ))
            }
          <motion.div className={styles.navbarItem}
              initial={{ opacity: 0, y: -50 }} 
              animate={{ opacity: 1, y: 0, transition: { delay: 0.9, type: 'tween', duration:0.2 } }}
            >
              <Button className={[styles.modeToggler].join(" ")}>
                <FiMoon size={'2rem'}></FiMoon>
              </Button>

              <Button className={[styles.modeToggler, styles.noDisplay].join(" ")}>
                <FiSun size={'2rem'}></FiSun>
              </Button>
          </motion.div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

