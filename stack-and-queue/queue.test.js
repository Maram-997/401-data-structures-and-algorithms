"use strict";

const Node = require('./node');
const Queue = require('./queue');

describe("Queue", () => {
  it("create an queue", () => {
    let newQue = new Queue();

    expect(newQue).toBeInctaneOf(Queue);
  });
  it("Enqueue", () => {
    let newQue = new Queue();
    newQue.enqueue(1);
    newQue.enqueue(2);

    expect(newQue.front.value).toEqual(1);
  });
 
  it("Dequeue", () => {
    let newQue = new Queue();
    newQue.enqueue(1);
    newQue.enqueue(2);
    newQue.dequeue();
    newQue.dequeue();

    expect(newQue.isEmpty()).toEqual(true);
  });
  it("Peek", () => {
    let newQue = new Queue();
    newQue.enqueue(1);

    expect(newQue.peek()).toEqual(1);
  });
  it("Can successfully instantiate an empty Queue", () => {
    let newQue = new Queue();

    expect(newQue.isEmpty()).toEqual(true);
  });
});