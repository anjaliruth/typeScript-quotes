import React, { useState} from "react";

export default function QuoteDisplay() {
  const [quoteData, setQuoteData] = useState<any>([]);
  console.log(quoteData);
  function getRandomInt(max: number): number {
    const index = Math.floor(Math.random() * max);
    return index;
  }

  async function fetchQuote(): Promise<void> {
    try {
      const response = await fetch("https://type.fit/api/quotes");
      const data: any[] = await response.json();
      setQuoteData(data[getRandomInt(data.length)]);
    } catch (error) {
      console.error("Error fetching request", error);
    }
  }

  return (
    <div>
      <h1>{quoteData.text ? quoteData.text : "Click here for a quote"}</h1>
      <button onClick={fetchQuote}> Get quote </button>
    </div>
  );
}
