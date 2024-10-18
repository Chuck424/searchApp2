import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, FileText, Bell } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link to="/search" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Search className="w-12 h-12 mb-4 text-blue-500" />
          <h2 className="text-xl font-semibold mb-2">Quick Search</h2>
          <p className="text-gray-600 dark:text-gray-400">Start a new search across all indexed data.</p>
        </Link>
        <Link to="/search-history" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Clock className="w-12 h-12 mb-4 text-green-500" />
          <h2 className="text-xl font-semibold mb-2">Search History</h2>
          <p className="text-gray-600 dark:text-gray-400">View and manage your recent searches.</p>
        </Link>
        <Link to="/saved-searches" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <FileText className="w-12 h-12 mb-4 text-yellow-500" />
          <h2 className="text-xl font-semibold mb-2">Saved Searches</h2>
          <p className="text-gray-600 dark:text-gray-400">Access your saved search queries.</p>
        </Link>
        <Link to="/notifications" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Bell className="w-12 h-12 mb-4 text-red-500" />
          <h2 className="text-xl font-semibold mb-2">Notifications</h2>
          <p className="text-gray-600 dark:text-gray-400">Check your latest alerts and updates.</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;