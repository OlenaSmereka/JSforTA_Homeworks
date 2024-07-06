//  alert('Hello from JS file!');

//  console.log('Hello from console');

// let name="Olena";
// let age=37;
// // name="Sofia"
// name=age; 
// console.log(name);
// console.log(age);  

// const NUMBER=2000;
// NUMBER=3000
// console.log(NUMBER); 

// let if=5;

// const user={
//     name:'Olena',
//     age:37,
//     isMarried:true,
//     some: undefined
// }
// console.log(user); 
 
// prompt('How old are you?');

// let name=prompt('What is your name?');
// console.log (name);

// let name=prompt('What is your name?','name here');
// console.log (name);

// let ok=confirm('Are you ok?');
// console.log(ok);

// let name=prompt('What is your name?');
// console.log('Your name is '+ name); 
// console.log('Ole'+'na');

// console.log(`Your name is ${name}`);

//TOPIC 2

// let x=9;
// x=x+1;
// console.log(x);

// or
// x += 1;
// x-=1
// x=x*2;
// x*=2;
// x++;
// x--;

// console.log(x);
// console.log (Math.pow(x,3));
// console.log(Math.sqrt(x));
// let x='Wo';
// let y='rld';
// console.log(x+y);

// console.log(5+'5');
// console.log(true+"5");
// console.log(5+5+"2");

// console.log (10==10);
// console.log(10<=10);
// console.log(10>20);

 
// console.log("k"<"l");
// console.log("sr">"rs");
// console.log("a">"b");

// console.log(10>3 && 10>2);
// console.log(10>3 && 10>2);
// console.log(10>3 || 10>2);
// console.log(!true);

// const age=prompt("How old are you?");
// const result=(age>=18) ? "You are adult" : "You are to young";
// console.log(result);


// let a=10;
// let new_a=String(a);
// console.log(new_a);
// console.log(typeof new_a);


// let a="20";
// let num=Number(a);
// console.log(num);
// console.log(typeof num);

// let a="20";
// let num=+a;
// console.log(num);
// console.log(typeof num);

// const students=["Olena","Peter", "Max"];
// console.log(students);
// console.log(students[1]);
// students[0]="Sofia";

// students[3]="Oleh";
// students[7]="Ivan";
// console.log(students);
// console.log(students[4]);
// console.log(students.length);
// students.push("Oleh");
// students.pop();
// students.unshift("Ivan");
// students.shift();
// console.log(students.slice(0,2));

// const age=+prompt("How old are you?");
// if (age>=18) 
//     {
//         console.log("You are adult");
//     }
// console.log(typeof age);


// if (age>=18) {
//         console.log("You are adult");
//     } else {
//         console.log("You are to young")
//     }

// if (age>18) {
//     console.log("You are older than 18");
// } else if (age<18) {
//     console.log("You are younger than 18");
// } else {
//     console.log("You are just 18");
//  }

// if (age>=20 && age<30) {
//     console.log("You are 20-30 years");
// } else if (age>30 && age<40) {
//     console.log("You are 30-40 years");
// } else {
//     console.log("You are not welcome");
//  }

// switch(age) {
//     case 18:
//         console.log("You are 18");
//         break;
//     case 20:
//         console.log("You are 20");
//         break;
//     default:
//         console.log("Don't know your age");
//         break;
// }

// switch(true){
//     case (age>=20 && age<30):
//         console.log("You are 20-30");
//         break;
// }

// TOPIC3

// let i=0;
// while (i<10) {
//     console.log(i);
//     i++;
// }

// for(let i=0; i<10;i++) {
//     console.log(i);
// }

// for (let i=1; i<10; i+=2) {
//     console.log(i);
// }
// for (let i=9; i>=0; i-=1) {
//     console.log(i);
// }

// for (let i=0; i<10; i++) {
//     console.log(i);
//     if (i===5) {
//         break;
//     }
// }

// for (let i=0; i<10; i++) {
//     console.log(i);
//     if (i===5) {
//         continue;
//     }
// }

// for (let i=0; i<10; i++) {
//     if (i===5) {
//         continue;
//     }
//     console.log(i);
// }

