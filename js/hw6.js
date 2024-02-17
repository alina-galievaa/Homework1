//задание 1
const number = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < number.length; i++) {
	console.log(number[i]);
	if (number[i] == 10) {
		break;
	}
	
}

//задание 2
const a = [1, 5, 4, 10, 0, 3];
const index = a.indexOf(4);
console.log(index);

//задание 3
const b = [1, 3, 5, 10, 20];
let j = b.join(' ');
console.log(j);

//задание 4
const m=[];
for (let i = 0; i< 3; i++ ) {
    let mas = [];
    for (let k =0; k<3; k++){
    	mas.push(1);
	}
	m.push(mas);
}
console.log(m);

//задание 5
const c = [1, 1, 1];
d = c.concat([2, 2, 2]);
console.log(d);

//задание 6
const e = [9, 8, 7, 'a', 6, 5];
e.sort();
e.pop();
console.log(e);

//задание 7
let numbers = [9, 8, 7, 6, 5];
let userGuess = prompt('Попробуйте угадать число из массива');

if (userGuess === null) {
alert('Отменено'); 
} else if (userGuess.trim() === "" || isNaN(userGuess)) {
 alert('Введите число, а не текст');
} else if (numbers.includes(parseInt(userGuess))) {
alert('Угадал');
} else {
 alert('Не угадал');
}

// задание 8
const stroke = 'abcdef';
const revStroke = stroke.split('').reverse().join('');
console.log(revStroke);

// задание 9
const mas2 = [
	[1, 2, 3,],
	[4, 5, 6],
];

let array = mas2[0].concat(mas2[1]); 
console.log(array);

//задание 10
const over = [2, 5, 7, 8, 3, 1, 0, 9, 4, 6];

for (let i = 0; i < over.length - 1; i++) {
  const num = over[i];
  const num2 = over[i + 1];
  const sum = num + num2;
  console.log(`Сумма ${num} и ${num2} равна ${sum}`);
}

//задание 11
function square(arr) {
    return arr.map(number => number **2);
}

let numb = [10, 14, 18, 24, 32];
let squaredArray = square(numb);
console.log(squaredArray); 

//задание 12
function wordsAny(arm) {
	return arm.map(aword => aword.length);
}

const words = ["square", "квадрат", "box"];
const wordLeng = wordsAny(words);
console.log(wordLeng);

//задание 13
function filterPositive(array) {
	return array.filter(number => number < 0);
}
  
console.log (filterPositive([-1, 0, 5, -10, 56]));
console.log (filterPositive([-25, 25, 0, -1000, -2]));
