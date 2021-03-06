/*С этого урока начинаем работать с функционалом интернет-магазина.
Предположим, есть сущность корзины.
Нужно реализовать функционал подсчета стоимости корзины
в зависимости от находящихся в ней товаров.
 в корзине хранятся в массиве. Задачи:*/
/*a) Организовать такой массив для хранения товаров в корзине;
* б) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.*/

'use strict';

const basketPrices = [1000, 500, 300];

function countBasketPrice(basketItems) {
    let totalSum = 0;
    basketItems.forEach(item => {
        totalSum += item;
    });
    return totalSum;
};
console.log('Общая стоимость товаров в корзине: ', countBasketPrice(basketPrices));