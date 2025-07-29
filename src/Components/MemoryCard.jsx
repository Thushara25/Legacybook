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
