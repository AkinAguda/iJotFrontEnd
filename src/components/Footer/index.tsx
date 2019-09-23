import React from 'react';
import { RichUtils } from 'draft-js';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import {
  BOLD,
  ITALIC,
  REMOVE_STYLING,
} from '../../reducer/actions';
import Ibutton from '../elements/Ibutton';
import { FooterType, UserStates } from '../../interfaces';
import { ReactComponent as Check } from '../svgs/check.svg';
import Styles from './index.module.css';
import { noteStyles } from '../../utils';

const Footer: React.FC<FooterType> = ({ check }: FooterType): JSX.Element => {
  const dispatch = useDispatch();
  const { bold, italic, editorState } = useSelector(
    (state: UserStates) => state,
  );
  return (
    <footer>
      <div className={Styles.footer}>
        {check && (
          <Ibutton
            smallCircle={true}
            onClick={(): void => {
              dispatch({
                type: bold ? REMOVE_STYLING : BOLD,
                payload: bold
                  ? {
                      type: noteStyles.BOLD,
                      state: RichUtils.toggleInlineStyle(
                        editorState,
                        noteStyles.BOLD,
                      ),
                    }
                  : RichUtils.toggleInlineStyle(editorState, noteStyles.BOLD),
              });
            }}
            active={bold ? true : false}
          >
            B
          </Ibutton>
        )}
        <Ibutton circle={true}>{check ? <Check /> : <Link to="/new">+</Link>}</Ibutton>
        {check && (
          <Ibutton
            smallCircle={true}
            onClick={(): void => {
              dispatch({
                type: italic ? REMOVE_STYLING : ITALIC,
                payload: italic
                  ? {
                      type: noteStyles.ITALIC,
                      state: RichUtils.toggleInlineStyle(
                        editorState,
                        noteStyles.ITALIC,
                      ),
                    }
                  : RichUtils.toggleInlineStyle(editorState, noteStyles.ITALIC),
              });
            }}
            active={italic ? true : false}
          >
            <i>I</i>
          </Ibutton>
        )}
      </div>
    </footer>
  );
};
export default Footer;
