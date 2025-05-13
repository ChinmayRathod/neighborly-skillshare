
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState<string | null>("conversation1");
  const [messageText, setMessageText] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageText.trim() || !selectedConversation) return;
    
    // In a real app, this would send the message to Firebase
    console.log(`Sending message in conversation ${selectedConversation}: ${messageText}`);
    
    // Clear the input
    setMessageText("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-8">Messages</h1>
          
          <div className="flex h-[600px] border rounded-lg overflow-hidden">
            {/* Conversation List */}
            <div className="w-1/3 border-r bg-gray-50">
              <div className="p-4">
                <Input placeholder="Search conversations..." className="mb-4" />
              </div>
              <div className="overflow-y-auto h-[calc(600px-80px)]">
                {mockConversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`p-4 cursor-pointer hover:bg-gray-100 ${
                      selectedConversation === conversation.id ? "bg-gray-200" : ""
                    }`}
                    onClick={() => setSelectedConversation(conversation.id)}
                  >
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 font-bold">
                        {conversation.with.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="font-medium">{conversation.with.name}</div>
                        <div className="text-sm text-gray-500 truncate">{conversation.lastMessage}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Message Area */}
            <div className="w-2/3 flex flex-col">
              {selectedConversation ? (
                <>
                  {/* Conversation Header */}
                  <div className="p-4 border-b bg-white flex items-center">
                    <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 font-bold">
                      {mockConversations.find(c => c.id === selectedConversation)?.with.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <div className="font-medium">
                        {mockConversations.find(c => c.id === selectedConversation)?.with.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {mockConversations.find(c => c.id === selectedConversation)?.with.skills}
                      </div>
                    </div>
                  </div>
                  
                  {/* Messages */}
                  <div className="flex-grow p-4 overflow-y-auto bg-gray-50 space-y-4">
                    {mockConversations
                      .find(c => c.id === selectedConversation)
                      ?.messages.map((message, idx) => (
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
                  
                  {/* Input Area */}
                  <div className="p-4 border-t bg-white">
                    <form onSubmit={handleSendMessage} className="flex space-x-2">
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
                </>
              ) : (
                <div className="flex-grow flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <div className="text-gray-400 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-500">Select a conversation to start messaging</h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-100 py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} SkillSwap. All rights reserved.</p>
        </div>
      </footer>
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

export default Messages;
