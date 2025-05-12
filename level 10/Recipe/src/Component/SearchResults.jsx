import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchRecipes } from "../utils/api";
import RecipeCard from "./RecipeCard";

const SearchResults = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const data = await searchRecipes(query);
      setResults(data);
    };
    fetchResults();
  }, [query]);

  return (
    <div className="grid-container">
      {results.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default SearchResults;