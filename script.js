'use strict';

function myFunc(arg) {
    if (typeof arg === 'string') {
        let argTrimmed = arg.trim();
        if (argTrimmed.length > 30) {
            argTrimmed = (arg.slice(0, 30) + '...')
            console.log(argTrimmed);
        }
    } else alert('Это не строка');
}

myFunc(2);
myFunc(null);
myFunc('Алена');
myFunc('Эта строка содержит более 30 знаков');