import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'YOUR_SUPABASE_URL';  // Find this in your Supabase dashboard
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';  // Find this in your Supabase dashboard
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;