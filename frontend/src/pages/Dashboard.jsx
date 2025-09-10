import BalancesDashboard from "../components/BalancesDashboard";
import SettlementSuggestions from "../components/SettlementSuggestions";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <BalancesDashboard />
      <div className="mt-6">
        <SettlementSuggestions />
      </div>
    </div>
  );
}
