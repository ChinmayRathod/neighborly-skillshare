
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { signIn, isLoading, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get redirect path from location state or default to explore
  const from = location.state?.from?.pathname || "/explore";

  // Use useEffect to handle navigation
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }
    
    try {
      const { error } = await signIn(formData.email, formData.password);
      
      if (error) {
        toast.error(error.message || "Failed to sign in");
      } else {
        toast.success("Signed in successfully!");
        // Don't navigate here, let the useEffect handle it
      }
    } catch (err) {
      console.error("Sign in error:", err);
      toast.error("An unexpected error occurred");
    }
  };

  // Don't navigate inline, return null after rendering is complete if already authenticated
  if (user && !isLoading) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Sign in to your account</CardTitle>
              <CardDescription>
                Welcome back to SkillSwap
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link to="/forgot-password" className="text-sm text-teal-600 hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
                
                <div className="text-center text-sm text-gray-500">
                  Don't have an account yet?{" "}
                  <Link to="/signup" className="text-teal-600 hover:underline">
                    Sign up
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Signin;
