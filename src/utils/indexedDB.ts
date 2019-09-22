import Dexie from 'dexie';
interface UserDatabase extends Dexie {
  appUser?: Dexie.Table<{ id: string; notes: any[] }, number>;
}

const IndexedDB = (name: string, schema: string[]) => {
  const db: UserDatabase = new Dexie(name);
  db.version(1).stores({
    appUser: schema.join(','),
  });
  return {
    put: (id: string, notes: any[]): void => {
      db.appUser.put({ id, notes }).then(() => {
        console.log('Database updted');
      });
    },
    getNotes: (id: any) => {
      return new Promise((resolve, reject) => {
        db.appUser.get(id).then((res: { id: string; notes: any[] }) => {
          resolve(res.notes);
        });
      });
    },
  };
};
export default IndexedDB;
