import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY is missing. Auth will fail until they're set.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
