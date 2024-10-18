import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, HelpCircle, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

interface HeaderProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">SearchApp</Link>
        <div className="flex items-center space-x-4">
          {isLoggedIn && (
            <>
              <Link to="/search" className="hover:text-blue-500"><Search size={20} /></Link>
              <Link to="/profile" className="hover:text-blue-500"><User size={20} /></Link>
            </>
          )}
          <Link to="/help" className="hover:text-blue-500"><HelpCircle size={20} /></Link>
          <button onClick={toggleTheme} className="hover:text-blue-500">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          {isLoggedIn ? (
            <button
              onClick={() => setIsLoggedIn(false)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;