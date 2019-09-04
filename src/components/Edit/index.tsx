import React, { useState, useRef } from 'react';
import Styles from './index.module.css';
import { useSelector } from 'react-redux';
import { UserStates } from '../../interfaces';
import { Editor, EditorState, RichUtils } from 'draft-js';

const Edit: React.FC = (): JSX.Element => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const { bold } = useSelector((state: UserStates) => state);
  const editor = useRef(null);
  const focusEditor = (): void => {
    editor.current.focus();
  };
  React.useEffect(() => {
    focusEditor();
  }, []);
  console.log(bold);
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
