
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const ConversationList = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConversations = mockConversations.filter(conversation =>
    conversation.with.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleConversationClick = (id: string) => {
    navigate(`/messages/${id}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Messages</h1>
            <MessageSquare className="h-6 w-6 text-teal-500" />
          </div>
          
          <div className="mb-4">
            <Input 
              placeholder="Search conversations..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          
          <ScrollArea className="h-[calc(100vh-220px)] pr-4">
            <div className="space-y-2">
              {filteredConversations.length > 0 ? (
                filteredConversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => handleConversationClick(conversation.id)}
                  >
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarFallback className="bg-teal-100 text-teal-800">
                          {conversation.with.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="text-base font-medium text-gray-900 truncate">
                            {conversation.with.name}
                          </h3>
                          <span className="text-xs text-gray-500">
                            {conversation.lastMessageTime}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 truncate">
                          {conversation.lastMessage}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No conversations found</p>
                </div>
              )}
            </div>
          </ScrollArea>
        </div>
      </main>
    </div>
  );
};

const mockConversations = [
  {
    id: "conversation1",
    with: {
      name: "Alex Morgan",
      skills: "Photography, Graphic Design"
    },
    lastMessage: "How about meeting this Saturday?",
    lastMessageTime: "Yesterday",
    messages: [
      {
        sender: "them",
        text: "Hey there! I saw that you're interested in learning photography.",
        time: "Yesterday, 2:30 PM"
      },
      {
        sender: "me",
        text: "Yes! I've been wanting to get better at taking portraits specifically.",
        time: "Yesterday, 2:35 PM"
      },
      {
        sender: "them",
        text: "I'd be happy to teach you some basics! I've been doing portrait photography for about 5 years now.",
        time: "Yesterday, 2:38 PM"
      },
      {
        sender: "me",
        text: "That sounds great! I can teach you graphic design in exchange as you mentioned you wanted to learn that.",
        time: "Yesterday, 2:42 PM"
      },
      {
        sender: "them",
        text: "Perfect! When would be a good time for our first session?",
        time: "Yesterday, 2:45 PM"
      },
      {
        sender: "me",
        text: "I'm free most weekends. Would that work for you?",
        time: "Yesterday, 3:00 PM"
      },
      {
        sender: "them",
        text: "How about meeting this Saturday?",
        time: "Yesterday, 3:05 PM"
      }
    ]
  },
  {
    id: "conversation2",
    with: {
      name: "Jordan Lee",
      skills: "Yoga Instruction, Meditation"
    },
    lastMessage: "I can definitely help you learn yoga basics!",
    lastMessageTime: "2 days ago",
    messages: [
      {
        sender: "me",
        text: "Hi Jordan! I saw that you teach yoga. I've been wanting to learn but don't know where to start.",
        time: "2 days ago, 10:15 AM"
      },
      {
        sender: "them",
        text: "Hello! I'd be happy to help you get started with yoga. It's a great practice for both body and mind.",
        time: "2 days ago, 10:30 AM"
      },
      {
        sender: "them",
        text: "I can definitely help you learn yoga basics!",
        time: "2 days ago, 10:32 AM"
      }
    ]
  },
  {
    id: "conversation3",
    with: {
      name: "Sam Johnson",
      skills: "Carpentry, Home Repair"
    },
    lastMessage: "Looking forward to our session next week!",
    lastMessageTime: "1 week ago",
    messages: [
      {
        sender: "them",
        text: "Hi there! I noticed you're interested in learning some carpentry.",
        time: "1 week ago, 9:20 AM"
      },
      {
        sender: "me",
        text: "Yes, I've been wanting to build some basic furniture but don't know where to start.",
        time: "1 week ago, 9:45 AM"
      },
      {
        sender: "them",
        text: "We could start with something simple like a small shelf or stool. I have all the tools we'd need.",
        time: "1 week ago, 10:00 AM"
      },
      {
        sender: "me",
        text: "That sounds perfect! And I can help you with cooking as you mentioned in your profile.",
        time: "1 week ago, 10:15 AM"
      },
      {
        sender: "them",
        text: "Great! Let's schedule our first session for next week then.",
        time: "1 week ago, 10:30 AM"
      },
      {
        sender: "me",
        text: "Works for me! I'll bring some recipes we can go through.",
        time: "1 week ago, 10:35 AM"
      },
      {
        sender: "them",
        text: "Looking forward to our session next week!",
        time: "1 week ago, 10:40 AM"
      }
    ]
  }
];

export default ConversationList;
