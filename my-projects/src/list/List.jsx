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

  
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>Budget Tracker</h1>

        {/* INPUT SECTION */}
        <div style={styles.inputGroup}>
          <form action={addData}>
            <input
              type="text"
              placeholder="Item name..."
              name="item-name"
              style={styles.input}
            />
            <input
              type="number"
              placeholder="$"
              name="item-price"
              style={styles.priceInput}
            />
            <button type="submit" style={styles.addBtn}>
              Add
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
          Total: <span style={styles.totalAmount}>$0.00</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#4d79bcff",
    minHeight: "100vh",
    padding: "40px",
    display: "flex",
    justifyContent: "center",
    fontFamily: "sans-serif",
  },
  card: {
    backgroundColor: "#292525ff",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "450px",
  },
  inputGroup: { display: "flex", gap: "10px", marginBottom: "20px" },
  input: {
    flex: 2,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },
  priceInput: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },
  addBtn: {
    padding: "10px 20px",
    backgroundColor: "#2ecc71",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  list: { borderTop: "1px solid #eee", paddingTop: "20px" },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #f9f9f9",
  },
  deleteBtn: {
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    padding: "2px 8px",
  },
  totalSection: {
    marginTop: "20px",
    paddingTop: "20px",
    borderTop: "2px solid #333",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "1.4rem",
    fontWeight: "bold",
  },
  totalAmount: { color: "#2ecc71" },
};
