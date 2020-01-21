import React, { useEffect, useState } from 'react';
import { convertFromRaw, EditorState } from 'draft-js';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import indexedDB, { CollectionType } from '../../utils/indexedDB';
import { ShellTypeProps, UserStates } from '../../interfaces';
import { LOAD_NOTE, SHOULD_FETCH_FROM_DB } from '../../reducer/actions';
import Footer from '../Footer';
import Tile from '../Tile';
import Edit from '../Edit';
import Header from '../Header';
import Styles from './index.module.css';
import {ReactComponent as Empty} from '../svgs/empty.svg';

const Shell: React.FC<ShellTypeProps> = ({
  notes,
  edit,
}: ShellTypeProps): JSX.Element => {
  const dispatch = useDispatch();
  const { uid, shouldFetchFromDb, mode } = useSelector((state: UserStates) => state);
  const [allNotes, setAllNotes] = useState<CollectionType | any>({});
  useEffect(() => {
    indexedDB()
      .getNotes(uid)
      .then((data: CollectionType) => {
        setAllNotes(data);
      });
  }, [uid, shouldFetchFromDb]);
  const triggerRender = () => {
    dispatch({type: SHOULD_FETCH_FROM_DB, payload: !shouldFetchFromDb});
  };
  return (
    <div className={Styles.container}>
      <main>
        <Header />
        <h1 className={Styles.title}>Notes</h1>
        <div className={Styles.content}>
          {(allNotes && allNotes.id && !edit) && Object.keys(allNotes.notes).length === 0 ?  <div className={Styles.empty}><Empty /></div> : '' }
          {notes &&
            (allNotes && (
              <>
                {allNotes.order &&
                  JSON.parse(allNotes.order).map((id: string) => (
                    <Tile
                      key={Math.random()}
                      editorState={convertFromRaw(allNotes.notes[id].editorState)}
                      noteId={id}
                      category={allNotes.notes[id].category}
                      title={allNotes.notes[id].title}
                      uid={uid}
                      date={allNotes.notes[id].date}
                      triggerRender={triggerRender}
                      onClick={(): void => {
                        convertFromRaw(allNotes.notes[id].editorState);
                        dispatch({type: LOAD_NOTE, payload: {
                        noteId: id,
                        editorState: EditorState.createWithContent(convertFromRaw(allNotes.notes[id].editorState)),
                        category: allNotes.notes[id].category,
                        title: allNotes.notes[id].title,
                      }});
                    }}
                    />
                  ))}
              </>
            ))}
          {edit && <Edit />}
          {mode === 'edit' && <Redirect to="/edit"/>}
        </div>
      </main>
      <Footer check={edit ? true : false} />
    </div>
  );
};

export default Shell;
