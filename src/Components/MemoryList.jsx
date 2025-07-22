

/*import React from "react";
import MemoryCard from "./MemoryCard";

export default function MemoryList({ memories }) {
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {memories.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No memories yet. Start adding some!
        </p>
      ) : (
        memories.map((mem, idx) => <MemoryCard key={idx} memory={mem} />)
      )}
    </div>
  );
}*/

import React from "react";
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
}
