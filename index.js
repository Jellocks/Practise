"use strict";

let tip = document.querySelector('h1');
tip.onclick = function () {
    let numberOfFilms;

    function start() {
        numberOfFilms = +prompt('Cколько фильмов вы уже посмотрели?', '');
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Cколько фильмов вы уже посмотрели?', '');
        }
    }
    start();

    const personalMovieDB = {
        'count': numberOfFilms,
        'movies': {},
        'actors': {},
        'genres': [],
        'privat': true,

    };






    function rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Какой последний фильм посмотрели?', '');
            const b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('принято');
            } else {
                console.log('отказ');
                i--;
            }

        }
    }
    // rememberMyFilms();

    function detectPersonalLevel() {
        for (let i = 0; i < 1; i++) {
            if (personalMovieDB.count < 10) {
                prompt('Просмотрено довольно мало фильмов');
            } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
                prompt('Вы классический зритель');
            } else if (personalMovieDB.count > 30) {
                prompt('Вы киноман');
            } else {
                prompt('ошибка');
            }
        }
    }
    // detectPersonalLevel();
    function showMyDB(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);

        }
    }
    showMyDB(personalMovieDB.privat);

    function writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр ${i}`);

        }
    }
    writeYourGenres();
}

// console.log(personalMovieDB);
//деструктуризация
// const opt = {
//     name: 'vlad',
//     number: 12,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {
//         console.log('Test');
//     }
// }
// opt.makeTest();
// // важность деструктууризации
// const { border, bg } = opt['colors'];
// console.log(border);
// console.log(bg);
// // delete opt.name;
// console.log(Object.keys(opt).length);
// // let counter = 0;

// for (let key in opt) {
//     if (typeof (opt[key]) === 'object') {
//         for (let i in opt[key]) {
//             console.log(`Cвойства ${i} имееет значение ${opt[key][i]}`)
//         }
//     } else {
//         console.log(`Cвойства ${key} имееет значение ${opt[key]}`)
//         counter++;
//     }
// }
// console.log(opt);
// console.log(counter)
// важность использования аргументов
// const eurV = 23;
// const usdV = 26;

// function convert(amount, curr) {
//     console.log(curr * amount);
// }

// convert(23, eurV);
// convert(23, usdV);

//использование меток во вложенных циклах
// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         if (j === 1) continue first;
//     }
// }
// пустые функции возвращают undefined

// const fruit = 'fruit';
// const jam = [1, 2, 3, 4, 5, 6, 7];
// console.log(fruit.indexOf('i'));
// console.log(fruit.slice(1, 3));
// jam.splice(1, 0, 'fruit'); //позволяет добавлять а также
// console.log(jam);

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // inserts at index 1
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "June"]
// массивы и псевдомассивы
// const arr = [1, 2, 345, 66, 4];
// arr.pop();
// arr.push(20);
// arr.shift();
// console.log(arr);
// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }
// for (let value of arr) {
//     console.log(value);
// }
// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`)
// });

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join(';'));
//передача по ссылке или по значению(копии объектов)
// let a = 5;
// let b = a;
// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// }




// const copy = obj
// copy.a = 10;
// console.log(copy);
// console.log(obj);


// function copy(mainObj) {
//     let obj copy = {}

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// console.log(numbers);
// console.log(newNumbers);

// const add = {
//     d: 17,
//     e: 20
// }

// const clone = Object.assign({}, add);

// clone.d = 20;
// console.log(add);
// console.log(clone);

// const oldArray = ["a", "b", "c"];
// const newArray = oldArray.slice();

// newArray[0] = 'ajsdasd';

// console.log(oldArray);
// console.log(newArray);

// const video = ['youtube', 'twitch', 'rutube'];
// const blogs = ['wordpress', 'livejournal', 'blogger'];
// const internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ["a", "b"];

// const newAaray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = { ...q };
// console.log(newObj);

// ооп
// let str = "some";
// let strObj = new String(str);

// console.log(typeof (str));
// console.log(typeof (strObj));

// console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log("Hello");
    }
};

// const john = {
//     health: 100,
// };
// john.__proto__ = soldier;

// console.log(john);

// Object.setPrototypeOf(john, soldier);

// const john = Object.create(soldier);

// john.sayHello();