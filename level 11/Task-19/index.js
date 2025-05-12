function factorial(n) {
    if (n < 0) {
        throw new Error(" Factorial is not defined for negative numbers.");
    }
    if (n === 0 || n === 1) {
        return 1; 
    }
    return n * factorial(n - 1); 
}

function testFactorial(value) {
    try {
        console.log(`Factorial of ${value}: ${factorial(value)}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}


testFactorial(5);  
testFactorial(7);  
testFactorial(0); 
testFactorial(1);  
testFactorial(-3); 
