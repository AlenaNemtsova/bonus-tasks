'use strict';

//1) Записать в массив 7 любых многозначных чисел в виде строк. Вывести в консоль только те, что начинаются с цифры 2 или 4
let arr = ['12345', '5555', '267887', '94838', '400', '1000', '22222'];

for (let elem of arr) {
    if (elem[0] == 2 || elem[0] == 4) {
        console.log(elem);
    }
}


//2) Вывести в столбик все простые числа от 1 до 100 (сделать при помощи цикла)

for (let i = 2; i <= 100; i++) {
    let flag = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            flag = false;
            continue;
        }
    }
    if (flag === true) console.log(i, `Делители этого числа: 1 и ${i}`);
}
