import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import SearchPage from './pages/SearchPage';
import ProfilePage from './pages/ProfilePage';
import HelpPage from './pages/HelpPage';
import SearchHistoryPage from './pages/SearchHistoryPage';
import SavedSearchesPage from './pages/SavedSearchesPage';
import NotificationsPage from './pages/NotificationsPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={isLoggedIn ? <Dashboard /> : <LoginPage setIsLoggedIn={setIsLoggedIn} />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/help" element={<HelpPage />} />
              <Route path="/search-history" element={<SearchHistoryPage />} />
              <Route path="/saved-searches" element={<SavedSearchesPage />} />
              <Route path="/notifications" element={<NotificationsPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;