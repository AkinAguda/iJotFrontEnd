import React, {PropsWithChildren} from 'react';
import Styles from './index.module.css';

const Imodal: React.FC = ({children}: PropsWithChildren<any>):  JSX.Element => (
    <div className={Styles.container}>
        <div className={Styles.modal}>
            {children}
        </div>
    </div>
);

export default Imodal;
