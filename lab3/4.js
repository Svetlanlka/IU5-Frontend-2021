/**
 * Напишите функцию prettySum(arr),
 * на вход подается массив arr
 * необходимо вернуть сумму чисел, находящихся на четных индексах, умноженную на последний элемент
 * Примеры:
 * [3, 2, 6, 5, 4, 1, 2] ->  30 
 * как считать: (3 + 6 + 4 + 2) * 2
 */

function prettySum(arr) {
    var sum = 0;
    for (var i in arr) {
        if (i % 2 == 0) sum += arr[i]; 
    }
    return sum * arr[arr.length - 1];
}


module.exports = prettySum;