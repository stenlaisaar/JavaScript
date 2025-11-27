// Variable = A container that stores a value
//.           Behaves as if it were the value it containes
// 1. declaration let x;
// 2. assignment x = 100

// let name = Sten;
// console.log(typeof name); Annab teada millise andmetüübiga on tegu
// console.log(name); Annab lihtsalt "Age" väärtuse
// console.log(`You are ${age} years old`); Annab rohkem infot
// document.getElementById("h1").textContent = `Tere ${name}`; Muudab läbi HTMLis oleva id kaudu teksti


// Arithmetic operator = operands (vvalues, variables, etc.)
//                       operators (+ - * /)
//                       ex. 11 = x + 5;

// let students = 30; Algne väärtus
// students = students + 1; Liidab algse väärtusele juurde
// students = students - 1; Lahtuab algsest väärtusest
// students = students * 2; Korrutab algse väärtuse
// students = students / 2; Jagab algse väärtuse
// students = students ** 2;
// students = students & 2; Jagab võrdselt ning annab väärtuse palju alles jääb. 

// students += 3; Teeb sama mis ülemised
// console.log(students);


// How to accept user input

// 1. Easy way = window promt
// let name;
// name = window.prompt("Mis on teie nimi?");
// console.log(name);

// 2. Professional way = HTML textbox
// let name;
// document.getElementById("submit").onclick = function(){
//    name = document.getElementById("text").value;
//    document.getElementById("h1").textContent = `Tere ${name}`
// }


// type conversion = change the datatype of a value to another
//                   (strings, numbers, booleans)

// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);


// Const = a variable that can't be changed

// const pi = 3.14159;
// let radius;
// let circumference;

// document.getElementById("mysubmit").onclick = function(){
//     radius = document.getElementById("mytext").value;
//     radius = Number(radius);
//     circumference = 2 * pi * radius;
//     document.getElementById("myh3").textContent = circumference + "cm";
// }



// COUNTER PROGRAM

// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");
// let count = 0;

// increaseBtn.onclick = function(){
    // count++;
    // countLabel.textContent = count;
// }
// decreaseBtn.onclick = function(){
    // count--;
    // countLabel.textContent = count;
// }
// resetBtn.onclick = function(){
    // count = 0;
    // countLabel.textContent = count;
// }



// Math = built-in object that provides a
//        collection of properties and methods

// let x = 3.21;
// let y = 2;
// let z;

// z = Math.round(x);
// z = Math.floor(x);
// z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(x, y);
// z = Math.sqrt(x);
// z = Math.log(x);
// z = Math.sin(x);
// z = Math.tan(x);
// z = Math.cos(x);
// z = Math.abs(x);
// z = Math.sign(x);
// let max = Math.max(x, y, z):
// let min = Math.min(x, y, z);

// console.log(min);



// Random number generator

// const myButton = document.getElementById("myButton");
// const label1 = document.getElementById("label1");
// const label2 = document.getElementById("label2");
// const label3 = document.getElementById("label3");
// const min = 1;
// const max = 6;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// myButton.onclick = function(){
    // randomNum1 = Math.floor(Math.random() * max) + min;
    // randomNum2 = Math.floor(Math.random() * max) + min;
    // randomNum3 = Math.floor(Math.random() * max) + min;
    // label1.textContent = randomNum1;
    // label2.textContent = randomNum2;
    // label3.textContent = randomNum3;
// }



// IF STATEMENTS = if a condition is true, excute some code
//                 if not, do something else

// const myText = document.getElementById("myText")
// const mySubmit = document.getElementById("mySubmit")
// const resultElement = document.getElementById("resultElement")
// let age = 0;

// mySubmit.onclick = function(){

    // age = myText.value;
    // age = Number(age);

    // if(age >= 100){
        // resultElement.textContent = `you are too old to enter this site`;
    // }
    // else if(age ==0){
        // resultElement.textContent = `you cant enter. you were just born`;
    // }
    // else if(age >=18){
        // resultElement.textContent = `you are old enough to enter this site`;
    // }
    // else if(age < 0){
        // resultElement.textContent = `your age cant be below 0`;
    // }
    // else{
        // resultElement.textContent = `you must be 18+ to enter this site`;
    // }
// }



// .checked = property that determines the checked state of an
//            HTML checkbox or radio button element

