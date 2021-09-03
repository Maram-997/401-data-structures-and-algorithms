'use strict';

const Stack = require('./stack');
const PseudoQueue = require('./pseudoQueue')



describe("PseudoQueue", () => {
    it('enqueue', () => {
      let newQue = new PseudoQueue();
      expect(newQue.enqueue(1)).toEqual(true);
    });
  
    it('dequeue', () => {
      let newQue = new PseudoQueue();
      newQue.enqueue(1);
      newQue.enqueue(2);
  
      expect(newQue.dequeue()).toEqual(2);
    });
  });