import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { FaHome, FaInfoCircle, FaBriefcase, FaEnvelope, FaTerminal } from 'react-icons/fa';

const Navigation = () => {
    return (
      <nav className={styles.navigation}>
        <div className={styles.logo}>
          <FaTerminal classname={styles.logoIcon}/> Kaushik Yadhunath
        </div>
        <div className={styles.links}>
          <NavLink exact activeClassName={styles.active} to="/"><FaHome /> Home</NavLink>
          <NavLink activeClassName={styles.active} to="/about"><FaInfoCircle /> About</NavLink>
          <NavLink activeClassName={styles.active} to="/portfolio"><FaBriefcase /> Portfolio</NavLink>
          <NavLink activeClassName={styles.active} to="/contact"><FaEnvelope /> Contact</NavLink>
        </div>
      </nav>
    );
  };
export default Navigation; 