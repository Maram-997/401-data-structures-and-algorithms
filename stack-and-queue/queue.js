'use strict';

const LinkedList = require('./linkedList');
const Node = require('./node');

// first in first out 
class Queue {
    constructor() {
        this.front = null
    }
    enqueue(val) {
        let node = new Node(val);
        if(!this.front){
            this.front = node;
            return
        }
    }
        dequeue(val){
            if(!this.front){
                return 'No Queue Found'
            } else {
                let temp = this.front
                this.front = this.front.next
                return temp;
            }
        }
        peek(){
            if(!this.front){
                return 'No Queue Found'
            }else{
                return this.front.value
            }
        }

        isEmpty(){
            if(!this.front){
                return true
            }else{
                return false
            }
        }
}



module.exports = Queue;