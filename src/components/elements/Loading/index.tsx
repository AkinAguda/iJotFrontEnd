import React from 'react';
import Pattern from '../Pattern';
import Styles from './index.module.css';

const Loading: React.FC = (): JSX.Element => (
  <div className={Styles.container}>
    <Pattern />
    <div className={Styles.cards}>
      <div className={Styles.card}>
        <img src="/assets/images/logo.svg" alt="logo" />
      </div>
      <div className={Styles.card}>
        <img src="/assets/images/logo.svg" alt="logo" />
      </div>
      <div className={Styles.card}>
        <img src="/assets/images/logo.svg" alt="logo" />
      </div>
    </div>
  </div>
);

export default Loading;
