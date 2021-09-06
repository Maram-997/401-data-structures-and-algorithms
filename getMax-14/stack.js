'use strict';

const Node = require('./node');

class Stack {
    constructor() {
        this.top = null,
            this.max = null
    }

    push(value) {
        let node = new Node(value);
        if (!this.top) {
            this.top = node;
            return
        }
    }

    pop() {
        if (!this.top) {
            return ' empty stack'
        } else {
            let temp = this.top;
            this.top = this.top.next
            return temp
        }
    }
    peek() {
        if (!this.top) {
            return 'No stack FOUND'
        } else {
            return this.top.value
        }
    }
    isEmpty() {
        if (!this.top) {
            return true;
        } else {
            return false;
        }
    }
    getMax() {
        const node = new Node(value)

        if (!this.top) {
            this.top = node;
            this.max = node.value;
        }
        let maxValue = 0;
        let current = this.top;
        while (current.next) {
            if (current.value > maxValue) {
                maxValue = current.value;
            }
        }
        return maxValue;

    }
}

module.exports = Stack;