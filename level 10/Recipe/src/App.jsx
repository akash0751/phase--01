import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Recipe from "./Component/Recipe";
import SearchResults from "./Component/SearchResults";
import Category from "./Component/Category";
import Navbar from "./Component/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/searched/:query" element={<SearchResults />} />
          <Route path="/cuisine/:type" element={<Category />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
