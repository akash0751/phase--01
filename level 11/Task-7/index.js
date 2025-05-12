let favoriteFoods = ["Pizza", "Burger", "Pasta", "Ice Cream", "Fries"];

favoriteFoods.push("Paneer"); 

favoriteFoods.shift(); 

const arrayLength = favoriteFoods.length;

const burgerIndex = favoriteFoods.indexOf("Burger");

const slicedFoods = favoriteFoods.slice(1, 3); 

console.log("Original Array (after modifications):", favoriteFoods);
console.log("Array Length:", arrayLength);
console.log("Index of 'Burger':", burgerIndex);
console.log("Sliced Array (Index 1 to 3):", slicedFoods);
