/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    var arr = str.split('');
    var new_arr = [];
    var cur_str = 0;
    var cur_kol = 1;
    for (var i = 1; i <= arr.length; ++i) {
        if (arr[i] == arr[cur_str] && i != arr.length) 
            cur_kol++;
        else {
            new_arr.push(arr[cur_str]);
            if (cur_kol > 1) new_arr.push(cur_kol.toString()); 
            cur_str = i;
            cur_kol = 1;
        }
    }
    return new_arr.join('');
}


module.exports = rle;
