/*import React from "react";
import { motion } from "framer-motion";

export default function MemoryCard({ memory }) {
  const { title, description, date, emoji, file } = memory;
  const imageURL = file ? URL.createObjectURL(file) : "https://via.placeholder.com/150";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="rounded-xl shadow-md overflow-hidden w-full bg-[#FFB8E0] text-[#3B1C32] dark:bg-[#3B1C32] dark:text-[#EEEFE0]"
    >
      <img src={imageURL} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 space-y-1">
        <h3 className="text-xl font-semibold">{title} {emoji}</h3>
        <p className="text-sm">{description}</p>
        {date && (
          <p className="text-xs text-[#6A1E55] dark:text-[#C599B6]">📅 {date}</p>
        )}
      </div>
    </motion.div>
  );
}
*/


/*import React from "react";
import { motion } from "framer-motion";

export default function MemoryCard({ memory }) {
  const { title, description, date, emoji, image_url } = memory;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="rounded-xl shadow-md overflow-hidden w-full bg-[#FFB8E0] text-[#3B1C32] dark:bg-[#3B1C32] dark:text-[#EEEFE0]"
    >
      {image_url && (
        <img src={image_url} alt={title} className="w-full h-40 object-cover" />
      )}
      <div className="p-4 space-y-1">
        <h3 className="text-xl font-semibold">
          {title} {emoji}
        </h3>
        <p className="text-sm">{description}</p>
        {date && (
          <p className="text-xs text-[#6A1E55] dark:text-[#C599B6]">📅 {date}</p>
        )}
      </div>
    </motion.div>
  );
}*/

import React from "react";
import API from "../api/axios";

export default function MemoryCard({ memory, onDelete }) {
  const {
    id,
    title,
    description,
    date,
    emoji,
    image_url, // ✅ Used below
  } = memory;

  const handleDelete = async () => {
    try {
      await API.delete(`/api/memories/${id}`);
      onDelete(id);
    } catch (err) {
      console.error("❌ Delete failed:", err);
      alert("❌ Failed to delete memory");
    }
  };

  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-[#FFB8E0] dark:bg-[#3B1C32] transition-colors duration-300">
      {/* ✅ Show image if exists */}
      {image_url && (
        <img
          src={image_url}
          alt={title || "memory image"}
          className="w-full h-48 object-cover border-b border-gray-300"
          onError={(e) => (e.target.style.display = "none")} // hide broken image
        />
      )}

      <div className="p-4 text-[#1A1A1D] dark:text-[#EEEFE0]">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className="text-2xl">{emoji}</span>
        </div>

        <p className="text-sm mt-1">{description}</p>

        {date && (
          <p className="text-xs text-right text-gray-700 dark:text-gray-300 mt-2">
            📅 {new Date(date).toLocaleDateString()}
          </p>
        )}

        <button
  onClick={() => handleDelete(memory.id)}
  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
>
          🗑 Delete
        </button>
      </div>
    </div>
  );
}
