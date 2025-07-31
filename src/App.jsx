/*import React, { useState, useEffect } from 'react';
import MemoryForm from './Components/MemoryForm';
import MemoryList from './Components/MemoryList';
import Modal from './Components/Modal';
import './index.css';
import API from './api/axios';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [memories, setMemories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSplash, setShowSplash] = useState(true);
  const [showModal, setShowModal] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Splash screen
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleLogin = async () => {
    try {
      const res = await API.post('/auth/login', { username, password });
      localStorage.setItem('token', res.data.token);
      setIsAuthenticated(true);
    } catch (err) {
      console.error('Login error:', err.response?.data || err.message);
      alert(err.response?.data?.error || 'Login failed');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    setMemories([]);
  };

  const fetchMemories = async () => {
    try {
      const res = await API.get('/memories');
      setMemories(res.data.memories);
    } catch (error) {
      console.error('Error fetching memories:', error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuthenticated(true);
      fetchMemories();
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchMemories();
    }
  }, [isAuthenticated]);

  const addMemory = async (memory) => {
    try {
      const res = await API.post('/memories', memory);
      setMemories((prev) => [...prev, res.data.memory]);
    } catch (err) {
      alert(err.response?.data?.error || 'Failed to add memory');
    }
  };

  if (showSplash) {
    return (
      <div className="flex items-center justify-center h-screen bg-purple-600">
        <h1 className="text-4xl font-bold text-white animate-bounce">LegacyBook 📘</h1>
      </div>
    );
  }

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div
        className={`${
          isDarkMode
            ? 'bg-gray-900 text-white'
            : 'bg-gradient-to-br from-blue-300 via-purple-100 to-blue-100 text-black'
        } min-h-screen transition-colors duration-500`}
      >
        <div className="container mx-auto py-10 px-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">LegacyBook 📘</h1>

            <div className="flex gap-2">
              <button
                onClick={handleToggleTheme}
                className="px-4 py-2 rounded bg-purple-500 text-white hover:bg-purple-600"
              >
                {isDarkMode ? '🌞 Light' : '🌙 Dark'}
              </button>

              {isAuthenticated && (
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
                >
                  🚪 Logout
                </button>
              )}
            </div>
          </div>

          {!isAuthenticated ? (
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md space-y-4 max-w-md mx-auto">
              <h2 className="text-xl font-semibold text-center">🔐 Login to Continue</h2>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 rounded border text-black"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 rounded border text-black"
              />
              <button
                onClick={handleLogin}
                className="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
              >
                Unlock
              </button>
            </div>
          ) : (
            <MemoryForm addMemory={addMemory} />
          )}

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

          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <h2 className="text-2xl font-bold mb-2">Welcome to LegacyBook!</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Start adding your memories to preserve your legacy 💜
            </p>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default App;*/


