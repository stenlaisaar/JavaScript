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