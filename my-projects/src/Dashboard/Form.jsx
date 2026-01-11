import react from "react";

export default function Form({ addFormData }) {
  return (
    <>
      <div className="lg:col-span-4 w-full">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-6 text-slate-800">New Entry</h3>

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
    </>
  );
}
