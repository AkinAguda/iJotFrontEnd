import React from 'react';
import Imodal from '../elements/iModal';
import Styles from './index.module.css';

const Tile: React.FC = (): JSX.Element => (
  <div className={Styles.container}>
    <div>
      <div className={Styles.color} />
    </div>
    <div className={Styles.content}>
      <div className={Styles.titleSpan}>
        <div className={Styles.title}>Lorem Ipsum Title</div>
        <div className={Styles.trash} />
      </div>
      <div className={Styles.main}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et id et
        tristique arcu viverra diam ultricies amet. Ac. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Et id et tristique arcu viverra diam
        ultricies amet. Ac
      </div>
      <div className={Styles.categorySpan}>
        <div className={Styles.status}>Uncategorised</div>
        <div className={Styles.date}>1 Jan 1970</div>
      </div>
    </div>
  </div>
);

export default Tile;
