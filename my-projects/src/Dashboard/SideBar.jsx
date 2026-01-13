import React from "react";

export default function SideBar({ setTransaction }) {
  return (
    <>
      {/* SIDEBAR */}
      <aside className="w-72 bg-slate-900 text-white flex flex-col hidden lg:flex shadow-2xl">
        <div className="p-8 italic font-black text-2xl tracking-tighter text-indigo-400 border-b border-slate-800">
          VAULT<span className="text-white">.PRO</span>
        </div>
        <nav className="flex-1 p-6 space-y-4">
          <div className="flex items-center gap-3 bg-indigo-600/20 text-indigo-400 p-4 rounded-2xl border border-indigo-600/30">
            <span className="text-xl">🏠</span> Dashboard
          </div>  
          <div className="flex items-center gap-3 p-4 text-slate-400 hover:bg-slate-800 rounded-2xl transition">
            <button onClick={() => {localStorage.clear(); setTransaction([]); }}>Clear Local Storage 🗑️</button>
          </div>
        </nav>
      </aside>
    </>
  );
}
