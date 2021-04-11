
/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */

function capitalize(str) {
    let words = str.split(" ");
    for (var i in words) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    
    return words.join(" ");
}
module.exports = capitalize;