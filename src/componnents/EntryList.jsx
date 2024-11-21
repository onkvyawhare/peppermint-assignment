import React from "react";

const EntryList = ({ entries, deleteEntry }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Entries</h2>
  {entries.length === 0 ? (
    <p className="text-gray-500 text-center">No entries to display.</p>
  ) : (
    <ul className="space-y-4">
      {entries.map((entry) => (
        <li
          key={entry.id}
          className="flex justify-between items-center bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          {/* Entry Details */}
          <div>
            <p className="text-lg font-medium text-gray-700">
              {entry.description}
            </p>
            <p className="text-sm text-gray-500">{entry.date}</p>
            <span
              className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-semibold ${
                entry.type === "Income"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {entry.type}
            </span>
          </div>

          {/* Entry Amount */}
          <p
            className={`text-lg font-bold ${
              entry.type === "Income" ? "text-accent" : "text-secondary"
            }`}
          >
            ₹{entry.amount.toFixed(2)}
          </p>

          {/* Delete Button */}
          <button
            onClick={() => deleteEntry(entry.id)}
            className="py-2 px-4 bg-secondary text-white rounded-full shadow hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-400"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )}
</div>


  );
};

export default EntryList;
