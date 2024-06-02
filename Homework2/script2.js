//Task1: There is the following code and add the code so that the lines written in the comments appear in the browser console, while operating with the x and y variables.:

// let x = 1;
// let y = 2;

// let res1 =x+"2"; // Add the code, it is necessary to use the variables x and y
// console.log(res1); // "12"
// console.log( typeof res1); // "string"

// let res2 = (y>x)+"2";// Add code is required use variables x and y
// console.log(res2); // "true2"
// console.log( typeof res2); // "string"

// let res3 = x<y // Add code is required use variables x and y
// console.log(res3);  // true
// console.log( typeof res3);  // " boolean "
 

// let res4 = x-"y" // Add code is required use variables x and y
// console.log(res4); // NaN
// console.log( typeof res4);  // "number"

//Task2: The user enters a number (use prompt ()) . It is necessary to check whether the entered number is correct.
// a ) even m is positive;
// b ) a multiple of 7.
// Display the result of the check in the console.


// const number=+prompt("Enter any number");
// if (number>0 && number%7===0) {
// console.log(number);
// } 
// console.log(typeof number);

// Task3 Create an empty array;
// const list=[];
// console.log(list);

// 1) Write any number in the first element of the array;
// list[0]=1;
// 2) Write any line in the second element of the array;
// list[1]="Olena";

// 3) Write any logical value in the third element of the array;
// list[2]=true;

// 4) Write the value null in the fourth element of the array ;
// list[3]=null;
// console.log(list);


// 5) Enter the number of elements stored in the array on the screen;
// document.write (list.length);

// 6) Ask the user to enter any value and write this value in the fifth element of the array;
// new_value=prompt("Enter any name, please");
// list[4]=new_value;
// console.log(list);

// 7) Display the fifth array element on the screen.
// document.write(list[4]);


// 8) Delete the 1st element of the array and display the array on the screen.
// console.log(list);
// list.shift();
// console.log(list);

// OR 

// document.write(list);


//Task 4. Write a program that combines all existing elements of the array into a ribbon and separates them with the symbol “*”.
// Initial array : let cities = [" Rome ", " Lviv ", " Warsaw "]

// let cities = [" Rome ", " Lviv ", " Warsaw "]; 
// console.log(cities.join("*"));

// Task 5. Using the prompt () function , ask the user a question about reaching the age of majority. Record the result in the isAdult variable . 
// Depending on the received value, display the appropriate message about the person's status. 
// For example: if the condition is fulfilled, the age is more than 18, output "You have reached the age of majority". 
// If the age is less than 18 years, display "You are still too young",

// let isAdult=+prompt("How old are you?");
// if (isAdult>=18) {
//     document.write("You have reached the age of majority");
// } else {
//     document.write("You are still too young");
// }

// Task 6 The user enters the three lengths of the sides of the triangle (use prompt() three times to enter each side).
// Necessary
// 	a ) determine and display the area of the triangle in the console
// 	b ) check whether this triangle is rectangular and output the check result to the console.
// Validate whether user-entered values are correct, otherwise display ' Incorrect data '. 
// Output the result of calculating the area of the triangle to the console with an accuracy of 3 decimal places (for example : 8.42355465 = > 8.424).

// let a=prompt("Please, enter the lengths of the hypotenuse side of the triangle");
// let b=prompt("Please, enter the lengths of the second (leg) side of the triangle");
// let c=prompt("Please, enter the lengths of the third (leg) side of the triangle");
// let area=a*b*c;
// let sqr_a=a**2;
// let sqr_b=b**2;
// let sqr_c=c**2;
// if (a<0 || b<0 || c<0) {
//     console.log("Incorrect data");
// }
// else if (a>=0 && b>=0 && c>=0 && sqr_a==sqr_b+sqr_c) {
// console.log("The triangle area is: " + area.toFixed(3));
// console.log("The triangle is rectangular");
// } else {
//     console.log("The triangle is not rectangular");
//     console.log("The triangle area is: " + area.toFixed(3));
// }

// Task 7 . Write a conditional construction that, depending on the time of day, will display the appropriate greeting. You need to get the real time of day from the system. 
// Do it in 2 ways through 2 different conditional operators.
// In the range of hours 23-5 - the greeting " Good night " should be displayed
// In the range of hours 5-11 - the greeting " Good morning " should be displayed
// In the range of hours 11-17 - the greeting " Good day " should be displayed
// In the range of hours 17-23 - the greeting " Good evening " should be displayed.

// const d=new Date();
// let hours=d.getHours();
// if (hours>=23 && hours<5) {
//     console.log("Good night");
// if (hours>=5 && hours<11) {
//     console.log("Good morning");
// } else if (hours>=11 && hours<17) {
//     console.log("Good day");
// } else if (hours>=17 && hours<23) {
//     console.log("Good day");
// } else {
//     console.log("Good night");
// }

// OR 

// const d=new Date();
// let hours=d.getHours();
// switch (true) {
//     case(hours>=5 && hours<11):
//         console.log("Good morning");
//         break;
//     case(hours>=11 && hours<17):
//         console.log("Good day");
//         break;
//     case(hours>=17 && hours<23):
//         console.log("Good day");
//         break;
//        default:
//            console.log("Good night");
//            break;
//         }

