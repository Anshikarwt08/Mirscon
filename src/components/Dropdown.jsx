import List from "./List";

function Dropdown({ title, items }) {
  return (
    <div className="dropdown">
      <h4>{title}</h4>
      <List items={items} />
    </div>
  );
}

export default Dropdown;