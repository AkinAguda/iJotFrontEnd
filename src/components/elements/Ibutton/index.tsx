import React from 'react';
import Styles from './index.module.css';
import { Ibutton } from '../../../interfaces';

const iButton: React.FunctionComponent<Ibutton> = ({
  full,
  light,
  circle,
  children,
  className,
}): JSX.Element => (
  <>
    {
      <button
        className={`${full && Styles.full} ${light && Styles.light} ${circle &&
          Styles.circle} ${className && className}`}
      >
        {children}
      </button>
    }
  </>
);

export default iButton;
