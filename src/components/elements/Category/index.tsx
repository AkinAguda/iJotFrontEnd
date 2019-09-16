import React from 'react';
import { noteTypes } from '../../../utils';
import { CategoryProps } from '../../../interfaces';
import Styles from './index.module.css';
// tslint:disable-next-line: typedef
const Category: React.FunctionComponent<CategoryProps> = ({
  type,
}: CategoryProps) => {
  return (
    <div className={Styles.container}>
      <div
        className={`${Styles.circle} ${type === noteTypes.uncategorized &&
          Styles.uncategorizedC} ${type === noteTypes.study &&
          Styles.studyC} ${type === noteTypes.personal &&
          Styles.personalC} ${type === noteTypes.work &&
          Styles.workC} ${type === noteTypes.todo && Styles.todoC}`}
      />
      <div
        className={`${Styles.type} ${type === noteTypes.uncategorized &&
          Styles.uncategorized} ${type === noteTypes.study &&
          Styles.study} ${type === noteTypes.personal &&
          Styles.personal} ${type === noteTypes.work && Styles.work} ${type ===
          noteTypes.todo && Styles.todo}`}
      >
        {type}
      </div>
    </div>
  );
};

export default Category;
