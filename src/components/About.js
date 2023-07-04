import Image from 'next/image'
import React from 'react'
import { Container, Grid, Accordion } from 'semantic-ui-react'
import styles from '../styles/About.module.scss'
import abtImg from '../../public/assets/img/about-image-2.jpg'
import data from '../utils/data'
import { FadeInBox, DivFromRight, Title, AboutSections } from '@/utils/Components';
export const About = () => {

  const myInterests = data.myInterests
  const mySkills = data.mySkills

  const panels = [
    {
      key: '1',
      title: {
        content: <span><h2 className={styles.accHead}>Who Am I?</h2></span>,
      },
      content: {
        content: <Image className={styles.accImg} src={abtImg} />,
      },
    },
  ];



  return (
    <Container as="section" className={[styles.aboutCont, "generics"].join(" ")} id="about">
      <div className={[styles.about, styles.section].join(' ')}>
          <Title className={styles.title} >About</Title>
        <Grid className={styles.abtSection}>
            <Grid.Column computer={12} tablet={16} mobile={16}>
              <FadeInBox className={[styles.abtBox, "card"].join(" ")} delayProp={0.3}>
                <h2 className={styles.abtHead}>Who Am I?</h2>
                <Accordion className={styles.accAbout} panels={panels}/>
                <div>
                  <p className={styles.aboutText}>I am JM Obispo, a 4th year Bachelor of Science in Information Technology <strong>(BSIT)</strong> student from the Polytechnic University of the Philippines <strong>(PUP)</strong>. I&apos;m an aspiring Web Developer from Quezon City.</p>
                  <p className={styles.aboutText}>I developed the Juan Dela Cook website for our Capstone Project, a web-based application that provides recipe recommendations based on user&apos;s provided budget.</p>
                </div>
              </FadeInBox>
            </Grid.Column>
            <Grid.Column computer={4} only='computer' >
              <DivFromRight className={styles.abtImgBox}>
                <Image src={abtImg} className={styles.abtImg} alt="JM\'s Image"></Image>
              </DivFromRight>
            </Grid.Column>
        </Grid>
        <AboutSections sectionClass={styles.interestSection} sectionTitle="Interests" sectionTitleClass={styles.abtHead} gridClass={styles.abtGrid} data={myInterests} columnClass={styles.abtGridCols} perObjectClass={[styles.interest, "smCard"].join(" ")} iconClass={styles.intIcon} textClass={styles.intName}/>
        <AboutSections sectionClass={styles.skillSection} sectionTitle="Skills" sectionTitleClass={styles.abtHead} gridClass={styles.skillGrid} data={mySkills} columnClass={styles.skillGridCols} perObjectClass={[styles.skill, "smCard"].join(" ")} iconClass={styles.intIcon} textClass={styles.intName}/>

      </div>
    </Container>
  )
}

