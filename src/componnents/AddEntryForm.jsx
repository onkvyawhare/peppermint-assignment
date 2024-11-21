import React, { useState } from "react";

const AddEntryForm = ({ addEntry }) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("Income");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !description || !date) {
      alert("Please fill in all fields");
      return;
    }

    const entry = {
      id: Date.now(),
      amount: parseFloat(amount),
      description,
      date,
      type,
    };

    addEntry(entry);
    setAmount("");
    setDescription("");
    setDate("");
    setType("Income");
  };

  return (
    <form
    onSubmit={handleSubmit}
    className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 bg-gray-50 p-4 rounded-lg shadow-sm mb-6"
  >
    <input
      type="number"
      placeholder="Amount"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      className="border border-gray-300 p-2 rounded focus:ring-primary focus:border-primary"
    />
    <input
      type="text"
      placeholder="Description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      className="border border-gray-300 p-2 rounded focus:ring-primary focus:border-primary"
    />
    <input
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      className="border border-gray-300 p-2 rounded focus:ring-primary focus:border-primary"
    />
    <select
      value={type}
      onChange={(e) => setType(e.target.value)}
      className="border border-gray-300 p-2 rounded focus:ring-primary focus:border-primary"
    >
      <option value="Income">Income</option>
      <option value="Expense">Expense</option>
    </select>
    <button
      type="submit"
      className="bg-primary text-white py-2 px-4 rounded shadow hover:bg-indigo-600 col-span-full sm:col-auto"
    >
      Add
    </button>
  </form>
  
  );
};

export default AddEntryForm;