// const students=["Peter", "John", "Max"];
// for (let i=0; i<students.length; i++) {
//     console.log(students[i]);
// }

// const students=["Peter", "John", "Max"];
// for (let i=0; i<students.length; i++) {
//     console.log(students[i]);
//     if (students[i]==="John") {
//         break;
//     }
// }

// const students=["Peter", "John", "Max"];
// for (i=0; i<students.length; i++) {
//     if (students[i]==="John") {
//         students[i]="Olena"
//     }
// }
// console.log(students);

// const students=["Peter", "John", "Max"];
// for (let element of students) {
//     console.log(element);
// }

// const students=["Peter", "John", "Max"];
// for (let index in students) {
//     console.log(index);
// }

// const students=["Peter","John", "Max"];
// for (let index in students){
//     console.log(`Index: ${index} - Value: ${students[index]}`);
// }

// function hello () {
//     console.log("Hello");
// }
// hello();
// hello();
// hello();

// function multiplication (a,b) {
//     console.log(a*b);
// }
// multiplication(5,10);
// multiplication (10,20);

// let number1=5;
// let number2=10;
// function multiplication (a,b) {
//     console.log(a*b);
// }
// multiplication (number1, number2);
// multiplication (10,20);


// function multip (a,b) {
//     return a*b;
// }
// let result=multip(5,10);
// console.log (result);

// function mult() {
//     console.log(arguments);
// }
// mult(5,17,18,52);

// function mult() {
//     console.log(arguments[2]);
// }
// mult(5,17,18,52);

// function multiplication() {
//     let result=1;
//     for(let i=0; i<arguments.length; i++) {
//         result *=arguments[i];
//     }
//     console.log(result);
// }
// multiplication (5,10,20,30);

// function multiplication() {
//     let result=1;
//     for(let i=0; i<arguments.length; i++) {
//         result *=arguments[i];
//     }
//     return result;
// }
// console.log(multiplication (5,10,20,30));

// const students=["Peter","John","Max"];
// students.forEach(function(element,index){
//     console.log(element);
//     console.log(index);
//     console.log (`Index: ${index} - Value ${element}`);
// })

// TOPIC4
// let x=10;
// let y=20;
// let z=x+y;
// console.log(z);

// for (let i=0; i<10; i++);{
//     console.log(i);
// }

// try {
//     console.log("Hello");
//     printMe();
//     console.loglog("Goodbye");
// } catch (error) {
//     console.log("Undefined function is called");
// }

// try {
//     console.log("Hello");
//     printMe();
//     console.loglog("Goodbye");
// } catch (error) {
//     console.log(error);
//     console.log(typeof error);
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }

// try {
// let age=prompt("Are you older than 18?");
// if (age<18) {
//     throw new Error ("You are not allowed")
// }
// } catch (error) {
//     // console.log(error);
//     console.log(error.message);
// }

// try {
//     let age=prompt("What is youe age?");
//     if (age<18 || age >60) {
//         throw RangeError("Your age is out of 18-60 range");
//     }
// } catch (error) {
//     console.log(error.message);
// }

// class AgeError extends Error {
// constructor(message) {
//     super(message);
//     this.name="AgeError";
// }
// }


// try {
//     let age=prompt("What is youe age?");
//     if (age<18) {
//         throw new AgeError("Your are too young");
//     }
// } catch (error) {
//     console.log(error.message);
// }

// function func() {
//     try {
//         return 1;
//     } catch (error){
//         console.log("Section catch");
//     }
//     finally {
//         console.log("Section finally");
//     }
// }
// let result=func();
// console.log(result);

// setTimeout(function(){
//     console.log("Show with 2 sec delay")
// }, 2000)

// try{
//     setTimeout(function(){
//         printMe();
//     }, 2000)
// } catch (error) {
//     console.log("An error happened");
// }

// setTimeout (function() {
//     try {
//         printMe();
//     } catch(error) {
//         console.log("Error happened");
//     }
// },2000);


// function calcRectangleArea(width, height) {
//     if (typeof width !== 'number' || typeof height !== 'number') {
//         throw new Error('Width and height must be numbers.');
//     }
//     return width * height;
// }

