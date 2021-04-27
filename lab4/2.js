/**
 * Напишите функцию isPalindrome(str),
 * входные данные - строкa
 * выходные данные - boolean - является ли переданная строка палиндромом
 * Примеры:
 * "мир" -> false
 * "тот" -> true
 */

function isPalindrome(str) {
   var arr = str.split('');
   if (arr.length <= 1) return true;
   for (var i = 0; i < arr.length / 2; ++i) {
   if (arr[i] != arr[arr.length - i - 1])
        return false;
   }
   return true;
}

module.exports = isPalindrome;
