import Image from 'next/image'
import React, {useRef } from 'react'
import { Container, Grid, GridColumn, Popup } from 'semantic-ui-react'
import styles from '../styles/Projects.module.scss'
import { motion, useInView } from 'framer-motion';
import data from '../utils/data'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { Title, BoxFromTop } from '../utils/Components';

import proj1 from "../../public/assets/img/projects/1.jpg"
import proj2 from "../../public/assets/img/projects/2.jpg"
import proj3 from "../../public/assets/img/projects/3.jpg"
import proj4 from "../../public/assets/img/projects/4.jpg"


export const Projects = () => {

  const myProjects = data.myProjects

  return (
    <Container as="section" className={[styles.projSectionCont , "generics"].join(" ")} id="projects">
      <div className={[styles.projSection, styles.section].join(' ')}>
        <Title className={styles.title}>Projects</Title>
        <Grid className={styles.projectsBox}>
          <Grid.Column>
        {
            myProjects.map((item, index) => (
                <BoxFromTop className={[styles.project, "card"].join(" ")} key={index} delayProp={0}>
                  <Grid>
                    <Grid.Row>
                      <Grid.Column className={styles.projImgBox} computer={10} widescreen={10} largeScreen={10} tablet={16} mobile={16}>
                        <Image src={[proj1, proj2, proj3, proj4][index]} className={styles.projImg} alt={'Project: '+item.title}></Image>
                      </Grid.Column>
                      <Grid.Column className={styles.projInfoBox} computer={6}  widescreen={6} largeScreen={6} tablet={16} mobile={16}>                
                        <h2 className={styles.projTitle}>{item.title}</h2>
                        <p className={styles.projType}>{item.type}</p>
                        <p className={styles.projDesc}>{item.description}</p>
                        <div className={styles.projTags}>
                          {
                            item.tags.map((tag, i) => (         
                              <span key={i} className={[styles.projTag, "smCard"].join(" ")}>
                                {tag}
                              </span>
                            ))
                          }
                        </div>
                        <div className={styles.projActions}>
                          <motion.div whileHover={item.mainLink===''?{}:{ scale: 1.1, transition: { duration: 0.1 } }}>
                            {
                              item.mainLink === ''? (
                                <Popup
                                  trigger={<p className={[styles.projVisit, styles.disabled].join(' ')}>Visit <FiExternalLink/></p>}
                                  content='Link Unavailable'
                                  inverted
                                />
                              ):
                              (
                                <a className={styles.projVisit} href={item.mainLink} target='_blank'>Visit <FiExternalLink/></a>
                              )
                            }
                          </motion.div>
                          <motion.div whileHover={item.gitLink===''?{}:{ scale: 1.1, transition: { duration: 0.1 } }}>
                          {
                              item.gitLink === ''? (
                                <Popup
                                  trigger={<p className={[styles.projGit, styles.disabled].join(' ')}><FiGithub/></p>}
                                  content='Github repository is privated for security purposes'
                                  inverted
                                />
                              ):(
                                <a className={[styles.projGit, "darkedLink"].join(" ")} href={item.gitLink} target='_blank'><FiGithub/></a>
                              )
                            }
                          </motion.div>
                        </div>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </BoxFromTop>
              ))
          }
            </Grid.Column>
        </Grid>
      </div>
    </Container>
  )
}

