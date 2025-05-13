
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const ConversationDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [messageText, setMessageText] = useState("");
  
  // Find the conversation based on the id
  const conversation = mockConversations.find(c => c.id === id);
  
  if (!conversation) {
    return (
      <div className="flex flex-col h-screen justify-center items-center">
        <p className="text-gray-500 mb-4">Conversation not found</p>
        <Button onClick={() => navigate("/messages")}>Back to Messages</Button>
      </div>
    );
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageText.trim()) return;
    
    // In a real app, this would send the message to Firebase
    console.log(`Sending message in conversation ${id}: ${messageText}`);
    
    // Clear the input
    setMessageText("");
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="bg-white border-b px-4 py-3 flex items-center">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate("/messages")}
          className="mr-2"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        
        <Avatar className="h-10 w-10 mr-3">
          <AvatarFallback className="bg-teal-100 text-teal-800">
            {conversation.with.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        
        <div>
          <h2 className="text-base font-medium">{conversation.with.name}</h2>
          <p className="text-sm text-gray-500">{conversation.with.skills}</p>
        </div>
      </div>
      
      {/* Messages */}
      <ScrollArea className="flex-grow p-4 bg-gray-50">
        <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
          {conversation.messages.map((message, idx) => (
            <div
              key={idx}
              className={`flex ${
                message.sender === "me" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] p-3 rounded-lg ${
                  message.sender === "me"
                    ? "bg-teal-500 text-white"
                    : "bg-white border"
                }`}
              >
                {message.text}
                <div
                  className={`text-xs mt-1 ${
                    message.sender === "me" ? "text-teal-100" : "text-gray-400"
                  }`}
                >
                  {message.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      
      {/* Input Area */}
      <div className="p-4 border-t bg-white">
        <form onSubmit={handleSendMessage} className="flex space-x-2 max-w-3xl mx-auto">
          <Input
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            placeholder="Type a message..."
            className="flex-grow"
          />
          <Button type="submit" disabled={!messageText.trim()}>
            Send
          </Button>
        </form>
      </div>
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

export default ConversationDetail;
