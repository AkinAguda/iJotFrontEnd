import Dexie from 'dexie';
import { DBNoteType } from '../interfaces';
// import LinkedList from '../utils/linkedList';
export interface Notes {
  [noteId: string]: DBNoteType;
}

export interface CollectionType {
  id: string;
  notes: Notes;
  order: string;
}

interface UserDatabase extends Dexie {
  appUser?: Dexie.Table<CollectionType, string>;
}

const db: UserDatabase = new Dexie('UserDb');
db.version(1).stores({
  appUser: ['id', 'notes', 'order'].join(','),
});

const IndexedDB = (): {
  put: (id: string, notes: Notes, order: string) => Promise<string>;
  getNotes: (id: any) => Promise<CollectionType>;
  getNote: (uid: string, id: string) => Promise<DBNoteType>;
} => {
  return {
    put: (id: string, notes: Notes, order: string): Promise<string> => {
      return new Promise((resolve: any, reject: any): void => {
        db.appUser.put({ id, notes, order }).then(() => {
          resolve('done');
        });
      });
    },
    getNotes: (id: string): Promise<CollectionType> => {
      return new Promise((resolve: any, reject: any): void => {
        db.appUser.get(id).then((res: { id: string; notes: Notes }) => {
          return resolve(res);
        });
      });
    },
    getNote: (uid: string, id: string): Promise<DBNoteType> => {
      return new Promise((resolve: any, reject: any): void => {
        db.appUser.get(uid).then((res: CollectionType): void => {
          resolve(res.notes[id]);
        });
      });
    },
  };
};

export default IndexedDB;
