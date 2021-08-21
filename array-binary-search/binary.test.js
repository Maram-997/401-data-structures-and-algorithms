'use strict';

function BinarySearch(arr, value){
  let iteration = 0
  let stratPoint = 0
  let endPoint = arr.length
  let middle = 0
  while(stratPoint <= endPoint){
    iteration++;
    middle = Math.floor((stratPoint + endPoint)/2);
    if(value == arr[middle]){
      return (true, iteration)
    }else if (value > arr[middle]){
      stratPoint = middle + 1;
    } else {
      endPoint = middle - 1
    }
  }
  return (false, iteration)
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