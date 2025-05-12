import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCuisineRecipes } from "../utils/api";
import RecipeCard from "./RecipeCard";

const Category = () => {
  const { type } = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCuisineRecipes(type);
      setRecipes(data);
    };
    fetchData();
  }, [type]);

  return (
    <div className="grid-container">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Category;