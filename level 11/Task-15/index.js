
function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error(" Cannot divide by zero");  
    }
    return a / b;
}


function testDivision(num1, num2) {
    try {
        const result = divideNumbers(num1, num2);
        console.log(`Result: ${num1} / ${num2} = ${result.toFixed(2)}`);
    } catch (error) {
        console.error(` Error: ${error.message}`);
    } finally {
        console.log(" Division attempt completed.\n");
    }
}


testDivision(10, 2); 
testDivision(15, 3);  
testDivision(8, 0);   
testDivision(20, 5);  
