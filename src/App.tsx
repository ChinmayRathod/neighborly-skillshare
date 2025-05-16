
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Explore from "./pages/Explore";
import Matches from "./pages/Matches";
import ConversationList from "./pages/ConversationList";
import ConversationDetail from "./pages/ConversationDetail";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import ChatIcon from "./components/ChatIcon";
import { useAuth } from "./context/AuthContext";

const queryClient = new QueryClient();

// ChatIconWrapper component to conditionally render the chat icon
const ChatIconWrapper = () => {
  const { user } = useAuth();
  return user ? <ChatIcon /> : null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            
            {/* Protected routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/explore" element={<Explore />} />
              <Route path="/matches" element={<Matches />} />
              <Route path="/messages" element={<ConversationList />} />
              <Route path="/messages/:id" element={<ConversationDetail />} />
            </Route>
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
