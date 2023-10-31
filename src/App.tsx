
import { useState } from "react";
import RecipeDisplay from "./components/RecipeDisplay";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import CocktailDisplay from "./components/CocktailDisplay";
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
  [key: string]: string | null | undefined;
}
export const spirits = ["Vodka", "Rum", "Whiskey", "Gin", "Tequila"];
function App() {
  const [search, setSearch] = useState<string>("");
  const [spiritCategory, setSpiritCategory] = useState<string>("");
  const [result, setResult] = useState<Recipe[]>([]);
  const [recipe, setRecipe] = useState<Recipe>({} as Recipe);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  console.log(search);
  console.log(spiritCategory);
  console.log(result);
  console.log("recipe:", recipe);
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>): void {
    setSearch(e.target.value);
  }

  function handleCategory(spirit: string): void {
    setSpiritCategory(spirit);
  }

  async function fetchRecipesByCategory(): Promise<void> {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${spiritCategory}`);
      const data: any = await response.json();
      setResult(data.drinks);
    } catch (e) {
      console.error("Error fetching results:", e);
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchRecipesBySearch(): Promise<void> {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
      const data: any = await response.json();
      setResult(data.drinks);
    } catch (e) {
      console.error("Error fetching results:", e);
    } finally {
      setIsLoading(false);
      setSearch("")
    }
  }

  return (
    <div className="bg-gray-900 h-[150vh]">
      <NavBar
        handleCategory={handleCategory}
        handleSearch={handleSearch}
        search={search}
        spiritCategory={spiritCategory}
        setResult={setResult}
        result={result}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        recipe={recipe}
        setRecipe={setRecipe}
        fetchRecipesBySearch={fetchRecipesBySearch}
      />
      <Routes>

<Route path="/" element={<HomePage/>}/>

        {recipe && (
          <Route
            path="/:drink/recipe"
            element={<RecipeDisplay recipe={recipe} />}
          />
        )}

       
          <Route
            path="search/:drink"
            element={ <CocktailDisplay
              search={search}
              spiritCategory={spiritCategory}
              setResult={setResult}
              result={result}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              recipe={recipe}
              setRecipe={setRecipe}
              fetchRecipesByCategory={fetchRecipesByCategory}

            />}
          />
 

        <Route
          path="/:spirit/collection"
          element={
            <CocktailDisplay
              search={search}
              spiritCategory={spiritCategory}
              setResult={setResult}
              result={result}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              recipe={recipe}
              setRecipe={setRecipe}
              fetchRecipesByCategory={fetchRecipesByCategory}
      
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
