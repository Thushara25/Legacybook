import API from '../api/axios';

export const createMemory = async(memory) => {
    const res = await API.post('/memories', memory);
    return res.data.memory;
};

export const getMemories = async() => {
    const res = await API.get('/memories');
    return res.data.memories;
};