'use strict';

const Node = require('./node')

class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
            const node = new Node(value);
            if (!this.head) {
                this.head = node;
                return this;
            }
            let current = this.head;
            while (current.next) {
                current = current.next;
    
            }
            current.next = node;
            return this;
        }
    zipList(list1,list2){
        let zipList = new LinkedList();
        let counter1 = 0;
        let counter2 = 0;
        let listCurrent1 = list1.head;
        let listCurrent2 = list2.head;
      
        while (listCurrent1) {
            listCurrent1 = listCurrent1.next;
            counter1++;
        }
        while (listCurrent2) {
            listCurrent2 = listCurrent2.next;
            counter2++;
        }
      
        listCurrent1 = counter1.head;
        listCurrent2 = counter2.head;
        while (len >= 0) {
          if (listCurrent1) {
            zipList.append(listCurrent1.value);
            listCurrent1 = listCurrent1.next;
          }
          if (listCurrent2) {
            zipList.append(listCurrent2.value);
            listCurrent2 = listCurrent2.next;
          }
          
        }
      
        return zipList;
      }
      
    
}
module.exports=LinkedList;