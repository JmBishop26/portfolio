import React, {useState, useEffect} from 'react'
import { Sidebar, Grid, Segment, Menu, Container, List, Radio, Button } from 'semantic-ui-react'
import data from '@/utils/data'
import Link from 'next/link'
import styles from "../styles/Sidebar.module.scss"
import { FiMoon, FiSun, FiX} from "react-icons/fi"
export const SideBar = ({children, isOpen})=> {
    const menuItems = data.menuItems
    const [open, setOpen] = useState(isOpen)
    const [dark, setDark] = useState(false)

    useEffect(()=>{
        setOpen(isOpen)
    }, [isOpen])

    const hideSidebar =()=>{
        setOpen(false)
    }

    const toggleMode =()=>{
        // document.body.classList.toggle("dark")
        setDark(!dark)
    }

  return (
    <Sidebar.Pushable className={styles.pushable}>
        <Sidebar
            className={styles.sidebar}
            direction="top"
            animation='overlay'
            icon='labeled'
            inverted
            vertical
            visible={open}
            width='thin'
            onHide={hideSidebar}
        >
            <List className={styles.sidebarList}>
                {
                    menuItems.map((item, index)=>(
                        <List.Item key={index} className={styles.sidebarListItems}>
                            <Link href={`#${item.label.toLowerCase()}`} className={styles.sidebarLinks} onClick={hideSidebar}>{item.label}</Link>
                        </List.Item>
                    ))
                }
                <List.Item className={styles.sidebarListItems}>
                    <p><FiSun size={'1.5rem'}/></p>
                        <Radio toggle className={styles.radioToggler} onChange={toggleMode}/>
                    <p><FiMoon size={'1.5rem'}/></p>
                </List.Item>
                {/* <List.Item className={styles.sidebarListItems}>
                    <Button className={styles.closeBtn}>
                         <p><FiX size={'3rem'}/></p>   
                    </Button>
                </List.Item> */}
            </List>

        </Sidebar>

        <Sidebar.Pusher dimmed={open}>
            <Container>
                {children}
            </Container>
        </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
}

export default SideBar