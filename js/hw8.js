// 1 задание 
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
 
people.sort(function (a, b) {
    if (a.age > b.age) {
      return 1;
    }
    if (a.age < b.age) {
      return -1;
    }
    return 0;
  });

 console.log(people.sort());

// 2 задание
function isPositive(number) {
    return number > 0;
}
function isMale(person) {
    return person.gender === 'male';
}
function filter(array, rule) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (rule(array[i])) {
            result.push(array[i]);
        }
    }
    return result;   
}
    
console.log(filter([3, -4, 1, 9], isPositive)); 
    
const peoples = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];
    
console.log(filter(peoples, isMale)); 

// 3 задание
const timer = (deadline) => {
	let time = deadline;
	const interval = setInterval(() => {
		time -= 1;
		console.log(new Date());
	}, 3000);


	setTimeout(() => {
    clearInterval(interval);
    console.log('30 секунд прошло')
  }, deadline * 3000)
};

timer(10);

// 4 задание
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

// 5 задание
function forSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
			if(cb) { cb(); }
    }, 1000)
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

forSecond(() => {
    sayHi('Глеб');
})

