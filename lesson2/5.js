/*Реализовать основные 4 арифметические операции
в виде функций с двумя параметрами.
Обязательно использовать оператор return.
 */

'use strict';
let a = Number(prompt("Введите первое число "));
let b = Number(prompt("Введите второе число "));

function addition(a,b){
    return (a+b);
}

function subtraction(a,b){
    return (a-b);
}

function multiplication(a,b){
    return (a*b);
}

function division(a,b){
    return (a/b);
}

console.log("Сумма двух чисел ", addition(a,b));
console.log("Разность двух чисел ", subtraction(a,b));
console.log("Произведение двух чисел ", multiplication(a,b));
console.log("Деление двух чисел ", division(a,b));