import React, { useState } from 'react';
import { Search, Download, ChevronDown } from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  content: string;
  url: string; // Added URL field for the search result
}

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  // const [suggestions, setSuggestions] = useState<string[]>([]); // Commented out
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [showExportOptions, setShowExportOptions] = useState(false);
  const resultsPerPage = 10;

  // useEffect(() => {
  //   if (query.length > 2) {
  //     // TODO: Implement real-time suggestions
  //     const mockSuggestions = ['suggestion 1', 'suggestion 2', 'suggestion 3'];
  //     setSuggestions(mockSuggestions);
  //   } else {
  //     setSuggestions([]);
  //   }
  // }, [query]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual search logic with Elasticsearch
    const mockResults: SearchResult[] = Array.from({ length: 25 }, (_, i) => ({
      id: `result-${i + 1}`,
      title: `Result ${i + 1}`,
      content: `This is the content of result ${i + 1}.`,
      url: `https://example.com/result-${i + 1}` // Mock URL for each result
    }));
    setResults(mockResults);
    setTotalResults(mockResults.length);
    setCurrentPage(1);
  };

  const handleExport = (format: 'csv' | 'pdf') => {
    // TODO: Implement actual export logic
    console.log(`Exporting results in ${format} format...`);
    setShowExportOptions(false);
  };

  const pageCount = Math.ceil(totalResults / resultsPerPage);
  const paginatedResults = results.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Search</h1>
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter your search query"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Search size={20} />
          </button>
        </div>
      </form>
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Search Results</h2>
          {results.length > 0 && (
            <div className="relative">
              <button
                onClick={() => setShowExportOptions(!showExportOptions)}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center"
              >
                <Download size={20} className="mr-2" />
                Export Results
                <ChevronDown size={20} className="ml-2" />
              </button>
              {showExportOptions && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <button
                      onClick={() => handleExport('csv')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      role="menuitem"
                    >
                      Export as CSV
                    </button>
                    <button
                      onClick={() => handleExport('pdf')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      role="menuitem"
                    >
                      Export as PDF
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        {paginatedResults.length > 0 ? (
          <>
            <ul className="space-y-4">
              {paginatedResults.map((result) => (
                <li key={result.id} className="bg-white dark:bg-gray-800 p-4 rounded-md shadow">
                  <a
                    href={result.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150 ease-in-out"
                  >
                    <h3 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">{result.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{result.content}</p>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex justify-center">
              {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`mx-1 px-3 py-1 rounded ${
                    currentPage === page
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">No results found. Try a different search query.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;