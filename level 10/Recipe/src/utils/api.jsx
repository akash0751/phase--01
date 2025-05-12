const API_KEY = "8544ff2cdae8407ca9fae690d3241583";

export const fetchPopularRecipes = async () => {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=12&tags=vegetarian`
  );
  const data = await res.json();
  return data.recipes;
};

export const fetchRecipeDetails = async (id) => {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
  );
  const data = await res.json();
  return data;
};

export const searchRecipes = async (query) => {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}&number=12`
  );
  const data = await res.json();
  return data.results;
};

export const fetchCuisineRecipes = async (type) => {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${type}&number=12`
  );
  const data = await res.json();
  return data.results;
};