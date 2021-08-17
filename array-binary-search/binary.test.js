'use strict';

function BinarySearch(arr, value){
    let idx;
  for(let i =0 ; i<arr.length; i++){
    if(arr[i] == value){
       idx = i 
    }
  }
  
  if ( value == null){
    idx = -1;
  }
  
  return idx;
  }
  BinarySearch([1,2,10,4,5],10);


describe('CODE CHALLENGE - 03', ()=>{
    test('if the array has the value ', ()=>{
        expect(BinarySearch([1,2,10,4,5],10).toStrictEqual(2))

    })

    test("if the array doesn't has the value ", ()=>{
        expect(BinarySearch([1,2,3,4,5],10).toStrictEqual(-1))

    })
})