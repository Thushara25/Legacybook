/*import React from "react";

function MemoryCard({ memory }) {
  return (
    <div className="bg-white p-4 rounded shadow mb-3">
      <h2 className="text-xl font-semibold">{memory.name}</h2>
      <p className="text-gray-600">Relation: {memory.relation}</p>
      <p className="mt-2">{memory.message}</p>
    </div>
  );
}

export default MemoryCard;*/

/* src/components/MemoryCard.js
export default function MemoryCard({ title, description, date, mood }) {
    return ( <
        div className = "bg-white rounded-2xl shadow-md p-4 max-w-sm" >
        <
        h2 className = "text-xl font-bold" > { title } < /h2> <
        p className = "text-gray-600 mt-2" > { description } < /p> <
        div className = "flex justify-between items-center mt-4 text-sm text-gray-500" >
        <
        span > { date } < /span> <
        span > { mood } < /span> <
        /div> <
        /div>
    );
} */

/*export default function MemoryCard({ title, description, date, mood }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-fade-in">
      <h2 className="text-xl font-bold text-purple-700">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
        <span>{date}</span>
        <span className="text-xl">{mood}</span>
      </div>
    </div>
  );
}
*/

export default function MemoryCard({ title, description, date, mood }) {
    return ( <
        div className = "bg-white rounded-xl shadow-md p-5 transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-fade-in" >
        <
        h2 className = "text-xl font-bold text-purple-700" > { title } < /h2> <
        p className = "text-gray-600 mt-2" > { description } < /p> <
        div className = "flex justify-between items-center mt-4 text-sm text-gray-500" >
        <
        span > { date } < /span> <
        span className = "text-xl" > { mood } < /span> <
        /div> <
        /div>
    );
}