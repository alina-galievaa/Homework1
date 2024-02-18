//задание 1
let i = 1;
while (i<=2) {
    console.log('Привет');
    i++;
};

//задание 2
let a = 1;
while (a<=5) {
    console.log(a);
    a++;
};

//задание 3
let b = 7;
while (b<=22) {
    console.log(b);
    b++;
};

//задание 4
const name = {
	'Коля': '200',
	'Вася': '300',
	'Петя': '400',
};

for (let salary in name) { 
    console.log(`${salary} — зарплата ${name[salary]} долларов.`);
};

//задание 5
let n = 1000;
let c = 0;
while (n>=50) {
    n/=2;
    c++;
};
console.log(n);
console.log(c);

//задание 6
let day=4;
while(day<=31){
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
    day+=7;
}