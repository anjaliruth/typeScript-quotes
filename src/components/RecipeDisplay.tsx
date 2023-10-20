import React, { useEffect } from "react";
interface RecipeDisplayProps {
  search: string;
  spiritCategory: string;
  setRecipe: React.Dispatch<React.SetStateAction<any>>;
}

export default function RecipeDisplay({
  search,
  spiritCategory,
  setRecipe,
}: RecipeDisplayProps) {
  async function fetchByCategory(): Promise<void> {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${spiritCategory}`
    );

    const data: any = await response.json();

    setRecipe(data);
  }

  async function fetchBySearch(): Promise<void> {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${search}`
    );

    const data: any = await response.json();

    setRecipe(data);
  }

  useEffect(() => {
    fetchByCategory();
  }, [spiritCategory]);

  return <div>RecipeDisplay</div>;
}
