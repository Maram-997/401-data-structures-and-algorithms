'use strict';
class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return this;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;

        }
        current.next = node;
        return this;
    }

    insertBefore(value, newValue) {
        let previous = this.head;
        while (previous.next) {
            if (previous.value == value) {
                let after = previous.next;
                let newNode = new Node(newValue);
                newNode.next = after;
                previous.next = newNode
                return this;
            }
        }
    }
        insertAfter(value, newValue){
            let node = new Node(newValue)
            let current = this.head;
            while (current.next) {
                if (current.value == value) {
                    node.next = current.next;
                    current.next = node;
                }
                return  this;
            }
        }
}