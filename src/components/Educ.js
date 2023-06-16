import React from 'react'
import { Card, Container, Grid } from 'semantic-ui-react'
import styles from "../styles/Educ.module.scss"
import data from '@/utils/data'
import { DivFromRight, Title } from '@/utils/Components'
export const Educ=()=> {
    const education = data.myEduc

    return (
    <>
        <Container as="section" id="education" className={styles.educSectionCont}>
            <div className={styles.educSection}>
                <Title className={styles.title}>Education</Title>
                <Grid className={styles.educBox}>
                        <Grid.Column className={styles.timeline}>
                            {
                                education.map((item, index)=>(
                                    <div className={styles.educItems} key={index}>
                                        <h2>{item.degree}</h2>
                                        <DivFromRight>
                                            <Card className={styles.educCard}>
                                                <Card.Content>
                                                    <Card.Header><h3>{item.school}</h3></Card.Header>
                                                    <Card.Meta><span>{item.loc}</span></Card.Meta>
                                                    <Card.Description><p>{`${item.date}`}</p></Card.Description>
                                                </Card.Content>
                                            </Card>
                                        </DivFromRight>

                                    </div>

                                ))
                            }
                        </Grid.Column>
                </Grid>
            </div>
        </Container>
    </>
    )
}

