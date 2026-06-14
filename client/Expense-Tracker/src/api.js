import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v2";

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 3000
});

export const fetchExpenses = async () => {
    const res = await api.get("/expense");
    return (res.data && res.data.data ) || [];
};
export const createExpense = async (payload) => {
    const res = await api.post("/expense" , payload);
    return (res.data && res.data.data) || null;
};

export const updateExpense = async (id, payload) => {
    const res = await api.put(`/expense/${id}`, payload);
    return (res.data && res.data.data) || null;
};

export const deleteExpense = async (id) => {
    const res = await api.delete(`/expense/${id}`);
    return res.data || null;
};