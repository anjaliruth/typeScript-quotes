import React from "react";
import { Link } from "react-router-dom";
interface HomeDisplayProps {
  search: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) =>void;
  handleCategory: (spirit:string)=>void;
}
export default function Home({handleSearch, search, handleCategory}: HomeDisplayProps) {
  const spirits = ["Vodka", "Rum", "Whiskey", "Gin"];
  return (
    <div>
      <h1>Cocktail Recipes</h1>

      <input onChange={handleSearch} value={search} />

      {spirits.map((spirit, i) => {
        return (
          <div key={i}>
            <Link to={ `/${spirit}`}>
            <button
              key={spirit}
              value={spirit}
              onClick={() => handleCategory(spirit)}
            >
              {spirit}
            </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
