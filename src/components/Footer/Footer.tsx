import React from 'react';
import gitIcon from '@assets/gitIcon.png';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <a className={styles.gitLink} href="https://github.com/AlexLevw">
        <img src={gitIcon} alt="gitIcon" />
        <p className={styles.gitName}>AlexLevw</p>
      </a>
    </div>
  );
}
