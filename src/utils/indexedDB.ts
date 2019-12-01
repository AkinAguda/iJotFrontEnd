import Dexie from 'dexie';
import { DBNoteType } from '../interfaces';
import {removeValue, remove} from './linkedList';
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
  deleteNote: (userId: string, noteId: string) => Promise<string>
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
    deleteNote: (userId: string, noteId: string): Promise<string> => {
      const id = userId;
      return new Promise((resolve: any, reject: any): void => {
        db.appUser.get(userId).then((data: CollectionType) => {
          const order = JSON.stringify(remove(JSON.parse(data.order), noteId));
          const notes = removeValue(data.notes, noteId);
          db.appUser.put({id, notes, order}).then((res: string) => {
            resolve(res);
          });
        });
      });
    },
  };
};

export default IndexedDB;
