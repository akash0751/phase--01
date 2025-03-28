import React, { useState } from "react";
import Product from "./Component/Product";
import Cart from "./Component/Cart";
import  headphone  from './assets/headphone.jpg';
import  laptops from './assets/laptops.jpg';
import  smartphone from './assets/smartphone.jpg';
import  smartwatch  from './assets/smartwatch.jpg';
import backcover from './assets/backcover.jpg';
import fogg from './assets/fogg.png';
import './App.css'
const products = [
  { id: 1, name: "Laptop", imageUrl:laptops, price: "47,999" },
  { id: 2, name: "Smartphone", imageUrl:smartphone, price: "20,000" },
  { id: 3, name: "Headphones", imageUrl: headphone, price: "19,999" },
  { id: 4, name: "Smartwatch", imageUrl:smartwatch, price: "3,999" },
  { id: 5, name: "Back cover", imageUrl:backcover, price: "299" },
  { id: 5, name: "Fogg extra", imageUrl:fogg, price: "399" }
];
function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <Cart cartCount={cart.length} />
      <h1>Product Listing</h1>
      <div className="productgrid">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
export default App;