const arr =
    [5, 7,
        [4, [2], 8, [1, 3], 2],
        [9, []],
        1, 8
    ];

function treeSum(array) {
    return array.reduce((sum, element) => sum + (Array.isArray(element) ? treeSum(element) : element), 0);
}

console.log(treeSum(arr));


//Вариант который сразу в голову пришел, но это не чистая функция)
// let sum = 0;
// function treeSum(array) {
//     array.forEach(element => {
//         if (!Array.isArray(element)) {
//             sum += element
//         } else {
//             treeSum(element);
//         }
//     });
//     return sum;
// }