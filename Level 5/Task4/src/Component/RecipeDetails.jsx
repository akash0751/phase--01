import React from "react";
import { useParams, Link } from "react-router-dom";
import recipes from "../Data/recipe";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return <h2>Recipe Not Found</h2>;

  return (
    <div className="recipe-details">
      <h1>{recipe.title}</h1>
      <img src={recipe.imageUrl} alt={recipe.title} />
      <h2>Ingredients</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <p>{recipe.instructions}</p>
      <Link to="/" className="back-btn">Back to Recipes</Link>
    </div>
  );
};

export default RecipeDetails;
