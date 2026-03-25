import React, { useState } from "react";
import "./AddModal.css";

const CATEGORIES = ["Nature", "Architecture", "Animals", "Travel"];

function AddModal({ onClose, onSave }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "Nature",
    url: "",
  });

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    if (!form.title.trim() || !form.url.trim()) {
      alert("Title and Image URL are required.");
      return;
    }
    onSave({ ...form, id: Date.now() });
    onClose();
  };

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal">
        <h2 className="modal-heading">Add New Image</h2>

        <label>Title *</label>
        <input
          type="text"
          placeholder="e.g. Sunset Over Sea"
          value={form.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />

        <label>Description</label>
        <input
          type="text"
          placeholder="Short description"
          value={form.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />

        <label>Category</label>
        <select
          value={form.category}
          onChange={(e) => handleChange("category", e.target.value)}
        >
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <label>Image URL *</label>
        <input
          type="text"
          placeholder="https://example.com/photo.jpg"
          value={form.url}
          onChange={(e) => handleChange("url", e.target.value)}
        />

        <div className="modal-actions">
          <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-save" onClick={handleSave}>
            Add Image
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddModal;
