'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function SpeciesDetailPage() {
  const { id } = useParams();
  const [species, setSpecies] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchSpecies() {
      const res = await fetch(`/api/species/${id}`);
      const data = await res.json();

      if (res.ok) {
        setSpecies(data);
      } else {
        setError(data.error || 'Failed to load species');
      }
    }

    fetchSpecies();
  }, [id]);

  if (error) return <p className="text-red-600">{error}</p>;
  if (!species) return <p>Loading...</p>;

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{species.name}</h1>

      <p><strong>Heads:</strong> {species.head_count}</p>
      <p><strong>Head Description:</strong> {species.head_desc}</p>

      <p><strong>Eyes:</strong> {species.eyes_count}</p>
      <p><strong>Eyes Description:</strong> {species.eyes_desc}</p>

      <p><strong>Neck:</strong> {species.neck_desc}</p>
      <p><strong>Torso:</strong> {species.torso_desc}</p>
      <p><strong>Culture:</strong> {species.culture}</p>
      <p><strong>Environment:</strong> {species.environment}</p>
    </div>
  );
}
