// задание 1
const line = 'js';
const lineResult = line.toUpperCase();
console.log(lineResult);

// задание 2
function searchStart(array, str) {
    let result = array.filter(item => item.toLowerCase().startsWith(str.toLowerCase()));
    return result;
}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); 
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); 
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

// задание 3
const number = '32.58884';
//1
smallerNumber = Math.floor(number);
console.log(smallerNumber);
//2
largeNumber = Math.ceil(number);
console.log(largeNumber);
//3
nearestNumber = Math.round(number);
console.log(nearestNumber);

// задание 4
console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

// задание 5
function getRandom(minValue, maxValue) {
    return Math.random() * maxValue;
}

console.log(getRandom(0, 10));

// задание 6
function getRandomNumbers(num) {
    const length = Math.floor(num / 2);
    let result = [];
    for (let k = 0; k < length; k++) {
        result.push(Math.floor(Math.random() * (num + 1))); 
    }
    return result;
}
console.log(getRandomNumbers(5));

// задание 7
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNum = randomInteger(5, 10);
console.log(randomNum);

// задание 8
let thisDate = new Date();
console.log(thisDate);

// задание 9
let currentDate = new Date();
let futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);

console.log("Сегодняшняя дата:", currentDate.toLocaleString());
console.log("Дата через 73 дня:", futureDate.toLocaleString());

// задание 10
function thisDay(date) {
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = days[date.getDay()];
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const dateStr = (`${dayOfMonth} ${month} ${year} - это ${dayOfWeek}`);
    const timeStr = (`${hours}:${minutes}:${seconds}`);
    return dateStr + '\n' + timeStr;
}

const dateDisplay= new Date();
console.log(thisDay(dateDisplay));



// задание 11
function game() {
    let words = ['яблоко', 'груша', 'дыня', 'виноград', 'персик', 'апельсин', 'мандарин'];
    words = words.sort(() => Math.random() - 0.5);
    alert(words);

    let wordsFirst = prompt('Назовите первое слово');
    let wordsLast = prompt('Назовите последнее слово');

    if (wordsFirst.toLowerCase() === words[0].toLowerCase() && wordsLast.toLowerCase() === words[words.length - 1].toLowerCase()) {
        alert('Поздравляю, вы победили!');
    } else if (wordsFirst.toLowerCase() === words[0].toLowerCase() || wordsLast.toLowerCase() === words[words.length - 1].toLowerCase()) {
        alert('Вы были близки к победе!');                             
    } else {
        alert('Вы ответили неверно, попробуйте еще раз!');
    }
}