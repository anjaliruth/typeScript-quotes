import React from "react";
import { Link } from "react-router-dom";
import { spirits } from "../App";
import CocktailDisplay from "./CocktailDisplay";
import { Recipe } from "../App";
interface HomeDisplayProps {
  search: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCategory: (spirit: string) => void;
  spiritCategory: string;
  setResult: React.Dispatch<React.SetStateAction<any>>;
  result: Recipe[];
  setRecipe: React.Dispatch<React.SetStateAction<any>>;
  recipe: Recipe;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
}
export default function Home({
  handleSearch,
  search,
  handleCategory,
  spiritCategory,
  setResult,
  result,
  setIsLoading,
  isLoading,
  recipe,
  setRecipe,
}: HomeDisplayProps) {
  return (
    <div>
      <h1>Cocktail Recipes</h1>

      <input onChange={handleSearch} value={search} />

      {spirits.map((spirit, i) => {
        return (
          <div key={i}>
            <Link to={`/${spirit}/collection`}>
              <button
                key={spirit}
                value={spirit}
                onClick={() => handleCategory(spirit)}
              >
                {spirit}
              </button>
            </Link>

            {search ? (
              <CocktailDisplay
                search={search}
                spiritCategory={spiritCategory}
                setResult={setResult}
                result={result}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                recipe={recipe}
                setRecipe={setRecipe}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
