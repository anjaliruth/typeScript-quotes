import React from "react";
import { Recipe } from "../App";
import { useParams } from "react-router-dom";

interface RecipeDisplayProps {
    recipe: Recipe
}
export default function RecipeDisplay({ recipe }: RecipeDisplayProps) {
    const {drink} = useParams()
    console.log("Recipe:", recipe)
  return (
    <div>
      <h1>Test</h1>
      <h1>{recipe.strDrink}</h1>
      <img src={recipe.strDrinkThumb} alt={recipe.strDrink}/>
    </div>
  );
}