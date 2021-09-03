'use strict';

const Stack = require('./stack');


class PseudoQueue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();

    }

    enqueue(value) {
        this.stack1.push(value);
        return this.stack1
    }

    dequeue() {
        if (this.stack1.peek()) {
            this.stack1.pop();
            return this.stack1.pop();
        }
        while (this.stack1.peek()) {
            this.stack2.push(this.stack1.pop());
            return;
        }

    }

}

module.exports = PseudoQueue;