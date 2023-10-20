import React, { useEffect } from "react";
import { Recipe } from "../App";

interface RecipeDisplayProps {
  search: string;
  spiritCategory: string;
  setRecipe: React.Dispatch<React.SetStateAction<any>>;
  recipe: Recipe[];
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  isLoading: boolean
}

export default function RecipeDisplay({
  search,
  spiritCategory,
  setRecipe,
  recipe, setIsLoading, isLoading
}: RecipeDisplayProps) {
  async function fetchRecipes(apiURL: string): Promise<void> {
    try {
      const response = await fetch(apiURL);
      const data: any = await response.json();
      setRecipe(data.drinks);
    } catch (e) {
      console.error("Error fetching results:", e);
    } finally{
      setIsLoading(false)
    }
  }

  useEffect(() => {
    let apiURL = "";
    setIsLoading(true)
    if (spiritCategory) {
      apiURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${spiritCategory}`;
    } else if (search) {
      apiURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
    }

    if (apiURL) {
      fetchRecipes(apiURL);
    }

    else{
      setRecipe([])
      setIsLoading(false)
    }
  }, [spiritCategory, search]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && recipe.map((cocktail, i) => {
        return (

          <div className="" key={i}>
            <h2>{cocktail.strDrink}</h2>
          </div>
        );
      })}
    </div>
  );
}
