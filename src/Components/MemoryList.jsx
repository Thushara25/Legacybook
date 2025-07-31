
/*import React from "react";
import MemoryCard from "./MemoryCard";

export default function MemoryList({ memories, searchTerm }) {
  const filteredMemories = memories.filter(memory =>
    memory.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    memory.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
   <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {filteredMemories.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No memories found.
        </p>
      ) : (
        filteredMemories.map((mem, idx) => <MemoryCard key={idx} memory={mem} />)
      )}
    </div>
  );
}*/

/*import React from "react";
import MemoryCard from "./MemoryCard";

export default function MemoryList({ memories, searchTerm }) {
  const filteredMemories = memories.filter(memory =>
    memory.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    memory.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredMemories.length === 0 ? (
        <p className="text-center text-[#6A1E55] dark:text-[#EEEFE0]">
          No memories found.
        </p>
      ) : (
        filteredMemories.map((mem, idx) => <MemoryCard key={idx} memory={mem} />)
      )}
    </div>
  );
}*/


/*import React from "react";
import MemoryCard from "./MemoryCard";

export default function MemoryList({ memories, searchTerm }) {
  const filteredMemories = memories.filter(memory =>
    memory.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    memory.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredMemories.length === 0 ? (
        <p className="text-center text-[#6A1E55] dark:text-[#EEEFE0]">
          No memories found.
        </p>
      ) : (
        filteredMemories.map((mem, idx) => <MemoryCard key={idx} memory={mem} />)
      )}
    </div>
  );
}*/

/*src/Components/MemoryList.jsx
import React from 'react';
import MemoryCard from './MemoryCard';


export default function MemoryList({ memories, onDelete }) {
  if (!memories.length) {
    return <p className="text-center text-gray-500 mt-4">No memories found 🥺</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {memories.map((memory) => (
        <MemoryCard
          key={memory.memory_id || memory.id}
          memory={memory}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}*/

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
          key={memory.id || memory.memory_id}
          memory={memory}
          onDelete={handleDeleteMemory}
        />
      ))}
    </div>
  );
}


