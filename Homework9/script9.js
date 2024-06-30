
// Task1

function getPromise ( message , delay ) {
   return new Promise ((resolve, reject)=>{
    setTimeout(()=> {
        resolve(message);
    },delay);
   }
)
}
getPromise("test promise", 2000).then(function(data) {
console.log(data);	
});

// Task2

     function calcArrProduct(arr) {
        return new Promise((resolve, reject) => {
            let product = 1;
            for (let i = 0; i < arr.length; i++) {
                if (typeof arr[i] !== "number" || isNaN(arr[i])) {
                    const error = new Error("Error! Incorrect array!");
                    reject(error);
                    return; 
                }
                product *= arr[i];
            }
            resolve(product);
        });
    }

    calcArrProduct([3, 4, 5]).then(result => console.log(result));
    calcArrProduct([5, "user2", 7, 12]).catch(error => console.log(error.message)); 

    // Task3
    
    const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

    function showNumbers() {
        let promiseChain = Promise.resolve();
        for (let i = 0; i <= 10; i++) {
            promiseChain = promiseChain.then(() => {
            return delay(i, Math.floor(Math.random() * 3000)).then((number) => {
            console.log(number);
            return number;
        });
    });
 }
}    
    showNumbers();
    
    
    
    
    // Task4

const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

async function showNumbers() {
    for (let i = 0; i <= 10; i++) {
        const number = await delay(i, Math.floor(Math.random() * N));
        console.log(number);
    }
}

const N = 3000;
showNumbers();
