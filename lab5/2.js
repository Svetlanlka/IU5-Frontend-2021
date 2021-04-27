/**
 * Напишите функцию curry(f),
 * входные данные - функция
 * выходные данные - функция, или результат если количество аргументов достаточно
 * Примеры:
 * 
 * function add(a, b, c) {
 *  return a + b + c;
 * }
 *
 * console.log(curry(add)(1)(2)(3)); //6
 * console.log(curry(add)(1)(2, 3)); //6
 * console.log(curry(add)(1, 2, 3)); //6
 */
 function curry(f) {
    return (...args) => {
        if (f.length <= args.length) {
            return f(...args);
        } else {
            return curry(f.bind(null, ...args));
        }
    
    };
}

module.exports = curry;