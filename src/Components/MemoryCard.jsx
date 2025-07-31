// src/components/MemoryCard.jsx
import React from "react";

export default function MemoryCard({ memory }) {
  const {
    title,
    description,
    date,
    emoji,
    image_url,
  } = memory;

  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-[#FFB8E0] dark:bg-[#3B1C32] transition-colors duration-300">
      {/* ✅ Show image if exists */}
      {image_url && (
        <img
          src={image_url}
          alt={title || "memory image"}
          className="w-full h-48 object-cover border-b border-gray-300"
          onError={(e) => (e.target.style.display = "none")}
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
      </div>
    </div>
  );
}
