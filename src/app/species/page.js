'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase URL or Anon Key');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function SpeciesListPage() {
  const [speciesList, setSpeciesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSpecies() {
      const { data, error } = await supabase.from('species').select('id, name');
      if (error) {
        console.error('Error fetching species:', error);
        setSpeciesList([]);
      } else {
        setSpeciesList(data);
      }
      setLoading(false);
    }
    fetchSpecies();
  }, []);

  if (loading) return <p>Loading species...</p>;
  if (!speciesList.length) return <p>No species found.</p>;

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Species List</h1>
      <ul className="space-y-3">
        {speciesList.map(({ id, name }) => (
          <li key={id}>
            <Link
              href={`/species/${id}`}
              className="text-blue-600 hover:underline"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
