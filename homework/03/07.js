/* for 迴圈計算總和

建立一個陣列 arr = [2, 4, 6, 8, 10]。
使用 for 迴圈計算陣列元素的總和，並輸出結果。 */
let arr = [2, 4, 6, 8, 10];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(sum);
