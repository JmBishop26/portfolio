import React, {useRef } from 'react'
import { Container, Divider, Form, FormTextArea, Grid, GridColumn, Popup, Segment} from 'semantic-ui-react'
import styles from '../styles/Contact.module.scss'
import { motion, useInView } from 'framer-motion';
import { myContacts } from '@/utils/myContacts';


export const Contact = () => {
function Title({children}){
    const ref = useRef (null);
    const isInView = useInView(ref,{once:true});
    return(
      <div ref={ref} style={{
        transform: isInView ? "translateY(0px)" : "translateY(40px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s ease-in-out 0s"
      }}>
        <h1 className={styles.contactTitle} >{ children }</h1>
      </div>
    )
}

  return (
    <Container as="section" className={styles.contactCont} fluid id="contact">
      <div className={styles.contact}>
        <Title>Contact Information</Title>
        <Segment className={styles.contactGridBox}>
          <Grid columns={2} centered className={styles.contactGrid} relaxed='very'>
            <Grid.Column className={styles.contactGridCols}>
              <div className={styles.formBox}>
                <h2 className={styles.contactHead}>Contact Me Now!</h2>
                <Form className={styles.contactForm}>
                  <Form.Input
                    label='Your Email'
                    placeholder='Email...'
                    className={styles.email}
                  />
                  <FormTextArea
                    label='Message'
                    placeholder="Message..."
                    className={styles.message}
                  />
                  <Popup 
                  trigger={<Form.Button className={[styles.contactBtn, styles.disabled].join(" ")}>Send Message Now</Form.Button>} 
                  content='Feature currently not available'/>
                </Form>
              </div>
            </Grid.Column>
            
            <Grid.Column className={styles.contactGridCols}>
              <div className={styles.linksBox}>
                <div className={styles.links}>                
                  <h2 className={styles.contactHead}>Check My Social Links Below</h2>
                  <Grid columns={6} className={styles.socialGrid} centered>
                    {
                      myContacts.map((item, index)=>(
                        <Grid.Column key={index} className={styles.socialCols}> 
                            <motion.div whileHover={{ scale: 1.1, y:-3,transition: { duration: 0.1 } }}><a href={item.link} target='_blank' className={styles.link}>{item.icon}</a></motion.div>
                        </Grid.Column>
                      ))
                    }
                  </Grid>
                </div>
              </div>
            </Grid.Column>
            <Divider vertical>Or</Divider>
          </Grid>
        </Segment>
      </div>
    </Container>
  )
}

