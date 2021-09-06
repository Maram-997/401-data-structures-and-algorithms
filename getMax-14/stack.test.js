'use strict';

const Node = require('./node');
const Stack = require('./stack');

describe('get max' , ()=>{
it('check push', ()=>{
    let newStack = new Stack();
      newStack.push(1);
      newStack.push(2);
  
      expect(newStack.top.value).toEqual(2);
})
it('check pop', ()=>{
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.pop();
    expect(newStack.top.value).toEqual(1);
})
it('check peek', ()=>{
    let newStack = new Stack();
    newStack.push(3);
    expect(newStack.peek()).toEqual(3);

})
it('check isEmpty', ()=>{
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.pop();
    newStack.pop();

    expect(newStack.isEmpty()).toEqual(true); 
})
it('check getMax', ()=>{
    let newStack = new Stack();
    newStack.push(11);
    newStack.push(52);
    newStack.push(99);
    newStack.push(36);
    expect(newStack.getMax()).toEqual(99);
 
 
})
})