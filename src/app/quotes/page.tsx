import { getQuotes } from './quote_list';
import QuoteDisplay from './quoteDisplay';
//serever component
// This file is a server component that fetches quotes and displays them using the QuoteDisplay component
export default async function QuotesPage() 
{
  const quotes = await getQuotes(); // running on the server
  
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Random Quote Generator</h1>
      <QuoteDisplay quotes={quotes} />
    </main>
  );
}
