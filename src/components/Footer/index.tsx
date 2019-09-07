import React, { useEffect } from 'react';
import { RichUtils } from 'draft-js';
import { useDispatch, useSelector } from 'react-redux';
import { MAKE_BOLD, REMOVE_EFFECT } from '../../reducer/actions';
import Ibutton from '../elements/Ibutton';
import { FooterType, UserStates } from '../../interfaces';
import { ReactComponent as Check } from '../svgs/check.svg';
import Styles from './index.module.css';

const Footer: React.FC<FooterType> = ({ check }: FooterType): JSX.Element => {
  const dispatch = useDispatch();
  const { bold, editorState } = useSelector((state: UserStates) => state);
  console.log('footer');
  // useEffect(() => {}, [bold]);
  return (
    <footer>
      <div className={Styles.footer}>
        {check && (
          <Ibutton
            smallCircle={true}
            onClick={() =>
              dispatch({
                type: bold ? REMOVE_EFFECT : MAKE_BOLD,
                payload: RichUtils.toggleInlineStyle(editorState, 'BOLD'),
              })
            }
            active={bold ? true : false}
          >
            B
          </Ibutton>
        )}
        <Ibutton circle={true}>{check ? <Check /> : '+'}</Ibutton>
        {check && (
          <Ibutton smallCircle={true}>
            <i>I</i>
          </Ibutton>
        )}
      </div>
    </footer>
  );
};
export default Footer;
