import React from 'react'

function StatCard() {
    return (
        <div
        className={`rounded-2xl p-6 text-black relative overflow-hidden group cursor-pointer transition-all hover:scale-105 hover:shadow-2xl`}
    >
        <div className="relative z-10">
            <div
                className={`inline-flex p-3 rounded-xl mb-4 group-hover:rotate-12 transition-all duration-300`}
            >
                Icons
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-1">Value</h3>
            <p className="text-sm opacity-90 font-medium">Title</p>
            {/* Conditional Rendering */}
            <p className="text-xs opacity-75 mt-1">Subtitle</p>
        </div>
    </div>
    );
}

export default StatCard