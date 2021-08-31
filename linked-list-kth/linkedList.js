'use strict';
const Node = require('./node');

class linkedList {
    constructor() {
        this.head = null;
    }

     kthFromEnd(k) {
        let count = 0;
        let current = this.head.next;
    
        while (current) {
          current = current.next;
          count++;
        }
        if (k <= count && k >= 0) {
          current = this.head;
          for (let i = 0; i < count - k; i++) {
            current = current.next;
          }
          return current.value;
        } else {
          return "error";
        }
      }
    }
    


module.exports = linkedList;