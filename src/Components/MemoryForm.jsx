/*import React, { useState } from "react";

export default function MemoryForm({ addMemory }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [emoji, setEmoji] = useState("😊");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    addMemory({ title, description, date, emoji, file });
    setTitle("");
    setDescription("");
    setDate("");
    setEmoji("😊");
    setFile(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-lg rounded-xl p-6 space-y-4 bg-gray-400 dark:bg-gray-800 transition-colors duration-300"
    >
      <h2 className="text-xl font-semibold text-purple-900 dark:text-purple-400">
        Add a Memory
      </h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Memory Title"
        className="w-full p-2 rounded border bg-white text-black"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Short description..."
        className="w-full p-2 rounded border bg-white text-black"
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-2 rounded border bg-white text-black"
      />

      
      <div>
        <label className="block mb-1 font-medium text-black dark:text-black">
          Mood
        </label>
        <select
          value={emoji}
          onChange={(e) => setEmoji(e.target.value)}
          className="w-full p-2 rounded border bg-white text-black dark:bg-white dark:text-black"
        >
          <option value="😊">Happy 😊</option>
          <option value="😢">Sad 😢</option>
          <option value="😠">Angry 😠</option>
          <option value="😎">Cool 😎</option>
          <option value="🥳">Excited 🥳</option>
          <option value="😴">Tired 😴</option>
          <option value="🤔">Thinking 🤔</option>
        </select>
      </div>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="block text-sm text-black"
      />

      <button
        type="submit"
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        Save Memory
      </button>
    </form>
  );
}*/

/*import React, { useState } from "react";

export default function MemoryForm({ addMemory }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [emoji, setEmoji] = useState("😊");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    addMemory({ title, description, date, emoji, file });
    setTitle("");
    setDescription("");
    setDate("");
    setEmoji("😊");
    setFile(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-lg rounded-xl p-6 space-y-4 bg-[#EC7FA9] dark:bg-[#3C3D37] transition-colors duration-300"
    >
      <h2 className="text-xl font-semibold text-[#6A1E55] dark:text-[#A64D79]">
        Add a Memory
      </h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Memory Title"
        className="w-full p-2 rounded border bg-white text-black"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Short description..."
        className="w-full p-2 rounded border bg-white text-black"
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-2 rounded border bg-white text-black"
      />

      <label className="block mb-1 font-medium text-black dark:text-[#EEEFE0]">
        Mood
      </label>
      <select
        value={emoji}
        onChange={(e) => setEmoji(e.target.value)}
        className="w-full p-2 rounded border bg-white text-black"
      >
        <option value="😊">Happy 😊</option>
        <option value="😢">Sad 😢</option>
        <option value="😠">Angry 😠</option>
        <option value="😎">Cool 😎</option>
        <option value="🥳">Excited 🥳</option>
        <option value="😴">Tired 😴</option>
        <option value="🤔">Thinking 🤔</option>
      </select>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="block text-sm text-black"
      />

      <button
        type="submit"
        className="bg-[#6A1E55] text-white px-4 py-2 rounded hover:bg-[#A64D79]"
      >
        Save Memory
      </button>
    </form>
  );
}*/


/*src/components/MemoryForm.jsx
import React, { useState } from "react";
import API from "../api/axios";

export default function MemoryForm({ addMemory }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [emoji, setEmoji] = useState("😊");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) return;

    setLoading(true);
    let imageUrl = "";

    // ⬆️ Upload to Cloudinary
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "unsigned_preset");

      try {
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/dvcmv5z0p/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await res.json();
        console.log("📸 Cloudinary response:", data);

        if (data.secure_url) {
          imageUrl = data.secure_url;
        } else {
          throw new Error("❌ No secure_url returned from Cloudinary");
        }
      } catch (err) {
        alert("❌ Image upload failed.");
        console.error("Cloudinary upload error:", err);
        setLoading(false);
        return;
      }
    }

    // ⬇️ Confirm before sending
    console.log("🚀 Sending memory to backend:", {
      title,
      description,
      date,
      emoji,
      imageUrl,
    });

    try {
      const res = await API.post("/memories", {
        title,
        description,
        date,
        emoji,
        imageUrl,
      });

      console.log("✅ Memory saved:", res.data.memory);
      addMemory(res.data.memory);

      // Reset form
      setTitle("");
      setDescription("");
      setDate("");
      setEmoji("😊");
      setFile(null);
    } catch (err) {
      alert("❌ Failed to save memory");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-lg rounded-xl p-6 space-y-4 bg-[#EC7FA9] dark:bg-[#3C3D37] transition-colors duration-300"
    >
      <h2 className="text-xl font-semibold text-[#6A1E55] dark:text-[#A64D79]">
        Add a Memory
      </h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Memory Title"
        className="w-full p-2 rounded border bg-white text-black"
        required
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Short description..."
        className="w-full p-2 rounded border bg-white text-black"
        required
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-2 rounded border bg-white text-black"
      />

      <select
        value={emoji}
        onChange={(e) => setEmoji(e.target.value)}
        className="w-full p-2 rounded border bg-white text-black"
      >
        <option value="😊">Happy 😊</option>
        <option value="😢">Sad 😢</option>
        <option value="😠">Angry 😠</option>
        <option value="😎">Cool 😎</option>
        <option value="🥳">Excited 🥳</option>
        <option value="😴">Tired 😴</option>
        <option value="🤔">Thinking 🤔</option>
      </select>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="block text-sm text-black"
        accept="image/*"
      />

      <button
        type="submit"
        className="bg-[#6A1E55] text-white px-4 py-2 rounded hover:bg-[#A64D79]"
        disabled={loading}
      >
        {loading ? "Uploading..." : "Save Memory"}
      </button>
    </form>
  );
}*/

