import React from 'react';
import { Clock, Search, Trash2 } from 'lucide-react';

interface SearchHistoryItem {
  id: string;
  query: string;
  timestamp: string;
}

const SearchHistoryPage: React.FC = () => {
  // Mock data for demonstration
  const searchHistory: SearchHistoryItem[] = [
    { id: '1', query: 'React hooks', timestamp: '2023-04-15 14:30' },
    { id: '2', query: 'TypeScript tutorial', timestamp: '2023-04-14 10:15' },
    { id: '3', query: 'Tailwind CSS examples', timestamp: '2023-04-13 16:45' },
  ];

  const handleDelete = (id: string) => {
    // TODO: Implement delete functionality
    console.log(`Delete search history item with id: ${id}`);
  };

  const handleSearch = (query: string) => {
    // TODO: Implement search functionality
    console.log(`Perform search with query: ${query}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search History</h1>
      <ul className="space-y-4">
        {searchHistory.map((item) => (
          <li key={item.id} className="bg-white dark:bg-gray-800 p-4 rounded-md shadow flex items-center justify-between">
            <div className="flex items-center">
              <Clock size={20} className="text-gray-500 mr-3" />
              <div>
                <p className="font-semibold">{item.query}</p>
                <p className="text-sm text-gray-500">{item.timestamp}</p>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleSearch(item.query)}
                className="text-blue-500 hover:text-blue-600 mr-3"
              >
                <Search size={20} />
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="text-red-500 hover:text-red-600"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistoryPage;