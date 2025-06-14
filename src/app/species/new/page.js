'use client';

import { useState } from 'react';

export default function NewSpeciesForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    head_count: 1,
    head_position: '',
    head_orientation: '',
    head_special_structures: '',
    head_description: '',

    eyes_count: 2,
    eyes_arrangement: '',
    eyes_type: '',
    eyes_description: '',

    olfactory_structure: '',
    olfactory_placement: '',
    olfactory_functionality: '',

    mouth_count: 1,
    mouth_placement: '',
    feeding_mechanism: '',
    speech_capable: false,
    vocal_structures: '',

    arms_count: 2,
    arms_articulation: '',
    arms_manipulators: '',

    legs_count: 2,
    legs_gait_type: '',

    additional_appendages: '',

    symmetry: '',
    posture: '',
    size_range: '',
    skeletal_structure: '',

    skin_type: '',
    skin_texture: '',
    skin_coloration: '',
    skin_special_properties: '',

    respiration_type: '',
    circulatory_system: '',
    reproduction_method: '',
    metabolic_rate: '',
    digestive_process: '',
    excretion_method: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let val;

    if (type === 'checkbox') val = checked;
    else if (type === 'number') val = value === '' ? '' : Math.max(0, Number(value));
    else val = value;

    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/species', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert('Species saved!');
      setFormData({
        name: '',
        description: '',
        head_count: 1,
        head_position: '',
        head_orientation: '',
        head_special_structures: '',
        head_description: '',

        eyes_count: 2,
        eyes_arrangement: '',
        eyes_type: '',
        eyes_description: '',

        olfactory_structure: '',
        olfactory_placement: '',
        olfactory_functionality: '',

        mouth_count: 1,
        mouth_placement: '',
        feeding_mechanism: '',
        speech_capable: false,
        vocal_structures: '',

        arms_count: 2,
        arms_articulation: '',
        arms_manipulators: '',

        legs_count: 2,
        legs_gait_type: '',

        additional_appendages: '',

        symmetry: '',
        posture: '',
        size_range: '',
        skeletal_structure: '',

        skin_type: '',
        skin_texture: '',
        skin_coloration: '',
        skin_special_properties: '',

        respiration_type: '',
        circulatory_system: '',
        reproduction_method: '',
        metabolic_rate: '',
        digestive_process: '',
        excretion_method: '',
      });
    } else {
      const { error } = await res.json();
      alert('Error saving species: ' + error);
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

      <textarea
        name="description"
        placeholder="General Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full border px-2 py-1 rounded"
      />

      {/* Head */}
      <input
        name="head_count"
        type="number"
        min="0"
        placeholder="Head Count"
        value={formData.head_count}
        onChange={handleChange}
        className="w-full border px-2 py-1 rounded"
      />
      <input
        name="head_position"
        placeholder="Head Position & Orientation"
        value={formData.head_position}
        onChange={handleChange}
        className="w-full border px-2 py-1 rounded"
      />
      <input
        name="head_orientation"
        placeholder="Head Orientation"
        value={formData.head_orientation}
        onChange={handleChange}
        className="w-full border px-2 py-1 rounded"
      />
      <textarea
        name="head_special_structures"
        placeholder="Head Special Structures"
        value={formData.head_special_structures}
        onChange={handleChange}
        className="w-full border px-2 py-1 rounded"
      />
      <textarea
        name="head_description"
        placeholder="Describe the Head(s)"
        value={formData.head_description}
        onChange={handleChange}
        className="w-full border px-2 py-1 rounded"
      />

      {/* Eyes */}
      <input
        name="eyes_count"
        type="number"
        min="0"
        placeholder="Eye Count"
        value={formData.eyes_count}
        onChange={handleChange}
        className="w-full border px-2 py-1 rounded"
      />
      <input
        name="eyes_arrangement"
        placeholder="Eye Arrangement"
        value={formData.eyes_arrangement}
        onChange={handleChange}
        className="w-full border px-2 py-1 rounded"
      />
      <input
        name="eyes_type"
        placeholder="Eye Type"
        value={formData.eyes_type}
        onChange={handleChange}
        className="w-full border px-2 py-1 rounded"
      />
      <textarea
        name="eyes_description"
        placeholder="Describe the Eyes"
        value={formData.eyes_description}
        onChange={handleChange}
        className="w-full border px-2 py-1 rounded"
      />

      {/* Olfactory System */}
      <input
        name="olfactory_structure"
        placeholder="Olfactory Structure"
        value={formData.olfactory_structure}
        onChange={handleChange}
        className="w-full border px-2 py-1 rounded"
      />
      <input
        name="olfactory_placement"
        placeholder="Olfactory Placement"
        value={formData.olfactory_placement}
        onChange={handleChange}
        className="w-full border px-2 py-1 rounded"
      />
      <input
        name="olfactory_functionality"
        placeholder="Olfactory Functionality"
        value={formData.olfactory_functionality}
        onChange={handleChange}
        className="w-full border px-2 py-1 rounded"
      />

      {/* Mouth */}
      <input
        name="mouth_count"
        type="number"
        min="0"
        placeholder="Mouth Count"
        value={formData.mouth_count}
        onChange={handleChange}
        className="w-full border px-2 py-1 rounded"
      />
      <input
        name="mouth_placement"
        placeholder="Mouth Placement"
        value={formData.mouth_placement}
        onChange={handleChange}
        className="w-full border px-2 py-1 rounded"
      />
      <input
        name="feeding_mechanism"
        placeholder="Feeding Mechanism"
        value={formData.feeding_mechanism}
        onChange={handleChange}
        className="w-full border px-2 py-1 rounded"
      />
      <label className="flex items-center space-x-2">
        <input
          name="speech_capable"
          type="checkbox"
          checked={formData.speech_capable}
          onChange={handleChange}
        />
        <span>Speech Capable</span>
      </label>
      <textarea
        name="vocal_structures"
        placeholder="Vocal Structures"
        value={formData.vocal_structures}
        onChange={handleChange}
        className="w-full border px-2 py-1 rounded"
      />

      {/* Limbs */}
      <input
        name="arms_count"
        type="number"
        min="0"
        placeholder="Arms Count"
        value={formData.arms_count}
        onChange={handleChange}
        className="w-full border px-2 py-1 rounded"
      />
      <input
        name="arms_articulation"
        placeholder="Arms Articulation"
        value={formData.arms_articulation}
        onChange={handleChange}
        className="w-full border px-2 py-1 rounded"
      />
      <input
        name="arms_manipulators"
        placeholder="Arms Manipulators"
        value={formData.arms_manipulators}
        onChange={handleChange}
        className="w-full border px-2 py-1 rounded"
      />

      <input
        name="legs_count"
        type="number"
        min="0"
        placeholder="Legs Count"
        value={formData.legs_count}
        onChange={handleChange}
        className="w-full border px-2 py-1 rounded"
      />
      <input
        name="legs_gait_type"
        placeholder="Legs Gait Type"
        value={formData.legs_gait_type}
        onChange={handleChange}
        className="w-full border px-2 py-1 rounded"
      />

      <textarea
        name="additional_appendages"
        placeholder="Additional Appendages"
        value={formData.additional_appendages}
        onChange={handleChange}
        className="w-full border px-2 py-1 rounded"
      />

      {/* Body Structure */}
      <input
        name="symmetry"
        placeholder="Symmetry"
        value={formData.symmetry}
        onChange={handleChange}
        className="w-full border px-2 py-1 rounded"
      />
      <input
        name="posture"
        placeholder="Posture"
        value={formData.posture}
        onChange={handleChange}
        className="w-full border





ChatGPT said:
px-2 py-1 rounded"
/>
<input name="size_range" placeholder="Size Range" value={formData.size_range} onChange={handleChange} className="w-full border px-2 py-1 rounded" />
<input name="skeletal_structure" placeholder="Skeletal Structure" value={formData.skeletal_structure} onChange={handleChange} className="w-full border px-2 py-1 rounded" />

php-template
Copy
Edit
  {/* Skin */}
  <input
    name="skin_type"
    placeholder="Skin Type"
    value={formData.skin_type}
    onChange={handleChange}
    className="w-full border px-2 py-1 rounded"
  />
  <input
    name="skin_texture"
    placeholder="Skin Texture"
    value={formData.skin_texture}
    onChange={handleChange}
      className="w-full border px-2 py-1 rounded"
  />
  <input
    name="skin_coloration"
    placeholder="Skin Coloration"
    value={formData.skin_coloration}
    onChange={handleChange}
    className="w-full border px-2 py-1 rounded"
  />
  <textarea
    name="skin_special_properties"
    placeholder="Skin Special Properties"
    value={formData.skin_special_properties}
    onChange={handleChange}
    className="w-full border px-2 py-1 rounded"
  />

  {/* Internal Systems */}
  <input
    name="respiration_type"
    placeholder="Respiration Type"
    value={formData.respiration_type}
    onChange={handleChange}
    className="w-full border px-2 py-1 rounded"
  />
  <input
    name="circulatory_system"
    placeholder="Circulatory System"
    value={formData.circulatory_system}
    onChange={handleChange}
    className="w-full border px-2 py-1 rounded"
  />
  <input
    name="reproduction_method"
    placeholder="Reproduction Method"
    value={formData.reproduction_method}
    onChange={handleChange}
    className="w-full border px-2 py-1 rounded"
  />
  <input
    name="metabolic_rate"
    placeholder="Metabolic Rate"
    value={formData.metabolic_rate}
    onChange={handleChange}
    className="w-full border px-2 py-1 rounded"
  />
  <input
    name="digestive_process"
    placeholder="Digestive Process"
    value={formData.digestive_process}
    onChange={handleChange}
    className="w-full border px-2 py-1 rounded"
  />
  <input
    name="excretion_method"
    placeholder="Excretion Method"
    value={formData.excretion_method}
    onChange={handleChange}
    className="w-full border px-2 py-1 rounded"
  />

  <button
    type="submit"
    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
  >
    Save Species
  </button>
</form>
);
}