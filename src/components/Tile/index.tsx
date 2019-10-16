import React from 'react';
import { convertToRaw } from 'draft-js';
import Styles from './index.module.css';
import { TileTypes } from '../../interfaces';

const Tile: React.FC<TileTypes> = ({
  noteId,
  category,
  title,
  editorState,
}: TileTypes): JSX.Element => (
  <div className={Styles.container}>
    <div>
      <div className={Styles.color} />
    </div>
    <div className={Styles.content}>
      <div className={Styles.titleSpan}>
        <div className={Styles.title}>Lorem Ipsum Title</div>
        <div className={Styles.trash} />
      </div>
      <div className={Styles.main}>
        {convertToRaw(editorState.getCurrentContent).blocks}
      </div>
      <div className={Styles.categorySpan}>
        <div className={Styles.status}>Uncategorised</div>
        <div className={Styles.date}>1 Jan 1970</div>
      </div>
    </div>
  </div>
);

export default Tile;
