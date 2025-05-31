/* 陣列操作

建立一個陣列 numbers = [3, 7, 1, 9, 4]。
將陣列中的數字由小到大排序，並輸出結果。
可以直接用 sort 函數 */
let numbers = [3, 7, 1, 9, 4]

numbers.sort((a, b) => a - b)
console.log(numbers)