// src/components/MemoryForm.jsx
import React, { useState } from "react";
import API from "../api/axios";

export default function MemoryForm({ addMemory }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [emoji, setEmoji] = useState("😊");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    if (!title || !description) return;

    setLoading(true);
    let imageUrl = "";

    // 1️⃣ Upload image to Cloudinary if present
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "unsigned_preset");

      try {
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/dvcmv5z0p/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await res.json();
        console.log("📸 Cloudinary response:", data);

        if (data.secure_url) {
          imageUrl = data.secure_url;
        } else {
          throw new Error("❌ No secure_url returned from Cloudinary");
        }
      } catch (err) {
        alert("❌ Image upload failed.");
        console.error("Cloudinary upload error:", err);
        setLoading(false);
        return;
      }
    }

    // 2️⃣ Log and send memory to backend
    console.log("🚀 Sending memory to backend:", {
      title,
      description,
      date,
      emoji,
      imageUrl,
    });

    try {
      const res = await API.post("/memories", {
        title,
        description,
        //date,
        emoji,
        imageUrl,
      });

      console.log("✅ Memory saved:", res.data.memory);
      addMemory(res.data.memory);

      // Reset form fields
      setTitle("");
      setDescription("");
      setDate("");
      setEmoji("😊");
      setFile(null);
    } catch (err) {
      alert("❌ Failed to save memory");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-lg rounded-xl p-6 space-y-4 bg-[#EC7FA9] dark:bg-[#3C3D37] transition-colors duration-300"
    >
      <h2 className="text-xl font-semibold text-[#6A1E55] dark:text-[#A64D79]">
        Add a Memory
      </h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Memory Title"
        className="w-full p-2 rounded border bg-white text-black"
        required
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Short description..."
        className="w-full p-2 rounded border bg-white text-black"
        required
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-2 rounded border bg-white text-black"
      />

      <select
        value={emoji}
        onChange={(e) => setEmoji(e.target.value)}
        className="w-full p-2 rounded border bg-white text-black"
      >
        <option value="😊">Happy 😊</option>
        <option value="😢">Sad 😢</option>
        <option value="😠">Angry 😠</option>
        <option value="😎">Cool 😎</option>
        <option value="🥳">Excited 🥳</option>
        <option value="😴">Tired 😴</option>
        <option value="🤔">Thinking 🤔</option>
      </select>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="block text-sm text-black"
        accept="image/*"
      />

      <button
        type="submit"
        className="bg-[#6A1E55] text-white px-4 py-2 rounded hover:bg-[#A64D79]"
        disabled={loading}
      >
        {loading ? "Uploading..." : "Save Memory"}
      </button>
    </form>
  );
}

/*src/components/MemoryForm.jsx
import React, { useState } from "react";
import API from "../api/axios";

export default function MemoryForm({ addMemory }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [emoji, setEmoji] = useState("😊"); // For frontend display only
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) return;

    setLoading(true);
    let imageUrl = "";

    // Upload image to Cloudinary
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "unsigned_preset");

      try {
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/dvcmv5z0p/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await res.json();
        if (data.secure_url) {
          imageUrl = data.secure_url;
        } else {
          throw new Error("❌ No secure_url returned from Cloudinary");
        }
      } catch (err) {
        alert("❌ Image upload failed.");
        console.error("Cloudinary upload error:", err);
        setLoading(false);
        return;
      }
    }

    // Send to backend
    try {
      const res = await API.post("/memories", {
        title,
        description,
        imageUrl,
      });

      addMemory(res.data.memory);

      // Reset form
      setTitle("");
      setDescription("");
      setEmoji("😊");
      setFile(null);
    } catch (err) {
      alert("❌ Failed to save memory");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-lg rounded-xl p-6 space-y-4 bg-[#EC7FA9] dark:bg-[#3C3D37] transition-colors duration-300"
    >
      <h2 className="text-xl font-semibold text-[#6A1E55] dark:text-[#A64D79]">
        Add a Memory
      </h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Memory Title"
        className="w-full p-2 rounded border bg-white text-black"
        required
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Short description..."
        className="w-full p-2 rounded border bg-white text-black"
        required
      />

     
      <select
        value={emoji}
        onChange={(e) => setEmoji(e.target.value)}
        className="w-full p-2 rounded border bg-white text-black"
      >
        <option value="😊">Happy 😊</option>
        <option value="😢">Sad 😢</option>
        <option value="😠">Angry 😠</option>
        <option value="😎">Cool 😎</option>
        <option value="🥳">Excited 🥳</option>
        <option value="😴">Tired 😴</option>
        <option value="🤔">Thinking 🤔</option>
      </select>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="block text-sm text-black"
        accept="image/*"
      />

      <button
        type="submit"
        className="bg-[#6A1E55] text-white px-4 py-2 rounded hover:bg-[#A64D79]"
        disabled={loading}
      >
        {loading ? "Uploading..." : "Save Memory"}
      </button>
    </form>
  );
}
*/