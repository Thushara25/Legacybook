/*
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg w-full max-w-md mx-4 relative"
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white text-xl"
            >
              ×
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}*/


import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-[#FFF7F3] dark:bg-[#3C3D37] rounded-xl p-6 shadow-lg w-full max-w-md mx-4 relative"
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white text-xl"
            >
              ×
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