// App.jsx
import React, { useState, useEffect } from 'react';
import MemoryForm from './Components/MemoryForm';
import MemoryList from './Components/MemoryList';
import Modal from './Components/Modal';
import './index.css';
import API from './api/axios';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [memories, setMemories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSplash, setShowSplash] = useState(true);
  const [showModal, setShowModal] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleToggleTheme = () => setIsDarkMode((prev) => !prev);

  const handleLogin = async () => {
    try {
      const res = await API.post('/auth/login', { username, password });
      localStorage.setItem('token', res.data.token);
      setIsAuthenticated(true);
    } catch (err) {
      alert(err.response?.data?.error || 'Login failed');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    setMemories([]);
  };

  /*const fetchMemories = async () => {
    try {
      const res = await API.get('/memories');

      // ✅ Ensure backend fields are mapped properly
      const formatted = res.data.memories.map((m) => ({
        ...m,
        memory_id: m.memory_id || m.id,
        imageUrl: m.image_url ?? '', // Convert to camelCase
      }));

      console.log("Fetched Memories:", formatted); // ✅ Debug log
      setMemories(formatted);
    } catch (err) {
      console.error('Error fetching memories:', err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setIsAuthenticated(true);
  }, []);

  useEffect(() => {
    if (isAuthenticated) fetchMemories();
  }, [isAuthenticated]);

  const addMemory = async (memory) => {
    try {
      const res = await API.post('/memories', memory);
      const formatted = {
        ...res.data.memory,
        memory_id: res.data.memory.memory_id || res.data.memory.id,
        imageUrl: res.data.memory.image_url ?? '', // Convert to camelCase
      };
      setMemories((prev) => [formatted, ...prev]);
    } catch (err) {
      alert(err.response?.data?.error || 'Failed to add memory');
    }
  };*/

const fetchMemories = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await API.get('/memories', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const formatted = res.data.memories.map((m) => ({
      ...m,
      imageUrl: m.image_url ?? '',
    }));

    console.log("✅ Fetched Memories:", formatted);
    setMemories(formatted);
  } catch (err) {
    console.error("❌ Error fetching memories:", {
      message: err.message,
      status: err.response?.status,
      serverError: err.response?.data,
    });
    alert("Failed to load memories. Check console for details.");
  }
};


useEffect(() => {
  if (isAuthenticated) fetchMemories();
}, [isAuthenticated]);

const addMemory = async (memory) => {
  try {
    const token = localStorage.getItem("token");
    const res = await API.post('/memories', memory, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const formatted = {
      ...res.data.memory,
      id: res.data.memory.id || res.data.memory.id,
      imageUrl: res.data.memory.image_url ?? '',
    };
    setMemories((prev) => [formatted, ...prev]);
  } catch (err) {
    alert(err.response?.data?.error || 'Failed to add memory');
  }
};



  const deleteMemory = (id) => {
    setMemories((prev) => prev.filter((m) => m.id !== id));
  };

  const filteredMemories = memories.filter((m) =>
    m.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (showSplash) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#6A1E55]">
        <h1 className="text-4xl font-bold text-white animate-bounce">LegacyBook 📘</h1>
      </div>
    );
  }

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div
        className={`min-h-screen transition-colors duration-500 ${
          isDarkMode ? 'bg-[#1A1A1D] text-white' : 'bg-[#FFEDFA] text-[#3B1C32]'
        }`}
      >
        <div className="container mx-auto py-10 px-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">LegacyBook 📘</h1>
            <div className="flex gap-2">
              <button
                onClick={handleToggleTheme}
                className="px-4 py-2 rounded bg-[#6A1E55] text-white hover:bg-[#A64D79]"
              >
                {isDarkMode ? '🌞 Light' : '🌙 Dark'}
              </button>
              {isAuthenticated && (
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
                >
                  🚪 Logout
                </button>
              )}
            </div>
          </div>

          {!isAuthenticated ? (
            <div className="bg-[#FFF7F3] dark:bg-[#3C3D37] p-6 rounded-xl shadow-md space-y-4 max-w-md mx-auto">
              <h2 className="text-xl font-semibold text-center">🔐 Login to Continue</h2>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 rounded border text-black"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 rounded border text-black"
              />
              <button
                onClick={handleLogin}
                className="w-full bg-[#6A1E55] text-white px-4 py-2 rounded hover:bg-[#A64D79]"
              >
                🔓 Unlock
              </button>
            </div>
          ) : (
            <>
              <MemoryForm addMemory={addMemory} />
              <div className="my-6">
                <input
                  type="text"
                  placeholder="Search memories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A1E55] text-black"
                />
              </div>
              <MemoryList memories={filteredMemories} onDelete={deleteMemory} />
            </>
          )}

          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <h2 className="text-2xl font-bold mb-2">Welcome to LegacyBook!</h2>
            <p className="text-[#3B1C32] dark:text-[#EEEFE0]">
              Start adding your memories to preserve your legacy 💜
            </p>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default App;
