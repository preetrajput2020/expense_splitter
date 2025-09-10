export default function Groups() {
  const mockGroups = ["Goa Trip", "Flatmates", "Office Party"];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Groups</h1>
      <ul className="list-disc pl-6">
        {mockGroups.map((group, idx) => (
          <li key={idx} className="mb-2">{group}</li>
        ))}
      </ul>
    </div>
  );
}
