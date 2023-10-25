import React from "react";
import { Recipe } from "../App";
import { useParams } from "react-router-dom";
interface RecipeDisplayProps {
  recipe: Recipe;
}
export default function RecipeDisplay({ recipe }: RecipeDisplayProps) {
  const { drink } = useParams();
  console.log("Recipe:", recipe);

  const ingredientsAndMeasures = [];

  for (let i = 0; i < 14; i++) {
    const ingredientKey = `strIngredient${i}`;
    const measureKey = `strMeasure${i}`;

    if (recipe[ingredientKey] && recipe[measureKey]) {
      const ingredient = recipe[ingredientKey];
      const measure = recipe[measureKey];

      ingredientsAndMeasures.push(
        <p>
          {measure} of {ingredient}
        </p>
      );
    }
  }

  return (
    <div>
      <h1>{recipe.strDrink}</h1>
      <img src={recipe.strDrinkThumb} alt={recipe.strDrink} />

      <h1>Ingredients:</h1>
      {ingredientsAndMeasures}

      <h1>Instructions:</h1>
      {recipe.strInstructions}

      <p>Glass to use: {recipe.strGlass}</p>
    </div>
  );
}
