'use strict';

const dateText = document.getElementById('date-text');
const dateNumeric = document.getElementById('date-numeric');

function getCurrentDate() {
    const currentDate = new Date();
    const currentWeekday = currentDate.getDay();
    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();

    let currentWeekdayWord;
    switch (currentWeekday) {
        case 0: currentWeekdayWord = 'Воскресенье';
            break
        case 1: currentWeekdayWord = 'Понедельник';
            break
        case 2: currentWeekdayWord = 'Вторник';
            break
        case 3: currentWeekdayWord = 'Среда';
            break
        case 4: currentWeekdayWord = 'Четверг';
            break
        case 5: currentWeekdayWord = 'Пятница';
            break
        case 6: currentWeekdayWord = 'Суббота';
            break
    }

    let currentMonthWord;
    switch (currentMonth) {
        case 0: currentMonthWord = 'января';
            break
        case 1: currentMonthWord = 'февраля';
            break
        case 2: currentMonthWord = 'марта';
            break
        case 3: currentMonthWord = 'апреля';
            break
        case 4: currentMonthWord = 'мая';
            break
        case 5: currentMonthWord = 'июня';
            break
        case 6: currentMonthWord = 'июля';
            break
        case 7: currentMonthWord = 'августа';
            break
        case 8: currentMonthWord = 'сентября';
            break
        case 9: currentMonthWord = 'октября';
            break
        case 10: currentMonthWord = 'ноября';
            break
        case 11: currentMonthWord = 'декабря';
            break
    }

    function hourDeclination() {
        let hoursEnding = '';
        if (currentHours >= 5) {
            hoursEnding = 'ов';
        } else if (0 < currentHours < 5) {
            hoursEnding = 'а';
        }
        return hoursEnding;
    }

    function addZero(num) {
        num < 10 ? num = ('0' + num) : num;
        return num;
    }


    const dateStringFormat = 'Сегодня ' + currentWeekdayWord + ', ' + currentDayOfMonth + ' ' + currentMonthWord + ' ' + currentYear + ' года' + ', ' + currentHours + ` час${hourDeclination()} ` + currentMinutes + ' минут ' + currentSeconds + ' секунды';

    const dateNumberFormat = addZero(currentDayOfMonth) + '.' + addZero(currentMonth + 1) + '.' + currentYear + ' – ' + addZero(currentHours) + ':' + addZero(currentMinutes) + ':' + addZero(currentSeconds);

    dateText.textContent = dateStringFormat;
    dateNumeric.textContent = dateNumberFormat;
}

const interval = setInterval(() => getCurrentDate(), 1000);