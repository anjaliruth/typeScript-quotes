import "./App.css";
import QuoteDisplay from "./components/QuoteDisplay";
import { useState, createContext } from "react";
import RecipeDisplay from "./components/RecipeDisplay";

export interface Recipe {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate?: string;
  strTags?: string;
  strVideo?: string;
  strCategory?: string;
  strIBA?: string;
  strAlcoholic?: string;
  strGlass?: string;
  strInstructions?: string;
  strInstructionsES?: string;
  strInstructionsDE?: string;
  strInstructionsFR?: string;
  strInstructionsIT?: string;
  strInstructionsZH_HANS?: string;
  strInstructionsZH_HANT?: string;
  strDrinkThumb?: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strIngredient9?: string;
  strIngredient10?: string;
  strIngredient11?: string;
  strIngredient12?: string;
  strIngredient13?: string;
  strIngredient14?: string;
  strIngredient15?: string;
  strMeasure1?: string;
  strMeasure2?: string;
  strMeasure3?: string;
  strMeasure4?: string;
  strMeasure5?: string;
  strMeasure6?: string;
  strMeasure7?: string;
  strMeasure8?: string;
  strMeasure9?: string;
  strMeasure10?: string;
  strMeasure11?: string;
  strMeasure12?: string;
  strMeasure13?: string;
  strMeasure14?: string;
  strMeasure15?: string;
  strImageSource?: string;
  strImageAttribution?: string;
  strCreativeCommonsConfirmed?: string;
  dateModified?: string;
}

function App() {
  const [search, setSearch] = useState<string>("");
  const [spiritCategory, setSpiritCategory] = useState<string>("");
  const [recipe, setRecipe] = useState<Recipe[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)


  console.log(search);
  console.log(spiritCategory);
  console.log(recipe)
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function handleCategory(e: React.ChangeEvent<HTMLSelectElement>) {
    setSpiritCategory(e.target.value);
  }

  return (
    <div className="App">
      <h1>Cocktail Recipes</h1>
      <input onChange={handleSearch} />
      <select onChange={handleCategory}>
        <option value="">Choose your spirit</option>
        <option value="Rum">Rum</option>
        <option value="Whisky">Whisky</option>
        <option value="Vodka">Vodka</option>
        <option value="Gin">Gin</option>
      </select>
      <RecipeDisplay search={search} spiritCategory={spiritCategory} setRecipe={setRecipe} recipe={recipe} isLoading={isLoading} setIsLoading={setIsLoading}/>
    </div>
  );
}

export default App;
