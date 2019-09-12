import React, { useState, useRef, useEffect, MouseEvent } from 'react';
import Styles from './index.module.css';
import {
  SET_EDITOR_STATE,
  MAKE_BOLD,
  EDIT_NOTE_TITLE,
} from '../../reducer/actions';
// import { useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { UserStates } from '../../interfaces';
import { Editor, EditorState, RichUtils } from 'draft-js';

const Edit: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  // const [editorState, setEditorState] = useState(EditorState.createEmpty());
  // const { editorState } = useSelector((state: UserStates) => state);
  const { editorState, noteTitle } = useSelector((state: UserStates) => state);
  const editor = useRef(null);
  const focusEditor = (): void => {
    editor.current.focus();
  };
  // console.log(bold);
  console.log('edit');
  // const makeBold = () => {
  //   setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  // };
  const setEditorState = state => {
    console.log('state', state);
    dispatch({
      type: SET_EDITOR_STATE,
      payload: state,
    });
  };
  return (
    <div className={Styles.container}>
      <div className={Styles.title}>
        <input
          type="text"
          placeholder="Lorem Ipsum Title"
          value={noteTitle}
          onChange={e => {
            dispatch({ type: EDIT_NOTE_TITLE, payload: e.currentTarget.value });
          }}
        />
        <div className={Styles.category}>
          <div className={Styles.categoryColor} />
          <div className={Styles.categoryName}>personal</div>
        </div>
      </div>
      <div
        onClick={(e: MouseEvent<HTMLDivElement>): void => {
          focusEditor();
        }}
        className={Styles.editorWrapper}
      >
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          ref={editor}
        />
      </div>
    </div>
  );
};

export default Edit;
