import React from 'react';
import { Header, Footer } from '@components/index';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
