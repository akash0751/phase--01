import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import RecipeList from "./Component/RecipeList";
import RecipeDetails from "./Component/RecipeDetails";

function App() {
  

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
