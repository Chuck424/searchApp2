import React from 'react';

const HelpPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Help & FAQs</h1>
      <div className="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <ul className="list-disc pl-5">
          <li className="mb-2">How do I perform a search?</li>
          <li className="mb-2">How can I save my search results?</li>
          <li className="mb-2">What do I do if I forget my password?</li>
          {/* Add more FAQ items here */}
        </ul>
      </div>
    </div>
  );
};

export default HelpPage;