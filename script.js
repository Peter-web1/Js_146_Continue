// ОБЬЕКТЫ
console.log('------------------------------------');
console.log('ОБЬЕКТЫ');
console.log('------------------------------------');
let car = {
    color: 'red',
    maxSped: 250,
    audio: {//обьект в обьекте
        brand: 'Sony',
        speaker: 12
    }
        
};



if(car.color == 'red') {
    console.log('Автомобиль красныЙ');
}else if(car.color == 'green') {
    console.log('Автомобиль зелёный');
}else{
    console.log('цвет не определён');
}
// изменить green на red

//car.color = 'red';

//или

//let carProp = 'color';
//car[carProp] = 'red';

console.log(typeof car);
console.log(car);



console.log(typeof car.color);
console.log(car.color);

console.log(typeof car.audio.brand);// Выести обратится к свойству
console.log(car.audio.brand);

console.log(typeof car.audio);// Выести вложенный обьект целиком
console.log(car.audio);

//ФУНКЦИИ
console.log('------------------------------------');
console.log('ФУНКЦИИ');
console.log('------------------------------------');

console.log('1',car.color);

car.color = 'green';
console.log('1',car.color);

// что бы создать функцию мы даём ей имя (что делает) а затем в фигурных скобках пишем инструкции

function colorReset() {
    car.color ='red';
    console.log(car.color);
}
//ВЫЗВАТЬ ФУНКЦИЮ, без скобок функция не запустится
colorReset();
colorReset();
colorReset();
// в круглых скобках указываются ВХОДНЫЕ ПАРАМЕТРЫ
let car1 = {
    color: 'red',
};
let car2 = {
    color: 'green',
};

//colorChange(car1);
colorChange(car2);

function colorChange(theCar) {
    theCar.color ='yellow';  
}

console.log("Car1:" + car1.color);
console.log("Car2:" + car2.color);

//Вызов фунции можно через переменную
//вызов без скобок называется обращение
// со скобками -вызов запуск
 let car3 = {
     maxSpeed: 240,
 };

 let speed = speedChange;//обращение

 speed();// -вызов запуск исполнение

 function speedChange() {
     console.log('Вызов фунции в которой нужно вывести console.log(car3.maxSpeed); через переменную Скорость:',car3.maxSpeed);
 }
 console.log('------------------------------------');

 // Вызов можно сделать и из обьекта car
 let car4 = {
    maxSpeed: 280,
    update: speedChanges// Создадим свойство update, со значением и именем функции
    // присвоим свойству нашу функцию без скобок - мы обращаемся
};

car4.update();// -вызов запуск исполнение

function speedChanges() {
    console.log('Вызов фунции в которой нужно вывести console.log(car4.maxSpeed); через Свойство в обьекте update:',car4.maxSpeed);
}
console.log('------------------------------------');
console.log("Присвоение имени парамету function watch(message = 'DKA_DEVELOP')");

//Присвоение имени парамету если забудять указать параметр в скобках

function watch(message = 'DKA_DEVELOP') {
    console.log(message);// по ES5 undefined по умолчанию если не укажем параметр
}
//
watch();

console.log('------------------------------------');
console.log('return вернуть вместо console.log и конец функции');
//return вернуть вместо console.log и конец функции

//то что мы возращаем return мы можем вывести в консоль или присвоить переменным
function watch(message) {
    return message + ' - ХаудиХо';
    console.log(message);
    console.log("Test");//НЕ Достижимый код, после return в функции выводится не будет- конец функции
}

console.log(watch('Простое слово'));

//или то что вернула return присвоить переменным и делать всё что захотим

let message = watch("Простое слово2");

console.log(message);
//обычно не просто выводит вконвсоль, она производит какоето действие вычесление и уже возращает его. 
//после + конкатенации выводим не то что пришло в параметр а модифицированое производное его

console.log('------------------------------------');
console.log('Анонимная функция : без имени что делать? и РЕКУРСИЯ');
//Анонимная функция 

//function (){console.log(message);};
//присвоим переменную
let anonym = function () {
    console.log("we are anonymous");
}
anonym();
//console.log(typeof anonym());

//let anonym = function name() {
  //  console.log("we are anonymous");
//}
//name();// миновать имя переменной и обратится к имени функции---- ошибка - данный идинтификатор не определен, срабатывает приоретет--такая запись может пригодится для создания РЕКУРСИЙ-позже

