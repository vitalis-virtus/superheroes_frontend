import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css'


const NavBar = () =>{
    return (
        <nav className={styles.navBar}>
      <NavLink
        to="/createhero"
        exact
        className={styles.Link}
        activeClassName={styles.activeLink}
      >
        Create character
      </NavLink>
        <NavLink
          to="/superheroes"
          exact
          className={styles.Link}
          activeClassName={styles.activeLink}
        >
          Superheroes
        </NavLink>        </nav>
    )
}

export default NavBar;