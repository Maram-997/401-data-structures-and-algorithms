'use strict';

function insertShiftArray(arr, value){
    let middleArrIdx = arr.length/2
    let intIdx = parseInt(middleArrIdx)
     arr.splice(intIdx,1,value)
     return arr;
}
insertShiftArray([1,2,3,4],10)


describe('CODE CHALLENGE - 02', ()=>{
    test('insert value to middle of an array', ()=>{
        expect(insertShiftArray[[1,2,3,4],10]).toStrictEqual([1,2,10,3,4])

    })
})