import React, { useEffect, useState } from 'react'
import { Menu, Container, Button } from "semantic-ui-react";
import { FiMoon, FiSun } from "react-icons/fi"
import styles from '../styles/Navbar.module.scss'
import { motion } from "framer-motion"
import { modeChange } from '@/utils/functions';
import Image from 'next/image';
import Link from 'next/link';

const MENU_ITEMS = [
  { label: "Home", icon: null },
  { label: "Projects", icon: null },
  { label: "About", icon: null },
  { label: "Contact", icon: null },
];

export const Footer = () => {

  const [bodyClassName, setBodyClassName] = useState('light_mode');

  useEffect(() => {
    document.body.className = bodyClassName;
  }, [bodyClassName]);

  const handleClick = () => {
    setBodyClassName('dark_mode');
  }

  return (
    <Container className={styles.navCont} fluid> 
      <motion.div className={styles.navbar} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <motion.div className={styles.navbarBrand} initial={{ opacity: 0, y: -80 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.1, type: 'tween', duration:0.2} }}>
          JM <span> Obispo</span>
        </motion.div>
        <motion.div className={styles.navbarMenu}>
          {
            MENU_ITEMS.map((item, index) => (
              <motion.div className={styles.navbarItem} key={index}
                initial={{ opacity: 1, y: -70 }} 
                animate={{ opacity: 1, y: 0, transition: { delay: index * 0.15  + 0.3, type: 'tween', duration:0.2 } }}
              >
                <a href={'#'+item.label.toLowerCase()} className={styles.navbarItemLink}><Menu.Item content={item.label}/></a>
              </motion.div>

              ))
          }
          <motion.div className={styles.navbarItem}
            initial={{ opacity: 0, y: -60 }} 
            animate={{ opacity: 1, y: 0, transition: { delay: 0.9, type: 'tween', duration:0.2 } }}
          >
            <Button className={[styles.modeToggler].join(" ")}>
              <FiMoon size={'2rem'} onClick={handleClick}></FiMoon>
            </Button>

            <Button className={[styles.modeToggler, styles.noDisplay].join(" ")}>
              <FiSun size={'2rem'} onClick={handleClick}></FiSun>
            </Button>

          </motion.div>
        </motion.div>
      </motion.div>
    </Container>
  )
}

