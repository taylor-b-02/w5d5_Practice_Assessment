
class SinglyLinkedNode {
    constuctor(va) {
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

    enqueue() {
        let newNode = new SinglyLinkedNOde(val);
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
        const node = this.head;
        this.head = this.head.next;
        this.length--;
        return node.value;
    }
}

module.exports = Queue;
