'use strict';

const Node = require('./node');
class BinaryTree {
    constructor(root) {
        this.root = root,
            this.left = null,
            this.right = null
    }
    
    findMaximum() {
        if (!this.root) {
            return 'empty tree'
        }
        let currunt = this.root;

        while (currunt.right !== null) {
            currunt = currunt.right;
        }
        return currunt.data;
    }

}

module.exports = BinaryTree;