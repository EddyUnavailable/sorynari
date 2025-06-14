"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

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
    environment: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("species").insert([formData]);
    if (error) {
      alert("Error saving species: " + error.message);
    } else {
      alert("Species saved!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold">New Species</h1>

      <input name="name" placeholder="Species Name" onChange={handleChange} required />

      <input name="head_count" type="number" placeholder="Head Count" onChange={handleChange} />
      <textarea name="head_desc" placeholder="Describe the head(s)" onChange={handleChange} />

      <input name="eyes_count" type="number" placeholder="Eye Count" onChange={handleChange} />
      <textarea name="eyes_desc" placeholder="Describe the eyes" onChange={handleChange} />

      <textarea name="neck_desc" placeholder="Describe the neck" onChange={handleChange} />
      <textarea name="torso_desc" placeholder="Describe the torso" onChange={handleChange} />

      <textarea name="culture" placeholder="Describe the culture" onChange={handleChange} />
      <textarea name="environment" placeholder="Describe the environment" onChange={handleChange} />

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
    </form>
  );
}
