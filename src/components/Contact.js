import React, {useState, useEffect} from 'react'
import { Container, Divider, Form, FormTextArea, Grid, Popup} from 'semantic-ui-react'
import styles from '../styles/Contact.module.scss'
import { motion} from 'framer-motion';
import data from '../utils/data'
import { Title, BoxFromTop, FadeInBox } from '@/utils/Components';
import { sendEmail } from '@/utils/functions';

export const Contact = () => {
  const myContacts = data.myContacts

  const [formData, setFormData] = useState({})

  const handleSubmit = () =>{
    sendEmail(formData)
  }

  const handleChange =(e, data, field)=>{
      e.preventDefault()
      setFormData({   
          ...formData,
          [field]:data.value
      })
  }

  // console.log(formData)

  return (
    <Container as="section" className={styles.contactCont} id="contact">
      <div className={[styles.contact, styles.section].join(' ')}>
        <Title className={styles.title}>Contact Information</Title>
        <BoxFromTop className={styles.contactGridBox} delayProp={0.1}>
          <Grid columns={2} centered className={styles.contactGrid} relaxed='very' doubling>
            <Grid.Column className={styles.contactGridCols}>
              <FadeInBox className={styles.formBox} delayProp={0.6}>
                <h2 className={styles.contactHead}>Contact Me Now!</h2>
                <Form className={styles.contactForm} onSubmit={handleSubmit}>
                  <Form.Input
                    label='Your Name'
                    placeholder='Name...'
                    className={styles.email}
                    required
                    name="name"
                    value={formData.name}
                    onChange={(e, data)=>handleChange(e, data, "name")}
                  />
                  <Form.Input
                    label='Your Email'
                    placeholder='Email...'
                    type="email"
                    className={styles.email}
                    required
                    name="email"
                    value={formData.email}
                    onChange={(e, data)=>handleChange(e, data, "email")}
                  />
                  <FormTextArea
                    label='Message'
                    placeholder="Message..."
                    className={styles.message}
                    required
                    name="messsage"
                    value={formData.message}
                    onChange={(e, data)=>handleChange(e, data, "message")}
                  />
                  <Form.Button className={[styles.contactBtn].join(" ")}type="submit">Send Message Now</Form.Button>
                  {/* <Popup 
                  trigger={<Form.Button className={[styles.contactBtn].join(" ")}type="submit">Send Message Now</Form.Button>} 
                  content='Feature currently not available'/> */}
                </Form>
              </FadeInBox>
            </Grid.Column>
            <Divider className={styles.hDivide} horizontal>Or</Divider>
            <Grid.Column className={styles.contactGridCols}>
              <FadeInBox className={styles.linksBox} delayProp="0.9">
                <div className={styles.links}>                
                  <h2 className={styles.contactHead}>Check My Social Links Below</h2>
                  <Grid className={styles.socialGrid} centered>
                    {
                      myContacts.map((item, index)=>(
                        <Grid.Column key={index} className={styles.socialCols} computer={3} largeScreen={3} tablet={3} mobile={3}> 
                            <motion.div whileHover={{ scale: 1.1, y:-3,transition: { duration: 0.1 } }}><a href={item.link} target='_blank' className={styles.link}>{item.icon}</a></motion.div>
                        </Grid.Column>
                      ))
                    }
                  </Grid>
                </div>
              </FadeInBox>
            </Grid.Column>
            <Divider className={styles.vDivide} vertical>Or</Divider>
          </Grid>
        </BoxFromTop>
      </div>
    </Container>
  )
}

