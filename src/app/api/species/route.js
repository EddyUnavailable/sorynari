import { createClient } from '@supabase/supabase-js';

function getSupabaseClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error('Supabase URL and Service Role Key must be defined');
  }

  return createClient(url, key);
}

export async function GET() {
  const supabase = getSupabaseClient();

  const { data, error } = await supabase.from('species_stats').select('*');

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request) {
  const supabase = getSupabaseClient();
  const body = await request.json();

  const { data, error } = await supabase.from('species_stats').insert([body]);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify(data), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}
