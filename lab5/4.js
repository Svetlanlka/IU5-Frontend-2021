/**
 * починить функцию memoize(func),
 * на вход принимает функцию
 * на выходе получаем функцию, которая умеет запоминать последний результат вызова
 * примеры:
 * const add = (a) => a * 2;
 * const memozedAdd = memoize(add) 
 * memozedAdd(1) -> {cache: false, result: 2}
 * memozedAdd(1) -> {cache: true, result: 2}
 * memozedAdd(2) -> {cache: false, result: 4}
 * memozedAdd(1) -> {cache: false, result: 2}
 * memozedAdd(2) -> {cache: false, result: 4}
 * memozedAdd(2) -> {cache: true, result: 4}
 */

const e = require("express");

function memoize(func) {
    let last_value;
    return ((...args) => {
        let new_value = args[0];
        if (last_value == func(new_value)) {
            last_value = func(new_value);
            return {
                cache: true,
                result: last_value,  
            } 
        } else {
                last_value = func(new_value);
                return {
                    cache: false,
                    result: last_value,  
                }
            }
        });
}
 
 module.exports = memoize;