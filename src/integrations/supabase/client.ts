// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://jqsllqdpplfpnjwmrwth.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impxc2xscWRwcGxmcG5qd21yd3RoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMzA2NTQsImV4cCI6MjA2MjkwNjY1NH0.SgnLLz2eUpbEKg8dW19til_Z7CPc7eoDilU64dsKEL8";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);