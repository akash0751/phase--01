function multiply(a, b) {
    return a * b;
}

const divide = function(a, b) {
    if (b === 0) {
        return "Cannot divide by zero!";
    }
    return a / b;
};

const power = (base, exponent) => base ** exponent;


console.log(`Multiply (5 * 3): ${multiply(5, 3)}`);     
console.log(`Divide (10 / 2): ${divide(10, 2)}`);       
console.log(`Power (2^4): ${power(2, 4)}`);             


console.log(`Divide (5 / 0): ${divide(5, 0)}`);         
