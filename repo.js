// Задание 1
let a = 10;
alert(a);
// Задание 2
const Iphone = "2007";
alert(Iphone);
// Задание 3
const Name = "Брендан Эйх";
alert(Name);
// Задание 4
let c = 10;
let d = 2;
let amount = c + d;
let difference = c - d;
let multiplication = c * d;
let division = c / d;
alert(amount);
alert(difference);
alert(multiplication);
alert(division);
// Задание 5
let result = 2**5;
alert(result);
// Задание 6
let k = 9;
let b = 2;
let remains = k % b;
alert(remains);
// Задание 7
let n = 1;
n = n + 5;
n = n - 3;
n = n * 7;
n = n / 3;
n = n++;
n = n--;
alert(n);
// Задание 8
let age;
age = prompt("Сколько вам лет?");
alert(age);
// Задание 9
// Задание 9.0
const user = {
    name: 'Anna',
    age: '19',
    isAdmin: 'true'
};
// Задание 9.1
user.cityOfResidence = 'Ufa';
// Задание 9.2
delete user['age'];
user.size = '42';
// Задание 9.3
delete user['cityOfResidence'];
// Задание 9.4
let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);

// Задание 10
let userName = prompt('Как вас зовут?');
alert('Привет,' + userName + '!');