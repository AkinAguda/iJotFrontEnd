import React, { useState } from 'react';
import Styles from './index.module.css';
import { Editor, EditorState } from 'draft-js';

const Edit: React.FC = (): JSX.Element => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <div className={Styles.container}>
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  );
};

export default Edit;
