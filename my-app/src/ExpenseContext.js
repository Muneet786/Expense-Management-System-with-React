

import React, { createContext, useContext, useState } from 'react';

const ExpenseContext = createContext();

export const useExpenseContext = () => {
  return useContext(ExpenseContext);
};

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editExpenseName, setEditExpenseName] = useState('');

  const addExpense = (name) => {
    if (!name.trim()) {
      alert('Please enter an expense name.');
      return;
    }

    const formattedTime = new Date().toLocaleTimeString();

    const expense = {
      id: Date.now(),
      name,
      time: formattedTime,
    };

    setExpenses([...expenses, expense]);

    alert(`Expense Name: ${expense.name}\nTime: ${expense.time}`);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const deleteAllExpenses = () => {
    setExpenses([]);
  };

  const editExpense = (id, newName) => {
    setExpenses(
      expenses.map((expense) =>
        expense.id === id ? { ...expense, name: newName } : expense
      )
    );
    setEditingId(null);
    setEditExpenseName('');
  };

  const contextValue = {
    expenses,
    addExpense,
    deleteExpense,
    deleteAllExpenses,
    editingId,
    setEditingId,
    editExpenseName,
    setEditExpenseName,
    editExpense,
  };

  return (
    <ExpenseContext.Provider value={contextValue}>
      {children}
    </ExpenseContext.Provider>
  );
};
