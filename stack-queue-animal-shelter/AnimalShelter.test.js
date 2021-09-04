'use strict';

const AnimalShelter = require('./AnimalShelter')

describe('Animal Shelter - stack and queue', ()=>{
    it('should add the cat/dog to its own breed', ()=>{
        let animalShelter = new AnimalShelter();
        let dogg = {pref : 'dog'}
        let caty = {pref : 'cat'}
        expect(animalShelter.enqueue(dogg).toContain(dogg))
        expect(animalShelter.enqueue(caty).toContain(caty))

    })
    it('should dequeue the cat/dog if its from own breed', ()=>{
        let animalShelter = new AnimalShelter();
        let dogg = {pref : 'dog'}
        let caty = {pref : 'cat'}
        expect(animalShelter.dequeue(dogg).toReturn(animalShelter))
        expect(animalShelter.dequeue(caty).toReturn(animalShelter))

    })
})