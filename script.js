"use strict";

/*  1. Дан массив с числами (Пример: var arr = [2, -5, 1, -2, 7, -3, 2, -14]) - массив может быть и другим.
1) В начале вам нужно убрать из него все отрицательные числа используя filter
2) Извлесь корень из каждого значения этого массива и записать в переменную. Используя map.
3) Вывести массив в консоль   */

let arr = [2, -5, 1, -2, 7, -3, 2, -14];
let positiveArr = arr.filter(function(number){
    return number > 0
});
console.log(positiveArr);

let mapArr = positiveArr.map(function(number){
    return Math.sqrt(number)
});
console.log(mapArr);


/*  2. Дан массив с числами (Пример: var arr = [4, 3, 5, 5, 0, 4, 8, 6]) - массив может быть и другим.
Нужно найти сумму элементов от начала и до нуля. (В примере это первые 4 элемента)
Использовать функция reduce   */

let arr2 = [4, 3, 5, 5, 0, 4, 8, 6];
let result = arr2.reduce(function(sum, current){
    return sum + current;
}, 0);
console.log(result);


/*  3. Напишите функцию summArguments, которая сложит все аргументы переданные в функцию. Например
summArguments(10, 1, 2, 5); // 18
summArguments(10); // 10   */

function summArguments(){
    let sum = 0;
        for(let i = 0; i < arguments.length; i++){
            sum += arguments[i];
        }
        return sum;
    }
    console.log(summArguments(10, 1, 2, 5));






