// try {
//     let width = 5;
//     let height = 2;
//     let area = calcRectangleArea(width, height);
//     console.log(`The area of the rectangle is ${area}`);
// } catch (error) {
//     console.log(error.message);
// }

// const user={
//     name: 'Olena',
//     age:37,
//     city: 'Lviv',
// }
// console.log(user);
// console.log(user.name);
// user.name='MAX';
// console.log(user.name);
// user.country="Ukraine";
// console.log(user);
// delete user.age;
// console.log(user);

// const user={
//     name: 'Olena',
//     age:37,
//     city: 'Lviv',
//     friends: ['Max', 'Bob']
// }
// console.log(user)

// const user={
//     name: 'Olena',
//     age:37,
//     city: 'Lviv',
//     son:{
//         name: "Max",
//         age: 14
//     }
// }
// console.log(user)

// const user = {
//     name:"Olena",
//     age: 37,
//     city: 'Lviv',
//     showName: function() {
//         // console.log(user.name)
//         console.log(this.name)
//     }
// }
// user.showName();

// const user={
//     name: "Olena",
//     age: 37,
//     city: "Lviv",
//     setName: function(newName) {
//         this.name=newName
//     }
// }
// user.setName('Peter');
// console.log(user.name);

// class User {
//     constructor(name, age, city) {
//         this.name=name;
//         this.age=age;
//         this.city=city
//     }
// }
// const newUser1 = new User("Olena", 37, "Lviv");
// const newUser2 = new User("Max", 14, "Kyiv");
// const newUser3 = new User("Bob", 43, "Odesa");
// console.log(newUser1);
// console.log(newUser2);
// console.log(newUser3);

// class User {
//     constructor(name, age, city) {
//         this.name=name;
//         this.age=age;
//         this.city=city
//     }
//     showName() {
//         console.log(this.name)
//     }
// }
// const newUser1 = new User("Olena", 37, "Lviv");
// const newUser2 = new User("Max", 14, "Kyiv");
// const newUser3 = new User("Bob", 43, "Odesa");
// newUser1.showName();
// newUser2.showName();
// newUser3.showName();
// // console.log(newUser1);

// class User {
//     constructor(name, age, city) {
//         this._name=name;
//         this.age=age;
//         this.city=city
//     }
//     showName() {
//         console.log(this.name)
//     }
//     get name() {
//         return this._name;
//     }
// }
// const newUser1 = new User("Olena", 37, "Lviv");
// // const newUser2 = new User("Max", 14, "Kyiv");
// // const newUser3 = new User("Bob", 43, "Odesa");
// // newUser1.showName();
// // newUser2.showName();
// // newUser3.showName();
// console.log(newUser1.name);

// class User {
//     constructor(name, age, city) {
//         this._name=name;
//         this.age=age;
//         this.city=city
//     }
//     showName() {
//         console.log(this.name)
//     }
//     get name() {
//         return this._name;
//     }
//     set name(newName) {
//         if (newName.length<4) {
//             alert ('Name is too short');
//             return;
//         }
//         this._name=newName;
//     }
// }
// const newUser1 = new User("Olena", 37, "Lviv");
// // newUser1.name='';-- will be an alert
// newUser1.name='Sophia';
// console.log(newUser1.name);

// class Animal {
//     constructor (kind) {
//         this.kind=kind;
// }
// run() {
//     alert (this.kind + " runs!");
// }
// }
// class Leopard extends Animal {
//     jump() {
//         alert(this.kind + " jumps");
//     }
// } 
// let leopard = new Leopard ('Spotted');
// leopard.run();
// leopard.jump();

// class Animal {
//     constructor (kind, weight) {
//         this.kind=kind;
//         this.weight=weight;
// }
// run() {
//     alert (this.kind + " runs!");
// }
// }
// class Leopard extends Animal {
//     constructor (kind, weight, speed) {
//         super  (kind, weight);
//         this.speed=speed;
//     }
//     jump() {
//         alert(this.kind + " jumps");
//     }
// } 
// let leopard = new Leopard ('Spotted',40,60);
// alert(leopard.speed);
// alert(leopard.weight);
// // leopard.run();
// // leopard.jump();

