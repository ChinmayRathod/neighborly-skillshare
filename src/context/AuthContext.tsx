
import React, { createContext, useContext, useEffect, useState } from "react";
import { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

type AuthContextType = {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  // Updated return types to match actual Supabase response
  signIn: (email: string, password: string) => Promise<{
    error: any | null;
    data: { session: Session | null; user: User | null } | null;
  }>;
  signUp: (email: string, password: string, fullName: string, location: string) => Promise<{
    error: any | null;
    data: { session: Session | null; user: User | null } | null;
  }>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [authInitialized, setAuthInitialized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        setIsLoading(false);
        setAuthInitialized(true);
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      setIsLoading(false);
      setAuthInitialized(true);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    const response = await supabase.auth.signInWithPassword({ email, password });
    setIsLoading(false);
    return response;
  };

  const signUp = async (email: string, password: string, fullName: string, location: string) => {
    setIsLoading(true);
    const response = await supabase.auth.signUp({ 
      email, 
      password,
      options: {
        data: {
          name: fullName,
        }
      }
    });
    
    // If sign up is successful, update the profile with location
    if (response.data.session && response.data.user) {
      await supabase.from('profiles').update({
        location: location
      }).eq('id', response.data.user.id);
    }
    
    setIsLoading(false);
    return response;
  };

  const signOut = async () => {
    setIsLoading(true);
    await supabase.auth.signOut();
    setIsLoading(false);
    navigate("/signin");
  };

  const value = {
    user,
    session,
    isLoading,
    signIn,
    signUp,
    signOut
  };

  return (
    <AuthContext.Provider value={value}>
      {authInitialized ? children : (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-teal-500"></div>
        </div>
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
