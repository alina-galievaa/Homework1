//1 задание
let password = 'солнышко';
let pas = prompt('Введите пароль');
if (pas === password) {
    alert(`Пароль введен верно`);
} else {
    alert(`Пароль введен неправильно`);
};

//2 задание
let c = 2;
if (c > 0 && c<10) {
    console.log('Верно');
} else {
    console.log('Неверно');
};

//3 задание
let d = 58;
let e = 51;
if (d > 100 || e>100) {
    console.log('Верно');
} else {
    console.log('Неверно');
};

//4 задание
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

//5 задание
let monthNumber = prompt('Введите номер месяца');

if (monthNumber === '1'|| monthNumber === '2' || monthNumber === '12') {
  console.log('зима');
} else if (monthNumber === '3'|| monthNumber === '4' || monthNumber === '5') {
  console.log('весна');
} else if (monthNumber === '6'|| monthNumber === '7' || monthNumber === '8') {
  console.log('лето');
} else if (monthNumber === '9'|| monthNumber === '10' || monthNumber === '11') {
  console.log('осень');
} else {
  console.log('Такого месяца не существует!');
};

