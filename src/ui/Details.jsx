function Details({ children, header }) {
  return (
    <details>
      <summary>{header}</summary>
      <div>{children}</div>
    </details>
  );
}

export default Details;
