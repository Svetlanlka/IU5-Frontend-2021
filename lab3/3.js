/**
 * Напишите функцию multiplyArray(arr, n),
 * на вход подается массив arr, и число n
 * необходимо вернуть новый массив, в котором все числа в n раз больше исходного
 * в массиве могут быть не только числа, эти элементы должны соответствовать исходным (не числа не трогать)
 * Примеры:
 * [1, 2, 3, 'ddd', {min: 1}, 22, false], 2 -> [2, 4, 6, 'ddd', {min: 1}, 44, false]
 */

<<<<<<< HEAD
 function multiplyArray(arr, n) {
=======
function multiplyArray(arr, n) {
>>>>>>> 91f101577b01c567f09d39466106137d8e576017
    for (var i in arr) {
        if (typeof arr[i] == 'number' && isFinite(arr[i])) {
            arr[i] *= n;
        }
    }
    return arr;
}

module.exports = multiplyArray;