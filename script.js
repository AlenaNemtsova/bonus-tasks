'use strict';

const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const showDays = document.querySelector('#days');


const daysToNewLine = week.join('\n');

const satToItalic =
    daysToNewLine.replace('Sat', '')

showDays.append(daysToNewLine)
