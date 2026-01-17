import React from "react";

export default function FinancePro() {
  // --- LOGIC ZONE ---
  // TODO 1: Create state for 'transactions' (Array of {id, text, amount, type})
  // TODO 2: Create state for 'savingsGoal' (Number)
  // TODO 3: Create state for 'editingId' (For your update logic)


  // --- DERIVED LOGIC ---
  // TODO 4: Calculate 'totalBalance' using .reduce()
  // TODO 5: Calculate 'progressPercentage' (Balance / Goal * 100)

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 p-4 md:p-10 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER & GOAL SECTION */}
        <header className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2 bg-gradient-to-br from-indigo-600 to-violet-700 p-8 rounded-[2rem] shadow-xl">
            <p className="text-indigo-100 text-sm font-bold uppercase tracking-widest opacity-80">Current Balance</p>
            <h1 className="text-5xl font-black text-white mt-2">$0.00</h1> {/* TODO: Total Balance */}
            
            <div className="mt-8">
              <div className="flex justify-between text-xs font-bold mb-2">
                <span>GOAL PROGRESS</span>
                <span>0%</span> {/* TODO: Progress % */}
              </div>
              <div className="w-full bg-indigo-900/40 h-3 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full transition-all duration-500" style={{ width: '0%' }}></div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-[2rem] border border-slate-700 flex flex-col justify-center">
            <p className="text-slate-400 text-xs font-bold uppercase mb-4">Set Savings Goal</p>
            <input 
              type="number" 
              className="bg-transparent text-3xl font-black outline-none border-b-2 border-slate-600 focus:border-indigo-500 pb-2"
              placeholder="0.00"
              // TODO: Wire to savingsGoal state
            />
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* INPUT FORM */}
          <section className="bg-slate-800/50 p-8 rounded-[2rem] border border-slate-700 h-fit">
            <h3 className="text-xl font-bold mb-6">Add Transaction</h3>
            <div className="space-y-4">
              <input className="w-full bg-slate-900 border border-slate-700 p-4 rounded-2xl outline-none focus:ring-2 ring-indigo-500" placeholder="Description (e.g. Salary)" />
              <input type="number" className="w-full bg-slate-900 border border-slate-700 p-4 rounded-2xl outline-none focus:ring-2 ring-indigo-500" placeholder="Amount" />
              <div className="flex gap-2">
                <button className="flex-1 py-4 bg-emerald-500/10 text-emerald-500 rounded-2xl font-bold hover:bg-emerald-500 hover:text-white transition-all">Income</button>
                <button className="flex-1 py-4 bg-rose-500/10 text-rose-500 rounded-2xl font-bold hover:bg-rose-500 hover:text-white transition-all">Expense</button>
              </div>
            </div>
          </section>

          {/* TRANSACTION LIST */}
          <section className="lg:col-span-2 space-y-4">
             {/* TODO: Map transactions here */}
             <div className="group bg-slate-800 p-6 rounded-[2rem] border border-slate-700 flex justify-between items-center transition-all hover:border-slate-500">
               <div className="flex gap-4 items-center">
                 <div className="w-12 h-12 bg-slate-700 rounded-2xl flex items-center justify-center text-xl">💰</div>
                 <div>
                   <h4 className="font-bold text-lg text-white">Sample Item</h4>
                   <p className="text-xs text-slate-500 font-bold uppercase">Income</p>
                 </div>
               </div>
               <div className="flex items-center gap-6">
                 <span className="text-xl font-black text-emerald-400">+$0.00</span>
                 <button className="opacity-0 group-hover:opacity-100 p-2 text-slate-500 hover:text-rose-500 transition-all">🗑️</button>
               </div>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
}