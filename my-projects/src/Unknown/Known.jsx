import React from "react";

export default function WealthTracker() {
  // Logic and Props go here later

  const [transactions, setTransactions] = React.useState([]);
  const today = new Date().toLocaleDateString("en-US", {
    month: "2-digit",
    day: "numeric",
    year: "2-digit",
  });
  function addTransaction(formData) {
    const desc = formData.get("desc");
    const amount = parseFloat(formData.get("amount"));
    const type = formData.get("type");
    const newTransaction = {
      id: Date.now(),
      description: desc,
      amount: amount,
      type: type,
      date: today,
    };

    if (desc === "" || amount === 0 || type === "") {
      return;
    } else {
      setTransactions([...transactions, newTransaction]);
    }
  }
  console.log(transactions);

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* HEADER SECTION */}
        <header style={styles.header}>
          <div>
            <h1 style={styles.mainTitle}>Wealth Tracker</h1>
            <p style={styles.subTitle}>Financial Overview & Analysis</p>
          </div>
          <div style={styles.dateDisplay}>
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </div>
        </header>

        {/* 1. SUMMARY CARDS (THE DASHBOARD) */}
        <section style={styles.dashboard}>
          <div style={styles.statBox}>
            <span style={styles.statLabel}>Total Balance</span>
            {/* Logic: Income - Expenses */}
            <h2 style={{ ...styles.statValue, color: "#fff" }}>$0.00</h2>
          </div>

          <div style={styles.statBox}>
            <span style={styles.statLabel}>Total Income</span>
            {/* Logic: Filter 'income' -> reduce */}
            <h2 style={{ ...styles.statValue, color: "#2ecc71" }}>+$0.00</h2>
          </div>

          <div style={styles.statBox}>
            <span style={styles.statLabel}>Total Expenses</span>
            {/* Logic: Filter 'expense' -> reduce */}
            <h2 style={{ ...styles.statValue, color: "#ff4d4d" }}>-$0.00</h2>
          </div>
        </section>

        {/* 2. TRANSACTION ENTRY FORM */}
        <section style={styles.formCard}>
          <h3 style={styles.sectionTitle}>Add New Transaction</h3>
          <form style={styles.inputRow} action={addTransaction}>
            <input
              name="desc"
              type="text"
              placeholder="Description (e.g. Groceries)"
              style={styles.input}
            />
            <input
              name="amount"
              type="number"
              placeholder="Amount"
              style={styles.amountInput}
            />
            <select name="type" style={styles.select}>
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
            <button type="submit" style={styles.addBtn}>
              Add Transaction
            </button>
          </form>
        </section>

        {/* 3. TRANSACTION HISTORY */}
        <section style={styles.historySection}>
          <div style={styles.historyHeader}>
            <h3 style={styles.sectionTitle}>Recent History</h3>
            <button style={styles.filterBtn}>View All</button>
          </div>

          <div style={styles.listContainer}>
            {/* Placeholder for mapping logic */}
            <div
              style={{
                ...styles.transactionCard,
                borderLeft: "5px solid #3b82f6",
              }}
            >
              <div>
                <p style={styles.itemDesc}>Sample Transaction</p>
                <small style={{ color: "#64748b" }}>Jan 07, 2026</small>
              </div>
              <span style={styles.itemAmount}>$0.00</span>
            </div>
            {/* End of mapping area */}
          </div>
        </section>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#0a0f1c",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "40px 24px",
    boxSizing: "border-box",
    fontFamily: "'Inter', system-ui, sans-serif",
  },
  wrapper: {
    width: "100%",
    maxWidth: "1100px",
    display: "flex",
    flexDirection: "column",
    gap: "32px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderBottom: "1px solid #1e293b",
    paddingBottom: "20px",
  },
  mainTitle: {
    color: "#f8fafc",
    fontSize: "32px",
    margin: 0,
    fontWeight: "800",
  },
  subTitle: { color: "#64748b", margin: "4px 0 0 0" },
  dateDisplay: { color: "#3b82f6", fontWeight: "600", letterSpacing: "1px" },

  dashboard: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
  },
  statBox: {
    backgroundColor: "#161d2f",
    padding: "30px",
    borderRadius: "24px",
    border: "1px solid #232d45",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
  },
  statLabel: {
    color: "#94a3b8",
    fontSize: "14px",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  statValue: { fontSize: "36px", margin: "12px 0 0 0", fontWeight: "800" },

  formCard: {
    backgroundColor: "#161d2f",
    padding: "28px",
    borderRadius: "24px",
    border: "1px solid #232d45",
  },
  sectionTitle: { color: "#f8fafc", margin: "0 0 20px 0", fontSize: "18px" },
  inputRow: { display: "flex", gap: "16px", flexWrap: "wrap" },
  input: {
    flex: 3,
    minWidth: "250px",
    backgroundColor: "#0a0f1c",
    border: "1px solid #2d3748",
    padding: "14px 18px",
    borderRadius: "14px",
    color: "white",
    fontSize: "16px",
    outline: "none",
  },
  amountInput: {
    flex: 1,
    minWidth: "150px",
    backgroundColor: "#0a0f1c",
    border: "1px solid #2d3748",
    padding: "14px 18px",
    borderRadius: "14px",
    color: "white",
    fontSize: "16px",
    outline: "none",
  },
  select: {
    flex: 1,
    minWidth: "150px",
    backgroundColor: "#0a0f1c",
    border: "1px solid #2d3748",
    padding: "14px 18px",
    borderRadius: "14px",
    color: "white",
    cursor: "pointer",
  },
  addBtn: {
    flex: 1,
    minWidth: "180px",
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    padding: "14px",
    borderRadius: "14px",
    fontWeight: "700",
    cursor: "pointer",
  },

  historySection: { width: "100%" },
  historyHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  filterBtn: {
    background: "none",
    border: "1px solid #334155",
    color: "#94a3b8",
    padding: "6px 12px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  listContainer: { display: "flex", flexDirection: "column", gap: "12px" },
  transactionCard: {
    backgroundColor: "#161d2f",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 24px",
    borderRadius: "18px",
    border: "1px solid #232d45",
  },
  itemDesc: {
    color: "#f1f5f9",
    fontWeight: "600",
    fontSize: "16px",
    margin: "0 0 4px 0",
  },
  itemAmount: { fontWeight: "800", fontSize: "20px", color: "#f8fafc" },
};
