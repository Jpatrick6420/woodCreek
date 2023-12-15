function Tag({ color, children }) {
  return (
    <span
      className={`bg-${color}-300 py-0.5 px-1 text-sm border ${
        color === "green" ? "bg-green-500" : "bg-stone-300"
      }`}
    >
      {children}
    </span>
  );
}

export default Tag;
