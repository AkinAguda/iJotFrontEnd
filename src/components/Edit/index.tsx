import React, { useState, useRef, useEffect, ChangeEvent } from 'react';
import Styles from './index.module.css';
import { SET_EDITOR_STATE, EDIT_NOTE_TITLE, SET_NOTE_CATEGORY } from '../../reducer/actions';
import { useDispatch, useSelector } from 'react-redux';
import { UserStates } from '../../interfaces';
import { Editor, EditorState } from 'draft-js';
import Category from '../elements/Category';
import { noteTypes } from '../../utils/index';

const Edit: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const [dropDownActive, setDropDownActive] = useState(false);
  const [shouldFocus, setShouldFocus] = useState(null);
  const { editorState, noteTitle, noteType } = useSelector((state: UserStates) => state);
  const editor = useRef(null);
  const categoryList = useRef(null);
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
  const setNoteType = (value: string): void => {
    dispatch({type: SET_NOTE_CATEGORY, payload: value})
  }
  useEffect(() => {
    if (shouldFocus === false) {
      focusEditor(editor);
    } else if (shouldFocus === true) {
      focusEditor(title);
    }
  });
  const notes = [noteTypes.personal, noteTypes.study, noteTypes.uncategorized, noteTypes.todo, noteTypes.work]
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
        <div
          className={`${Styles.category} ${dropDownActive &&
            Styles.categoryActive}`}
          onClick={(): void => {
            setDropDownActive(!dropDownActive);
          }}
        >
          <div
            className={`${Styles.categoryColor} ${dropDownActive &&
              Styles.categoryColorActive}`}
              style={{backgroundColor: `var(--${noteType})`}}
          />
          <div
            className={`${Styles.categoryName} ${dropDownActive &&
              Styles.categoryNameActive}`}
              style={{color: `var(--${noteType})`}}
          >
            {noteType}
          </div>
          <div
            ref={categoryList}
            className={`${Styles.categoryList} ${dropDownActive &&
              Styles.categoryListActive}`}
            style={
              dropDownActive
                ? {
                    height: categoryList.current.scrollHeight,
                  }
                : {}
            }
          >
            {notes.map((value) => <Category type={value} key={value} onClick={() => {setNoteType(value)}}/>)}
          </div>
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
