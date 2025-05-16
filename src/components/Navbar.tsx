
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { Menu, X, MessageCircle, Bell } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const location = useLocation();
  const { user, signOut } = useAuth();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Check if current path starts with /messages to highlight the Messages tab
  const isMessagesActive = location.pathname.startsWith('/messages');
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Desktop Navigation */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-teal-600 font-bold text-xl">SkillSwap</span>
            </Link>
            {user && (
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  to="/explore"
                  className={`border-transparent ${
                    location.pathname === "/explore" 
                      ? "border-teal-500 text-gray-900" 
                      : "text-gray-500 hover:border-teal-500 hover:text-gray-700"
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  Explore
                </Link>
                <Link
                  to="/matches"
                  className={`border-transparent ${
                    location.pathname === "/matches" 
                      ? "border-teal-500 text-gray-900" 
                      : "text-gray-500 hover:border-teal-500 hover:text-gray-700"
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  Matches
                </Link>
                <Link
                  to="/messages"
                  className={`border-transparent ${
                    isMessagesActive
                      ? "border-teal-500 text-gray-900" 
                      : "text-gray-500 hover:border-teal-500 hover:text-gray-700"
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium relative`}
                >
                  Messages
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                </Link>
              </div>
            )}
          </div>
          
          {/* Desktop Authentication Buttons */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {user ? (
              <div className="ml-3 relative flex space-x-2">
                <Link to="/messages" className="relative mr-4">
                  <MessageCircle className="h-6 w-6 text-gray-500 hover:text-teal-500" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                </Link>
                <Button variant="outline" onClick={signOut}>Sign Out</Button>
              </div>
            ) : (
              <div className="ml-3 relative flex space-x-2">
                <Link to="/signin">
                  <Button variant="outline">Sign In</Button>
                </Link>
                <Link to="/signup">
                  <Button>Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-teal-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200 py-2">
          {user ? (
            <div className="space-y-1 px-4">
              <Link
                to="/explore"
                onClick={() => setMobileMenuOpen(false)}
                className={`${
                  location.pathname === "/explore" ? "bg-teal-50 text-teal-600" : "text-gray-600"
                } block py-2 px-3 rounded-md text-base font-medium`}
              >
                Explore
              </Link>
              <Link
                to="/matches"
                onClick={() => setMobileMenuOpen(false)}
                className={`${
                  location.pathname === "/matches" ? "bg-teal-50 text-teal-600" : "text-gray-600"
                } block py-2 px-3 rounded-md text-base font-medium`}
              >
                Matches
              </Link>
              <Link
                to="/messages"
                onClick={() => setMobileMenuOpen(false)}
                className={`${
                  isMessagesActive ? "bg-teal-50 text-teal-600" : "text-gray-600"
                } block py-2 px-3 rounded-md text-base font-medium flex justify-between items-center`}
              >
                <span>Messages</span>
                <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </Link>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  signOut();
                }}
                className="text-gray-600 block w-full text-left py-2 px-3 rounded-md text-base font-medium"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="space-y-1 px-4">
              <Link
                to="/signin"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-600 block py-2 px-3 rounded-md text-base font-medium"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-3 rounded-md text-base font-medium bg-teal-500 text-white"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
