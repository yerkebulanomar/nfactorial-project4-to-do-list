import "./styles.css";
import PLUS_SIGN from "./Images/Plus Math.svg";
import { useState } from "react";
import TASK_DOTS from "./Images/Vector.svg";
let tasks = [
  {
    id: 0,
    content: "write an essay",
    type: "To Do",
  },
  {
    id: 1,
    content: "read the book",
    type: "To Do",
  },
  {
    id: 2,
    content: "go to gym",
    type: "Done",
  },
  {
    id: 3,
    content: "call mom",
    type: "To Do",
  },
  {
    id: 4,
    content: "finish the task",
    type: "Trash",
  },
];

export default function Main() {
  const [items, setItems] = useState(tasks);
  const [type, setType] = useState("To Do");

  const [isActiveToDo, setIsActiveToDo] = useState(true);
  const [isActiveDone, setIsActiveDone] = useState(false);
  const [isActiveTrash, setIsActiveTrash] = useState(false);

  const selectToDo = () => {
    setIsActiveToDo(true);
    setIsActiveDone(false);
    setIsActiveTrash(false);
  };
  const selectDone = () => {
    setIsActiveToDo(false);
    setIsActiveDone(true);
    setIsActiveTrash(false);
  };
  const selectTrash = () => {
    setIsActiveToDo(false);
    setIsActiveDone(false);
    setIsActiveTrash(true);
  };

  const handleCheck = (keyFromCheck) => {
    // console.log(keyFromCheck);
    const index = items.findIndex((item) => item.id === keyFromCheck);
    const oldObject = items[index];
    // console.log(oldObject);
    const newObject = { ...oldObject, checked: !oldObject.checked };
    const leftPart = items.slice(0, index);
    const rightPart = items.slice(index + 1, items.length);
    const newItems = [...leftPart, newObject, ...rightPart];
    setItems(newItems);
  };

  const [filter, setFilter] = useState("To Do");

  const handleStatus = (typeFromButton) => {
    setType(typeFromButton);
  };

  const filteredData = items.filter((item) =>
    type === "To Do"
      ? !item.checked
      : type === "Done"
      ? item.checked
      : type === "Trash"
  );

  return (
    <div className="main">
      <div className="top-buttons">
        <div className="top-left-buttons">
          <button
            className="categories dark-grey-button"
            style={{
              backgroundColor: isActiveToDo
                ? "rgba(8, 30, 52, 0.42)"
                : "rgba(8, 30, 52, 0.05)",
              color: isActiveToDo ? "white" : "",
            }}
            onClick={() => {
              selectToDo();
              setFilter("To Do");
              handleStatus("To Do");
            }}>
            To Do
          </button>
          <button
            className="categories light-grey-button"
            style={{
              backgroundColor: isActiveDone
                ? "rgba(8, 30, 52, 0.42)"
                : "rgba(8, 30, 52, 0.05)",
              color: isActiveDone ? "white" : "",
            }}
            onClick={() => {
              selectDone();
              setFilter("Done");
              handleStatus("Done");
            }}>
            Done
          </button>
          <button
            className="categories light-grey-button"
            style={{
              backgroundColor: isActiveTrash
                ? "rgba(8, 30, 52, 0.42)"
                : "rgba(8, 30, 52, 0.05)",
              color: isActiveTrash ? "white" : "",
            }}
            onClick={() => {
              selectTrash();
              setFilter("Trash");
              handleStatus("Trash");
            }}>
            Trash
          </button>
        </div>
        <div>
          <button className="add-button">
            <img src={PLUS_SIGN} alt="plus" />
          </button>
        </div>
      </div>
      <div className="window-title">
        <h4 className="title-text">{filter}</h4>
      </div>
      <div className="task-list">
        {filteredData.map((item) => (
          <div className="task" key={item.id}>
            <button className="task-dots-button">
              <img className="task-dots-img" src={TASK_DOTS} alt="task menu" />
            </button>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => {
                handleCheck(item.id);
              }}
            />
            <label className="task-text">{item.content}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
