import React from 'react'
import { X } from 'lucide-react'

import { DollarSign } from 'lucide-react';

function Model() {
    return (
        <div className="fixed inset-0 bg-opacity-30 backdrop-blur-lg z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Add Expense</h2>
                        <p className="text-sm text-gray-500 mt-1">Track you spending</p>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition">
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
                                    placeholder="0.00"
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Category
                            </label>
                            <div className="grid grid-cols-4 gap-2">
                                {/* I will use map method */}
                                <button
                                    className={`p-3 py-2.5 rounded-xl text-xs font-bold transition-all`}
                                >
                                    Category
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Note (Optional)
                            </label>
                            <div className="relative">
                                <textarea
                                    type="date"
                                    placeholder="Add notes...."
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500"
                                />
                            </div>
                        </div>
                        <div className="flex gap-3 mt-4">
                            <button className="flex-1 bg-gray-700 text-white py-3 rounded-xl font-bold">
                                Add Expense
                            </button>

                            <button className="px-4 py-3 rounded-xl border font-semibold">
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
