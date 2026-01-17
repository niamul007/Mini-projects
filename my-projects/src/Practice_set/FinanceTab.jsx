import React from "react";

export default function FinancePro() {
  // --- [ YOUR LOGIC / STATES GO HERE ] ---

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-slate-200 p-6 md:p-12 font-sans selection:bg-indigo-500/30">
      <div className="max-w-6xl mx-auto">
        
        {/* TOP DASHBOARD CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Main Balance Display */}
          <div className="lg:col-span-2 bg-indigo-600 p-8 rounded-[2.5rem] shadow-2xl shadow-indigo-900/20 relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all"></div>
            <p className="text-indigo-100 text-xs font-black uppercase tracking-[0.2em]">Available Balance</p>
            <h2 className="text-5xl font-black text-white mt-3 tracking-tight">
              {/* YOUR BALANCE VARIABLE */} $0.00
            </h2>
            <div className="mt-10 space-y-3">
              <div className="flex justify-between text-[10px] font-black text-indigo-100 uppercase tracking-widest">
                <span>Goal Progress</span>
                <span>{/* YOUR PROGRESS % */} 0%</span>
              </div>
              <div className="w-full bg-black/20 h-2.5 rounded-full overflow-hidden border border-white/5">
                <div 
                  className="bg-white h-full transition-all duration-1000 ease-in-out" 
                  style={{ width: `0%` /* YOUR DYNAMIC WIDTH */ }}
                ></div>
              </div>
            </div>
          </div>

          {/* Goal Settings Card */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2.5rem] flex flex-col justify-between">
            <div>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Target Goal</p>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-black text-slate-400">$</span>
                <input 
                  type="number"
                  className="bg-transparent text-3xl font-black text-white outline-none w-full border-b border-transparent focus:border-slate-700 transition-all"
                  placeholder="0"
                  /* YOUR VALUE & ONCHANGE */
                />
              </div>
            </div>
            <p className="text-[11px] text-slate-600 font-medium italic mt-4 leading-relaxed">
              "A budget tells your money where to go instead of wondering where it went."
            </p>
          </div>

          {/* Quick Info Card */}
          <div className="bg-slate-900/50 border border-dashed border-slate-800 p-8 rounded-[2.5rem] flex items-center justify-center">
             <div className="text-center">
                <p className="text-indigo-400 text-2xl font-black">{/* COUNT */ } 0</p>
                <p className="text-slate-500 text-[10px] font-black uppercase mt-1">Total Entries</p>
             </div>
          </div>
        </div>

        {/* MAIN INTERACTION AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* INPUT FORM (4 Columns) */}
          <div className="lg:col-span-4">
            <form className="bg-slate-900 border border-slate-800 p-8 rounded-[2.5rem] sticky top-10 shadow-xl">
              <h3 className="text-lg font-black text-white mb-8 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-indigo-500 rounded-full"></span>
                Add Transaction
              </h3>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase ml-1">Label</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-800/50 border border-slate-700 p-4 rounded-2xl outline-none focus:ring-2 ring-indigo-500 text-white transition-all"
                    placeholder="Rent, Groceries..."
                    /* YOUR BINDING */
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase ml-1">Amount</label>
                  <input 
                    type="number" 
                    className="w-full bg-slate-800/50 border border-slate-700 p-4 rounded-2xl outline-none focus:ring-2 ring-indigo-500 text-white font-mono"
                    placeholder="0.00"
                    /* YOUR BINDING */
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase ml-1">Category Type</label>
                  <select 
                    className="w-full bg-slate-800/50 border border-slate-700 p-4 rounded-2xl outline-none focus:ring-2 ring-indigo-500 text-white cursor-pointer appearance-none"
                    /* YOUR BINDING */
                  >
                    <option value="income">Income (+)</option>
                    <option value="expense">Expense (-)</option>
                  </select>
                </div>

                <button 
                  className="w-full py-4 bg-white text-black rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-indigo-500 hover:text-white transition-all active:scale-95 mt-4"
                  /* YOUR SUBMIT HANDLER */
                >
                  Confirm Entry
                </button>
              </div>
            </form>
          </div>

          {/* LIST AREA (8 Columns) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex justify-between items-center mb-6 px-4">
               <h3 className="font-bold text-slate-400">History</h3>
               <button className="text-[10px] font-black text-indigo-500 uppercase hover:text-indigo-400">Clear All</button>
            </div>

            {/* YOUR .map() STARTS HERE */}
            <div className="group bg-slate-900/40 border border-slate-800 p-6 rounded-3xl flex items-center justify-between hover:bg-slate-900 transition-all">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-xl grayscale group-hover:grayscale-0 transition-all">
                  💰 {/* OR 💸 BASED ON TYPE */}
                </div>
                <div>
                  <h4 className="font-bold text-white capitalize">Template Item</h4>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-tighter">Transaction ID: #0000</p>
                </div>
              </div>
              
              <div className="flex items-center gap-8">
                <span className="text-xl font-black text-emerald-400"> {/* OR ROSE-400 */}
                   +$0.00
                </span>
                <button className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-xl hover:bg-rose-500/20 hover:text-rose-500 transition-all opacity-0 group-hover:opacity-100">
                  🗑️
                </button>
              </div>
            </div>
            {/* YOUR .map() ENDS HERE */}

          </div>
        </div>
      </div>
    </div>
  );
}