import Dexie from 'dexie';
import {DBNoteType} from '../interfaces';
export interface Notes {
  [noteId: string]: DBNoteType;
}
interface UserDatabase extends Dexie {
  appUser?: Dexie.Table<{ id: string; notes: Notes }, number>;
}

const db: UserDatabase = new Dexie('UserDb');
db.version(1).stores({
  appUser: ['id', 'notes'].join(','),
});

const IndexedDB = (): any => {
  return {
    put: (id: string, notes: Notes): Promise<string> => {
      return new Promise((resolve: any, reject: any): void => {
        db.appUser.put({ id, notes }).then(() => {
          resolve('done');
        });
      });
    },
    getNotes: (id: any): Promise<unknown> => {
      return new Promise((resolve: any, reject: any): void => {
        db.appUser.get(id).then((res: { id: string; notes: Notes }) => {
          resolve(res.notes);
        });
      });
    },
  };
};

export default IndexedDB;
