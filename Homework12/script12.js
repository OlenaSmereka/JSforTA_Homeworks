// Task1

function upperCase (str) {
    let regExp=/^[A-Z]/;
    if(regExp.test(str)) {
        console.log ("String's starts with uppercase character");
    } else {
        console.log ("String's not starts with uppercase character");
    }
}
upperCase('regexp');
upperCase('RegExp');


// Task2
function checkEmail (email) {
    const regExp=/^\w+@\w+\.\S+/
    console.log(regExp.test(email));
}
checkEmail ("Qmail2@gmail.com ");

// Task3

const regExp=/d(b+)(d*)/ig;
const result=regExp.exec("cdbBdbsbz")
console.log(result);

// Task4

regExp=/^(\w+)\s+(\w+)/;
let str='Java Script';
let newstr=str.replace(regExp,'$2 $1');
console.log(newstr)

// Task5

function validation (number) {
        const regExp=/^\d{4}-\d{4}-\d{4}-\d{4}$/;
        return regExp.test(number);
    }
console.log(validation("9999-9999-9999-9999"));

// Task6
 function checkEmail (str) {
        const regExp=/^[a-zA-Z0-9]+([._-]?\w+)*@\w+([.-]?\w+)*\.[a-zA-Z]{2,3}$/;
        return regExp.test(str);
        }
console.log(checkEmail('my_mail@gmail.com'));
console.log(checkEmail('#my_mail@gmail.com'));
console.log(checkEmail('checkEmail(my_ma--il@gmail.com'))


// Task7

function checkLogin (data) { 
    const regExp=/^[a-zA-Z]{1}[a-zA-Z0-9\.]{1,9}$/;  
    const numbers=data.match(/[0-9\.]+/g) || []; 
    const result=regExp.test(data);
    console.log (`${data} is ${result} \n ${numbers.join(',')}`);
}

checkLogin ('ee1.1ret3');
checkLogin ('ee1*1ret3');


