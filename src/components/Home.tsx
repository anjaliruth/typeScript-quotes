import React, { useRef } from "react";
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
  fetchRecipesBySearch: () => Promise<void>;
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
  fetchRecipesBySearch,
}: HomeDisplayProps) {
  console.log("Search", search);
  return (
    <div>
      <h1 className="my-2 font-bold text-center text-3xl">Cocktail Recipes</h1>

      <div className=" flex bg-red-500 space-x-200" >
        <div className="flex items-center gap-2 bg-yellow-700 ">
          <input
            value={search}
            onChange={handleSearch}
            placeholder="Search cocktail"
            className="py-1 rounded ml-10"
          />
          <Link to={`/search/${search}`}>
            <button onClick={fetchRecipesBySearch}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </Link>
        </div>

        <div className=" flex  py-3 space-x-20 mx-auto px-0 bg-green-500">
          {spirits.map((spirit, i) => {
            return (
              <div key={i} className="">
                <Link to={`/${spirit}/collection`}>
                  <button
                    key={spirit}
                    value={spirit}
                    onClick={() => handleCategory(spirit)}
                    className={`text-white border-l px-5 border-red-500 hover:bg-pink-400  ${
                      i === spirits.length - 1 ? "border-r" : ""
                    }`}
                  >
                    {spirit}
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
