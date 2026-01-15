import React from "react";

export default function Tab() {
  // 1. Move projects to STATE so we can modify them
  const [projectList, setProjectList] = React.useState([
    { id: 101, title: "Ocean Cleanup AI", category: "Enviroment", budget: 15000, date: "2025-05-12" },
    { id: 102, title: "Youth Mentorship", category: "Social", budget: 2500, date: "2024-11-20" },
    { id: 103, title: "FinTech App Launch", category: "Bussiness", budget: 45000, date: "2026-01-05" },
    { id: 104, title: "Reforestation Initiative", category: "Enviroment", budget: 8000, date: "2025-08-15" },
    { id: 105, title: "Elderly Care Program", category: "Social", budget: 12000, date: "2025-03-10" },
    { id: 106, title: "SaaS Scaling Plan", category: "Bussiness", budget: 32000, date: "2025-12-01" },
    { id: 107, title: "Urban Garden Build", category: "Enviroment", budget: 1200, date: "2024-06-30" },
  ]);

  const [activeTab, setActiveTab] = React.useState("All");
  const [sortType, setSortType] = React.useState("newest");
  
  // EDIT LOGIC: State to track which item is being edited
  const [editingId, setEditingId] = React.useState(null);
  const [editValue, setEditValue] = React.useState("");

  // DERIVED STATE: Filter and Sort
  const filteredProjects = projectList.filter((project) => {
    if (activeTab === "All") return true;
    return project.category === activeTab;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortType === "newest") return new Date(b.date) - new Date(a.date);
    if (sortType === "budget-high") return b.budget - a.budget;
    if (sortType === "budget-low") return a.budget - b.budget;
    return 0;
  });

  // EDIT LOGIC: Function to save the change
  const handleSave = (id) => {
    const updated = projectList.map(p => 
      p.id === id ? { ...p, title: editValue } : p
    );
    setProjectList(updated);
    setEditingId(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER & TABS (Omitted for brevity, keep your existing code here) */}

        {/* DATA DISPLAY GRID */}
        <div className="grid gap-4 mt-8">
          {sortedProjects.map((project) => (
            <div key={project.id} className={`group bg-white p-6 rounded-[2rem] border transition-all duration-300 flex justify-between items-center ${editingId === project.id ? "border-indigo-500 ring-2 ring-indigo-100" : "border-slate-200"}`}>
              
              <div className="flex items-center gap-6">
                {/* ICON */}
                <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-xl">
                  {project.category === "Enviroment" ? "🌱" : project.category === "Social" ? "🤝" : "💼"}
                </div>

                {/* TITLE AREA (Conditional Rendering for Edit) */}
                <div>
                  {editingId === project.id ? (
                    <div className="flex gap-2">
                      <input 
                        className="border-b-2 border-indigo-500 outline-none text-xl font-bold p-1"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        autoFocus
                      />
                      <button onClick={() => handleSave(project.id)} className="bg-indigo-600 text-white px-4 py-1 rounded-lg text-xs font-bold">SAVE</button>
                      <button onClick={() => setEditingId(null)} className="text-slate-400 text-xs">Cancel</button>
                    </div>
                  ) : (
                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                      {project.title}
                      <button 
                        onClick={() => { setEditingId(project.id); setEditValue(project.title); }}
                        className="opacity-0 group-hover:opacity-100 text-xs text-indigo-500 font-bold"
                      >
                        ✎ Edit
                      </button>
                    </h3>
                  )}
                  <p className="text-xs text-slate-400 font-bold uppercase mt-1">{project.category} • {project.date}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-2xl font-black text-slate-900">${project.budget.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}