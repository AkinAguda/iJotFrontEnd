import React from 'react';
import Ibutton from '../elements/Ibutton';
import { FooterType } from '../../interfaces';
import { ReactComponent as Check } from '../svgs/check.svg';
import Styles from './index.module.css';

const Footer: React.FC<FooterType> = ({ check }: FooterType): JSX.Element => (
  <footer>
    <div className={Styles.footer}>
      <Ibutton circle={true}>{check ? <Check /> : '+'}</Ibutton>
    </div>
  </footer>
);
export default Footer;
