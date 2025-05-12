
const firstName = "Akash";
const lastName = "S";
const age = 20;


const intro = `Hello! My name is ${firstName} ${lastName} and I am ${age} years old.`;


const multiLineText = `
Fun Fact:
- My birth year is ${2025 - age}.
- Next year, I'll be ${age + 1} years old!
`;


const ageMessage = `${age >= 18 ? "You are an adult." : "You are a minor."}`;


console.log(intro);
console.log(multiLineText);
console.log(ageMessage);
