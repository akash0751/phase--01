const express = require('express');
const app = express();

app.use(express.json()); 


let products = [
    { id: 1, name: "Laptop", price: 49999, description: "A high-performance laptop" },
    { id: 2, name: "Phone", price: 19999, description: "A smartphone with great camera" }
];

app.get('/products', (req, res) => {
    res.status(200).json(products);
});

app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const product = products.find(p => p.id == id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
});


app.post('/products', (req, res) => {
    const { name, price, description } = req.body;

    if (!name || !price || !description) {
        return res.status(400).json({ message: "Name, price, and description are required" });
    }

    const newProduct = {
        id: products.length ? products[products.length - 1].id + 1 : 1,
        name,
        price,
        description
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
});


app.put('/products/:id', (req, res) => {
    const id = req.params.id;
    const product = products.find(p => p.id == id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const { name, price, description } = req.body;

    if (name) product.name = name;
    if (price) product.price = price;
    if (description) product.description = description;

    res.status(200).json(product);
});


app.delete('/products/:id', (req, res) => {
    const index = products.findIndex(p => p.id == req.params.id);
    if (index === -1) return res.status(404).json({ message: "Product not found" });

    const deleted = products.splice(index, 1);
    res.status(200).json({ message: "Product deleted", product: deleted[0] });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`RESTful Products API running at http://localhost:${PORT}`);
});
