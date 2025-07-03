'use client';
import { useState } from 'react';

type Quote = 
{
  text: string;
  author?: string;
};

export default function QuoteDisplay({ quotes }: { quotes: Quote[] }) 
{
  const [quote, setQuote] = useState<Quote | null>(null);

  const handleGenerate = () => 
 {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="bg-white p-4 rounded shadow max-w-md">
      <button
        onClick={handleGenerate}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        Generate Quote
      </button>

      {quote && (
        <div>
          <p className="text-xl italic">"{quote.text}"</p>
          {quote.author && <p className="text-right mt-2">- {quote.author}</p>}
        </div>
      )}
    </div>
  );
}
