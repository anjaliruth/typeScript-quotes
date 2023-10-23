import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Recipe } from "../App";

interface CocktailDisplayProps {
  search: string;
  spiritCategory: string;
  setResult: React.Dispatch<React.SetStateAction<any>>;
  result: Recipe[];
  setRecipe: React.Dispatch<React.SetStateAction<any>>;
  recipe: Recipe[];
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
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
}: CocktailDisplayProps) {
  const {spirit} = useParams()
  
  async function fetchRecipes(apiURL: string): Promise<void> {
    try {
      const response = await fetch(apiURL);
      const data: any = await response.json();
      setResult(data.drinks);
    } catch (e) {
      console.error("Error fetching results:", e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    let apiURL = "";
    setIsLoading(true);
    if (spiritCategory) {
      apiURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${spiritCategory}`;
    } else if (search) {
      apiURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
    }

    if (apiURL) {
      fetchRecipes(apiURL);
    } else {
        // q: If we dont add the line below, we stil get api results after clearing the input field. 
        setResult([])
      setIsLoading(false);
    }
  }, [spiritCategory, search]);

  async function fetchRecipeByID(idDrink: string): Promise<void> {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
    );
    const data = await response.json();
    setRecipe(data.drinks[0]);
  }

  return (
    <div>

<h1>{spirit } Cocktails</h1>
      {isLoading && <p>Loading...</p>}
      {!isLoading &&
        result.map((cocktail, i) => {
          return (
            <div className="" key={cocktail.idDrink}>
              <h2>{cocktail.strDrink}</h2>
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
              <button onClick={()=>fetchRecipeByID(cocktail.idDrink)}>View Recipe</button>
            </div>
          );
        })}
    </div>
  );
}
