import React, { useState } from "react";
import AddEntryForm from "./componnents/AddEntryForm";
import EntryList from "./componnents/EntryList";
import NetBalance from "./componnents/NetBalances";

const App = () => {
  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  const deleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
  <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
    <h1 className="text-3xl font-bold text-primary mb-4 text-center">
      Expense Tracker
    </h1>
    <NetBalance entries={entries} />
      <AddEntryForm addEntry={addEntry} />
      <EntryList entries={entries} deleteEntry={deleteEntry} />
  </div>
</div>

  );
};

export default App;
