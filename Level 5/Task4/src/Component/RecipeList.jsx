import React, { useState } from "react";
import { Link } from "react-router-dom";
import recipes from "../Data/recipe";

const RecipeList = () => {
  const [search, setSearch] = useState("");

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase()) ||
    recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="container">
      <h1 className="title">Recipe Finder</h1>
      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="recipe-grid">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.imageUrl} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <Link to={`/recipe/${recipe.id}`} className="view-recipe-btn">
              View Recipe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
