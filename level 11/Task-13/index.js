
const product = {
    name: "IPhone 16e",
    price: 59000,
    category: "Electronics",
    inStock: true
};


const { name, price, category, inStock } = product;


console.log(`Product Name: ${name}`);
console.log(`Price: ₹${price}`);
console.log(`Category: ${category}`);
console.log(`In Stock: ${inStock ? "Yes" : "No"}`);


function displayProductDetails({ name, price, category, inStock }) {
    return ` Product Details:
- Name: ${name}
- Price: ₹${price}
- Category: ${category}
- Availability: ${inStock ? "In Stock" : "Out of Stock"}`;
}


console.log(displayProductDetails(product));
