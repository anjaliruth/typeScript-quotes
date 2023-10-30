import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Recipe } from "../App";

interface CocktailDisplayProps {
  search: string;
  spiritCategory: string;
  setResult: React.Dispatch<React.SetStateAction<any>>;
  result: Recipe[];
  setRecipe: React.Dispatch<React.SetStateAction<any>>;
  recipe: Recipe;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  fetchRecipesByCategory:() => Promise<void>
}

export default function CocktailDisplay({
  search,
  spiritCategory,
  setResult,
  result,
  setIsLoading,
  isLoading,
  recipe,
  setRecipe,
  fetchRecipesByCategory, 
}: CocktailDisplayProps) {
  const {spirit, drink} = useParams()
  

  console.log("SPIRIT", spirit)
  useEffect(() => {
fetchRecipesByCategory()
  }, [spiritCategory]);

  async function fetchRecipeByID(idDrink: string): Promise<void> {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
    );
    const data = await response.json();
    setRecipe(data.drinks[0]);
  }
  

  return (
    <div className=" bg-pink-200">




<h1 className="text-3xl font-bold text-center p-5">{spirit} Cocktails</h1>

      {isLoading && <p>Loading...</p>}
      <div className="grid grid-cols-3 m-auto bg-purple-400 gap-4 place-items-center w-4/5">
      {!isLoading &&
        result.map((cocktail, i) => {
          return (
            <div key={cocktail.idDrink} className="flex flex-col items-center p-2 bg-blue-200 gap-4 rounded-[10px]">
              <h2 className="text-xl font-bold">{cocktail.strDrink}</h2>
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="w-3/5 max-lg rounded-[15px] "/>
             <Link to={`/${cocktail.strDrink}/recipe`} > <button onClick={()=>fetchRecipeByID(cocktail.idDrink)} className="mb-3 p-2 rounded bg-green-200">🍸 View Recipe</button>
             </Link>
            </div>
          );
        })}
        </div>
    </div>
  );
}
