import Image from 'next/image'
import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import heroImg from '../../public/assets/img/jm-hero-4.png'
import styles from '../styles/Hero.module.scss'
import { motion } from 'framer-motion';
import { FiArrowDownCircle} from 'react-icons/fi'
import data from '../utils/data'
import { FadeInBox, ImageFromLeft } from '@/utils/Components'

export const Hero = () => {
  const myContacts = data.myContacts
  return (
    <Container as="section" className={styles.heroSectionCont} id="home">
      <Grid className={[styles.heroSection, styles.section].join(' ')}>
        <Grid.Column only='computer' computer={5}>
          <ImageFromLeft className={styles.heroPicCont} delayProp={1.1}>
            <Image src={heroImg} alt="JM Obispo's Image" className={styles.heroPic}/>
          </ImageFromLeft>
        </Grid.Column>
        <Grid.Column computer={11} tablet={16} mobile={16}>
          <FadeInBox className={styles.intro} delayProp={1.5}>
            <div className={styles.introBox}>
              <h4 className={styles.introName}>Hi! I&apos;m <span>John Michael Obispo</span>.</h4>
            </div>
            <div className={styles.introTitleBox}>
              <h1 className={styles.introTitle}><span>Learning </span> and <span>Growing</span> Through <span> Coding</span>.</h1>
            </div>


            <motion.div className={styles.introLinksBox} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <motion.div whileHover={{ scale: 1.1, y:-3,transition: { duration: 0.1 } }}><a className={styles.myProject} href="/assets/resume/Obispo John Michael V. - Resume.pdf" download>Resume <FiArrowDownCircle style={{ marginLeft:'0.5rem' }} size={'1.5rem'}/></a></motion.div>
              {/* {
                myContacts.map((item, index)=>(
                  <motion.div key={index} whileHover={{ scale: 1.1, y:-3,transition: { duration: 0.1 } }}><a href={item.link} target='_blank' className={styles.myLinks}>{item.icon}</a></motion.div>
                ))
              } */} 
            </motion.div>



          </FadeInBox>
        </Grid.Column>
      </Grid>
    </Container>
  )
}

