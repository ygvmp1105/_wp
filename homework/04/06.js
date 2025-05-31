/*用函數作為參數來實現自訂過濾
實作 filterArray(arr, predicate)，回傳符合條件的陣列。

console.log(filterArray([1, 2, 3, 4, 5], n => n % 2 === 0)); 
// [2, 4] */
function filterArray(arr, predicate) {
    let result = [];
    for (let item of arr) {
        if (predicate(item)) {
            result.push(item);
        }
    }
    return result;
}

console.log(filterArray([1, 2, 3, 4, 5], n => n % 2 === 0)); 
