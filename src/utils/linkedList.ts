export interface LinkedListNodeType {
  next: null | LinkedListNodeType;
  prev: null | LinkedListNodeType;
  value: any;
}
export interface LinkedListType {
  head: LinkedListNodeType;
  tail: LinkedListNodeType;
  length: number;
}
// import LinkedListNode, {LinkedListNodeType} from './linkedListNode';
// class LinkedList {
//     public head: LinkedListNode | null;
//     public tail: LinkedListNode | null;
//     public length: number;
//     constructor() {
//         obj.head = null;
//         obj.tail = null;
//         obj.length = 0;
//     }
//     append = (value: any): LinkedListNode => {
//         const newNode = new LinkedListNode(value);
//         if (!obj.tail) {
//             if (!obj.head) {
//                 obj.head = newNode;
//             }
//             obj.tail = newNode;
//             return obj.tail;
//         } else {
//             obj.tail.next = newNode;
//             newNode.prev = obj.tail;
//             obj.tail =  newNode;
//         }
//         obj.length ++;
//         return obj.tail;
//     }
//     prepend = (value: any): LinkedListNode => {
//         const newNode = new LinkedListNode(value);
//         if (!obj.head) {
//             if (!obj.tail) {
//                 obj.tail = newNode;
//             }
//             obj.head = newNode;
//             obj.length ++;
//             return obj.head;
//         } else {
//             obj.head.prev = newNode;
//             newNode.next = obj.head;
//             obj.head =  newNode;
//         }
//         obj.length ++;
//     }
//     remove = (value: any): LinkedListNode => {
//         let currentNode = obj.head;
//         while (currentNode.value !== value) {
//             currentNode = currentNode.next;
//         }
//         if (!currentNode.next) {
//             obj.tail = currentNode.prev;
//             obj.tail.next = null;
//             obj.length --;
//             return obj.tail;
//         }
//         if (!currentNode.prev) {
//             obj.head = currentNode.next;
//             obj.head.prev = null;
//             obj.length --;
//             return obj.head;
//         }
//         currentNode.prev.next = currentNode.next;
//         currentNode.next.prev = currentNode.prev;
//         obj.length --;
//         return currentNode;
//     }
// }

export const LinkedList = (): LinkedListType => ({
  length: 0,
  head: null,
  tail: null,
});

export const append = (obj: LinkedListType, value: any): LinkedListType => {
  const newNode: LinkedListNodeType = { value, next: null, prev: null };
  if (!obj.tail) {
    if (!obj.head) {
      obj.head = newNode;
    }
    obj.tail = newNode;
    return obj;
  } else {
    obj.tail.next = newNode;
    newNode.prev = obj.tail;
    obj.tail = newNode;
  }
  obj.length++;
  return obj;
};

export const prepend = (obj: LinkedListType, value: any): LinkedListType => {
  const newNode: LinkedListNodeType = { value, next: null, prev: null };
  if (!obj.head) {
    if (!obj.tail) {
      obj.tail = newNode;
    }
    obj.head = newNode;
    obj.length++;
    return obj;
  } else {
    obj.head.prev = newNode;
    newNode.next = obj.head;
    obj.head = newNode;
  }
  obj.length++;
  return obj;
};
export const remove = (obj: LinkedListType, value: any): LinkedListType => {
  let currentNode = obj.head;
  while (currentNode.value !== value) {
    currentNode = currentNode.next;
  }
  if (!currentNode.next) {
    obj.tail = currentNode.prev;
    obj.tail.next = null;
    obj.length--;
    return obj;
  }
  if (!currentNode.prev) {
    obj.head = currentNode.next;
    obj.head.prev = null;
    obj.length--;
    return obj;
  }
  currentNode.prev.next = currentNode.next;
  currentNode.next.prev = currentNode.prev;
  obj.length--;
  return obj;
};
