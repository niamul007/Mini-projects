import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());

// 1. Our "Database" (for now, it's just an array in memory)
let transactions = []; 

// 2. Job 1: Send the list to React
app.get('/api/transactions', (req, res) => {
  res.json(transactions);
});

// 3. Job 2: Receive a new transaction from React
app.post('/api/transactions', (req, res) => {
  const newEntry = req.body; // This is the data React sends
  transactions = [...transactions, newEntry]; 
  res.status(201).json(newEntry);
});

// 4. Job 3: Delete a transaction
app.delete('/api/transactions/:id', (req, res) => {
    const { id } = req.params;
    transactions = transactions.filter(t => t.id !== parseInt(id));
    res.json({ message: "Deleted successfully" });
});

app.listen(5000, () => console.log(`Server running on http://localhost:5000`));