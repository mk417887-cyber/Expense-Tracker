import React from 'react'
import { Search, Receipt, Edit2, Trash2 } from 'lucide-react';

export const TransactionList = () => {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-xl font-bold text-gray-900">Transactions</h3>
                    <p className="text-sm text-gray-500 mt-1">Total</p>
                </div>
                <div className="px-4 py-2 bg-gray-700 text-white rounded-full text-sm font-bold">
                    {/* I will use Logic */}
                </div>
            </div>

            <div className="flex gap-3 mb-5">
                <div className="flex-1 relative">
                    <Search className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search....."
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-indigo-500"
                    />
                </div>
                <select className="px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm font-semibold text-gray-700 focus:outline-none focus:border-indigo-500 cursor-pointer">
                    <option>Category</option>
                </select>
            </div>

            <div className="space-y-3 max-h-120 overflow-y-auto pr-2">
                {/* Condtional Rendering */}
                <div className="text-center py-16">
                    <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Receipt className="w-10 h-10 text-gray-400" />
                    </div>
                    <p className="text-gray-600 font-semibold">No transactions found</p>
                    <p className="text-sm text-gray-400 mt-1">Try different filteres</p>
                </div>
                {/* Else map Method */}
                <div className="flex items-center gap-4 p-4 bg-linear-to-r from-gray-50 to-white hover:from-white hover:to-gray-50 border border-gray-100 rounded-xl transition-all group">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                        <div className="w-2.5 h-2.5 rounded-full"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3 mb-1">
                            <h4 className="font-bold text-gray-900 truncate">
                                Expense Description
                            </h4>
                            <span className="text-xl font-bold text-gray-900 whitespace-nowrap">
                                Expense Amount
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                            <span className="px-2.5 py-1 rounded-lg font-bold">
                                Expense Category
                            </span>
                            <span className="text-gray-400">.</span>
                            <span className="text-gray-500 font-medium">Date</span>

                            {/* Conditional Rendering */}
                            <>
                                <span className="text-gray-400">.</span>
                                <span className="text-gray-500">Expense Note</span>
                            </>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all">
                        <button className="p-2.5 bg-indigo-500 text-white hover:bg-indigo-600 rounded-xl transition-all shadow-sm">
                            <Edit2 className="w-4 h-4" strokeWidth={2.5} />
                        </button>
                        <button className="p-2.5 bg-red-500 text-white hover:bg-red-600 rounded-xl transition-all shadow-sm">
                            <Trash2 className="w-4 h-4" strokeWidth={2.5} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