// const myCheckbox = document.getElementById("myCheckbox");
// const visaBtn = document.getElementById("visaBtn");
// const mastercardBtn = document.getElementById("mastercardBtn");
// const paypalBtn = document.getElementById("paypalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function(){
    // if(myCheckbox.checked){
        // subResult.textContent = `you are subscribed`;
    // }
    // else{
        // subResult.textContent = `you are not subscribed`;
    // }
    // if(visaBtn.checked){
        // paymentResult.textContent = `you are paying with Visa`;
    // }
    // else if(mastercardBtn.checked){
        // paymentResult.textContent = `you are paying with mastercard`;
    // }
    // else if(paypalBtn.checked){
        // paymentResult.textContent = `you are paying with paypal`;
    // }
    // else(
        // paymentResult.textContent = `you must select payment type`
    // )
// }



// ternary operator = a shortcut to if{} and else{} statemants
//                    helps to assign a variable base on a condition
//                    condition ? codeIfTrue : codeIfFalse;

// let time = 16;
// let greeting = time < 12 ? "Good morning" : "Good afternoon";
// console.log(greeting);

// let isStudent = true;
// let message = isStudent ? "You are a student"  : "You are not a student";
// console.log(message);

// let purcheseAmout = 125;
// let discount = purcheseAmout >= 100 ? 10 : 0;
// console.log(´Your total is €${purcheseAmout - purcheseAmout * (discount/100)}´);




// While loop = repeat some code while some condition is true

// let loggedIn = false;
// let username;
// let password;

// while(!loggedIn){
    // username = window.prompt("enter your username");
    // password = window.prompt("enter your password");

    // if(username === "myUsername" && password === "myPassword"){
        // loggedIn = true;
        // console.log("You are logged in!");
    // }
    // else{
        // console.log("Invalid credentials! Please try again");
    // }
// }



// for loop = repeat some code a LIMITED amount of times

// for(let i = 1; i <= 20; i++){
    // if(i == 13){
        // continue;
    // }
    // else{
        // console.log(i);
    // }
// }      Continue jätab vahele numbri

// for(let i = 1; i <= 20; i++){
    // if(i == 13){
        // break;
    // }
    // else{
        // console.log(i);
    // }
// }         Break lõpetab lugemise peale antud arvu.




// NUMBER GUESSING GAME

// const minNum = 1;
// const maxNum = 50;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

// let guess = parseInt(prompt("Guess the number between 1 and 50:"));

// let guesses = 5;

// while(guess !== answer && guesses > 1){
    // if(guess > answer){
        // guesses--;
        // guess = parseInt(prompt("Guess is too high. Guess again. You have " + guesses + " guesses left."));
    // }
    // else{
        // guesses--;
        // guess = parseInt(prompt("Too low. Guess again. You have " + guesses + " guesses left."));
    // }
// }
// if(guess === answer){
    // alert("Congratulations. You guessed the number");
// }  else{
        // alert("Out of guesses. The number was " + answer);
// }




// function = a section of reusable code.
//            Declare code once, use it whenever you want.
//            Call the function to execute the code

// function add(x, y){
    // return x + y;
// }
// function subtract(x, y){
    // return x - y;
// }
// function multiply(x, y){
    // return x * y;
// }
// function divide(x, y){
    // return x / y;
// }
// function isEven(number){
    // return number % 2 === 0 ? true : false;
// }
// function isValidEmail(email){
    // return email.includes("@") ? true : false;
// }

// console.log(isValidEmail("bro@fake.com"));
// console.log(isValidEmail("elonmusk.com"));
// console.log(isValidEmail("zuckerborg@meta.com"));




// variable scope = where a variable is recognized
//                  and accessible (local vs global)

// let x = 3;

// function2();

// function function1(){
    // let x = 1;
    // console.log(x);
// }

// function function2(){
    // let x = 2;
    // console.log(x);
// }




// Foreach() = method used to iterate over the elements
//             of an array and apply a specified function (callback)
//             to each element

//              arrray.forEach(callback)
//              element, index, array are provided


// let fruits = ["apple", "banana", "cherry", "date"];

// fruits.forEach(capitalaize);
// fruits.forEach(display);

// function capitalaize(element, index, array){
    // array[index] = element.charAt(0).toUpperCase() + element.slice(1)
// }

// function display(element){
    // console.log(element);
// }




// .map() = accepts a callback and applies that function
//          to each element of an array, then return a new array

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);
// const cubes = numbers.map(cube);

// console.log(cubes);

// function square(element){
    // return Math.pow(element, 2)
// }

// function cube(element){
    // return Math.pow(element, 3)
