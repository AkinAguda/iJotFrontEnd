import React from 'react';
import indexedDB from '../../utils/indexedDB';
import { RichUtils } from 'draft-js';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { BOLD, ITALIC, REMOVE_STYLING, SHOULD_FETCH_FROM_DB } from '../../reducer/actions';
import Ibutton from '../elements/Ibutton';
import { FooterType, UserStates } from '../../interfaces';
import { ReactComponent as Check } from '../svgs/check.svg';
import Styles from './index.module.css';
import { noteStyles } from '../../utils';

const Footer: React.FC<FooterType> = ({ check }: FooterType): JSX.Element => {
  const dispatch = useDispatch();
  const { bold, italic, editorState, uid, noteTitle, noteType } = useSelector(
    (state: UserStates) => state,
  );
  const history = useHistory();
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
        <Ibutton
          circle={true}
          onClick={
            check
              ? async (): Promise<void> => {
                  const data = await indexedDB().getNotes(uid);
                  let noteCollection = {};
                  const noteId =
                    Math.random()
                      .toString(36)
                      .substring(2, 15) +
                    Math.random()
                      .toString(36)
                      .substring(2, 15);
                  let linkedListValue: any[];
                  if (data) {
                    noteCollection = data.notes;
                    linkedListValue = JSON.parse(data.order);
                    // console.log(linkedListValue);
                    // if (linkedListValue.includes(noteId)) {
                      if (linkedListValue[0] !== noteId) {
                        // linkedListValue = remove(linkedListValue, noteId);
                        linkedListValue.unshift(noteId);
                      }
                    // }
                  } else {
                    linkedListValue = [noteId];
                  }
                  indexedDB().put(
                    uid,
                    {
                      ...noteCollection,
                      [noteId]: {
                        noteId,
                        category: noteType,
                        title: noteTitle,
                        editorState: JSON.stringify(editorState),
                      },
                    },
                    JSON.stringify(linkedListValue),
                  ).then(() => {
                    dispatch({
                      type: SHOULD_FETCH_FROM_DB,
                    });
                    history.push('/notes');
                  });
                }
              : null
          }
        >
          {check ? <Check /> : <Link to="/new">+</Link>}
        </Ibutton>
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
