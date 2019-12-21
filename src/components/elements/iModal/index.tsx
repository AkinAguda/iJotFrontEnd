import React from 'react';
import Ibutton from '../Ibutton';
import Styles from './index.module.css';
import {ModalProps} from '../../../interfaces';

const IModal: React.FC<ModalProps> = ({title, info, button1Text, button1Click, button2Text, button2Click}):  JSX.Element => (
    <div className={Styles.container}>
        <div className={Styles.modal}>
            {/* {children} */}
            <div className={Styles.content}>
                <h3 className={Styles.title}>{title}</h3>
                <p className={Styles.info}>{info}</p>
                <div className={Styles.buttons}>
                    <Ibutton onClick={button1Click}>{button1Text}</Ibutton>
                    <Ibutton onClick={button2Click}>{button2Text}</Ibutton>
                </div>
            </div>
        </div>
    </div>
);

export default IModal;
