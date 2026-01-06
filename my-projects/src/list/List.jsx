import React from "react";

export default function BudgetList() {
  // --- LOGIC CHALLENGES ---

  const [items, setItems] = React.useState([]);

  function addData(formData) {
    const item = formData.get("item-name");
    const price = formData.get("item-price");
    const newItem = {
      id: Date.now(),
      name: item,
      price: parseFloat(price),
    };
    if (item === "" || price === "") {
      return;
    } else {
      setItems([...items, newItem]);
    }
  }

  function deleteItem(idToDelete) {
    const updatedItems = items.filter((item) => item.id !== idToDelete);
    setItems(updatedItems);
  }

  console.log(items);
  const totalAmount = items.reduce((total, item) => total + item.price, 0);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>Budget Tracker</h1>

        {/* INPUT SECTION */}
        <div style={styles.inputGroup}>
          <form
            action={addData}
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div style={{ display: "flex", gap: "10px" }}>
              <input name="item-name" placeholder="Item" style={styles.input} />
              <input
                name="item-price"
                placeholder="$"
                style={styles.priceInput}
              />
            </div>
            <button type="submit" style={styles.addBtn}>
              Add to List
            </button>
          </form>
        </div>

        {/* THE LIST */}
        <div style={styles.list}>
          {items.map((item, index) => {
            return (
              <div key={index} style={styles.listItem}>
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
                <button
                  onClick={() => deleteItem(item.id)}
                  style={styles.deleteBtn}
                >
                  x
                </button>
              </div>
            );
          })}
        </div>

        {/* THE CALCULATION */}
        <div style={styles.totalSection}>
          Total:{" "}
          <span style={styles.totalAmount}>${totalAmount.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#0f172a", // Deep Midnight Blue
    minHeight: "100vh",
    padding: "40px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    fontFamily: "'Inter', -apple-system, sans-serif",
  },
  card: {
    backgroundColor: "#1e293b", // Slate Blue Card
    padding: "32px",
    borderRadius: "24px",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.4)",
    width: "100%",
    maxWidth: "450px",
    border: "1px solid #334155",
    color: "#f8fafc",
  },
  inputGroup: { 
    marginBottom: "24px",
  },
  // This wrapper makes sure the inputs sit nicely side-by-side
  inputRow: {
    display: "flex",
    gap: "12px",
    marginBottom: "12px",
  },
  input: {
    flex: 3, // Takes up 3x more space than the price
    padding: "12px 16px",
    borderRadius: "12px",
    border: "1px solid #334155",
    backgroundColor: "#0f172a",
    color: "#f8fafc",
    fontSize: "15px",
    outline: "none",
  },
  priceInput: {
    flex: 1, // Takes up minimal space
    maxWidth: "100px", // Limits the width of the dollar box
    padding: "12px 16px",
    borderRadius: "12px",
    border: "1px solid #334155",
    backgroundColor: "#0f172a",
    color: "#f8fafc",
    fontSize: "15px",
    outline: "none",
  },
  addBtn: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#3b82f6", // Electric Blue
    color: "white",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "16px",
    marginTop: "8px",
  },
  list: { 
    borderTop: "1px solid #334155", 
    paddingTop: "24px",
    marginTop: "12px" 
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    backgroundColor: "#334155",
    borderRadius: "16px",
    marginBottom: "12px",
    border: "1px solid #475569",
  },
  deleteBtn: {
    backgroundColor: "rgba(239, 68, 68, 0.15)",
    color: "#ef4444",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    padding: "6px 12px",
    fontWeight: "bold",
    fontSize: "12px",
  },
  totalSection: {
    marginTop: "24px",
    padding: "20px",
    backgroundColor: "#0f172a",
    borderRadius: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #3b82f6",
  },
  totalAmount: { 
    color: "#2ecc71", // Fresh Green for money
    fontSize: "1.6rem",
    fontWeight: "700"
  },
};