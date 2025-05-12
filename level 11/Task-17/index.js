
const fruits = [" Apple", "Banana", "Watermelon"];
const vegetables = [" Carrot", "tomato", "Betroot"];

const combinedArray = [...fruits, ...vegetables];
console.log("✅ Combined Array:", combinedArray);


const personalInfo = { name: "Akash", age: 20 };
const contactInfo = { email: "akash12@gmail.com", phone: "123-456-7890" };


const combinedObject = { ...personalInfo, ...contactInfo };
console.log("✅ Combined Object:", combinedObject);

const originalArray = ["Car",  "Bicycle", "Taxi"];
const copiedArray = [...originalArray]; 
copiedArray.push("Airplane");       

console.log("Original Array (Unchanged):", originalArray);
console.log("Modified Copy:", copiedArray);
