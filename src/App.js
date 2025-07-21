/*import "./index.css"; // Make sure this is present and at the top
import { useState } from "react";
import MemoryForm from "./Components/MemoryForm";
import MemoryCard from "./Components/MemoryList";


function App() {
    const [memories, setMemories] = useState([]);

    function handleAddMemory(memory) {
        setMemories([...memories, memory]);
    }

    return ( <
        div className = "px-4 py-10 max-w-4xl mx-auto" >
        <
        h1 className = "text-4xl font-bold text-center text-purple-700 mb-8 animate-fade-in-down" >
        LegacyBook📘 <
        /h1> <
        MemoryForm onAdd = { handleAddMemory }
        /> <
        div className = "grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up" > {
            memories.map((mem, idx) => ( <
                MemoryCard key = { idx } {...mem }
                />
            ))
        } <
        /div> <
        /div>
    );
}

export default App;*/


/*import { useState } from "react";
import MemoryForm from "./Components/MemoryForm";
import MemoryList from "./Components/MemoryList";
import "./index.css";

function App() {
    const [memories, setMemories] = useState([]);

    function handleAddMemory(memory) {
        setMemories([...memories, memory]);
    }

    return ( <
        div className = "px-4 py-10 max-w-4xl mx-auto" >
        <
        h1 className = "text-4xl font-bold text-center text-purple-700 mb-8 animate-fade-in-down" >
        LegacyBook📘 <
        /h1> <
        MemoryForm onAdd = { handleAddMemory }
        /> <
        MemoryList memories = { memories }
        /> < /
        div >
    );
}

export default App; */


import { useEffect, useState } from "react";
import MemoryForm from "./Components/MemoryForm";
import MemoryList from "./Components/MemoryList";
import "./index.css";

function App() {
    const [memories, setMemories] = useState([]);
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });

    // Load from localStorage
    useEffect(() => {
        const saved = localStorage.getItem("memories");
        if (saved) {
            setMemories(JSON.parse(saved));
        }
    }, []);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem("memories", JSON.stringify(memories));
    }, [memories]);

    // Save dark mode
    useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    function handleAddMemory(memory) {
        setMemories([...memories, memory]);
    }

    return ( <
        div className = "px-4 py-10 max-w-4xl mx-auto transition duration-300" >
        <
        div className = "flex justify-between items-center mb-6" >
        <
        h1 className = "text-4xl font-bold text-purple-700 dark:text-purple-300 animate-fade-in-down" >
        LegacyBook📘 <
        /h1> <
        button onClick = {
            () => setDarkMode(!darkMode)
        }
        className = "bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600" > { darkMode ? "☀️ Light" : "🌙 Dark" } <
        /button> < /
        div > <
        MemoryForm onAdd = { handleAddMemory }
        /> <
        MemoryList memories = { memories }
        /> < /
        div >
    );
}

export default App;