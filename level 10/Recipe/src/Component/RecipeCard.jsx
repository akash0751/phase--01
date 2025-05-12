import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.id}`} className="card">
      <img src={recipe.image} alt={recipe.title} />
      <h4>{recipe.title}</h4>
    </Link>
  );
};

export default RecipeCard;