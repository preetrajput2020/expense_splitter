// frontend/src/components/SettlementSuggestions.jsx
export default function SettlementSuggestions() {
  // Dummy settlements
  const settlements = [
    { from: "Vedan", to: "Preet", amount: 100 },
    { from: "Sachin", to: "Preet", amount: 100 },
  ];

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-xl rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">🤝 Settlement Suggestions</h2>
      {settlements.length === 0 ? (
        <p>No settlements needed 🎉</p>
      ) : (
        <ul className="space-y-2">
          {settlements.map((s, i) => (
            <li key={i} className="p-3 border rounded-xl">
              👉 <strong>{s.from}</strong> should pay <strong>₹{s.amount}</strong>{" "}
              to <strong>{s.to}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
