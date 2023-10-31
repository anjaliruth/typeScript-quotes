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
    <div className="flex flex-col items-center w-2/5 m-auto">
      <h1 className="text-2xl font-bold p-5 text-white">{recipe.strDrink}</h1>
      <img
        className="w-3/5 border-radius-5"
        src={recipe.strDrinkThumb}
        alt={recipe.strDrink}
      />
      <div className="">
      <h1 className="text-2xl font-bold py-5 text-white">Ingredients:</h1>
      <p className="text-white">    {ingredientsAndMeasures}</p>
  
      <h1 className="text-2xl font-bold py-5 text-white">Instructions:</h1>
      <p className="text-white"> {recipe.strInstructions}</p>
     
      <h1 className="text-2xl font-bold py-5 text-white">Glass to use:</h1>
      <p  className="text-white pb-5">{recipe.strGlass}</p>
    </div>
    </div>
  );
}
