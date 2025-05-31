/* 陣列過濾

建立一個陣列 nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]。
過濾出所有的偶數，並輸出新的陣列。*/

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let evenNums = nums.filter(num => num % 2 === 0);

console.log(evenNums);