// }


// .map() TEINE ÜL

// const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
// const studentsUpper = students.map(upperCase);
// const studentsLower = students.map(lowerCase);

// console.log(studentsLower);

// function upperCase(element){
    // return element.toUpperCase();
// }

// function lowerCase(element){
    // return element.toLowerCase();
// }


// .map() KOLMAS ÜL

// const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
// const formattedDates = dates.map(formatDates);

// console.log(formattedDates);

// function formatDates(element){
    // const parts = element.split("-");
    // return `${parts[2]}.${parts[1]}.${parts[0]}`;
// }




// .filter() = creates a new arrat by filtering
//             out elements

// const ages = [16, 17, 18, 19, 20, 60];
// const adults = ages.filter(isAdult);
// const minors = ages.filter(isMinor)

// console.log(minors);

// function isAdult(element){
    // return element >= 18;
// }

// function isMinor(element){
    // return element < 18;
// }

// .filter() TEINE ÜL

// const words = ["apple", "banana", "cherry", "date"];
// const longWords = words.filter(getLongWords);

// console.log(longWords);

// function getLongWords(element){
    // return element.length >= 6;
// }




// .reduce() = reduce the elements of an array
//             to a single value

// const prices = [5, 30, 10, 25, 15, 20];

// const total = prices.reduce(sum);

// console.log(`$${total.toFixed(2)}`)

// function sum(accumulator, element){
    // return accumulator + element;
// }


// .reduce() TEINE ÜL

// const grades = [75, 50, 90, 80, 65, 95];

// const maximum = grades.reduce(getMax);
// const minimum = grades.reduce(getMin);

// console.log(maximum);
// console.log(minimum);

// function getMax(accumulator, element){
    // return Math.max(accumulator, element);
// }

// function getMin(accumulator, element){
    // return Math.min(accumulator, element);
// }




// function declaration = define a reusable block of code
//                        that perfos a specific task

// function hello (){
    // console.log("hello");
// }

// function expressions = a way to define functions as
//.                       values or variables

// const hello = function(){
    // console.log("hello");
// }

// hello();




// setTimeout(function(){
    // console.log("hello");
// }, 3000);




// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(function(element){
    // return Math.pow(element, 2);
// });

// console.log(squares);






// arrow functions = a concise way to write function expressions
//                   good for simple functions that you only use once
//                   (parameters) => some code

// const hello = (name, age) => {console.log(`Hello ${name}`)
                         // console.log(`you are ${age} years old`)};

// hello("Bro", 20);



// setTimeout( () => console.log("Hello"), 3000);


// const numbers = [1, 2, 3, 4, 5, 6];

// const squares = numbers.map((element) => Math.pow(element, 2));
// const cubes = numbers.map((element) => Math.pow(element, 3));
// const evenNums = numbers.filter((element) => element % 2 === 0);
// const oddNums = numbers.filter((element) => element % 2 !== 0);

// console.log(oddNums);





// object = A collection of related properties and/or methods
//          Can represent real world objects (people, products, places)
//          object = {key:value,
//                    function()}

// const person1 = {
    // firstName: "Spongebob",
    // lastName: "Squarepants",
    // age: 30,
    // isEmployed: true,
    // sayHello: function(){console.log("Hi! I am Spongebob!")},
    // eat: function(){console.log("I am eating a Krabby Patty")},
// }

// const person2 = {
    // firstName: "Patrick",
    // lastName: "Star",
    // age: 42,
    // isEmployed: false,
    // sayHello: function(){console.log("Hi! I am Patrick....")},
    // eat: function(){console.log("I am eating roast beef, chicken and pizza")},
// }

// person1.eat();
// person2.eat();

// person1.sayHello();
// person2.sayHello();

// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.isEmployed);

// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.age);
// console.log(person2.isEmployed);






// this = reference to the object where this is used
//        (the object depends on the immediate context)
//        person.name = this.name


// const person1 = {
    // name: "Spongebob",
    // favFood: "hamburgers",
    // sayHello: function(){console.log(`Hi! I an ${this.name}`)},
    // eat: function(){console.log(`${this.name} is eating ${this.favFood}`)},
// }

// person1.eat();
// person2.eat();



// destructturing = extract values from arrays and objects,
//                  then assing them to variables in a convinient way
//                  [] = to perform array destructuring
//                  {} = to perform object destructuring
//                   5 examples

// ------- EXAMPLE 1 -------
// SWAP THE VALUE OF TWO VARIABLES

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);


