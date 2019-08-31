import React, { KeyboardEvent, MouseEvent } from 'react';
import Styles from './index.module.css';
import { Ibutton } from '../../../interfaces';
import { ReactComponent as Loader } from '../../svgs/Roll.svg';

// tslint:disable-next-line: typedef
const iButton: React.FunctionComponent<Ibutton> = ({
  full,
  light,
  circle,
  children,
  className,
  sign,
  onClick,
  loading,
}): JSX.Element => (
  <>
    {
      <button
        className={`${full && Styles.full} ${light && Styles.light} ${circle &&
          Styles.circle} ${sign && Styles.sign} ${className && className}`}
        onClick={(
          e: KeyboardEvent<HTMLButtonElement> | MouseEvent<HTMLButtonElement>,
        ): any => onClick(e)}
      >
        {loading ? (
          <Loader
            className={`${full && Styles.lightLoader} ${Styles.loader}`}
          />
        ) : (
          children
        )}
      </button>
    }
  </>
);

export default iButton;
