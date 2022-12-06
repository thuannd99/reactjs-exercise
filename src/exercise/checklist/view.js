import React, { useState } from "react";
import "./styles.css";
import "../styles.css";

const initChecklist = [
  { id: 1, name: "Go to bed", isCheck: false },
  { id: 2, name: "Learn react", isCheck: false },
  { id: 3, name: "Gank tem", isCheck: false },
];

const View = () => {
  const [checklist, setChecklist] = useState(initChecklist);
  const [newItem, setNewItem] = useState("");

  const handleCheck = (event) => {
    let newChecklist = [...checklist];
    const index = newChecklist.findIndex(item => item.id === parseInt(event.target.value));
    newChecklist[index].isCheck = Boolean(event.target.checked);
    setChecklist(newChecklist);
  };

  const handleDelete = (event) => {
    let newChecklist = [...checklist];
    newChecklist = newChecklist.filter(item => item.id !== parseInt(event.target.value));
    setChecklist(newChecklist);
  };

  const handleSubmit = (e) => {
    if (newItem) {
      const newId = parseInt(checklist.at(-1).id) + 1
      const wrapNewItem = { id: newId, name: newItem, isCheck: false }
      const newChecklist = [...checklist, wrapNewItem];
      setChecklist(newChecklist);
    }
    e.preventDefault();
  };

  const handleNewItem = (event) => {
    setNewItem(event.target.value);
  };

  return (
    <div className="filter-fruits exercise">
      <form>
        <label>
          Add an item to checklist:
          <input type="text" value={newItem} onChange={handleNewItem} />
        </label>
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
      {checklist &&
        checklist.map((item) => (
          <div key={item.id} className="checklist-items">
            <input value={item.id} type="checkbox" onChange={handleCheck} />
            <div className={item.isCheck ? "checked-item" : "" } key={item.id}>{item.name}</div>
            <button value={item.id} onClick={handleDelete}>Delete</button>
          </div>
        ))}
    </div>
  );
};

export default View;
