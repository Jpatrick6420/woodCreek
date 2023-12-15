function AvailabilityCard({ list, children }) {
  return (
    <li className="px-2 text-center space-y-6">
      <h1 className="text-7xl font-semibold text-stone-300">{list.length}</h1>
      <h3 className="font-bold text-stone-300">{children}</h3>
    </li>
  );
}

export default AvailabilityCard;
