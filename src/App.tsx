import "./App.css";
import QuoteDisplay from "./components/QuoteDisplay";
import { useState, createContext } from "react";
import RecipeDisplay from "./components/RecipeDisplay";

function App() {
  const [search, setSearch] = useState<string>("");
  const [spiritCategory, setSpiritCategory] = useState<string>("");
  const [recipe, setRecipe] = useState<any>([])

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
      <RecipeDisplay search={search} spiritCategory={spiritCategory} setRecipe={setRecipe}/>
    </div>
  );
}

export default App;
