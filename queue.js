
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        let newNode = new SinglyLinkedNode(val);
        // console.log('NewNode Value:', newNode.value)
        if (this.head) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this.length;
    }

    dequeue() {
        let node = this.head;
        // console.log('Node:', node, 'Value:', node.value);
        this.head = this.head.next;
        this.length--;
        return node.value;
    }
}

module.exports = Queue;
