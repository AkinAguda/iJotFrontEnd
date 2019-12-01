import React from 'react';
import Styles from './index.module.css';
import { TileTypes } from '../../interfaces';
import indexedDB from '../../utils/indexedDB';

const Tile: React.FC<TileTypes> = ({
  noteId,
  uid,
  category,
  title,
  editorState,
  onClick,
  triggerRender,
}: TileTypes): JSX.Element => {
  const deleteNote = (userId: string, noteID: string): void => {
    indexedDB().deleteNote(userId, noteID).then(() => {
    triggerRender();
    });
  };
  const contentString = editorState.getPlainText();
  return (
  <div className={Styles.container} onClick={onClick}>
    <div className={Styles.block}>
      <div className={Styles.circleContainer}>
      <div className={`${Styles.color} ${Styles[category + 'C']}`} />
    </div>
    <div className={Styles.content}>
      <div className={Styles.titleSpan}>
        <div className={Styles.title}>{title}</div>
        <div className={Styles.trash} onClick={(e:  React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
          e.stopPropagation();
          deleteNote(uid, noteId);
        }} />
      </div>
      <div className={Styles.main}>
        {/* {contentString.slice(0, 80) + (contentString.length > 80 ? '...' : '')} */}
        {contentString.slice(0, 80) + (contentString.length > 80 ? '...' : '')}
      </div>
      <div className={Styles.categorySpan}>
        <div className={`${Styles.status} ${Styles[category]}`}>{category}</div>
        <div className={Styles.date}>1 Jan 1970</div>
      </div>
    </div>
    </div>
  </div>
);
};
// className={`${Styles.type} ${type === noteTypes.uncategorized &&
//   Styles.uncategorized} ${type === noteTypes.study &&
//   Styles.study} ${type === noteTypes.personal &&
//   Styles.personal} ${type === noteTypes.work && Styles.work} ${type ===
//   noteTypes.todo && Styles.todo}`}
// >
export default Tile;
