import React from 'react';
import { Particles } from 'react-tsparticles';
import styles from './ParticlesBackground.module.css';

const ParticlesBackground = () => {
  return (
    <Particles
      id="tsparticles"
      className={styles.particles}
      options={{
        fpsLimit: 60,
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              area: 800,
            },
          },
          size: {
            value: 5,
            random: true,
          },
          links: {
            enable: false,
          },
          move: {
            speed: 0.5,
          },
        },
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            onClick: {
              enable: true,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticlesBackground;