console.log('------------------------------------');
(function (){
    console.log("we are anonymous NEW");
})();//Берём функцию в ()- немедленное выведение функции
console.log("Берём функцию в ()()- немедленное выведение функции");

console.log('------------------------------------');
setTimeout(function(){
    console.log('TEST...TEST')
},1000)// анонимная функция передаётся как аргумент другой функции

console.log("setTimeout(function(),1000)");
console.log('------------------------------------');

// СТРЕЛОЧНАЯ НОТАЦИЯ СИНТАКСИС В ES6
//СТРЕЛОЧНАЯ НОТАЦИЯ ТАК ЖЕ  не имеет идентификатора аноним

// let anonym = function () {
//     console.log("we are anonymous");
// }
// anonym();
let anonymm =  ()  => console.log("you are anonymous you are anonymous");
// убираем слово function и {}
anonymm();// двух одинаковых идентификаторов функций быть не должно

let anonymmm =  ()  => "you are anonymous you are anonymous you are anonymous"; // работает return
console.log(anonymmm);
console.log(anonymmm());

let anonymmmm =  ()  => 12+2; // работает return
console.log(anonymmmm());// чтобы упрастить написание функций меньше исползовать символов

let anonymmmmm =  ()  => { return 125+2}; // работает return
console.log(anonymmmmm());// если мы укажем код в фигурных скобках то возврат работать не будет и надо указывать в скобках return
// фигурные скобки используются в стрелочной функции если функция состоит из нескольких вырожений

let anonymmmmmm =  message  => { 
    let count = 2;
    return message + 2;
}; // если в параметрах одно значение то () можно опустить
console.log(anonymmmmmm("you are anonymous you are anonymous you are anonymous"));


//МЕТОДЫ
console.log('------------------------------------');
console.log('------------------------------------');
console.log('МЕТОДЫ');
console.log('------------------------------------');

//нечто что существует отдельно от всего и является самостоятельным субьектом, может возращать результат и принимать параметры -ФУНКЦИЯ
function getMessage() {
    console.log('Я ФУНКЦИЯ');
}

getMessage();

// КТО ТО является ссылкой на функцию и закреплен за обьектом а также вызывается через свойство обьекта - метода
let cars = {
    getMessage: function(){
        console.log('Я МЕТОД');
    }
}

cars.getMessage();

console.log('------------------------------------');

let cars2 = {
    color: 'red',
    //название функции глагол что делать
    // анонимная функция
    open: function() {
        console.log('Открыто');
        console.log('Открыто 2');
    }
}

cars2.open();

console.log('------------------------------------');

let cars3 = {
    color: 'red',
    //название функции глагол что делать
    // анонимная функция
    open: function(message) {
        console.log(message);
        console.log(message);
    }
}
//в месте вызова передаём аргумент, по пораметрам которые в скобках функции
cars3.open('Закрыто, передаём аргумент');

console.log('------------------------------------');

let cars4 = {
    color: 'red',
    //название функции глагол что делать
    // анонимная функция
    open(message) {
        console.log(message);
        console.log(message);
    }
}
//По ES6 можно опустить : function
cars4.open('Открыто, По ES6');

console.log('------------------------------------');

let cars5 = {
    color: 'red',
    open() {
        console.log('Закрыто, По ES6');
        console.log('Открыто, По ES6');
    }
}
//По ES6 можно опустить : function
cars5.open();

console.log('------------------------------------');
console.log('------------------------------------');
//МАССИВЫ
console.log('МАССИВЫ');
console.log('------------------------------------');

let array = [1,3,10,69];
//обращаемся к переменной в которой есть массив
// в квадратных скобках указать индекс элемента к которому хотим получить доступ

console.log('ИЗ МАССИВА ' + array[2]);

//Вывести содержимое консолью

// неГОмогенный МАССИВ- ЧИСЛА, СТРОКИ ОБЬЕКТЫ ВНУТРИ
let car6 ={
    color:'car'
}
let array1 = [10,'О МИРЕ','ХаудиХо', {
    color:'car'
}];
console.log(array1[3]);

console.log('------------------------------------');
console.log('------------------------------------');
//ЦЫКЛЫ for ИНКРЕМЕНТ
console.log('ЦЫКЛЫ for ИНКРЕМЕНТ');
console.log('------------------------------------');
console.log('let i = x =10');

let i = x =10;// Обьявил две переменной
i = -i;// "- и ="-оператор "i"оперант. 
//унарный, бинарный оперант
console.log(i)
console.log('------------------------------------');