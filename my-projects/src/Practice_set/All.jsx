import React from "react";

export default function PracticeLab() {
  // --- STEP 1: INITIAL DATA ---
  // Transform this into a piece of STATE so you can edit it later
  const initialProjects = [
    { id: 1, title: "Build Rocket", category: "Science", budget: 5000 },
    { id: 2, title: "Fix Garden", category: "Home", budget: 200 },
    { id: 3, title: "Write Book", category: "Art", budget: 1200 },
  ];

  // --- STEP 2: DEFINE YOUR STATES HERE ---
  // TODO: Create state for the projects list
  // TODO: Create state for the active category filter (Default: "All")
  // TODO: Create state for the sort type (Default: "low-to-high")
  // TODO: Create state for the editingId (To know which row is active)
  // TODO: Create state for the tempTitle (To hold the input text)

  const [projectList, setProjectList] = React.useState(initialProjects);
  const totalBalance = projectList.reduce(
    (acc, curr) => acc + (curr.budget || 0),
    0
  );
  console.log(totalBalance);

  // --- STEP 3: LOGIC WORKBENCH ---
  // TODO: Create a variable for filteredItems (filter based on category state)
  // TODO: Create a variable for sortedItems (sort based on budget or title)

  // --- STEP 4: FUNCTIONS ---
  // TODO: Create a function to handle deleting an item
  // TODO: Create a function to handle saving the edited title

  return (
    <div className="min-h-screen bg-slate-100 p-10 font-sans text-slate-900">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-[3rem] shadow-2xl">
        <h1 className="text-3xl font-black mb-8 tracking-tight">
          Project Manager Lab
        </h1>

        {/* --- FILTER & SORT SECTION --- */}
        <div className="flex flex-wrap gap-4 justify-between items-center mb-10 pb-6 border-b">
          {/* TABS */}
          <div className="flex bg-slate-100 p-2 rounded-2xl gap-2">
            {["All", "Science", "Home", "Art"].map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all"
                // TODO: Add onClick to set the active category state
                // TODO: Add dynamic class for the "Active" tab look
              >
                {cat}
              </button>
            ))}
          </div>

          {/* SORT DROPDOWN */}
          <select
            className="p-2 bg-slate-50 border rounded-xl text-sm font-bold outline-none"
            // TODO: Add value and onChange to control sorting state
          >
            <option value="low-to-high">Budget: Low to High</option>
            <option value="high-to-low">Budget: High to Low</option>
            <option value="alphabetical">Title: A-Z</option>
          </select>
        </div>

        {/* --- THE LIST SECTION --- */}
        <div className="space-y-4">
          {/* TODO: Map over your sortedItems variable here */}
          {initialProjects.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100 group"
            >
              <div className="flex flex-col flex-1">
                {/* --- TITLE AREA (Condition Logic Needed) --- */}
                {/* TODO: If editingId matches this item.id, show <input /> */}
                {/* TODO: Else, show the <h3> with the item.title */}

                <h3 className="text-lg font-extrabold">{item.title}</h3>

                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  {item.category} • ID: #{item.id}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xl font-black text-indigo-600">
                  ${item.budget}
                </span>

                {/* ACTIONS */}
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {/* EDIT BUTTON */}
                  <button
                    className="p-2 bg-white border rounded-xl hover:text-indigo-600 transition-colors"
                    // TODO: Add onClick to trigger edit mode (set editingId and tempTitle)
                  >
                    ✏️
                  </button>

                  {/* DELETE BUTTON */}
                  <button
                    className="p-2 bg-white border rounded-xl hover:text-rose-600 transition-colors"
                    // TODO: Add onClick to delete the item
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- STATS FOOTER --- */}
        <div className="mt-10 pt-6 border-t flex justify-between items-center text-slate-400">
          <p className="text-xs font-bold uppercase">Total Items: 0</p>
          <p className="text-xs font-bold uppercase">Total Budget: ${totalBalance}</p>
        </div>
      </div>
    </div>
  );
}
