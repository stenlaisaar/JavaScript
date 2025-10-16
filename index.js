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

const pi = 3.14159;
let radius;
let circumference;

document.getElementById("mysubmit").onclick = function(){
    radius = document.getElementById("mytext").value;
    radius = Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById("myh3").textContent = circumference + "cm";
}