import React, { useState, useRef, useEffect } from 'react';
import Styles from './index.module.css';
import { SET_EDITOR_STATE, MAKE_BOLD } from '../../reducer/actions';
// import { useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { UserStates } from '../../interfaces';
import { Editor, EditorState, RichUtils } from 'draft-js';

const Edit: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  // const [editorState, setEditorState] = useState(EditorState.createEmpty());
  // const { editorState } = useSelector((state: UserStates) => state);
  const { editorState } = useSelector((state: UserStates) => state);
  const editor = useRef(null);
  const focusEditor = (): void => {
    editor.current.focus();
  };
  // useEffect(() => {
  //   // focusEditor();
  // }, []);
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
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        ref={editor}
      />
    </div>
  );
};

export default Edit;
