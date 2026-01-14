import React from "react";

export default function Tab() {
  // --- PRACTICE DATA SOURCE ---
  const projects = [
    {
      id: 101,
      title: "Ocean Cleanup AI",
      category: "Enviroment",
      budget: 15000,
      date: "2025-05-12",
    },
    {
      id: 102,
      title: "Youth Mentorship",
      category: "Social",
      budget: 2500,
      date: "2024-11-20",
    },
    {
      id: 103,
      title: "FinTech App Launch",
      category: "Bussiness",
      budget: 45000,
      date: "2026-01-05",
    },
    {
      id: 104,
      title: "Reforestation Initiative",
      category: "Enviroment",
      budget: 8000,
      date: "2025-08-15",
    },
    {
      id: 105,
      title: "Elderly Care Program",
      category: "Social",
      budget: 12000,
      date: "2025-03-10",
    },
    {
      id: 106,
      title: "SaaS Scaling Plan",
      category: "Bussiness",
      budget: 32000,
      date: "2025-12-01",
    },
    {
      id: 107,
      title: "Urban Garden Build",
      category: "Enviroment",
      budget: 1200,
      date: "2024-06-30",
    },
  ];

  const [activeTab, setActiveTab] = React.useState("All");
  const [sortType, setSortType] = React.useState("newest");

  const filteredProjects = projects.filter((project) => {
    if (activeTab === "All") return true;
    return project.category === activeTab;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortType === "newest") {
      return new Date(b.date) - new Date(a.date);
    } else if (sortType === "budget-high") {
      return b.budget - a.budget;
    } else if (sortType === "budget-low") {
      return a.budget - b.budget;
    }
  });

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">
              Project Hub
            </h1>
            <p className="text-slate-500 font-medium">
              Manage and track organization initiatives
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
              Sort By:
            </span>
            <select
              className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-bold text-slate-700 outline-none shadow-sm cursor-pointer"
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="newest">Newest Date</option>
              <option value="budget-high">Highest Budget</option>
              <option value="budget-low">Lowest Budget</option>
            </select>
          </div>
        </div>

        {/* TABS COMPONENT */}
        <div className="flex bg-slate-200/50 p-1.5 rounded-[1.5rem] w-fit mb-8 border border-slate-200">
          {["All", "Enviroment", "Social", "Bussiness"].map((tab) => (
            <button
              onClick={() => setActiveTab(tab)}
              key={tab}
              className={`px-8 py-3 rounded-[1.2rem] text-sm font-bold uppercase tracking-wider transition-all text-slate-400 hover:text-slate-600 ${
                activeTab === tab ? "bg-white text-slate-900 shadow-sm" : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* DATA DISPLAY GRID */}
        <div className="grid gap-4">
          {/* Practice Mapping over 'projects' here */}
          {sortedProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white p-6 rounded-[2rem] border border-slate-200 flex flex-col md:flex-row md:items-center justify-between shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center text-xl shadow-inner ${
                    project.category === "Enviroment"
                      ? "bg-emerald-100 text-emerald-600"
                      : project.category === "Social"
                      ? "bg-rose-100 text-rose-600"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {project.category === "Enviroment"
                    ? "🌱"
                    : project.category === "Social"
                    ? "🤝"
                    : "💼"}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 bg-slate-100 text-slate-500 rounded-md">
                      {project.category}
                    </span>
                    <span className="text-xs text-slate-400 font-bold">
                      ID: #{project.id} • {project.date}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 md:mt-0 text-right">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">
                  Allocated Budget
                </p>
                <p className="text-2xl font-black text-slate-900">
                  ${project.budget.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER STATS (Static for now) */}
        <div className="mt-10 p-8 bg-indigo-900 rounded-[2.5rem] text-white flex flex-col sm:flex-row justify-around items-center gap-6 shadow-2xl shadow-indigo-200">
          <div className="text-center">
            <p className="text-indigo-300 text-xs font-bold uppercase tracking-widest mb-2">
              Total Projects
            </p>
            <p className="text-3xl font-black">{projects.length}</p>
          </div>
          <div className="w-px h-12 bg-indigo-700 hidden sm:block"></div>
          <div className="text-center">
            <p className="text-indigo-300 text-xs font-bold uppercase tracking-widest mb-2">
              Active Categories
            </p>
            <p className="text-3xl font-black">3</p>
          </div>
          <div className="w-px h-12 bg-indigo-700 hidden sm:block"></div>
          <div className="text-center">
            <p className="text-indigo-300 text-xs font-bold uppercase tracking-widest mb-2">
              Combined Budget
            </p>
            <p className="text-3xl font-black">$115,700</p>
          </div>
        </div>
      </div>
    </div>
  );
}
