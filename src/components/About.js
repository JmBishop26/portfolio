import Image from 'next/image'
import React from 'react'
import { Container} from 'semantic-ui-react'
import styles from '../styles/About.module.scss'
import abtImg from '../../public/assets/img/about-image-2.jpg'
import { myInterests } from '@/utils/myInterests';
import { mySkills } from '@/utils/mySkills';
import { FadeInBox, ImageFromRight, Title, AboutSections } from '@/utils/Components';


export const About = () => {
  return (
    <Container as="section" className={styles.aboutCont} fluid id="about">
      <div className={styles.about}>
        <div className={styles.abtTitleBox}>
            <Title className={styles.abtTitle} >About</Title>
          </div>
        <div className={styles.abtSection}>
          <FadeInBox className={styles.abtBox} delayProp="0.3">
            <h2 className={styles.abtHead}>Who Am I?</h2>
            <div>
              <p className={styles.aboutText}>I am JM Obispo, a 4th year Bachelor of Science in Information Technology <strong>(BSIT)</strong> student from the Polytechnic University of the Philippines <strong>(PUP)</strong>. I&apos;m an aspiring Web Developer from Quezon City</p>
              <p className={styles.aboutText}>I developed the Juan Dela Cook website for our Capstone Project, a web-based application that provides recipe recommendations based on user&apos;s provided budget.</p>
            </div>
          </FadeInBox>
          <ImageFromRight className={styles.abtImgBox}>
            <Image src={abtImg} className={styles.abtImg}></Image>
          </ImageFromRight>
        </div>
        <AboutSections sectionClass={styles.interestSection} sectionTitle="Interests" sectionTitleClass={styles.abtHead} gridClass={styles.abtGrid} data={myInterests} columnClass={styles.abtGridCols} perObjectClass={styles.interest} iconClass={styles.intIcon} textClass={styles.intName}/>
        <AboutSections sectionClass={styles.skillSection} sectionTitle="Skills" sectionTitleClass={styles.abtHead} gridClass={styles.skillGrid} data={mySkills} columnClass={styles.skillGridCols} perObjectClass={styles.skill} iconClass={styles.intIcon} textClass={styles.intName}/>
      </div>
    </Container>
  )
}

