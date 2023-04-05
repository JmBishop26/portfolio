import Image from 'next/image'
import React from 'react'
import { Button, Container} from 'semantic-ui-react'
import heroImg from '../../public/assets/img/jm-hero-4.png'
import styles from '../styles/Hero.module.scss'
import { motion } from 'framer-motion';
import { SlSocialGoogle, SlSocialFacebook, SlSocialGithub, SlArrowDownCircle } from "react-icons/sl"

export const Hero = () => {
  return (
    <Container as="section" className={styles.heroSectionCont} fluid>
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
              <h1 className={styles.introTitle}>Aspiring <span>Web Developer</span> from <span>Quezon City</span> </h1>
            </div>
            <div className={styles.introLinksBox}>
              <a className={styles.myProject} href="/assets/resume/Obispo John Michael V. - Resume.pdf" download>Resume <SlArrowDownCircle style={{ marginLeft:'0.5rem' }} size={'1.5rem'}/></a>
              <a className={styles.myLinks} href='https://github.com/JmBishop26' target='_blank'><SlSocialGithub/></a>
              <a className={styles.myLinks} href='https://www.facebook.com/jm.obispo.7/' target='_blank'><SlSocialFacebook/></a>
              <a className={styles.myLinks} href='mailto:johnmichael.obispo@gmail.com' target='_blank'><SlSocialGoogle/></a>
            </div>
          </motion.div>

        </motion.div>
      </motion.div>
    </Container>
  )
}

