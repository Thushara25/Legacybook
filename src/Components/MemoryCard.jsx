import React from "react";
import { motion } from "framer-motion";

export default function MemoryCard({ memory }) {
  const { title, description, date, emoji, file } = memory;
  const imageURL = file ? URL.createObjectURL(file) : "https://via.placeholder.com/150";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-pink-500 dark:bg-gray-700 text-black dark:text-white rounded-xl shadow-md overflow-hidden w-full"
    >
      <img src={imageURL} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 space-y-1">
        <h3 className="text-xl font-semibold">
          {title} {emoji}
        </h3>
        <p className="text-sm">{description}</p>
        {date && (
          <p className="text-xs text-gray-600 dark:text-gray-300">📅 {date}</p>
        )}
      </div>
    </motion.div>
  );
}
