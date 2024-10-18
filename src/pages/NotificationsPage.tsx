import React from 'react';
import { Bell, CheckCircle, XCircle } from 'lucide-react';

interface Notification {
  id: string;
  message: string;
  timestamp: string;
  read: boolean;
}

const NotificationsPage: React.FC = () => {
  // Mock data for demonstration
  const notifications: Notification[] = [
    { id: '1', message: 'New search results available for "React hooks"', timestamp: '2023-04-15 14:30', read: false },
    { id: '2', message: 'Your saved search "TypeScript tutorial" has been updated', timestamp: '2023-04-14 10:15', read: true },
    { id: '3', message: 'New feature: Export search results as PDF', timestamp: '2023-04-13 16:45', read: false },
  ];

  const handleMarkAsRead = (id: string) => {
    // TODO: Implement mark as read functionality
    console.log(`Mark notification with id ${id} as read`);
  };

  const handleDelete = (id: string) => {
    // TODO: Implement delete functionality
    console.log(`Delete notification with id: ${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Notifications</h1>
      <ul className="space-y-4">
        {notifications.map((notification) => (
          <li key={notification.id} className={`bg-white dark:bg-gray-800 p-4 rounded-md shadow flex items-center justify-between ${notification.read ? 'opacity-50' : ''}`}>
            <div className="flex items-center">
              <Bell size={20} className={`${notification.read ? 'text-gray-500' : 'text-blue-500'} mr-3`} />
              <div>
                <p className="font-semibold">{notification.message}</p>
                <p className="text-sm text-gray-500">{notification.timestamp}</p>
              </div>
            </div>
            <div>
              {!notification.read && (
                <button
                  onClick={() => handleMarkAsRead(notification.id)}
                  className="text-green-500 hover:text-green-600 mr-3"
                >
                  <CheckCircle size={20} />
                </button>
              )}
              <button
                onClick={() => handleDelete(notification.id)}
                className="text-red-500 hover:text-red-600"
              >
                <XCircle size={20} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsPage;