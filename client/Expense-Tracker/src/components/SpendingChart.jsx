import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

function SpendingChart() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-xl font-bold text-gray-900">Weekly Spending</h3>
                    <p className="text-sm text-gray-500 mt-1">Last 7 days trend</p>
                </div>
            </div>

            {/* You will need to add your Recharts LineChart component and closing tags here */}
            <ResponsiveContainer width="100%" height={260}>
                {/* I will add Dynamic Data */}
                <LineChart>
                    <defs>
                        <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#6366F1" />
                            <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>
                    </defs>
                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#f0f0f0"
                        vertical={false}
                    />
                    <XAxis
                        dataKey="date"
                        stroke="#9CA3AF"
                        fontSize={12}
                        tickLine={false}
                    />
                    <YAxis stroke="#9CA3AF" fontSize={12} tickLine={false} />
                    <Tooltip formatter={(value) => [`$${value}`, "Spent"]} />
                    <Line
                        type="monotone"
                        dataKey="amount"
                        stroke="url(#lineGradient)"
                        strokeWidth={4}
                        dot={{ fill: "#6366F1", r: 5, strokeWidth: 3, stroke: "#fff" }}
                        activeDot={{ r: 7 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default SpendingChart