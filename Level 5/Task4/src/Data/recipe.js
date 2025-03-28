import choco from '../assets/choco.jpg'
import avacado from '../assets/avacado.jpg'
import spagetti from '../assets/spagetti.jpg'

const recipe = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      imageUrl: spagetti,
      ingredients: ["Pasta", "Eggs", "Pancetta", "Parmesan", "Black Pepper"],
      instructions: "Cook pasta. Mix eggs and cheese. Cook pancetta. Combine all ingredients and serve."
    },
    {
      id: 2,
      title: "Avocado Toast",
      imageUrl: avacado,
      ingredients: ["Bread", "Avocado", "Salt", "Pepper", "Lemon Juice"],
      instructions: "Toast bread. Mash avocado with salt, pepper, and lemon juice. Spread on toast and serve."
    },
    {
      id: 3,
      title: "Chocolate Pancakes",
      imageUrl: choco,
      ingredients: ["Flour", "Milk", "Eggs", "Cocoa Powder", "Sugar"],
      instructions: "Mix ingredients. Cook on a pan. Serve with syrup."
    }
  ];
  
  export default recipe;
  