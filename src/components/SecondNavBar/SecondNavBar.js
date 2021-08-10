import React from 'react'
import { BiSearch, BiBell } from 'react-icons/bi'
import { GiSettingsKnobs } from 'react-icons/gi'
import { AiFillCaretDown } from 'react-icons/ai'
import styles from './SecondNavbar.module.css'
import avatar from './avatar.jpg'






function SecondNavBar() {
    return (
        <div className= {styles.icons}>
            <BiSearch />
            <BiBell />
            <img className={styles.image__avatar} src={avatar} alt="avatar" />
            <GiSettingsKnobs />
            <AiFillCaretDown />
        </div>
    )
}

export default SecondNavBar
