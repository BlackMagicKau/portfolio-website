import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
      <nav className={styles.navigation}>
        <NavLink exact activeClassName={styles.active} to="/">Home</NavLink>
        <NavLink activeClassName={styles.active} to="/about">About</NavLink>
        <NavLink activeClassName={styles.active} to="/portfolio">Portfolio</NavLink>
        <NavLink activeClassName={styles.active} to="/contact">Contact</NavLink>
      </nav>
    );
  };
  
  export default Navigation;
  