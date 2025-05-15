
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const location = useLocation();
  const { user, signOut } = useAuth();
  
  // Check if current path starts with /messages to highlight the Messages tab
  const isMessagesActive = location.pathname.startsWith('/messages');
  
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
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
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  Messages
                </Link>
              </div>
            )}
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {user ? (
              <div className="ml-3 relative flex space-x-2">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
