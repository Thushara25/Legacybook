/*import MemoryCard from "./MemoryCard";

export default function MemoryList({ memories }) {
    if (memories.length === 0) {
        return ( <
            p className = "text-center text-gray-500 mt-10 animate-fade-in" >
            No memories yet.Start adding some!
            <
            /p>
        );
    }

    return ( <
        div className = "grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up" > {
            memories.map((memory, index) => ( <
                MemoryCard key = { index } {...memory }
                />
            ))
        } <
        /div>
    );
}

*/

import MemoryCard from "./MemoryCard";

export default function MemoryList({ memories }) {
    if (memories.length === 0) {
        return ( <
            p className = "text-center text-gray-500 mt-10 animate-fade-in" >
            No memories yet.Start adding some!
            <
            /p>
        );
    }

    return ( <
        div className = "grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up" > {
            memories.map((memory, index) => ( <
                MemoryCard key = { index } {...memory }
                />
            ))
        } <
        /div>
    );
}