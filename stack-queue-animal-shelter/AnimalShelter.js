'use strict';

const Queue = require('./queue');

class AnimalShelter{
    constructor(){
        this.dog = new Queue()
        this.cat = new Queue()

    }
     // as an object
    enqueue(animal){
        if (animal.pref == 'dog') {
            return this.dog.enqueue()
        } else if(animal.cat == 'cat'){
            return this.cat.enqueue()
        }
    }
     // as a property 
    dequeue(pref){
      if(pref == 'dog'){
          return this.dog.dequeue()
      } else if(pref == 'cat'){
          return this.cat.dequeue()
      }else{
        return null 
      }
    }

}

module.exports = AnimalShelter