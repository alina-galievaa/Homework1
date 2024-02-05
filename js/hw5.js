//задание 1
let min = (a, b) => {
    if (a > b) {
        return b;
    } else if (b > a) {
        return a;
    } else {
        return b;
    }
}

console.log(min(10, 7))

//задание 2
let number = prompt('Введите число');

if (number % 2 == 0) {
    function printNumber() {
        console.log("Число четное");
    }
} else {
    function printNumber() {
        console.log("Число нечетное");
    }
}

printNumber();

//задание 3
//задание 3.1
function squarNumber() {
    let numInput = Number(prompt("Введите число"));
    let result = numInput ** 2;
    alert(`Квадрат числа равен ${result}`);
}
  
squarNumber();

//задание 3.2
function calcSquare(numb) {
    return numb ** 2;
}
 
let squareResult = calcSquare(5);
alert(`Квадрат числа  ${squareResult}`);
  

//задание 4
let age = prompt("Сколько Вам лет?");

if (age < 0) {
    function printMessage() {
        console.log("Вы ввели неправильное значение");
    }
} else if (age > 0 && age < 12){
    function printMessage() {
        console.log("Привет, друг!");
    }
} else if (age >=13){
    function printMessage() {
        console.log("Добро пожаловать!");
    }
}

printMessage();
//задание 5
let input1 = Number(prompt('Введите первое число:'));
let input2 = Number(prompt('Введите второе число:'));

function multiplyNumbers(numbr1, numbr2) {
  if (isNaN(numbr1) || isNaN(numbr2)) {
    return 'Одно или оба значения не являются числом';
  } else {
    return numbr1 * numbr2;
  }
}

let result = multiplyNumbers(input1, input2);

alert(result);

//задание 6
let inputNumb = Number(prompt('Введите число:'));

function cubeNumb() {
    if (isNaN(inputNumb)) {
        return 'Переданный параметр не является числом';
    } else {
        let result = inputNumb ** 3;
        return `${inputNumb} в кубе равняется ${result}`;
    }
}

let end = cubeNumb();
alert (end);

//задание 7
let circle1 = {
    radius: 16, 
    getArea: function() {
      return Math.PI * this.radius * this.radius; 
    },
    getPerimeter: function() {
      return 2 * Math.PI * this.radius; 
    }
};
let circle2 = {
    radius: 27, 
    getArea: function() {
      return Math.PI * this.radius * this.radius; 
    },
    getPerimeter: function() {
      return 2 * Math.PI * this.radius; 
    }
};
  
let area1 = circle1.getArea(); 
let perimeter1 = circle1.getPerimeter(); 
alert(`Площадь 1 круга ${area1}`);
alert(`Периметр 1 окружности ${perimeter1}`);
  
let area2 = circle2.getArea(); 
let perimeter2 = circle2.getPerimeter(); 
alert(`Площадь 2 круга ${area2}`);
alert(`Периметр 2 окружности ${perimeter2}`);

//задание 8
function month() {
    let monthNumber = prompt('Введите номер месяца');
    if (monthNumber === '1'|| monthNumber === '2' || monthNumber === '12') {
        alert('зима');
    } else if (monthNumber === '3'|| monthNumber === '4' || monthNumber === '5') {
        alert('весна');
    } else if (monthNumber === '6'|| monthNumber === '7' || monthNumber === '8') {
        alert('лето');
    } else if (monthNumber === '9'|| monthNumber === '10' || monthNumber === '11') {
        alert('осень' );
    } else {
        alert('Такого месяца не существует!');
    };
}

