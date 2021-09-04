'use strict';

const Node = require('./node')
const BinaryTree = require('./BinaryTree')

class  BinarySearchTree  extends BinaryTree{
    add(value) {
        let node = new Node(value);
    
        if (this.root == null) {
          this.root = node;
        } else {
          this.getLocation(this.root, node);
        }
      }
    
      contains(value) {
        if (!this.root.value) {
            return false;
        }

        let searchValue = (current, value) => {
            if (current.value === value) {
                return true;
            } else if (current.value > value) {
                if (!current.left) {
                    return false;
                }
            } else {
                if (!current.right) {
                    return false;
                }
            }
        };

        return searchValue(this.root, value);
    }
}
module.exports = BinarySearchTree;