import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { fetchPopularRecipes } from "../utils/api";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const cached = localStorage.getItem("popular");
      if (cached) {
        setRecipes(JSON.parse(cached));
      } else {
        const data = await fetchPopularRecipes();
        localStorage.setItem("popular", JSON.stringify(data));
        setRecipes(data);
      }
    };
    getRecipes();
  }, []);

  return (
    <div className="grid-container">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Home;