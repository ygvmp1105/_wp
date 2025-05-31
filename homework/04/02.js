/* 陣列去重並排序
實作 uniqueSorted(arr)，移除陣列重複的元素並從小到大排序。

console.log(uniqueSorted([5, 3, 8, 3, 1, 5, 8])); 
// [1, 3, 5, 8] */
function uniqueSorted(arr) {
    let uniqueArr = [...new Set(arr)];

    uniqueArr.sort((a, b) => a - b);

    return uniqueArr;
}

console.log(uniqueSorted([5, 3, 8, 3, 1, 5, 8])); 
