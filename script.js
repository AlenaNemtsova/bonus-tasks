let num = 266219;
let str = num.toString();

let mult = 1;
for (let char of str) {
    mult *= char;
    console.log(mult);
}

let multExp = mult ** 3;
console.log(multExp.toString().substring(0, 2));