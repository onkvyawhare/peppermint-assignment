import React from "react";

const NetBalance = ({ entries }) => {
  const totalIncome = entries
    .filter((entry) => entry.type === "Income")
    .reduce((acc, entry) => acc + entry.amount, 0);
  const totalExpense = entries
    .filter((entry) => entry.type === "Expense")
    .reduce((acc, entry) => acc + entry.amount, 0);

  const netBalance = totalIncome - totalExpense;

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm mb-6">
    <h2 className="text-xl font-semibold text-gray-800">Net Balance</h2>
    <p
      className={`text-2xl font-bold ${
        netBalance >= 0 ? "text-accent" : "text-secondary"
      }`}
    >
      ${netBalance.toFixed(2)}
    </p>
  </div>
  
  );
};

export default NetBalance;
