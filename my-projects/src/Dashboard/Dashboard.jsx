import React from "react";
import Form from "./Form.jsx";
import List from "./List.jsx";
import SideBar from "./SideBar.jsx";
const FinanceDashboard = () => {
  // HARDCODED SAMPLES - No logic, just visuals

  //Transaction state
  const [transaction, setTransaction] = React.useState(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });


  //to save to local storage
  React.useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transaction));
  }, [transaction]);
  const [listView, setListView] = React.useState(false);

  //date
  const today = new Date().toLocaleDateString("en-US", {
    month: "2-digit",
    day: "numeric",
    year: "2-digit",
  });

  //for new arr which will ework with list handling
  const controlListView = listView ? transaction : transaction.slice(0, 3);

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

  // console.log(totalBalance);
  // console.log(totalIncome);
  // console.log(totalExpense);
  // console.log(transaction);

  function removeList(idToDel) {
    const updated = transaction.filter((item) => item.id !== idToDel);
    setTransaction(updated);
  }

  return (
    <div className="flex w-full min-h-screen bg-[#f1f5f9] text-slate-900 overflow-x-hidden">
      {/* SIDEBAR */}
      <SideBar setTransaction={setTransaction} />

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
                ${totalIncome.toFixed(2)}
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
                ${totalExpense.toFixed(2)}
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
                ${totalBalance.toFixed(2)}
              </p>
            </div>
            <span className="absolute -right-2 -bottom-2 text-8xl opacity-20 select-none z-0">
              💎
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* FORM AREA */}
          <Form addFormData={addFormData} />
          {/* LIST AREA */}
          <List
            addFormData={addFormData}
            removeList={removeList}
            controlListView={controlListView}
            listView={listView}
            setListView={setListView}
            setTransaction={setTransaction}
          />
        </div>
      </main>
    </div>
  );
};

export default FinanceDashboard;
