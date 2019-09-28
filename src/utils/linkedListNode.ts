class LinkedListNode {
    public next: LinkedListNode | null;
    public prev: LinkedListNode | null;
    constructor(public value: any) {
        this.next = null;
        this.prev = null;
    }
}
export default LinkedListNode;
