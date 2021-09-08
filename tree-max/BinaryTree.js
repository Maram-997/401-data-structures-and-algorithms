'use strict';

const Node = require('./node');
class BinaryTree {
    constructor(root) {
        this.root = root,
            this.left = null,
            this.right = null
    }
    
     findMax(node)
    {
        if (node == null)
            return 'empty tree';
   
        let res = node.root;
        let lres = findMax(node.left);
        let rres = findMax(node.right);
   
        if (lres > res)
            res = lres;
        if (rres > res)
            res = rres;
        return res;
    }

}

module.exports = BinaryTree;