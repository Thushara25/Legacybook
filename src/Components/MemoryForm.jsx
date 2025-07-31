// src/components/MemoryForm.jsx
import React, { useState } from "react";
import API from "../api/axios";

export default function MemoryForm({ addMemory }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [emoji, setEmoji] = useState("😊");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setDate("");
    setEmoji("😊");
    setFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required");
      return;
    }

    setLoading(true);
    let imageUrl = "";

    try {
      // Upload image
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "unsigned_preset");

        const res = await fetch(
          "https://api.cloudinary.com/v1_1/dvcmv5z0p/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await res.json();
        if (data.secure_url) {
          imageUrl = data.secure_url;
        } else {
          throw new Error("Image upload failed");
        }
      }

      const token = localStorage.getItem("token");

      const res = await API.post(
        "/memories",
        { title, description, date, emoji, imageUrl },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log("✅ Memory saved:", res.data.memory);
      addMemory(res.data.memory);
      resetForm();

    } catch (error) {
      console.error("❌ Error submitting memory:", error.message);
      alert("Error uploading memory. Check console.");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-lg rounded-xl p-6 space-y-4 bg-[#EC7FA9] dark:bg-[#3C3D37] transition-colors duration-300"
    >
      <h2 className="text-xl font-semibold text-[#6A1E55] dark:text-[#A64D79]">
        Add a Memory
      </h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Memory Title"
        className="w-full p-2 rounded border bg-white text-black"
        required
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Short description..."
        className="w-full p-2 rounded border bg-white text-black"
        required
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-2 rounded border bg-white text-black"
      />

      <select
        value={emoji}
        onChange={(e) => setEmoji(e.target.value)}
        className="w-full p-2 rounded border bg-white text-black"
      >
        <option value="😊">Happy 😊</option>
        <option value="😢">Sad 😢</option>
        <option value="😠">Angry 😠</option>
        <option value="😎">Cool 😎</option>
        <option value="🥳">Excited 🥳</option>
        <option value="😴">Tired 😴</option>
        <option value="🤔">Thinking 🤔</option>
      </select>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
        className="block text-sm text-black"
      />

      <button
        type="submit"
        className="bg-[#6A1E55] text-white px-4 py-2 rounded hover:bg-[#A64D79]"
        disabled={loading}
      >
        {loading ? "Uploading..." : "Save Memory"}
      </button>
    </form>
  );
}
