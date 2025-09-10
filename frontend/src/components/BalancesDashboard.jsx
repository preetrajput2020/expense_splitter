// frontend/src/components/BalancesDashboard.jsx
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function BalancesDashboard() {
  // Dummy balances
  const balances = [
    { from: "Som", to: "Preet", amount: 50 },
    { from: "Vedan", to: "Preet", amount: 50 },
    { from: "Sachin", to: "Preet", amount: 50 },
  ];

  const chartData = balances.map((b) => ({
    name: `${b.from} → ${b.to}`,
    value: b.amount,
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-xl rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">💰 Group Balances</h2>

      <table className="w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">From</th>
            <th className="border border-gray-300 p-2">To</th>
            <th className="border border-gray-300 p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {balances.map((b, i) => (
            <tr key={i}>
              <td className="border border-gray-300 p-2">{b.from}</td>
              <td className="border border-gray-300 p-2">{b.to}</td>
              <td className="border border-gray-300 p-2">₹{b.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="h-64">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
