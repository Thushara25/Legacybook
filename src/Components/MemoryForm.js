/* src/components/MemoryForm.js
import { useState } from "react";

export default function MemoryForm({ onAdd }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [mood, setMood] = useState("😊");

    function handleSubmit(e) {
        e.preventDefault();
        onAdd({ title, description, date, mood });
        setTitle("");
        setDescription("");
        setDate("");
        setMood("😊");
    }

    return ( <
        form onSubmit = { handleSubmit }
        className = "bg-white shadow-md p-6 rounded-2xl mb-6" >
        <
        h2 className = "text-xl font-semibold mb-4" > Add a Memory < /h2> <
        input type = "text"
        placeholder = "Title"
        value = { title }
        onChange = { e => setTitle(e.target.value) }
        className = "border p-2 rounded w-full mb-3"
        required /
        >
        <
        textarea placeholder = "Description"
        value = { description }
        onChange = { e => setDescription(e.target.value) }
        className = "border p-2 rounded w-full mb-3"
        required /
        >
        <
        input type = "date"
        value = { date }
        onChange = { e => setDate(e.target.value) }
        className = "border p-2 rounded w-full mb-3"
        required /
        >
        <
        select value = { mood }
        onChange = { e => setMood(e.target.value) }
        className = "border p-2 rounded w-full mb-3" >
        <
        option value = "😊" > Happy < /option> <
        option value = "😢" > Sad < /option> <
        option value = "😡" > Angry < /option> <
        option value = "😌" > Peaceful < /option> <
        /select> <
        button type = "submit"
        className = "bg-blue-500 text-white px-4 py-2 rounded" >
        Save Memory <
        /button> <
        /form>
    );
} */

/*import { useState } from "react";

export default function MemoryForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [mood, setMood] = useState("😊");

  function handleSubmit(e) {
    e.preventDefault();
    onAdd({ title, description, date, mood });
    setTitle("");
    setDescription("");
    setDate("");
    setMood("😊");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-2xl p-6 mb-10 animate-slide-up"
    >
      <h2 className="text-2xl font-semibold text-purple-600 mb-4">Add a Memory</h2>
      <input
        type="text"
        placeholder="Memory Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="border border-purple-300 rounded w-full p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
        required
      />
      <textarea
        placeholder="Short description..."
        value={description}
        onChange={e => setDescription(e.target.value)}
        className="border border-purple-300 rounded w-full p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
        required
      />
      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
        className="border border-purple-300 rounded w-full p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
        required
      />
      <select
        value={mood}
        onChange={e => setMood(e.target.value)}
        className="border border-purple-300 rounded w-full p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
      >
        <option value="😊">😊 Happy</option>
        <option value="😢">😢 Sad</option>
        <option value="😡">😡 Angry</option>
        <option value="😌">😌 Peaceful</option>
      </select>
      <button
        type="submit"
        className="bg-purple-500 hover:bg-purple-600 transition text-white font-medium py-2 px-4 rounded"
      >
        Save Memory
      </button>
    </form>
  );
} */


import { useState } from "react";

export default function MemoryForm({ onAdd }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [mood, setMood] = useState("😊");

    function handleSubmit(e) {
        e.preventDefault();
        onAdd({ title, description, date, mood });
        setTitle("");
        setDescription("");
        setDate("");
        setMood("😊");
    }

    return ( <
        form onSubmit = { handleSubmit }
        className = "bg-white shadow-lg rounded-2xl p-6 mb-10 animate-slide-up" >
        <
        h2 className = "text-2xl font-semibold text-purple-600 mb-4" > Add a Memory < /h2> <
        input type = "text"
        placeholder = "Memory Title"
        value = { title }
        onChange = { e => setTitle(e.target.value) }
        className = "border border-purple-300 rounded w-full p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
        required /
        >
        <
        textarea placeholder = "Short description..."
        value = { description }
        onChange = { e => setDescription(e.target.value) }
        className = "border border-purple-300 rounded w-full p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
        required /
        >
        <
        input type = "date"
        value = { date }
        onChange = { e => setDate(e.target.value) }
        className = "border border-purple-300 rounded w-full p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
        required /
        >
        <
        select value = { mood }
        onChange = { e => setMood(e.target.value) }
        className = "border border-purple-300 rounded w-full p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400" >
        <
        option value = "😊" > 😊Happy < /option> <
        option value = "😢" > 😢Sad < /option> <
        option value = "😡" > 😡Angry < /option> <
        option value = "😌" > 😌Peaceful < /option> <
        /select> <
        button type = "submit"
        className = "bg-purple-500 hover:bg-purple-600 transition text-white font-medium py-2 px-4 rounded" >
        Save Memory <
        /button> <
        /form>
    );
}