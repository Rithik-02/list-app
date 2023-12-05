import React, { useState } from "react";
import "./List.css";

export default function List() {
  const [items, setItems] = useState([]);
  const [list, setList] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const addHandler = () => {
    if (editingIndex !== null) {
      const updatedItems = [...items];
      updatedItems[editingIndex] = { text: list, checked: false };

      setItems(updatedItems);
      setEditingIndex(null);
    } else if (list.length !== 0) {
      setItems([...items, { text: list, checked: false }]);
    }
    setList("");
  };

  const deleteHandler = (index) => {
    const fiterItems = items.filter((_, i) => i !== index);
    setItems(fiterItems);
  };

  const editHandler = (index) => {
    setList(items[index].text);
    setEditingIndex(index);
  };

  const handleCheckboxChange = (index) => {
    const updatedItems = [...items];
    updatedItems[index].checked = !updatedItems[index].checked;
    setItems(updatedItems);
  };

  return (
    <div className="list">
      <div className="addItems">
        <input
          className="addTask"
          type="text"
          value={list}
          placeholder="Add New Task"
          onChange={(event) => setList(event.target.value)}
        ></input>
        <button className="btnAdd" onClick={addHandler}>
          +
        </button>
      </div>

      {items.map((item, index) => (
        <div key={index} className="listItem">
          <div className="Check">
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange(index)}
            ></input>
            <p className={item.checked ? "text checked" : "text"}>
              {item.text}
            </p>
          </div>
          <div className="btn">
            <button className="btnEdit" onClick={() => editHandler(index)}>
              <img src={require("../assets/edit.png")} alt="Edit" />
            </button>
            <button className="btnDelete" onClick={() => deleteHandler(index)}>
              <img src={require("../assets/delete.png")} alt="Delete" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
