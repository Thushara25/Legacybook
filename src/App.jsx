
/*
import React, { useState } from 'react';
import MemoryForm from './Components/MemoryForm';
import MemoryList from './Components/MemoryList';
import Modal from './Components/Modal'; // ⬅️ Import Modal
import './index.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [memories, setMemories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false); // ⬅️ For modal toggle

  const handleToggleTheme = () => setIsDarkMode(!isDarkMode);

  const addMemory = (memory) => {
    setMemories(prev => [...prev, memory]);
  };

  return (
    <div className={`${isDarkMode 
      ? 'bg-gray-900 text-white' 
      : 'bg-gradient-to-br from-blue-300 via-purple-100 to-blue-100 text-black'} min-h-screen transition-colors duration-500`}>

      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">LegacyBook 📘</h1>
          <div className="space-x-2">
            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-2 rounded bg-pink-500 text-white hover:bg-pink-600 transition"
            >
              ℹ️ Info
            </button>
            <button
              onClick={handleToggleTheme}
              className="px-4 py-2 rounded bg-purple-500 text-white hover:bg-purple-600 transition"
            >
              {isDarkMode ? '🌞 Light' : '🌙 Dark'}
            </button>
          </div>
        </div>

        <MemoryForm addMemory={addMemory} />

        <div className="my-6">
          <input
            type="text"
            placeholder="Search memories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
          />
        </div>

        <MemoryList memories={memories} searchTerm={searchTerm} />
      </div>

      {/* Modal */
      /*<Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2 className="text-2xl font-bold mb-2">Welcome to LegacyBook!</h2>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          This is a modern, animated modal. You can use it for details, editing, confirmations, and more.
        </p>
      </Modal>
    </div>
  );
}

export default App;


import React, { useState, useEffect } from 'react';
import MemoryForm from './Components/MemoryForm';
import MemoryList from './Components/MemoryList';
import './index.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [memories, setMemories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSplash, setShowSplash] = useState(true); // NEW

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000); // 2s splash
    return () => clearTimeout(timer);
  }, []);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const addMemory = (memory) => {
    setMemories(prev => [...prev, memory]);
  };

  if (showSplash) {
    return (
      <div className="flex items-center justify-center h-screen bg-purple-600 transition-opacity animate-fadeOut">
        <h1 className="text-4xl font-bold text-white animate-bounce">LegacyBook 📘</h1>
      </div>
    );
  }

  return (
    <div className={`${isDarkMode 
      ? 'bg-gray-900 text-white' 
      : 'bg-gradient-to-br from-blue-300 via-purple-100 to-blue-100 text-black'} min-h-screen transition-colors duration-500`}>

      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">LegacyBook 📘</h1>
          <button
            onClick={handleToggleTheme}
            className="px-4 py-2 rounded bg-purple-500 text-white hover:bg-purple-600 transition"
          >
            {isDarkMode ? '🌞 Light' : '🌙 Dark'}
          </button>
        </div>

        <MemoryForm addMemory={addMemory} />

        <div className="my-6">
          <input
            type="text"
            placeholder="Search memories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
          />
        </div>

        <MemoryList memories={memories} searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default App;*/


import React, { useState, useEffect } from 'react';
import MemoryForm from './Components/MemoryForm';
import MemoryList from './Components/MemoryList';
import Modal from './Components/Modal'; // ✅ Make sure path is correct
import './index.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [memories, setMemories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSplash, setShowSplash] = useState(true);
  const [showModal, setShowModal] = useState(true); // For modal display

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const addMemory = (memory) => {
    setMemories((prev) => [...prev, memory]);
  };

  // Splash screen
  if (showSplash) {
    return (
      <div className="flex items-center justify-center h-screen bg-purple-600 transition-opacity animate-fadeOut">
        <h1 className="text-4xl font-bold text-white animate-bounce">LegacyBook 📘</h1>
      </div>
    );
  }

  return (
    <div
      className={`${
        isDarkMode
          ? 'bg-gray-900 text-white'
          : 'bg-gradient-to-br from-blue-300 via-purple-100 to-blue-100 text-black'
      } min-h-screen transition-colors duration-500`}
    >
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">LegacyBook 📘</h1>
          <button
            onClick={handleToggleTheme}
            className="px-4 py-2 rounded bg-purple-500 text-white hover:bg-purple-600 transition"
          >
            {isDarkMode ? '🌞 Light' : '🌙 Dark'}
          </button>
        </div>

        {/* Memory Form */}
        <MemoryForm addMemory={addMemory} />

        {/* Search Bar */}
        <div className="my-6">
          <input
            type="text"
            placeholder="Search memories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
          />
        </div>

        {/* Memory List */}
        <MemoryList memories={memories} searchTerm={searchTerm} />

        {/* ✅ Modal (clean JSX with no syntax error) */}
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <h2 className="text-2xl font-bold mb-2">Welcome to LegacyBook!</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Start adding your memories to preserve your legacy 💜
          </p>
        </Modal>
      </div>
    </div>
  );
}

export default App;
