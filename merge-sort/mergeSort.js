// this function will have left and right array as a parameter and while looping throw left/right array will create a new array adding to it numbers that matches the condition => if the value of the fisrt index of the left array is less than the right one , to add the first value to the new array
// it accepts sorted arrays from the mergeSort function it's only for combining
function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}
function mergeSort(array) {
    const half = array.length / 2
    
    // Base case or terminating case
    if(array.length < 2){
      return array 
    }
    
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
  }
  array = [4, 8, 7, 2, 11, 1, 3];
console.log(mergeSort(array));

/* reference : https://stackabuse.com/merge-sort-in-javascript/ */