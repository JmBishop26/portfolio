import Image from 'next/image'
import React, {useRef } from 'react'
import { Container, Grid, GridColumn} from 'semantic-ui-react'
import styles from '../styles/About.module.scss'
import { motion, useInView } from 'framer-motion';
import {  } from 'react-icons/fi'
import abtImg from '../../public/assets/img/about-image-2.jpg'
import { myInterests } from '@/utils/myInterests';
import { mySkills } from '@/utils/mySkills';


export const About = () => {
function Title({children}){
    const ref = useRef (null);
    const isInView = useInView(ref,{once:true});
    return(
      <div ref={ref} style={{
        transform: isInView ? "translateY(0px)" : "translateY(40px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s ease-in-out 0s"
      }}>
        <h1 className={styles.abtTitle} >{ children }</h1>
      </div>
    )
}

function AboutBox ({children}) {
  const ref = useRef (null);
  const isInView = useInView(ref,{once:true});
  return(
    <div className={styles.abtBox} ref={ref} style={{ 
      opacity: isInView ? 1 : 0,
      transition: "all 0.5s ease-in-out 0.5s"
     }}>
      { children }
    </div>
  ) 
}
function AboutImageBox({children}){
  const ref = useRef (null);
  const isInView = useInView(ref,{once:true});
  return(
    <div className={styles.abtImgBox} ref={ref} style={{ 
      transform: isInView ? "translateX(0px)" : "translateX(40px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.5s ease-in-out 0.5s"
     }}>
      { children }
    </div>
  )
}

function MiscBox({children, className}){
  const ref = useRef (null);
  const isInView = useInView(ref,{once:true});
  return(
    <div className={className} ref={ref} style={{ 
      transform: isInView ? "translateY(0px)" : "translateY(40px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.5s ease-in-out 1s"
     }}>
      { children }
    </div>
  )
}

// function SkillsBox({children}){
//   const ref = useRef (null);
//   const isInView = useInView(ref,{once:true});
//   return(
//     <div className={styles.skillSection} ref={ref} style={{ 
//       transform: isInView ? "translateY(0px)" : "translateY(40px)",
//       opacity: isInView ? 1 : 0,
//       transition: "all 0.5s ease-in-out 1s"
//      }}>
//       { children }
//     </div>
//   )
// }

  return (
    <Container as="section" className={styles.aboutCont} fluid id="contact">
      <div className={styles.about}>
        <div className={styles.abtTitleBox}>
            <Title>About</Title>
          </div>
        <div className={styles.abtSection}>
          <AboutBox>
            <h2 className={styles.abtHead}>Who Am I?</h2>
            <div>
              <p className={styles.aboutText}>I am JM Obispo, a 4th year Bachelor of Science in Information Technology <strong>(BSIT)</strong> student from the Polytechnic University of the Philippines <strong>(PUP)</strong>. I&apos;m an aspiring Web Developer from Quezon City</p>
              <p className={styles.aboutText}>I developed the Juan Dela Cook website for our Capstone Project, a web-based application that provides recipe recommendations based on user&apos;s provided budget.</p>
            </div>
          </AboutBox>
          <AboutImageBox>
            <Image src={abtImg} className={styles.abtImg}></Image>
          </AboutImageBox>
        </div>
        <MiscBox className={styles.interestSection}>
            <h2 className={styles.abtHead}>Interests</h2>
            <Grid columns={5} className={styles.abtGrid}>
              {
                myInterests.map((item, index)=>(
                <motion.div  key={index}>
                  <Grid.Column className={styles.abtGridCols}>
                    <motion.div className={styles.interest} initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0, transition:{ delay: index * 1 + 1 , duration: 0.5 } }}>
                      <p className={[styles.intIcon].join(' ')}>{item.icon}</p>
                      <p className={styles.intName}>{item.name}</p>
                    </motion.div>
                  </Grid.Column>
                </motion.div>

                ))
              }
            </Grid>
        </MiscBox>
        <MiscBox className={styles.skillSection}> 
          <h2 className={styles.abtHead}>Skills</h2>
          <Grid columns={5} className={styles.skillGrid} centered>
          {
                mySkills.map((item, index)=>(
                  <Grid.Column key={index} className={styles.skillGridCols}>
                    <div className={styles.skill}>
                      <p className={styles.intIcon}>{item.icon}</p>
                      <p className={styles.intName}>{item.name}</p>
                    </div>
                  </Grid.Column>
                ))
              }
          </Grid>
        </MiscBox>
      </div>
    </Container>
  )
}

