import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://ucqeisiygppiemybgqyx.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjcWVpc2l5Z3BwaWVteWJncXl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4NjcyODcsImV4cCI6MjA2NDQ0MzI4N30.mwmkBmepzMv8er-DqSqEM8j35Lnfa_nn_WE6wperk8A';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