// class Animal {
//     constructor (kind, weight) {
//         this.kind=kind;
//         this.weight=weight;
// }
// run() {
//     alert (this.kind + " runs!");
// }
// }
// class Leopard extends Animal {
//     constructor (kind, weight, speed) {
//         super  (kind, weight);
//         this.speed=speed;
//     }
//     run () {
//         super.run();
//         alert (this.kind + "  is ready to jump!");
//     }
//     jump() {
//         alert(this.kind + " jumps");
//     }
// } 
// let leopard = new Leopard ('Spotted',40,60);
// leopard.run();


// ***DOM*** 
// const title=document.getElementById('title');
// console.log(title);
// console.log(typeof title);

// const title=document.getElementsByClassName('title');
// console.log(title);

// const title=document.getElementsByTagName('h1');
// console.log(title);

// const title=document.querySelector("#title");
// console.log(title);

// const title=document.querySelectorAll("#title");
// const title=document.querySelectorAll(".title");
// console.log(title);

// let parent=document.querySelector(".parent");
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[0]);
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);
// console.log(parent.children[parent.children.length-1]);

// console.log(parent.innerHTML);
// parent.innerHTML='NEW text from JS';
// parent.innerHTML='<h1>NEW text from JS</h1>';
// parent.innerHTML=`
// <h1>NEW text from JS</h1>
// <p> New parag from JS </p>
// `

// parent.setAttribute("id", "parent");


// let parent=document.querySelector(".parent");
// parent.style.backgroundColor="green";
// parent.style.color="red";
// parent.classList.add("newClass");

// ***BOM

// console.log(window.innerHeight);
// console.log(window.innerWidth);

// let MyWindow=window.open("https://www.youtube.com/watch?v=uwEaQk5VeS4","YouTube", "width=200, height=200, left=1000, top=1000");
// MyWindow.close();
// MyWindow.moveTo(500,500);
// MyWindow.resizeTo(500,500);

// console.log(navigator.appName);
// console.log(navigator.platform);
// console.log(navigator.userAgent);

// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(pos)
// {
//     alert("Latitude: " + pos.coords.latitude + " Longitude: " + pos.coords.longitude + " altitude:" + pos.coords.altitude + " accuracy:" + 
//         pos.coords.accuracy + " speed:" + pos.coords.speed);
// } , function (e) {alert (e);})
// }

// function handleClick () {
//     console.log('Click fom JS')
// }

// let title=document.querySelector("#title");

// title.onclick= function(){
//     console.log('Click fom JS')
// }

// title.addEventListener("click",function(){
// console.log('Click fom JS EventListener')
// })

// let title=document.querySelector("#title");
// function handleclick () {
//     console.log('Click fom JS EventListener')
//     }
// title.addEventListener("click",handleclick)  

// let title=document.querySelector("#title");
// title.addEventListener("click",function(event) {
//     // console.log(event)
//     // console.log(event.type);
//     console.log(event.target)
// })  


// let title=document.querySelector("#title");
// title.addEventListener("click",function(event) {
// event.target.style.color="red"
// } )

// let title=document.querySelector("#title");
// let subtitle=document.querySelector("#subtitle");
// title.addEventListener("click",function(event) {
//     subtitle.style.color="red"
//     } )


// let input=document.querySelector("#inp");
// let button=document.querySelector("#btn");
// button.addEventListener("click", function(){
//     console.log(input.value)
// })

// let RegisterForm=document.querySelector('#RegisterForm');
// RegisterForm.addEventListener("submit", function(event){
//     event.preventDefault();
//     // console.log("Form was submitted");
//     console.log(event.target.elements.name.value);
//     console.log(event.target.elements.password.value);
// })


// TOPIC 8

// let array=[1,2,3,4]; // old array
// let newArray = array.map((element) => { // new array with elements values+1 to wich we assign our old array and add +1 to the elements of old array
//     // console.log(element);
//     return element+1;
// });
// console.log(newArray);

// The same but ussing arrow function

// let array=[1,2,3,4]; 
// console.log(array.map((element) => element+1));

