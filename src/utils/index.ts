// import {remove, removeValue} from './linkedList';
// import indexedDB from './indexedDB';
export const noteTypes = {
  uncategorized: 'uncategorized',
  study: 'study',
  personal: 'personal',
  work: 'work',
  todo: 'todo',
};
export const noteStyles = {
  BOLD: 'BOLD',
  ITALIC: 'ITALIC',
};

// export const deleteNote = (userId: string, noteId: string) => {
//   indexedDB().getNotes(userId).then((data) => {
//     const newNotesArr = remove(JSON.parse(data.order), noteId);
//     const newNotesObj = removeValue(data.notes, noteId);
//     indexedDB().put(userId, newNotesObj, JSON.stringify(newNotesArr));
//   });
// };
