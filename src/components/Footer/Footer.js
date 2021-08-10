import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import styles from './Footer.module.css'



function Footer() {

    const links = [
        'Audio and Subtitles',
        'Audio Description',
        'Help Center',
        'Gift Cards',
        'Media Center',
        'Investor Relations',
        'Jobs',
        'Terms of Use',
        'Privacy',
        'Legal Notice',
        'Cookie Preferences',
        'Impressum',
        'Contact Us',
    ];

    // const socials = [
    //     <FaFacebookF />,
    //     <FaInstagram />,
    //     <FaTwitter />,
    //     <FaYoutube />
    // ]

    return (
        <footer>

            {/* <div className={styles.box}>
                {socials.map(icon => (
                    <a href="/" key={icon.id}>{icon}</a>
                ))}
            </div> */}

             <ul className={styles.linksList}>
            {links.map(link => (
                <li className={styles.link} key={link}>
                    <a href="/">{link}</a>
                </li>
            ))}
            </ul>
            
      </footer>      
    )
}

export default Footer
