import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles['welcome-text']}>Welcome to My Portfolio</h1>
    </div>
  );
};

export default Home;
