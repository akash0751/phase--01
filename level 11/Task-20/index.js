
function operateOnArray(arr, callback) {
    return arr.map(callback); 
}

const doubleNumber = (num) => num * 2;

const squareNumber = (num) => num ** 2;


const numberToString = (num) => `Number: ${num}`;

const numbers = [1, 2, 3, 4, 5];

console.log("Doubled Numbers:", operateOnArray(numbers, doubleNumber));
console.log("Squared Numbers:", operateOnArray(numbers, squareNumber));
console.log("Numbers as Strings:", operateOnArray(numbers, numberToString));
