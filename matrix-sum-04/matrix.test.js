'use strict';

let  x = [ [1, 2, 3], [3, -5, 7], [1, 7, 10] ];

function testing (arr){
    let resArr = [];
    let z = 0; 
    for (let i = 0; i <= arr.length-1; i++) {
        for (let j = 0; j < arr[i].length; j++){
    z= z + arr[i][j]
        }
    resArr.push(z);
    z = 0;
    
    }
    return resArr
    }
    testing(x);


describe('CODE CHALLENGE - 04', ()=>{
    test('the summation of the inner arraies', ()=>{
        expect(testing([[1,2,3],[3,-5,7],[1,7,10]]).toStrictEqual([6,5,18]))

    }) 
})