//  or like this

// let array=[1,2,3,4];
// let newArray = array.map((element) => element+1);
// console.log(newArray);

// map function helps us to manipulate with array elements, r.g to show each element to the console
// let array=[1,2,3,4,5];
// array.map((element)=> {
//     console.log(element)
// });

// or to return sqrt numbers of the array elements:
// const numbers=[4,9,16,25];
// const newArr=numbers.map(Math.sqrt);
// console.log(newArr);

// or to multiply all elements of array by 10

// const numbers=[1,2,3,4,5];
// const newArr=numbers.map(myFunction);
// function myFunction(num){
//     return num*10;
// }
// console.log (newArr);

// or to show the person's full name

// const persons= [
//     {firstname:'Olena', lastname:'Smereka'},
//     {firstname:'Max', lastname:'Maximus'},
//     {firstname:'Ben', lastname:'Benson'},
// ];
// persons.map(getFullname);
// function getFullname(item) {
//     console.log([item.firstname, item.lastname].join(" "));
// }

// or to increase each element in the existing array by 1

// const array=[1,2,3,4,5];
// const newArray=array.map((element) => {
//     return element+1
// });
// console.log(newArray);

// spread operator transforms array to the list of elements
// const numbers=[5,48,3,15];
// const munimum=Math.min(...numbers);
// console.log (munimum);

// we can use spread operator to concatente arrays in one array
// const array1=[1,2,3,4,5,];
// const array2=[25,8,9,65];
// const concatArray=[...array1, ...array2];
// console.log(concatArray);


// const func = (arg1, ...rest) => {
//     console.log(arg1);
//     console.log(rest);
// };

// func("first", "second", "third", "fourth");

// DESTRUCTURING

// const users=["Peter", "John"];
// const [user1, user2]=users;
// console.log(user1);

// destructuring of objects

// const user={
//     name :"John",
//     age: 30
// }
// const {name, age} = user;
// console.log(name);

// Iterator

// const str="DOM";
// for (let elem of str) {
//     console.log(elem)
// }

// Collection. SET 
//  const cities = new Set();
//  const kyiv="Kyiv";
//  const rome="Rome";
//  const berlin="Berlin";
//  const madrid="Madrid";
//  cities.add(kyiv);
//  cities.add(rome);
//  cities.add(berlin);
//  cities.add(madrid);
//  cities.add(kyiv);
//  console.log(cities.size);
//  console.log(cities.has(berlin));
//  for (let city of cities) {
//     console.log(city)
//  }

// Collction MAP
// const map= new Map();
// map.set("name", "Olena");
// map.set("age", "38");
// console.log(map.size);
// console.log(map.has("name"));
// console.log(map.get("name"));
// console.log(map.has("age"));
// console.log(map.get("age"));
// map.delete("name");
// console.log(map.has("name"));
// console.log(map.get("name"));
// console.log(map.size);
// map.clear();
// console.log(map.has("age"));
// console.log(map.get("age"));
// console.log(map.size);

// ITERATION OVER MAP collection

// const receipeMap= new Map([
//     ["cucumber", 500],
//     ["Tomatoes", 350],
//     ["Onion",50]
// ]);
// for (let vegetables of receipeMap.keys()){
//     alert (vegetables);
// }
// for (let amount of receipeMap.values()) {
//     alert(amount);
// }
// for (let entry of receipeMap.entries()){
//     alert(entry);
// }


// REDUCE
// let numbers=[1,5,8,65,12];
// let product_of_numbers= numbers.reduce((result,element)=> {
//     return result*element
// },1)
// console.log(product_of_numbers);

// FILTER

// let numbers = [1,6,8,9,15,0];
// let filteredNumbers=numbers.filter((element)=> element>5);
// console.log(filteredNumbers);

// Asynchronus JS
// console.log(1);
// setTimeout(()=> {
//     console.log(2)
// });
// console.log(3);

// function sum (a,b){
//     return new Promise ((resolve, reject) => {
//         resolve (a+b);
//     });
// }
// // console.log(sum(2,2));
// sum(2,2).then((result)=> {
//     console.log(result)
// })

