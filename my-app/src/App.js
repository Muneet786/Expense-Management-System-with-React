import React from 'react';
import { useExpenseContext } from './ExpenseContext';

const App = () => {
  const {
    expenses,
    addExpense,
    deleteAllExpenses,
    deleteExpense,
    editingId,
    setEditingId,
    editExpenseName,
    setEditExpenseName,
    editExpense,
  } = useExpenseContext();

};

export default App;
