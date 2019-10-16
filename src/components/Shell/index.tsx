import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import indexedDB, { CollectionType } from '../../utils/indexedDB';
import { ShellTypeProps, UserStates } from '../../interfaces';
import Footer from '../Footer';
import Tile from '../Tile';
import Edit from '../Edit';
import Header from '../Header';
import Styles from './index.module.css';

const Shell: React.FC<ShellTypeProps> = ({
  notes,
  edit,
}: ShellTypeProps): JSX.Element => {
  const { uid } = useSelector((state: UserStates) => state);
  const [allNotes, setAllNotes] = useState<CollectionType | any>({});
  useEffect(() => {
    indexedDB()
      .getNotes(uid)
      .then((data: CollectionType) => {
        setAllNotes({ ...data });
      });
  }, [uid]);
  console.log('ALL', allNotes);
  return (
    <div className={Styles.container}>
      <main>
        <Header />
        <h1 className={Styles.title}>Notes</h1>
        <div className={Styles.content}>
          {notes &&
            (allNotes && (
              <>
                {allNotes.order &&
                  JSON.parse(allNotes.order).map((id: string) => (
                    <Tile
                      key={Math.random()}
                      editorState={JSON.parse(allNotes.notes[id].editorState)}
                      noteId={id}
                      category={allNotes.notes[id].category}
                      title={allNotes.notes[id].title}
                    />
                  ))}
              </>
            ))}
          {edit && <Edit />}
        </div>
      </main>
      <Footer check={edit ? true : false} />
    </div>
  );
};

export default Shell;
