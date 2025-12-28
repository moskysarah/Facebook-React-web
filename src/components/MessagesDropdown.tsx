import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface Message {
  id: number;
  sender: string;
  avatar: string;
  message: string;
  time: string;
  unread: boolean;
}

const mockMessages: Message[] = [
  {
    id: 1,
    sender: 'John Doe',
    avatar: '/profil/IMG_20250416_085619.jpg',
    message: 'Hey! How are you doing?',
    time: '2m',
    unread: true
  },
  {
    id: 2,
    sender: 'Sarah Smith',
    avatar: '/profil/facebook logo 1.png',
    message: 'Thanks for the invite!',
    time: '1h',
    unread: false
  },
  {
    id: 3,
    sender: 'Mike Johnson',
    avatar: '/profil/IMG_20250416_085619.jpg',
    message: 'See you tomorrow!',
    time: '3h',
    unread: true
  }
];

export default function MessagesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(mockMessages);

  const unreadCount = messages.filter(m => m.unread).length;

  const markAsRead = (id: number) => {
    setMessages(prev =>
      prev.map(m => m.id === id ? { ...m, unread: false } : m)
    );
  };

  const removeMessage = (id: number) => {
    setMessages(prev => prev.filter(m => m.id !== id));
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative text-[#E2E5E9] hover:text-[#0866FF] cursor-pointer p-2 rounded-full hover:bg-[#3B3B3B] transition-colors"
      >
        <MessageCircle size={24} />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-[#252728] border border-[#3B3B3B] rounded-lg shadow-lg z-50">
          <div className="p-4 border-b border-[#3B3B3B]">
            <h3 className="text-[#E2E5E9] font-semibold">Messages</h3>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {messages.length === 0 ? (
              <div className="p-4 text-center text-[#B0B3B8]">
                No messages
              </div>
            ) : (
              messages.map(message => (
                <div
                  key={message.id}
                  className={`p-3 border-b border-[#3B3B3B] hover:bg-[#2C2F33] cursor-pointer ${
                    message.unread ? 'bg-[#1E1F20]' : ''
                  }`}
                  onClick={() => markAsRead(message.id)}
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={message.avatar}
                      alt={message.sender}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <p className="text-[#E2E5E9] font-medium text-sm truncate">
                          {message.sender}
                        </p>
                        <div className="flex items-center space-x-2">
                          <span className="text-[#B0B3B8] text-xs">{message.time}</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeMessage(message.id);
                            }}
                            className="text-[#B0B3B8] hover:text-[#E2E5E9]"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      </div>
                      <p className="text-[#B0B3B8] text-sm truncate mt-1">
                        {message.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {messages.length > 0 && (
            <div className="p-3 border-t border-[#3B3B3B] text-center">
              <button className="text-[#0866FF] hover:underline text-sm">
                See All Messages
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