// function sum (a,b){
//     return new Promise ((resolve, reject) => {
//         if (a>0) {
//         resolve (a+b);
//         } 
//         reject ("An error");
//     });
// }
// sum(-2,2).then((result)=> {
//     console.log(result)
// }).catch((error) =>
//    {
//     console.log(error)
//    });

// const promise = new Promise(function(resolve, reject) {
//     resolve("Done");
//     });
//     console.log(`Before promise`); promise.then(function (result) {
//     console.log(`${result}`);
//     });
    
//     console.log(`After promise`);
    
// Promise chains
// function sum (a,b){
//     return new Promise ((resolve, reject) => {
//         if (a>0) {
//         resolve (a+b);
//         } 
//         reject ("An error");
//     });
// }
// sum(2,2).then((result) => {
//     return result*10;
// }).then((result)=> {
//     console.log(result)
// });


// function sum (a,b){
//     return new Promise ((resolve, reject) => {
//         if (a>0) {
//         resolve (a+b);
//         } 
//         reject ("An error");
//     });
// }
// sum(-2,2).then((result)=> {
//     console.log(result)
// }).catch((error) =>
//    {
//     console.log(error);
//     return sum(5,5).then ((result)=>{
//         console.log(result);
//     })
//    });

// PROMISE ALL
// const user1= new Promise (resolve=>{
//     setTimeout(()=>{
//         resolve({id:10, login:"admin"});
//     },2000);
// });
// const user2 = new Promise(resolve => {
//     setTimeout(() => {
//         resolve({id:22, login:"tester"})
//     }, 500);
// });
// Promise.all ([user1, user2]).then (
//     res=>{
//         console.log("Array of results:", res)
//     }).catch (err=>{
//         console.log(err);
//     })

// NODE.JS
// console.log("Hello from node js");
// to import module fs for node js:
// const fs=require("fs");
// fs.readFile("info.txt", "utf-8", (error, data)=> {
//     console.log(data);
// })

// const http=require("http");
// http.createServer((request,response)=>{
//     response.writeHead(200,"Content-Type: text/plain");
//     response.write("Information from ");
//     response.end();
// }).listen(8000);
// console.log("The server is listening on http://localhost:8000");

// const http=require("http");
// http.createServer((request,response)=>{
//     response.writeHead(200,"Content-Type: text/html");
//     response.write("<h1>Info from server</h1>");
//     response.end();
// }).listen(8000);
// console.log("The server is listening on http://localhost:8000");

// const {name, sayYes}= require ("./logic.js")
// console.log(name);
// console.log(sayYes());

// Array loop chain
// const number = [2,3,4,5,6,7,8,4,3,35,6,4];
// // increase by one
// const result=number.map(element=>element+1)
// // filter bigger than 5
//                    .filter(element=>element>5)
// // adding all filtered elements and 0 is the first element
//                 // .reduce((sum, element)=>sum+element,0)
// // multiply all filtered values
//                    .reduce((sum, element)=>sum*element,1);
// console.log(result);

// AJAX FETCH API
// without params it will be GET method by default
// we can work with fetch with Promises
// fetch ("https://jsonplaceholder.typicode.com/users")
// .then((result)=> console.log(result));

// we can transform the get data in the array with objetcs
// fetch ("https://jsonplaceholder.typicode.com/users")
// .then((result)=> result.json())
// .then((result)=> console.log(result));

//  we can work with the data as with the classical array
// fetch ("https://jsonplaceholder.typicode.com/users")
// .then((result)=> result.json())
// .then((result)=> console.log(result[0].name));

// as we have an array we can make a loop
// fetch ("https://jsonplaceholder.typicode.com/users")
// .then((result)=> result.json())
// .then((result)=> result.map(element=> {console.log(element.name)}));

// we can also work with fetch with async function

// async function getUsers() {
//     let result  = await fetch ("https://jsonplaceholder.typicode.com/users");
//     let data=await result.json();
//     console.log(data);
// }
// getUsers();

// STORAGE
// localStorage.setItem("name", "Olena");
// console.log(localStorage.getItem("name"));
localStorage.removeItem("name");

