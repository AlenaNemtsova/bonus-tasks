// Переменная lang может принимать 2 значения: 'ru' 'en'
let lang = 'ru';

//Написать условия, при которых в зависимости от значения lang будут выводиться дни недели на русском или английском языке.
//через if
if (lang === 'ru') {
    console.log('Пн, Вт, Ср, Чтв, Птн, Сб, Вс');
} else if (lang === 'eng') {
    console.log('Mon, Tue, Wed, Thur, Fri, Sat, San');
};

//через switch-case
switch (lang) {
    case 'ru':
        console.log('Пн, Вт, Ср, Чтв, Птн, Сб, Вс');
        break
    case 'eng':
        console.log('Mon, Tue, Wed, Thur, Fri, Sat, San');
        break
};

//через многомерный массив без ифов и switch
let langArray = [
    ['Пн', 'Вт', 'Ср', 'Чтв', 'Птн', 'Сб', 'Вс'],
    ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'San'],
];

lang === 'ru' ? console.log(langArray[0].join(', ')) : console.log(langArray[1].join(', '));



//У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Александр” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”. Решить задачу с помощью нескольких тернарных операторов, без использования if или switch

let namePerson = 'Артём';

let message = namePerson === 'Артём' ? 'директор' :
    namePerson === 'Александр' ? 'преподаватель' :
        'студент';

console.log(message);