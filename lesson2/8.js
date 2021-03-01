/**С помощью рекурсии организовать
функцию возведения числа в степень.
 Формат: function power(val, pow),
 где val – заданное число, pow – степень.*/

'use strict';
function power(val, pow) {
    if (pow === 1) {
        return val;
    }
    return val * power(val, pow - 1);
};

console.log(`2 в степери 2 = ${power(2, 2)}`);
console.log(`2 в степери 4 = ${power(2, 4)}`);
console.log(`2 в степери 6 = ${power(2, 6)}`);