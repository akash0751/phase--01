
function createCounter() {
    let count = 0; 

    return function () {
        count++;
        return count;
    };
}


const counter1 = createCounter();
const counter2 = createCounter();


console.log(`🔹 Counter 1 Value: ${counter1()}`);  
console.log(`🔹 Counter 1 Value: ${counter1()}`);  
console.log(`🔹 Counter 2 Value: ${counter2()}`);  
console.log(`🔹 Counter 1 Value: ${counter1()}`);  
console.log(`🔹 Counter 2 Value: ${counter2()}`);  
console.log(`🔹 Counter 2 Value: ${counter2()}`);  
