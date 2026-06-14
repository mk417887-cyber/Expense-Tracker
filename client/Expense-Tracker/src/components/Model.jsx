import React from 'react'
import { X } from 'lucide-react'
import { useState, useEffect } from 'react'

import { DollarSign } from 'lucide-react';

const categories = [
    "Food",
    "Transportation",
    "Entertainment",
    "Shopping",
    "Bills",
    "Healthcare",
    "Other",
]

function Model({ isOpen, onClose, onSubmit, initialData }) {
    const empty = {
        description: "",
        amount: "",
        date: new Date().toISOString().split("T")[0],
        category: "",
        notes: "",
    };
    const [formData, setFormData] = useState(initialData || empty);

    useEffect(() => {
        setFormData(initialData || empty);
    }, [initialData]);

    if (!isOpen) return null;

    const handleSubmit = () => {
        if (!formData.description || !formData.amount) {
            alert("please fill require fields");
            return;
        }
        onSubmit({ ...formData, amount: parseFloat(formData.amount) });
    };
    return (
        <div>
            <div className="fixed inset-0 bg-opacity-30 backdrop-blur-lg z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">
                                {initialData ? "Edit Transaction" : "New Transaction"}
                            </h2>
                            <p className="text-sm text-gray-500 mt-1">Track you spending</p>
                        </div>
                        <button className="p-2 hover:bg-gray-100 rounded-full transition " onClick={onClose}>
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                What did you buy?
                            </label>
                            <input
                                type="text"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                placeholder="Enter description"
                                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    Amount
                                </label>
                                <div className="relative">
                                    <DollarSign className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                                    <input
                                        type="number"
                                        value={formData.amount}
                                        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                                        placeholder="0.00"
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    Date
                                </label>
                                <div className="relative">

                                    <input
                                        type="date"
                                        value={formData.date}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                        placeholder="0.00"
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500"
                                    />
                                </div>
                            </div>

                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Category
                            </label>
                            <div className="grid grid-cols-4 gap-2">
                                {/* I will use map method */}
                                {categories.map((cat) => {
                                    return (
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setFormData({ ...formData, category: cat })
                                            }}
                                            className={`p-3 py-2.5 rounded-xl text-xs font-bold transition-all ${formData.category === cat
                                                ? "bg-indigo-600 text-white scale-105 shadow-lg"
                                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                                }`}
                                        >
                                            {cat}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Note (Optional)
                            </label>
                            <div className="relative">
                                <textarea
                                    value={formData.notes}
                                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                    rows="3"
                                    placeholder="Add notes...."
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500"
                                />
                            </div>
                        </div>
                        <div className="flex gap-3 mt-4">
                            <button className="flex-1 bg-gray-700 text-white py-3 rounded-xl font-bold"
                                onClick={handleSubmit}>
                                {initialData ? "Save Changes" : "Add Transaction"}
                            </button>

                            <button className="px-4 py-3 rounded-xl border font-semibold"
                                onClick={onClose}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Model;
