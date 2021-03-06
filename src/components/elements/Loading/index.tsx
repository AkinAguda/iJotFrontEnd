import React from 'react';
import Pattern from '../Pattern';
import {ReactComponent as Logo} from '../../svgs/logo.svg';
import Styles from './index.module.css';

const Loading: React.FC = (): JSX.Element => (
  <div className={Styles.container}>
    <Pattern />
    <div className={Styles.cards}>
      <div className={Styles.card}>
        <Logo className={Styles.logo}/>
      </div>
      <div className={Styles.card}>
        <Logo className={Styles.logo}/>
      </div>
      <div className={Styles.card}>
        <Logo className={Styles.logo}/>
      </div>
    </div>
  </div>
);

export default Loading;
