/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */

function getAnagramms(arr) {
   var sort_arr = arr.map((el) => {
       return el.toLowerCase().split('').sort().join('');
   });
   var result = [];
   var compare_arr = [];
   var is_add = 0;
   
   for (var i = 0; i < sort_arr.length; ++i) {
       is_add = 0;
        for (var j = 0; j < compare_arr.length; ++j) {
          if (compare_arr[j] == sort_arr[i]) {
            result[j].push(arr[i]);
            is_add = 1;
          }
        }
        if (!is_add) {
            result.push(new Array(arr[i]));
            compare_arr.push(sort_arr[i]);
        }
    }

   return result;
}

module.exports = getAnagramms;
