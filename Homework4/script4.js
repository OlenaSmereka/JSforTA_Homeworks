// ***Task 1. Implement the calcRectangleArea(width, height) function, which takes 2 parameters, the width of the rectangle width and 
// the height of the rectangle height, and calculates its area. Provide termination of program execution and 
// generation of an exception if non-numeric parameters are passed to the function.
// Write code that uses this function and handles possible exceptions*** 

// Not sure wich variant is more correct but both work
// ********* Variant 1
let width = prompt("please, enter the width:");
let height = prompt("please, enter the height:");
function calcRectangleArea (width, height) {
    return (width*height)}
    try {    
        if (isNaN(width) || isNaN(height) || width==="" || height==="") {
            throw new TypeError("Please, enter numeric values for width and height");
        }
        if (width<0 || height<0){
            throw RangeError ("The params should be > 0");
        }
        let result=calcRectangleArea (width, height);
        console.log(`Rectangle area is: ${result}`);
    } catch (error) {
            console.log(error);
        }
 calcRectangleArea (width, height)

// ******** Variant 2
 function calcRectangleArea (width, height) {
    if (isNaN(width) || isNaN(height) || width==="" || height==="") {
        throw new Error ("Please, enter numeric values for width and height"); 
    } if (width<0 || height<0){
        throw RangeError ("The params should be > 0");
    } 
    return (width * height);
}
try {
    let width = prompt("please, enter the width:");
    let height = prompt("please, enter the height:");
    let result = calcRectangleArea(width, height);
    console.log(`The area of the rectangle is ${result}`);
} catch (error) {
    console.log(error.message);
}


// *** Task 2 . Write a checkAge() function that will prompt the user to enter their age and generate errors in the modal window if when : 
// 	- the user entered an empty tape (for example, " The field is empty ! Please enter your age" ),
// 	- a non-numeric value
// 	- the user's age is less than 14 years . 
// Otherwise, the user gets access to watching the movie.
// In the catch block , provide for the output of the name and description of the error.***


function checkAge () {
        try { 
        let age = prompt("please, enter your age");
           if (age==="") {
            throw new TypeError("The field is empty ! Please enter your age");
        }
        if (isNaN(age)){
            throw TypeError ("Please, enter numeric value");
        }
        if (age<14){
            throw RangeError ("You must be older than 14");
        }
        else {
        console.log(`You are allowed to watch the movie`);
        }
    } catch (error) {
            console.log(error.name);
            console.log(error.message);
        }
    }
 checkAge ()
    

// ***Task 3 . Create a Month Exception class whose constructor takes a message parameter and initializes the name field to 'MonthException'.
// Implement the showMonthName(month) function, where the month parameter is the sequential number of the month of the year. 
// The function returns the name of the month according to the entered month number. 
// In case of incorrect input, an exception is thrown in the form of an object of the Month Exception class with the message 'Incorrect month number'.
// Write code that uses this function, provide handling of possible exceptions.
// 	An example of the program :
// > console . log ( showMonthName ( 5 ));// May
// > console . log ( showMonthName ( 14 )); // MonthException Incorrect month number ***

class MonthException extends Error{
    constructor(message){
        super(message);
        this.name = "MonthException";
    }
}
function showMonthName(month){
    const monthArray = ["January", "February", "March", "April",  "May", "June", "July", "August",  "September", "October",  "November", "December"];
    if(month <1 ||  month > 12|| isNaN(month) || month===""){
        throw new MonthException("Incorrect month number");
    }
    return monthArray[month - 1];
}
try{
    let month=+prompt("Please enter a number of the month:")
    console.log(showMonthName(month));
}catch(error){
    console.log(error.name);
    console.log(error.message);
}

// *** Task 4. Implement the showUser ( id ) function, which takes the user id as a parameter and returns an object that contains the value of the passed id . 
// The function also throws an error if a negative id is entered .Implement the showUsers ( ids ) function, which accepts an array of user ids ids 
// as a parameter, checks each element of the ids array for correctness using the showUser () function , and displays an error message in the event of an 
// exceptional situation. The showUsers ( ids ) function returns an array of objects where the key values are the correct ids elements .
// An example of the program : showUsers([7, -12, 44, 22]) ;
// Error: ID must not be negative: -12 [ {id: 7}, {id: 44}, {id: 22} ] ***

function showUser(id) {
    if (id<0 || isNaN(id) || id==="") {
        throw new Error (`ID must not be negative: ${id}`); 
    }
    return {id: id};
}
function showUsers (ids) {
    const Array=[];
    for (let i=0; i<ids.length; i++) {
        try {
            const users=showUser(ids[i])
            Array.push(users);
        } catch (error) {
            console.log(error.message);
        }
    }
    return Array;
   
}
    console.log (showUsers([7, -12, 44, 22]));



