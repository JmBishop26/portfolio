import Image from 'next/image'
import React, {useRef } from 'react'
import { Container, Popup } from 'semantic-ui-react'
import styles from '../styles/About.module.scss'
import { motion, useInView } from 'framer-motion';
import {  } from 'react-icons/fi'
import abtImg from '../../public/assets/img/about-image-2.jpg'

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
  return (
    <Container as="section" className={styles.abtSectionCont} fluid id="about">
        <div className={styles.abtTitleBox}>
            <Title>About</Title>
          </div>
        <div className={styles.abtSection}>
          <div className={styles.abtBox}>
            <h2 className={styles.abtHead}>Who Am I?</h2>
            <div>
              <p className={styles.aboutText}>I am JM Obispo, a 4th year Bachelor of Science in Information Technology <strong>(BSIT)</strong> student from the Polytechnic University of the Philippines <strong>(PUP)</strong>. I&apos;m an aspiring Web Developer from Quezon City</p>
              <p className={styles.aboutText}>I developed the Juan Dela Cook website for our Capstone Project, a web-based application that provides recipe recommendations based on user&apos;s provided budget.</p>
            </div>
          </div>
          <div className={styles.abtImgBox}>
            <Image src={abtImg} className={styles.abtImg}></Image>
          </div>

        </div>
    </Container>
  )
}

