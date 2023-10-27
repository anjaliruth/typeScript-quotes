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
  fetchRecipes: (apiURL: string) => Promise<void>
  handleAPIURL : () => void
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
  fetchRecipes, 
  handleAPIURL
}: CocktailDisplayProps) {
  const {spirit, drink} = useParams()
  

  console.log("SPIRIT", spirit)
  useEffect(() => {
handleAPIURL()
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




<h1>{spirit} Cocktails</h1>
      {isLoading && <p>Loading...</p>}
      {!isLoading &&
        result.map((cocktail, i) => {
          return (
            <div key={cocktail.idDrink}>
              <h2>{cocktail.strDrink}</h2>
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
             <Link to={`/${cocktail.strDrink}/recipe`} > <button onClick={()=>fetchRecipeByID(cocktail.idDrink)}>View Recipe</button>
             </Link>
            </div>
          );
        })}
    </div>
  );
}
