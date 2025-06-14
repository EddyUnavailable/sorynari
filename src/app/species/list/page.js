'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function SpeciesListPage() {
  const [speciesList, setSpeciesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSpecies() {
      const { data, error } = await supabase
        .from('species')
        .select('id, name')
        .order('created_at', { ascending: false });

      if (error) console.error('Error fetching species list:', error);
      else setSpeciesList(data);

      setLoading(false);
    }

    fetchSpecies();
  }, []);

  if (loading) return <p>Loading species...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Species List</h1>
      <ul className="space-y-2">
        {speciesList.map((sp) => (
          <li key={sp.id}>
            <Link href={`/species/${sp.id}`} className="text-blue-600 hover:underline">
              {sp.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
