import React from 'react'
import { Plus } from 'lucide-react'

import StatCard from './components/StatCard'
import SpendingChart from './components/SpendingChart'
import CategoryChart from './components/CategoryChart'
import { TransactionList } from './components/TransactionList'
import Model from './components/Model'
import { useState } from 'react'
import { Wallet } from 'lucide-react'

import { fetchExpenses, createExpese, deleteExpense, updateExpense } from './api'

function App() {

  const [expenses, setExpense] = useState([]);

  // Stats Calculation
  const calculationStats = (expenseList) => {
    const list = expenseList || [];
    const total = list.reduce((sum, e) => sum + Number(e.amount || 0), 0);

    const categoryTotals = list.reduce((acc, e) => {
      acc[e.category] = (acc[e.category] || 0) + Number(e.amount || 0);
      return acc;
    }, {});

    return {
      total,
      count: list.length,
      avg: list.length > 0 ? total / list.length : 0,
      highest:
        list.length > 0 ? Math.max(...list.map((e) => Number(e.amount) || 0)) : 0,
      categoryTotals,
    };
  };

  const stats = calculationStats(expenses);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-gray-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6 lg:py-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-700 lg:text-4xl mb-1">
              Expense Tracker
            </h1>
            <p className="text-gray-700">Manage your finance with ease</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-gray-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all flex items-center gap-2">
              <Plus className="w-4 h-4" /> Add Expense
            </button>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard value={` $${stats.total.toFixed(2)}`} 
            title="Total Expenses"
            icon = {Wallet}
            subtitle = "This Month"
            bgColor = "bg-linear-to-br from-indigo-500 via-indigo-400 to-indigo-600"
            iconColor = "text-indigo-700"/>
        </div>
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
          <div className="lg:col-span-3">
            <SpendingChart />
          </div>
          <div className='lg:col-span-2'>
            <CategoryChart />
          </div>
        </div>

        <TransactionList />
      </div>

      {/* <Model/> */}
    </div>
  );
}

export default App