


/*import React, { useState, useEffect } from 'react';
import MemoryForm from './Components/MemoryForm';
import MemoryList from './Components/MemoryList';
import Modal from './Components/Modal';
import './index.css';
import API from './api/axios'; // ✅ Axios instance

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [memories, setMemories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSplash, setShowSplash] = useState(true);
  const [showModal, setShowModal] = useState(true);

  // 🔐 Auth
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // 🔐 Login using Axios
  const handleLogin = async () => {
    try {
      const res = await API.post('/auth/login', {
        email: 'test@example.com',
        password,
      });

      localStorage.setItem('token', res.data.token);
      setIsAuthenticated(true);
    } catch (err) {
      console.error('Login error:', err.response?.data || err.message);
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  // ✅ Fetch memories after login
  useEffect(() => {
    const fetchMemories = async () => {
      try {
        const res = await API.get('/memories');
        setMemories(res.data.memories); // 🧠 Match your backend response
      } catch (error) {
        console.error('❌ Error fetching memories:', error.response?.data || error.message);
      }
    };

    if (isAuthenticated) {
      fetchMemories();
    }
  }, [isAuthenticated]);

  // ✅ Add memory to backend
  const addMemory = async (memory) => {
    try {
      const res = await API.post('/memories', memory);
      setMemories((prev) => [...prev, res.data.memory]); // 🧠 Add new memory
    } catch (err) {
      console.error('Error adding memory:', err.response?.data || err.message);
      alert(err.response?.data?.message || 'Failed to add memory');
    }
  };

  // 🟣 Splash Screen
  if (showSplash) {
    return (
      <div className="flex items-center justify-center h-screen bg-purple-600 transition-opacity animate-fadeOut">
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

          {isAuthenticated ? (
            <MemoryForm addMemory={addMemory} />
          ) : (
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md space-y-4 max-w-md mx-auto">
              <h2 className="text-xl font-semibold text-center">🔐 Enter Password to Add Memory</h2>
              <input
                type="password"
                placeholder="Enter password"
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

export default App;
*/

/* import React, { useState, useEffect } from 'react';
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
  const [password, setPassword] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLogin = async () => {
    try {
      const res = await API.post('/auth/login', {
        password,
      });

      localStorage.setItem('token', res.data.token);
      setIsAuthenticated(true);
    } catch (err) {
      console.error('Login error:', err.response?.data || err.message);
      alert(err.response?.data?.error || 'Login failed');
    }
  };

  useEffect(() => {
    const fetchMemories = async () => {
      try {
        const res = await API.get('/memories');
        setMemories(res.data.memories);
      } catch (error) {
        console.error('Error fetching memories:', error.response?.data || error.message);
      }
    };

    if (isAuthenticated) {
      fetchMemories();
    }
  }, [isAuthenticated]);

  const addMemory = async (memory) => {
    try {
      const res = await API.post('/memories', memory);
      setMemories((prev) => [...prev, res.data.memory]);
    } catch (err) {
      console.error('Error adding memory:', err.response?.data || err.message);
      alert(err.response?.data?.message || 'Failed to add memory');
    }
  };

  if (showSplash) {
    return (
      <div className="flex items-center justify-center h-screen bg-purple-600 transition-opacity animate-fadeOut">
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

          
          {isAuthenticated ? (
            <MemoryForm addMemory={addMemory} />
          ) : (
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md space-y-4 max-w-md mx-auto">
              <h2 className="text-xl font-semibold text-center">🔐 Enter Password to Add Memory</h2>
              <input
                type="password"
                placeholder="Enter password"
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
    // Splash screen timeout
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
            <button
              onClick={handleToggleTheme}
              className="px-4 py-2 rounded bg-purple-500 text-white hover:bg-purple-600"
            >
              {isDarkMode ? '🌞 Light' : '🌙 Dark'}
            </button>
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

export default App;
