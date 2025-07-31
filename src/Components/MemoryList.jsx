// src/components/MemoryList.jsx
import React, { useState, useEffect } from "react";
import MemoryCard from "./MemoryCard";
import API from "../api/axios";

export default function MemoryList({ memories }) {
  const [memoryList, setMemoryList] = useState([]);

  // Sync prop memories with internal state
  useEffect(() => {
    setMemoryList(memories);
  }, [memories]);

  // ⛔️ Delete from DB + update UI
  const handleDeleteMemory = async (id) => {
    try {
      await API.delete(`/memories/${id}`); // delete from DB
      setMemoryList((prev) => prev.filter((memory) => memory.id !== id)); // remove from UI
    } catch (err) {
      console.error("❌ Failed to delete memory:", err);
      alert("❌ Could not delete memory.");
    }
  };

  if (!memoryList.length) {
    return (
      <p className="text-center text-gray-500 mt-4">No memories found 🥺</p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {memoryList.map((memory) => (
        <MemoryCard
          key={memory.id || memory.memory.id}
          memory={memory}
          onDelete={handleDeleteMemory}
        />
      ))}
    </div>
  );
}


