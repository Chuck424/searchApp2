import React from 'react';
import { Bookmark, Search, Trash2 } from 'lucide-react';

interface SavedSearch {
  id: string;
  name: string;
  query: string;
}

const SavedSearchesPage: React.FC = () => {
  // Mock data for demonstration
  const savedSearches: SavedSearch[] = [
    { id: '1', name: 'Important React Resources', query: 'React best practices' },
    { id: '2', name: 'TypeScript Tips', query: 'TypeScript advanced features' },
    { id: '3', name: 'CSS Tricks', query: 'CSS layout techniques' },
  ];

  const handleDelete = (id: string) => {
    // TODO: Implement delete functionality
    console.log(`Delete saved search with id: ${id}`);
  };

  const handleSearch = (query: string) => {
    // TODO: Implement search functionality
    console.log(`Perform search with query: ${query}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Saved Searches</h1>
      <ul className="space-y-4">
        {savedSearches.map((search) => (
          <li key={search.id} className="bg-white dark:bg-gray-800 p-4 rounded-md shadow flex items-center justify-between">
            <div className="flex items-center">
              <Bookmark size={20} className="text-blue-500 mr-3" />
              <div>
                <p className="font-semibold">{search.name}</p>
                <p className="text-sm text-gray-500">{search.query}</p>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleSearch(search.query)}
                className="text-blue-500 hover:text-blue-600 mr-3"
              >
                <Search size={20} />
              </button>
              <button
                onClick={() => handleDelete(search.id)}
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

export default SavedSearchesPage;