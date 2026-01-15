import React from "react";

export default function List({
  removeList,
  controlListView,
  listView,
  setListView,
  setTransaction,
}) {
  const [activeTab, setActiveTab] = React.useState("All");
  const [sortType, setSortType] = React.useState("newest");

  // Inside List.jsx
  const [editingId, setEditingId] = React.useState(null); // Which row is active?
  const [tempTitle, setTempTitle] = React.useState(""); // What is the user typing?

  const filteredItems = controlListView.filter((item) => {
    if (activeTab === "All") return true; // Show everything
    return item.type.toLowerCase() === activeTab.toLowerCase(); // Only show if type matches "income" or "expense"
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortType === "newest") {
      return b.id - a.id; // Newest first
    } else if (sortType === "highest") {
      return b.amount - a.amount; // Highest amount first
    } else if (sortType === "lowest") {
      return a.amount - b.amount; // Lowest amount first
    }
  });

  const setList = listView ? sortedItems : sortedItems.slice(0, 3);


  const handleSaveTitle = (id, newTitle) => {
    // 1. Create the updated array from the main data source
    const updatedList = controlListView.map((item) =>
      item.id === id ? { ...item, title: newTitle } : item
    );

    // 2. Update the MAIN state in the Dashboard
    setTransaction(updatedList); 

    // 3. Reset local edit states
    setEditingId(null);
    setTempTitle("");
  };


  return (
    <>
      <div className="lg:col-span-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200">
          {/* HEADER SECTION */}
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-slate-800">
              Recent Activity
            </h3>
            <span className="text-indigo-600 font-semibold cursor-pointer text-sm">
              <button onClick={() => setListView(!listView)}>
                {listView ? "Show Less" : "View All"}
              </button>
            </span>
          </div>

          {/* NEW: FILTER & SORT BAR */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-slate-50">
            {/* Filter Tabs */}
            <div className="flex bg-slate-100 p-1.5 rounded-2xl">
              {["All", "Income", "Expense"].map((tab) => {
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)} // Changes the view
                    className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                      activeTab === tab
                        ? "bg-white text-indigo-600 shadow-sm" // The "Active" look
                        : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Sort:
              </span>
              <select
                className="bg-transparent text-sm font-bold text-slate-700 outline-none cursor-pointer"
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
              >
                <option value="newest">Newest</option>
                <option value="highest">Highest Amount</option>
                <option value="lowest">Lowest Amount</option>
              </select>
            </div>
          </div>

          {/* LIST AREA */}
          {/* LIST AREA */}
          <div className="space-y-4">
            {setList.length === 0 ? (
              /* EMPTY STATE VIEW */
              <div className="flex flex-col items-center justify-center py-20 px-4 bg-slate-50/50 rounded-[2.5rem] border-2 border-dashed border-slate-200">
                <div className="text-4xl mb-4 opacity-50">empty box 📦</div>
                <p className="text-slate-400 font-bold text-center">
                  No transactions found. <br />
                  <span className="text-indigo-400 text-sm font-medium">
                    Add your first entry to start tracking! 🚀
                  </span>
                </p>
                {activeTab !== "All" && (
                  <button
                    onClick={() => setActiveTab("All")}
                    className="mt-4 text-xs font-black text-indigo-600 uppercase tracking-widest hover:underline"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            ) : (
              /* ACTUAL LIST VIEW */
              setList.map((t) => (
                <div
                  key={t.id}
                  className={`flex items-center justify-between p-5 rounded-3xl transition border group hover:shadow-md hover:border-indigo-100 ${
                    t.type === "income"
                      ? "bg-emerald-50/40 border-emerald-100/50"
                      : "bg-rose-50/40 border-rose-100/50"
                  } ${
                    editingId === t.id
                      ? "ring-2 ring-indigo-500 border-transparent"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-sm shadow-sm ${
                        t.type === "income"
                          ? "bg-emerald-500 text-white"
                          : "bg-rose-500 text-white"
                      }`}
                    >
                      {t.type === "income" ? "IN" : "EX"}
                    </div>
                    <div>
                      {/* --- TITLE EDIT LOGIC --- */}
                      {editingId === t.id ? (
                        <input
                          autoFocus
                          className="font-bold text-slate-800 text-lg bg-transparent border-b-2 border-indigo-500 outline-none w-full"
                          value={tempTitle}
                          onChange={(e) => setTempTitle(e.target.value)}
                          onBlur={() => setEditingId(null)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              handleSaveTitle(t.id, tempTitle);
                              setEditingId(null);
                            }
                            if (e.key === "Escape") setEditingId(null);
                          }}
                        />
                      ) : (
                        <p className="font-bold text-slate-800 text-lg">
                          {t.title}
                        </p>
                      )}
                      <p className="text-xs text-slate-400 font-medium">
                        {t.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <p
                      className={`text-xl font-black ${
                        t.type === "income"
                          ? "text-emerald-600"
                          : "text-rose-600"
                      }`}
                    >
                      {t.type === "income" ? "+" : "-"}$
                      {t.amount.toLocaleString()}
                    </p>

                    {/* ACTION GROUP */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setEditingId(t.id);
                          setTempTitle(t.title); // Pre-fill the input with current title
                        }}
                        className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-slate-100 text-slate-400 hover:text-indigo-600 hover:border-indigo-100 transition shadow-sm"
                        title="Edit Transaction"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() => removeList(t.id)}
                        className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-slate-100 text-slate-400 hover:text-rose-500 hover:border-rose-100 transition shadow-sm"
                        title="Delete Transaction"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
