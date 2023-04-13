import Image from 'next/image'
import React, {useRef } from 'react'
import { Container, Popup } from 'semantic-ui-react'
import styles from '../styles/Projects.module.scss'
import { motion, useInView } from 'framer-motion';
import { myProjects } from '../utils/myProjects'
import { FiExternalLink, FiGithub } from 'react-icons/fi'



function Project({children}){
  const ref = useRef (null);
  const isInView = useInView(ref,{once:true});
  return(
    <div ref={ref} style={{
      transform: isInView ? "translateY(0px)" : "translateY(40px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.5s ease-in-out 0s"
    }} className={styles.project}>
      {children}
    </div>
  )
}

function Title({children}){
  const ref = useRef (null);
  const isInView = useInView(ref,{once:true});
  return(
    <div ref={ref} style={{
      transform: isInView ? "translateY(0px)" : "translateY(40px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.5s ease-in-out 0s"
    }}>
      <h1 className={styles.projHead} >{ children }</h1>
    </div>
  )
}

export const Projects = () => {

  return (
    <Container as="section" className={styles.projSectionCont} fluid id="projects">
      <div className={styles.projSection}>
        <Title>Projects</Title>
        <div className={styles.projectsBox}>
        {
            myProjects.map((item, index) => (
                <Project className={styles.project} key={index}>
                  <div className={styles.projImgBox}>
                    <Image src={item.image} className={styles.projImg} width={1920} height={1080}></Image>
                  </div>
                  <div className={styles.projInfoBox}>                
                    <h2 className={styles.projTitle}>{item.title}</h2>
                    <p className={styles.projType}>{item.type}</p>
                    <p className={styles.projDesc}>{item.description}</p>
                    <div className={styles.projTags}>
                      {
                        item.tags.map((tag, i) => (         
                          <span key={i} className={styles.projTag}>{tag}</span>
                        ))
                      }
                    </div>
                    <div className={styles.projActions}>
                      <motion.div whileHover={item.mainLink===''?{}:{ scale: 1.1, transition: { duration: 0.1 } }}>
                        {
                          item.mainLink === ''? (
                            <Popup
                              trigger={<p className={[styles.projVisit, styles.disabled].join(' ')}>Visit <FiExternalLink style={{ marginLeft:'0.5rem' }}/></p>}
                              content='Link Unavailable'
                              inverted
                            />
                          ):
                          (
                            <a className={styles.projVisit} href={item.mainLink} target='_blank'>Visit <FiExternalLink style={{ marginLeft:'0.5rem' }}/></a>
                          )
                        }
                      </motion.div>
                      <motion.div whileHover={item.gitLink===''?{}:{ scale: 1.1, transition: { duration: 0.1 } }}>
                      {
                          item.gitLink === ''? (
                            <Popup
                              trigger={<p className={[styles.projGit, styles.disabled].join(' ')} href={item.gitLink}><FiGithub/></p>}
                              content='Github repository is privated for security purposes'
                              inverted
                            />
                          ):(
                            <a className={styles.projGit} href={item.gitLink} target='_blank'><FiGithub/></a>
                          )
                        }
                      </motion.div>
                    </div>
                  </div>
                </Project>
              ))
          }
        </div>
      </div>
    </Container>
  )
}
