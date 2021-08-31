'use strict';

const Node = require('./node');
const Stack = require('./stack');

describe("Stack", () => {
    it("creation", () => {
      let newStack = new Stack();
  
      expect(newStack).toBeInstaceOf(Stack);
    });
    it("push", () => {
      let newStack = new Stack();
      newStack.push(1);
      newStack.push(2);
  
      expect(newStack.top.value).toEqual(2);
    });
    it("pop", () => {
      let newStack = new Stack();
      newStack.push(1);
      newStack.push(2);
      newStack.pop();
      expect(newStack.top.value).toEqual(1);
    });
    it("is empty", () => {
      let newStack = new Stack();
      newStack.push(1);
      newStack.push(2);
      newStack.pop();
      newStack.pop();
  
      expect(newStack.isEmpty()).toEqual(true);
    });
   
  });