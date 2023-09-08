import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kcvhuikjxhkuaikkmtaj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtjdmh1aWtqeGhrdWFpa2ttdGFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM0NzI1NTYsImV4cCI6MjAwOTA0ODU1Nn0.9l4CLvMTvCukjqbolpyEcshYGWFgHm71POF_c--Szoc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
