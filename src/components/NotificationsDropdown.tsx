import { useState } from 'react';
import { Bell, X } from 'lucide-react';

interface Notification {
  id: number;
  type: 'like' | 'comment' | 'friend_request' | 'other';
  sender: string;
  avatar: string;
  message: string;
  time: string;
  unread: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: 1,
    type: 'like',
    sender: 'John Doe',
    avatar: '/profil/IMG_20250416_085619.jpg',
    message: 'liked your post',
    time: '5m',
    unread: true
  },
  {
    id: 2,
    type: 'comment',
    sender: 'Sarah Smith',
    avatar: '/profil/facebook logo 1.png',
    message: 'commented on your photo',
    time: '1h',
    unread: false
  },
  {
    id: 3,
    type: 'friend_request',
    sender: 'Mike Johnson',
    avatar: '/profil/IMG_20250416_085619.jpg',
    message: 'sent you a friend request',
    time: '2h',
    unread: true
  }
];

export default function NotificationsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);

  const unreadCount = notifications.filter(n => n.unread).length;

  const markAsRead = (id: number) => {
    setNotifications(prev =>
      prev.map(n => n.id === id ? { ...n, unread: false } : n)
    );
  };

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative text-[#E2E5E9] hover:text-[#0866FF] cursor-pointer p-2 rounded-full hover:bg-[#3B3B3B] transition-colors"
      >
        <Bell size={24} />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-[#252728] border border-[#3B3B3B] rounded-lg shadow-lg z-50">
          <div className="p-4 border-b border-[#3B3B3B]">
            <h3 className="text-[#E2E5E9] font-semibold">Notifications</h3>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-4 text-center text-[#B0B3B8]">
                No notifications
              </div>
            ) : (
              notifications.map(notification => (
                <div
                  key={notification.id}
                  className={`p-3 border-b border-[#3B3B3B] hover:bg-[#2C2F33] cursor-pointer ${
                    notification.unread ? 'bg-[#1E1F20]' : ''
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={notification.avatar}
                      alt={notification.sender}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <p className="text-[#E2E5E9] font-medium text-sm truncate">
                          {notification.sender}
                        </p>
                        <div className="flex items-center space-x-2">
                          <span className="text-[#B0B3B8] text-xs">{notification.time}</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeNotification(notification.id);
                            }}
                            className="text-[#B0B3B8] hover:text-[#E2E5E9]"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      </div>
                      <p className="text-[#B0B3B8] text-sm truncate mt-1">
                        {notification.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {notifications.length > 0 && (
            <div className="p-3 border-t border-[#3B3B3B] text-center">
              <button className="text-[#0866FF] hover:underline text-sm">
                See All Notifications
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
