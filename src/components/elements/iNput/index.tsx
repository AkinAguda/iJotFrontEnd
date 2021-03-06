import React, { useState, FunctionComponent } from 'react';
import {ReactComponent as See} from '../../svgs/see.svg';
import { Input } from '../../../interfaces';
import Styles from './index.module.css';

// tslint:disable-next-line: typedef
const INput: FunctionComponent<Input> = ({
  type = 'text',
  className,
  placeholder,
  onInput,
  name,
}): JSX.Element => {
  const [initialType] = useState(type);
  const [inputType, setInputType] = useState(type);
  return (
    <div
      className={`${Styles.container} ${initialType === 'password' &&
        Styles.passwordType}`}
    >
      <input
        type={inputType}
        className={`${Styles.input} ${className && className} ${initialType ===
          'password' && Styles.password}`}
        placeholder={placeholder}
        onInput={onInput}
        name={name}
      />
      {initialType === 'password' && (
        <div
          className={Styles.eye}
          onClick={(): any =>
            setInputType(inputType === 'password' ? 'text' : 'password')
          }
        >
          <See className={Styles.see}/>
        </div>
      )}
    </div>
  );
};

export default INput;
