import React from 'react';
import Styles from './index.module.css';
import { Ibutton } from '../../../interfaces';

// tslint:disable-next-line: typedef
const iButton: React.FunctionComponent<Ibutton> = ({
  full,
  light,
  circle,
  children,
  className,
  sign,
  onClick,
}): JSX.Element => (
  <>
    {
      <button
        className={`${full && Styles.full} ${light && Styles.light} ${circle &&
          Styles.circle} ${sign && Styles.sign} ${className && className}`}
        onClick={e => onClick(e)}
      >
        {children}
      </button>
    }
  </>
);

export default iButton;
