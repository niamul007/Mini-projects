import React, { useState, useEffect } from "react";

export default function LocalStoragePractice() {
    // // 1. Initialize state. 
    // // We check localStorage immediately so the count doesn't "jump" from 0.
    // const [count, setCount] = useState(() => {
    //     const saved = localStorage.getItem('count');
    //     return saved ? parseInt(saved) : 0;
    // });

    // // 2. This useEffect SAVES the count every time it changes.
    // useEffect(() => {
    //     localStorage.setItem('count', count);
    //     console.log("Saved to storage:", count);
    // }, [count]); // This [count] dependency is the key!

    // function handleIncrement() {
    //     setCount(prev => prev + 1);
    // }

const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Low");
  const [taskList, setTaskList] = useState(()=>{
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(taskList));
  },[taskList]);




    return (
        // <div className="p-8 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
        //     <h1 className="text-2xl font-bold">Local Storage Practice</h1>
        //     <p className="text-lg">Count is: <span className="font-black text-blue-600">{count}</span></p>
            
        //     <div className="flex gap-4">
        //         <button 
        //             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
        //             onClick={handleIncrement}
        //         >
        //             Increment & Save
        //         </button>

        //         <button 
        //             className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" 
        //             onClick={() => { localStorage.clear(); setCount(0); }}
        //         >
        //             Reset
        //         </button>
        //     </div>
        //     <p className="text-xs text-slate-400 italic">Refresh the page; the number will stay!</p>
        // </div>
<div className="min-h-screen bg-[#f8fafc] p-6 lg:p-20 flex justify-center">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-black text-slate-800 tracking-tight">
            WORK<span className="text-indigo-600">FLOW</span>
          </h1>
          <p className="text-slate-400 font-medium">LocalStorage Practice Ground</p>
        </header>

        <div className="grid grid-cols-1 gap-8">
          {/* Input Card */}
          <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/60 border border-slate-100">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="What needs to be done?"
                className="flex-1 bg-slate-50 border-none p-4 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
              />
              <select 
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="bg-slate-50 border-none p-4 rounded-2xl outline-none font-bold text-slate-600"
              >
                <option value="Low">Low</option>
                <option value="High">High</option>
              </select>
              <button 
                onClick={() => {
                   if(!task) return;
                   setTaskList([...taskList, { id: Date.now(), text: task, level: priority }]);
                   setTask("");
                }}
                className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all active:scale-95"
              >
                Add
              </button>
            </div>
          </div>

          {/* List Card */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Current Tasks</h3>
            
            <div className="space-y-3">
              {taskList.length === 0 && (
                <div className="py-10 text-center border-2 border-dashed border-slate-100 rounded-3xl text-slate-300 font-medium">
                  Your vault is empty.
                </div>
              )}

              {taskList.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-indigo-100 transition-all">
                  <div className="flex items-center gap-4">
                    <span className={`w-3 h-3 rounded-full ${item.level === 'High' ? 'bg-rose-500' : 'bg-emerald-500'}`}></span>
                    <span className="font-semibold text-slate-700">{item.text}</span>
                  </div>
                  <button 
                    onClick={() => setTaskList(taskList.filter(t => t.id !== item.id))}
                    className="text-slate-300 hover:text-rose-500 font-bold transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {taskList.length > 0 && (
              <button 
                onClick={() => { localStorage.clear(); setTaskList([]); }}
                className="mt-8 w-full text-center text-xs font-black text-slate-400 uppercase tracking-widest hover:text-rose-500 transition-colors"
              >
                Wipe LocalStorage
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
    );
}