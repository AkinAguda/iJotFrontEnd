import React from 'react';
import { CategoryProps } from '../../../interfaces';
import Styles from './index.module.css';
// tslint:disable-next-line: typedef
const Category: React.FunctionComponent<CategoryProps> = ({
  type, onClick,
}: CategoryProps) => {
  return (
    <div className={Styles.container} onClick={(): void => {onClick(); }} role="button" tabIndex={0} onKeyPress={(): void => {onClick();}}>
      <div
        className={`${Styles.circle} ${Styles[type + 'C']}`}
      />
      <div
        className={`${Styles.type} ${Styles[type]}`}
      >
        {type}
      </div>
    </div>
  );
};

export default Category;
