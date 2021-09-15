'use strict';

const Node = require('./node');

class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
    }
    sumOfAllOdd() {
        let result = [];
        let oddNum = (node) => {
            if (node !== null && node.value % 2 !== 0) {
                result.push(node.value);
            }
            if (node.left) {
                oddNum(node.left);
            }
            if (node.right) {
                oddNum(node.right);
            }
        };
        oddNum(this.root);
        let sum = 0;
        for (let i = 0; i < result.length; i++) {
            sum += result[i];
        }
        return sum;
    }

}
