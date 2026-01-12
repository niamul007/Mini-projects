import React, { useState, useEffect } from "react";

export default function LocalStoragePractice() {
    // 1. Initialize state. 
    // We check localStorage immediately so the count doesn't "jump" from 0.
    const [count, setCount] = useState(() => {
        const saved = localStorage.getItem('count');
        return saved ? parseInt(saved) : 0;
    });

    // 2. This useEffect SAVES the count every time it changes.
    useEffect(() => {
        localStorage.setItem('count', count);
        console.log("Saved to storage:", count);
    }, [count]); // This [count] dependency is the key!

    function handleIncrement() {
        setCount(prev => prev + 1);
    }

    return (
        <div className="p-8 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h1 className="text-2xl font-bold">Local Storage Practice</h1>
            <p className="text-lg">Count is: <span className="font-black text-blue-600">{count}</span></p>
            
            <div className="flex gap-4">
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                    onClick={handleIncrement}
                >
                    Increment & Save
                </button>

                <button 
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" 
                    onClick={() => { localStorage.clear(); setCount(0); }}
                >
                    Reset
                </button>
            </div>
            <p className="text-xs text-slate-400 italic">Refresh the page; the number will stay!</p>
        </div>
    );
}