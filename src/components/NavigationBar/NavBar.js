import React from 'react'
import SecondNavBar from '../SecondNavBar/SecondNavBar';
import styles from './NavBar.module.css'
import logo from './logo.png'



function NavBar() {

      const navItems = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List'];

    return (
        <nav>
            <div className={styles.container}>
                <img className= {styles.logo} src={ logo } alt="logo" />
                <ul className={styles.navList}>
                    {navItems.map((item) => (
                        <li className={styles.navItem} key={item}>
                            <a href ='/'>{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
         <SecondNavBar />
        </nav>
    )
}

export default NavBar
