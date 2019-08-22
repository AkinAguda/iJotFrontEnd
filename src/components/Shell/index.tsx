import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Styles from './index.module.css';

const Shell: React.FC = (): JSX.Element => (
  <div className={Styles.container}>
    <main>
      <Header />
      <h1 className={Styles.title}>Notes</h1>
      <div className={Styles.content}>{/* <h1>Hello World</h1> */}</div>
    </main>
    <Footer />
  </div>
);

export default Shell;
