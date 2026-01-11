import React from "react";

export default function List({ removeList, controlListView, listView, setListView }) {
  return (
    <>
      <div className="lg:col-span-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-slate-800">
              Recent Activity
            </h3>
            <span className="text-indigo-600 font-semibold cursor-pointer text-sm">
              <button onClick={() => setListView(!listView)}>
                {" "}
                {listView ? "Show Less" : "View All"}
              </button>
            </span>
          </div>

          <div className="space-y-4">
            {controlListView.map((t) => (
              <div
                key={t.id}
                className={`flex items-center justify-between p-5 rounded-3xl transition border group ${
                  t.type === "income"
                    ? "bg-emerald-50/40 border-emerald-100/50" // Soft Green Row
                    : "bg-rose-50/40 border-rose-100/50" // Soft Red Row
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
                    <p className="font-bold text-slate-800 text-lg">
                      {t.title}
                    </p>
                    <p className="text-xs text-slate-400 font-medium">
                      {t.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <p
                    className={`text-xl font-black ${
                      t.type === "income" ? "text-emerald-600" : "text-rose-600"
                    }`}
                  >
                    {t.type === "income" ? "+" : "-"}$
                    {t.amount.toLocaleString()}
                  </p>
                  <button
                    onClick={() => removeList(t.id)}
                    className="text-slate-300 hover:text-rose-500 transition text-xl"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
