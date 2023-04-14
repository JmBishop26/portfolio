import Image from 'next/image'
import React from 'react'
import { Button, Container} from 'semantic-ui-react'
import heroImg from '../../public/assets/img/jm-hero-4.png'
import styles from '../styles/Hero.module.scss'
import { motion } from 'framer-motion';
import { FiArrowDownCircle, FiFacebook, FiGithub, FiMail } from 'react-icons/fi'
import { myContacts } from '@/utils/myContacts'

export const Hero = () => {
  return (
    <Container as="section" className={styles.heroSectionCont} fluid id="home">
      <motion.div className={styles.heroSection} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <motion.div className={styles.heroPicCont} initial={{ opacity: 0, x: -1500 }} animate={{ opacity: 1, x: 0, transition: { delay: 1.1, duration:0.4 } }}>
          <Image src={heroImg} alt="JM Obispo's Image" className={styles.heroPic}/>
        </motion.div>
        <motion.div className={styles.intro} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.8, duration:0.5 } }}>
            <div className={styles.introBox}>
              <h4 className={styles.introName}>Hi! I&apos;m <span>John Michael Obispo</span>.</h4>
            </div>
            <div className={styles.introTitleBox}>
              <h1 className={styles.introTitle}><span>Learning </span> and <span>Growing</span> Through <span> Coding</span>.</h1>
            </div>
            <motion.div className={styles.introLinksBox} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <motion.div whileHover={{ scale: 1.1, y:-3,transition: { duration: 0.1 } }}><a className={styles.myProject} href="/assets/resume/Obispo John Michael V. - Resume.pdf" download>Resume <FiArrowDownCircle style={{ marginLeft:'0.5rem' }} size={'1.5rem'}/></a></motion.div>
              {
                myContacts.map((item, index)=>(
                  <motion.div key={index} whileHover={{ scale: 1.1, y:-3,transition: { duration: 0.1 } }}><a href={item.link} target='_blank' className={styles.myLinks}>{item.icon}</a></motion.div>
                ))
              }
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Container>
  )
}

