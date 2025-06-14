'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase URL or Anon Key');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function SpeciesStatsPage() {
  const [speciesData, setSpeciesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      const { data, error } = await supabase.from('species_stats').select('*');
      if (error) {
        console.error('Error fetching species stats:', error);
      } else {
        setSpeciesData(data);
      }
      setLoading(false);
    };

    fetchStats();
  }, []);

  if (loading) return <p>Loading species stats...</p>;
  if (!speciesData.length) return <p>No species stats found.</p>;

  return (
    <div className="p-6 text-white bg-black min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Species Stats</h1>
      <div className="space-y-6">
        {speciesData.map((species) => (
          <div key={species.id} className="border border-gray-700 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{species.species_name}</h2>
            <ul className="grid grid-cols-2 gap-2 text-sm mt-2">
              {Object.entries(species)
                .filter(([key]) => key !== 'id' && key !== 'species_name')
                .map(([key, value]) => (
                  <li key={key}>
                    <strong>
                      {key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}:
                    </strong>{' '}
                    {value}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
