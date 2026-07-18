function List({ items }) {
  return (
    <ul className="dropdown-list">
      {items.map((item, index) => (
        <li key={index} className="dropdown-item">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default List;