// ------- EXAMPLE 2 -------
// ELEMETNS IN AN ARRAY

// const colors = ["red", "green", "blue", "black", "white"];

// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors);

// ------- EXAMPLE 3 -------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

// const colors = ["red", "green", "blue", "black", "white"];

// const [firstColor, secoundColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor);
// console.log(secoundColor);
// console.log(thirdColor);
// console.log(extraColors);

// ------- EXAMPLE 4 -------
// EXTRACT VALUES FROM OBJECTS

// const person1 = {
    // firstName: "Spongebob",
    // lastName: "Squarepants",
    // age: 30,
    // job: "Fry Cook",
// }

// const person2 = {
    // firstName: "Patrick",
    // lastName: "Star",
    // age: 34,
// }

// const {firstName, lastName, age, job="Unemployed"} = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// ------- EXAMPLE 5 -------
// DESTRUCTURE IN FUNCTION PARAMETERS

// function displayPerson({firstName, lastName, age, job="Unemployed"}){
    // console.log(`name: ${firstName} ${lastName}`);
    // console.log(`age: ${age}`);
    // console.log(`job: ${job}`);
// }

// const person1 = {
    // firstName: "Spongebob",
    // lastName: "Squarepants",
    // age: 30,
    // job: "Fry Cook",
// }

// const person2 = {
    // firstName: "Patrick",
    // lastName: "Star",
    // age: 34,
// }

// displayPerson(person1);






// nested objects = Objects inside of other Objects.
//                  Allows you to represent more complex data structures
//                  Chill object is enclosed by a Parent object

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

// const person = {
    // fullName: "Spongebob Squarepants",
    // age: 30,
    // isStudent: true;
    // hobbies: ["karate", "jellyfishing", "cooking"],
    // address: {
        // street: "124 Conch St.",
        // city: "Bikini Bottom",
        // country: "Int. Water"
    // }
// }

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[2]);
// console.log(person.address.city);




// const person = {
    // fullName: "Spongebob Squarepants",
    // age: 30,
    // isStudent: true;
    // hobbies: ["karate", "jellyfishing", "cooking"],
    // address: {
        // street: "124 Conch St.",
        // city: "Bikini Bottom",
        // country: "Int. Water"
    // }
// }

// for(const property in person.address){
    // console.log(person.address[property]);
// }




// class Person{

    // constructor(name, age, ...address){
        // this.name = name;
        // this.age = age;
        // this.address = new Address(...address);
    // }
// }

// class Address{

    // constructor(street, city, country){
        // this.street = street;
        // this.city = city;
        // this.country = country;
    // }
// }

// const person1 = new Person("Spongebob", 30, "124 Conch St.", "Bikini Bottom", "Int Waters");

// const person1 = new Person("Patrcik", 37, "128 Conch St.", "Bikini Bottom", "Int Waters");

// const person1 = new Person("Squidward", 45, "126 Conch St.", "Bikini Bottom", "Int Waters");

// console.log(person1.address.city);





// ARREY OF OBJECTS

const fruits = [{name: "apple", color: "red", caloreies: 95},
                {name: "orange", color: "orange", caloreies: 45},
                {name: "banana", color: "yellow", caloreies: 105},
                {name: "coconut", color: "white", caloreies: 159},
                {name: "pineapple", color: "yellow", caloreies: 37}];


// fruits.pop();
// fruits.splice(2, 4);

// fruits.push({name: "grapes", color: "purple", caloreies: 62});

// console.log(fruits);

//------------- forEach () ----------

// fruits.forEach(fruit => console.log(fruit.name));

// ------------- map() ------------

// const fruitNames = fruits.map(fruit => fruit.name);
// const fruitColors = fruits.map(fruit => fruit.color);
// const fruitCalories = fruits.map(fruit => fruit.calories);

// console.log(fruitNames);
// console.log(fruitColors);
// console.log(fruitCalories);

// ------------- filter() -------------

// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
// const highCalFruits = fruits.filter(fruit => fruit.caloreies >= 100);

// console.log(highCalFruits);


// ------------ reduce() -------------

// const maxFruit = fruits.reduce( (max. fruit) =>
                                // fruit.calories > max.calories ?
                                // fruit : max);

// const minFruit = fruits.reduce( (min, fruit) =>
                                // fruit.calories < min.caloreies ?
                                // fruit : min);

// console.log(maxFruit);
// console.log(minFruit);