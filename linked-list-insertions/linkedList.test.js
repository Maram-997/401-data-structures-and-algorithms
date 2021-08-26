"use strict";

const LinkedList = require("./linkedList");

describe("LinkedList", () => {
  it("should create new LinkedList ", () => {
    let newList = new LinkedList();
    expect(newList.head).toBeNull();
  });

  it("should append node to empty LinkedList ", () => {
    let newList = new LinkedList();
    newList.append('new');
    expect(newList.head.value).toEqual('new');
  });

  it("should insertBefore specific value", () => {
    let newList = new LinkedList();
    newList.append('after');
    newList.append('before');
    newList.insertBefore('before', 'new');
    expect(newList.head.next.value).toEqual('new');
  });

  it("should insertAfter specific value", () => {
    let newList = new LinkedList();
    newList.append('after');
    newList.append('before');
    newList.insertAfter('after', 'new');
    expect(newList.head.next.value).toEqual('new');
  });
});
