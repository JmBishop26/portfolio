import React from 'react'
import {Container} from "semantic-ui-react";
import styles from '../styles/Footer.module.scss'


export const Footer = () => {
  return (
    <Container className={styles.footerCont} fluid> 
        <div className={styles.footer}>
            <p className={styles.author}>Created by <span className={styles.noHigh}>JM<span className={styles.High}>Obispo</span>.</span></p>
        </div>
    </Container>
  )
}

