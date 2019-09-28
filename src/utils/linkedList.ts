import LinkedListNode from './linkedListNode';
class LinkedList {
    public head: LinkedListNode | null;
    public tail: LinkedListNode | null;
    public length: number;
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append = (value: any): LinkedListNode => {
        const newNode = new LinkedListNode(value);
        if (!this.tail) {
            if (!this.head) {
                this.head = newNode;
            }
            this.tail = newNode;
            return this.tail;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail =  newNode;
        }
        this.length ++;
        return this.tail;
    }
    prepend = (value: any): LinkedListNode => {
        const newNode = new LinkedListNode(value);
        if (!this.head) {
            if (!this.tail) {
                this.tail = newNode;
            }
            this.head = newNode;
            this.length ++;
            return this.head;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head =  newNode;
        }
        this.length ++;
    }
    remove = (value: any): LinkedListNode => {
        let currentNode = this.head;
        while (currentNode.value !== value) {
            currentNode = currentNode.next;
        }
        if (!currentNode.next) {
            this.tail = currentNode.prev;
            this.tail.next = null;
            this.length --;
            return this.tail;
        }
        if (!currentNode.prev) {
            this.head = currentNode.next;
            this.head.prev = null;
            this.length --;
            return this.head;
        }
        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
        this.length --;
        return currentNode;
    }
}
export default LinkedList;
