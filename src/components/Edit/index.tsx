import React, { useState, useRef, useEffect, ChangeEvent } from 'react';
import Styles from './index.module.css';
import { SET_EDITOR_STATE, EDIT_NOTE_TITLE } from '../../reducer/actions';
import { useDispatch, useSelector } from 'react-redux';
import { UserStates } from '../../interfaces';
import { Editor, EditorState } from 'draft-js';

const Edit: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const [shouldFocus, setShouldFocus] = useState(false);
  const { editorState, noteTitle } = useSelector((state: UserStates) => state);
  const editor = useRef(null);
  const title = useRef(null);
  const focusEditor = (arg: any): void => {
    arg.current.focus();
  };
  const setEditorState = (state: EditorState): void => {
    dispatch({
      type: SET_EDITOR_STATE,
      payload: state,
    });
  };
  const handleInputClick = (): void => {
    setShouldFocus(true);
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setShouldFocus(true);
    dispatch({ type: EDIT_NOTE_TITLE, payload: e.currentTarget.value });
  };
  const handleEditorClick = (): void => {
    setShouldFocus(false);
    focusEditor(editor);
  };
  useEffect(() => {
    if (!shouldFocus) {
      focusEditor(editor);
    } else {
      focusEditor(title);
    }
  });
  return (
    <div className={Styles.container}>
      <div className={Styles.title}>
        <input
          type="text"
          placeholder="Lorem Ipsum Title"
          value={noteTitle}
          onChange={(e: ChangeEvent<HTMLInputElement>): void => {
            handleInputChange(e);
          }}
          onClick={(): void => {
            handleInputClick();
          }}
          ref={title}
        />
        <div className={Styles.category}>
          <div className={Styles.categoryColor} />
          <div className={Styles.categoryName}>personal</div>
        </div>
      </div>
      <div
        onClick={(): void => {
          handleEditorClick();
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
