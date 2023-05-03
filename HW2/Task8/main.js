// Merge two sorted arrays into one

function mergeArrays(arr1, arr2) {
    let result = [...arr1, ...arr2].sort((a, b) => a - b);
    return result.filter((element, ind) => ind === result.indexOf(element));
}
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));
