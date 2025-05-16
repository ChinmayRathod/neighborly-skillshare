
import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface ChatIconProps {
  className?: string;
}

const ChatIcon = ({ className = "" }: ChatIconProps) => {
  const [unreadCount, setUnreadCount] = useState(0);

  // Simulate fetching unread messages
  // In a real app, this would connect to your chat service
  useEffect(() => {
    // Mock data - in a real app, you would fetch this from an API
    setUnreadCount(3);
    
    // You could set up a real-time listener here
    const interval = setInterval(() => {
      // Simulate message activity by randomly changing the count
      if (Math.random() > 0.7) {
        setUnreadCount(prev => Math.min(prev + 1, 9));
      }
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <Link 
      to="/messages" 
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 bg-teal-600 text-white rounded-full p-3 md:p-4 shadow-lg hover:bg-teal-500 transition-colors ${className}`}
    >
      <MessageCircle size={24} />
      {unreadCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
          {unreadCount}
        </span>
      )}
    </Link>
  );
};

export default ChatIcon;
