import React from 'react';
import { Header, Notes, Footer } from '@components/index';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
        <Header />
        <Notes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
