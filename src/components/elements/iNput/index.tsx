import React from 'react';
import { Input } from '../../../interfaces';
import Styles from './index.module.css';

const iNput: React.FunctionComponent<Input> = ({
  type,
  className,
  placeholder,
}: Input): JSX.Element => (
  <div
    className={`${Styles.container} ${type === 'password' &&
      Styles.passwordType}`}
  >
    <input
      type={type}
      className={`${Styles.input} ${className && className} ${type ===
        'password' && Styles.password}`}
      placeholder={placeholder}
    />
    {type === 'password' && (
      <div className={Styles.eye}>
        <img src="/assets/images/see.svg" alt="see" />
      </div>
    )}
  </div>
);

export default iNput;
