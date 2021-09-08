'use strict';

const Node = require('./node');
class BinaryTree {
    constructor(root) {
        this.root = root,
            this.left = null,
            this.right = null
    }
   
    breadthFirst(root) {
        let arr = [this.root];
        let result = [];
    
        let recursive = () => {
          if (arr.length > 0) {
            let node = arr.shift();
            let value = node.value;
            result.push(value);
    
            if (node.left == null && node.right == null) {
              recursive();
            }
            if (node.left != null) {
              arr.push(node.left);
            }
    
            if (node.right != null) {
              arr.push(node.right);
            }
          }
        };
        recursive();
        return result;
      }
    }
