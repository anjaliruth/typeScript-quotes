import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Recipe } from "../App";

interface CocktailDisplayProps {
  search: string;
  spiritCategory: string;
  setResult: React.Dispatch<React.SetStateAction<any>>;
  result: Recipe[] | null;
  setRecipe: React.Dispatch<React.SetStateAction<any>>;
  recipe: Recipe;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  fetchRecipesByCategory: () => Promise<void>;
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
  const { spirit, drink } = useParams();

  console.log("SPIRIT", spirit);

  useEffect(() => {
    fetchRecipesByCategory();
  }, [spiritCategory]);

  async function fetchRecipeByID(idDrink: string): Promise<void> {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
    );
    const data = await response.json();
    setRecipe(data.drinks[0]);
  }

  return (
    <div className=" bg-gray-900">
      <h1 className="text-3xl font-bold text-center p-5 text-white">{spirit} Cocktails</h1>

      {isLoading ? (
        <span className="loader"></span>
      ) : result && result.length > 0 ? (
        <div className="grid grid-cols-3 m-auto gap-10 place-items-center w-3/5 text-center pb-10">
          {result.map((cocktail, i) => (
            <div key={cocktail.idDrink} className="flex flex-col items-center p-2 bg-blue-200 gap-4 rounded-[10px] h-[400px]">
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="w-5/5 max-lg  rounded-[8px] " />
              <div className="flex items-center h-[100px]">
              <h2 className="text-xl font-bold">{cocktail.strDrink}</h2>
              </div>
              <Link to={`/${cocktail.strDrink}/recipe`}>
                <button onClick={() => fetchRecipeByID(cocktail.idDrink)} className="mb-3 p-2 rounded bg-green-200">
                  🍸 View Recipe
                </button>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className=" text-2xl text-center font-medium">☹️ Sorry! No such cocktail found.</p>
      )}
    </div>
  );
}
