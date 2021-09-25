let sortArr = [20,18,12,8,5,-2]
function sortingArr(arr) {
    for (let i = 1; i < arr.length; i++){
    for (let j = 0; j < i; j++)
        if (arr[i] < arr[j]) {
          let x = arr[i];
          arr[i] = arr[j];
          arr[j] = x;
        }
    }
    return arr
}