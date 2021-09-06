'use strict';

const Node = require('./node');

// first in last out

class Stack {
    constructor() {
        this.top = null
    }
    push(value){
        let node = new Node(value);
        if(!this.top){
            this.top = node;
            return
        }
    }
    pop(){
        if(!this.top){
            return ' empty stack'
        }else{ 
            let temp = this.top;
        this.top = this.top.next
        return temp
        }
    }
    peek (){
        if(!this.top){
            return 'No stack FOUND'
        }else{
            return this.top.value
        }
    }

    isEmpty(){
        if(!this.top){
            return true;
        }else{
            return false;
        }
    }

}

module.exports = Stack;