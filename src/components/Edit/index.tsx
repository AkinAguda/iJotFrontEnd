import React, { useState, useRef } from 'react';
import Styles from './index.module.css';
import { Editor, EditorState } from 'draft-js';

const Edit: React.FC = (): JSX.Element => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const editor = useRef(null);
  const focusEditor = (): void => {
    editor.current.focus();
  };
  React.useEffect(() => {
    focusEditor();
  }, []);
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
