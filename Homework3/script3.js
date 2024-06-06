// **** Task 1 We have the array with elements [2, 3, 4, 5]. 
// Use the loop “for” to find the product of the elements of this array. Also implement tasks through “while” loop ***

const array=[2,3,4,5];
let result=1;
for (let i=0; i<array.length; i++) {
    result = result * array[i];
}
console.log(result);

const array=[2,3,4,5];
let result=1;
let i=0;
while(i<array.length) {
    result=result*array[i];
    i++;
}
console.log(result);

// ***Task 2 . Write JavaScript “for” loop that will iterate from 0 to 15. 
// For each iteration, it will check whether the current number is even or odd and display a message on the screen.
// Sample Output: "0 is even" "1 is odd" "2 is even"***** 

 for (let i=0; i<16;i++) {
    if (i%2==0) {
        console.log (`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
 }


// *** Task 3 . Write a function randArray ( k ) that will fill an array of k random integers. Random numbers are generated from the range 1-500.
// Sample Output : randArray ( 5 ); // [ 399,310,232,379,40 ] ****

let array = [];
function randArray(k) {
    for (let i = 0; i < k; i++) {
        array.push(Math.floor(Math.random() * 500));
    }
}
randArray ( 5 );
console.log (array);


// *** Task 4. Write the function raiseToDegree(a, b), which returns the result of raising the number a to the power of b . 
// The function works only with integers. Implement the interface for entering numbers a , b from the keyboard.
// Sample Output : raiseToDegree ( 3 , 4 ); // 81 **** 

function raiseToDegree (a,b) {
return (a**b);
}
let a=+prompt("Enter the 1st number");
let b=+prompt("Enter the 2nd number");
if (!Number.isInteger(a) || !Number.isInteger(b)) {
    console.log("The number must be integer");
} else {
    let result=raiseToDegree(a, b);
    console.log(`Result: ${result}`);
}
raiseToDegree (a,b);  


// ***Task5 Implement the findMin() function , which should accept an arbitrary number of numeric arguments and return the one with the smallest value.
// Tip: you can use the special arguments array for the solution .
// Sample Output : findMin (12, 14, 4, -4, 0.2); // => - 4*** 


function findMin(...args) {
   console.log(Math.min(...args));
}
findMin (12, 14, 4, -4, 0.2);

//**** Task 6 Write the function findUnique(arr), which accepts an array “arr” and checks if all elements of array are unique ( no doubles ), 
// then function will return true if all elements are unique, otherwise - false.
// Sample Output : findUnique ([1, 2, 3, 5, 3]); // => false
// findUnique ([1, 2, 3, 5, 11 ]); // => true **** 

function findUnique(arr) {
    if (arr.length === 1) {
        return true
    }
    for(let i = 0; i < arr.length; i++) {
        for(let j=i+1; j < arr.length; j++) {
    if (arr[i] === arr[j])    
{
    return false;
} 
}
    return true;
}
}

console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));
console.log(findUnique(['a', 'b', 'a']));
console.log(findUnique([1]));


// ***Task7 . Write a function that returns the last element of an array. 
// The function can accept 2 parameters: the 1st array, the 2nd numerical parameter corresponding to the number of "x" 
// of the last elements of the array to be output.
// Sample Output:
// console.log(last Elem ([ 3 , 4 , 1 0, - 5 ])); // - 5 
// console.log(last Elem ([ 3 , 4 , 1 0, - 5 ], 2 )); // [ 1 0, - 5 ] 
// console.log(last Elem ([ 3 , 4 , 1 0, - 5 ], 8 )); // [ 3 , 4 , 1 0, - 5 ]*** 

function lastElem (arr, x) {
if (x>=arr.length) {
    return arr;
} else {
return arr.slice(-x)
}
}
console.log(lastElem ([ 3 , 4 , 10, - 5 ])); 
console.log(lastElem ([ 3 , 4 , 10, - 5 ], 4)); 
console.log(lastElem ([ 3 , 4 , 10, - 5 ], 2 ));
console.log(lastElem ([ 3 , 4 , 10, - 5 ], 8 ));


// Task 8 . Write a function that takes a string as an argument and converts the first letter of each word of the string to uppercase .
// Input string : 'i love java script'
// Output string: 'I Love Java Script'

let str="i love java script";
function uppercase (str) {
    let arr = str.split(" ");
    for (let i=0; i<arr.length; i++) {
 arr[i]=arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return(arr.join(" "));
 }
console.log(uppercase (str));


