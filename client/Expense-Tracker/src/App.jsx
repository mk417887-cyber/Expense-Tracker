import React from 'react'
import { DollarSign, Plus, TrendingUp } from 'lucide-react'

import StatCard from './components/StatCard'
import SpendingChart from './components/SpendingChart'
import CategoryChart from './components/CategoryChart'
import TransactionList from './components/TransactionList'
import Model from './components/Model'
import { useState } from 'react'
import { Wallet } from 'lucide-react'
import { ShoppingCart } from 'lucide-react'
import { useEffect } from 'react'


import { fetchExpenses, createExpense, deleteExpense, updateExpense } from './api'

function App() {

  const [expenses, setExpense] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [IsModelOpen, setIsModelOpen] = useState(false);
  const [editingExpense, setEditingExpense] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

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


  // Load initial data
  useEffect(() => {
    const load = async () => {
      setLoading(true);

      try {
        const [expData] = await Promise.all([fetchExpenses()]);

        const normalized = (expData || []).map((e) => ({
          ...e,
          date: e?.date
            ? String(e.date).split("T")[0]
            : new Date().toISOString().split("T")[0],
        }));

        setExpense(normalized);
      } catch (error) {
        console.error("load error:", error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  // ADD ,EDIT and Delete

  const handleAddExpense = async (payload) => {
    try {
      const created = await createExpense(payload);

      if (!created) throw new Error("No created expense returned");

      setExpense((prev) => [
        { ...created, date: created.date.split("T")[0] },
        ...prev,
      ]);

      setIsModelOpen(false);
    } catch (error) {
      console.error("Create error:", error);
    }
  };

  const onEdit = (expense) => {
    setEditingExpense(expense);
    setIsModelOpen(true);
  };

  const handleSaveEdit = async (payload) => {
    if (!editingExpense) return;

    try {
      const updated = await updateExpense(editingExpense._id, payload);

      setExpense((prev) =>
        prev.map((e) =>
          e._id === updated._id
            ? { ...updated, date: updated.date.split("T")[0] }
            : e
        )
      );

      setEditingExpense(null);
      setIsModelOpen(false);
    } catch (error) {
      console.error("Create error:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this Epxense")) return;

    try {
      await deleteExpense(id);
    } catch (error) {
      console.error("Create error:", error);
    }
  };

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
            <button className="px-4 py-2 bg-gray-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all flex items-center gap-2"
              onClick={() => {
                setIsModelOpen(true);
                setEditingExpense(null);
              }}>
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
            icon={Wallet}
            subtitle="This Month"
            bgColor="bg-linear-to-br from-indigo-500 via-indigo-400 to-indigo-600"
            iconColor="text-indigo-700" />

          <StatCard value={stats.count}
            title="Expenses"
            icon={ShoppingCart}
            subtitle={` $${stats.count} transactions`}
            bgColor="bg-linear-to-br from-purple-500 via-purple-400 to-purple-600"
            iconColor="text-purple-700" />

          <StatCard value={` $${stats.total.toFixed(2)}`}
            title="Average"
            icon={TrendingUp}
            subtitle="Per Expense"
            bgColor="bg-linear-to-br from-pink-500 via-pink-400 to-pink-600"
            iconColor="text-pink-700" />

          <StatCard
            subtitle="Single Expense"
            title="Highest"
            icon={DollarSign}
            value={` $${stats.total.toFixed(2)}`}
            bgColor="bg-linear-to-br from-purple-500 via-purple-400 to-purple-600"
            iconColor="text-purple-700" />


        </div>
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
          <div className="lg:col-span-3">
            <SpendingChart expenses={expenses} />
          </div>
          <div className='lg:col-span-2'>
            <CategoryChart categoyTotal={stats.categoryTotals} />
          </div>
        </div>

        <TransactionList expenses={expenses} onEdit={onEdit} onDelete={handleDelete}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}

        />
      </div>

      <Model
        isOpen={IsModelOpen}
        onClose={() => {
          setIsModelOpen(false);
          setEditingExpense(null);
        }}
        onSubmit={editingExpense ? handleSaveEdit : handleAddExpense}
        initialData={editingExpense}
      />
    </div >
  );
}

export default App