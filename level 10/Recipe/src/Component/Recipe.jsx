import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipeDetails } from "../utils/api";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchRecipeDetails(id);
      setRecipe(data);
    };
    fetchData();
  }, [id]);

  return recipe ? (
    <div className="recipe-detail">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <h3>Ingredients:</h3>
      <ul>
        {recipe.extendedIngredients.map((item) => (
          <li key={item.id}>{item.original}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Recipe;