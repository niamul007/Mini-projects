import React from "react";

const FinanceDashboard = () => {
  // HARDCODED SAMPLES - No logic, just visuals
  const sampleTransactions = [
    {
      id: 1,
      name: "Monthly Salary",
      amount: 4500,
      type: "Income",
      date: "01/05/2026",
    },
    {
      id: 2,
      name: "House Rent",
      amount: 1200,
      type: "Expense",
      date: "01/06/2026",
    },
    {
      id: 3,
      name: "Freelance Project",
      amount: 800,
      type: "Income",
      date: "01/07/2026",
    },
    {
      id: 4,
      name: "Grocery Shopping",
      amount: 150,
      type: "Expense",
      date: "01/08/2026",
    },
    {
      id: 5,
      name: "Netflix Subscription",
      amount: 15,
      type: "Expense",
      date: "01/08/2026",
    },
  ];

  //Transaction state
  const [transaction, setTransaction] = React.useState([]);

  //date
  const today = new Date().toLocaleDateString("en-US", {
    month: "2-digit",
    day: "numeric",
    year: "2-digit",
  });

  function addFormData(formData) {
    const title = formData.get("title");
    const amount = parseFloat(formData.get("amount"));
    const type = formData.get("type");

    //ob for arry push
    const newItem = {
      id: Date.now(),
      title: title,
      amount: amount,
      type: type,
      date: today,
    };

    //push the obj to the state now it will rememebr each input because of ...
    setTransaction([...transaction, newItem]);
  }

  const totalExpense = transaction
    .filter((item) => item.type === "expense")
    .reduce((acc, item) => acc + item.amount, 0);

  const totalIncome = transaction
    .filter((item) => item.type === "income")
    .reduce((acc, item) => acc + item.amount, 0);

  const totalBalance = totalIncome - totalExpense;

  console.log(totalBalance);
  console.log(totalIncome);
  console.log(totalExpense);
  console.log(transaction);

  return (
    <div className="flex w-full min-h-screen bg-[#f1f5f9] text-slate-900 overflow-x-hidden">
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
            <span className="text-xl">📊</span> Analytics
          </div>
        </nav>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-6 lg:p-12">
        <header className="mb-10 flex justify-between items-center">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-800">
              Financial Command
            </h2>
            <p className="text-slate-500 mt-1">Viewing sample data overview.</p>
          </div>
          <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-200 font-bold text-slate-700">
            Jan 2026
          </div>
        </header>

        {/* STAT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* INCOME CARD */}
          <div className="relative bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 overflow-hidden">
            <div className="relative z-10">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Total Income
              </p>
              <p className="text-4xl font-black text-emerald-600 mt-2">
                ${totalIncome}
              </p>
            </div>
            <span className="absolute -right-2 -bottom-2 text-8xl opacity-10 select-none z-0">
              💰
            </span>
          </div>

          {/* EXPENSE CARD */}
          <div className="relative bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 overflow-hidden">
            <div className="relative z-10">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Total Expenses
              </p>
              <p className="text-4xl font-black text-rose-600 mt-2">
                ${totalExpense}
              </p>
            </div>
            <span className="absolute -right-2 -bottom-2 text-8xl opacity-10 select-none z-0">
              💸
            </span>
          </div>

          {/* BALANCE CARD */}
          <div className="relative bg-indigo-600 p-8 rounded-[2.5rem] shadow-xl shadow-indigo-200 overflow-hidden">
            <div className="relative z-10">
              <p className="text-xs font-bold text-indigo-200 uppercase tracking-widest">
                Net Balance
              </p>
              <p className="text-4xl font-black text-white mt-2">
                ${totalBalance}
              </p>
            </div>
            <span className="absolute -right-2 -bottom-2 text-8xl opacity-20 select-none z-0">
              💎
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* FORM AREA */}
          <div className="lg:col-span-4 w-full">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold mb-6 text-slate-800">
                New Entry
              </h3>

              {/* Form tag is ready for your logic. 
        Note: You will need e.preventDefault() in your future function */}
              <form className="space-y-4 w-full" action={addFormData}>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1 ml-1">
                    Transaction Title
                  </label>
                  <input
                    name="title"
                    required
                    className="w-full bg-slate-50 border-none p-5 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none"
                    placeholder="e.g. Monthly Salary..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1 ml-1">
                    Amount ($)
                  </label>
                  <input
                    name="amount"
                    required
                    type="number"
                    step="0.01"
                    className="w-full bg-slate-50 border-none p-5 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none"
                    placeholder="0.00"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1 ml-1">
                    Category Type
                  </label>
                  <select
                    name="type"
                    className="w-full bg-slate-50 border-none p-5 rounded-2xl appearance-none cursor-pointer outline-none text-slate-600"
                  >
                    <option value="income">Income (+)</option>
                    <option value="expense">Expense (-)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-lg active:scale-[0.98]"
                >
                  Add to Vault
                </button>
              </form>
            </div>
          </div>

          {/* LIST AREA */}
          <div className="lg:col-span-8">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold text-slate-800">
                  Recent Activity
                </h3>
                <span className="text-indigo-600 font-semibold cursor-pointer text-sm">
                  View All
                </span>
              </div>

              <div className="space-y-4">
                {transaction.map((t) => (
                  <div
                    key={t.id}
                    className="flex items-center justify-between p-5 hover:bg-slate-50 rounded-2xl transition border border-transparent hover:border-slate-100 group"
                  >
                    <div className="flex items-center gap-5">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-sm shadow-sm ${
                          t.type === "income"
                            ? "bg-emerald-50/50 border-emerald-100" // Soft Green for Income
                            : "bg-rose-50/50 border-rose-100" // Soft Red for Expense
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
                          t.type === "income"
                            ? "text-emerald-600"
                            : "text-rose-600"
                        }`}
                      >
                        {t.type === "income" ? "+" : "-"}$
                        {t.amount.toLocaleString()}
                      </p>
                      <button className="text-slate-300 hover:text-rose-500 transition text-xl">
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FinanceDashboard;
