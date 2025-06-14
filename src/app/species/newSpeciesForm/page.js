"use client";
import { useState } from "react";
import { createClient } from '@supabase/supabase-js';

export default function NewSpeciesForm() {
  const [formData, setFormData] = useState({
    name: "",
    head_count: 1,
    head_desc: "",
    eyes_count: 2,
    eyes_desc: "",
    neck_desc: "",
    torso_desc: "",
    culture: "",
    environment: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    // For number inputs, parse to number (or fallback to 0)
    const val = type === "number" ? Math.max(0, Number(value)) : value;

    setFormData((f) => ({
      ...f,
      [name]: val,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from("species").insert([formData]);

    if (error) {
      alert("Error saving species: " + error.message);
    } else {
      alert("Species saved!");
      setFormData({
        name: "",
        head_count: 1,
        head_desc: "",
        eyes_count: 2,
        eyes_desc: "",
        neck_desc: "",
        torso_desc: "",
        culture: "",
        environment: "",
      }); // reset form
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold">New Species</h1>

      <input
        name="name"
        placeholder="Species Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full border px-2 py-1 rounded"
      />

      <input
        name="head_count"
        type="number"
        min="0"
        placeholder="Head Count"
        value={formData.head_count}
        onChange={handleChange}
        className="w-full border px-2 py-1 rounded"
      />
      <textarea
        name="head_desc"
        placeholder="Describe the head(s)"
        value={formData.head_desc}
        onChange={handleChange}
        className="w-full border px-2 py-1 rounded"
      />

      <input
        name="eyes_count"
        type="number"
        min="0"
        placeholder="Eye Count"
        value={formData.eyes_count}
        onChange={handleChange}
        className="w-full border px-2 py-1 rounded"
      />
      <textarea
        name="eyes_desc"
        placeholder="Describe the eyes"
        value={formData.eyes_desc}
        onChange={handleChange}
        className="w-full border px-2 py-1 rounded"
      />

      <textarea
        name="neck_desc"
        placeholder="Describe the neck"
        value={formData.neck_desc}
        onChange={handleChange}
        className="w-full border px-2 py-1 rounded"
      />

      <textarea
        name="torso_desc"
        placeholder="Describe the torso"
        value={formData.torso_desc}
        onChange={handleChange}
        className="w-full border px-2 py-1 rounded"
      />

      <textarea
        name="culture"
        placeholder="Describe the culture"
        value={formData.culture}
        onChange={handleChange}
        className="w-full border px-2 py-1 rounded"
      />

      <textarea
        name="environment"
        placeholder="Describe the environment"
        value={formData.environment}
        onChange={handleChange}
        className="w-full border px-2 py-1 rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save
      </button>
    </form>
  );
}
