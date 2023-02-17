import "./styles.css";
import PLUS_SIGN from "./Images/Plus Math.svg";
import { useState } from "react";
import TASK_DOTS from "./Images/Vector.svg";
import Modal from "./Modal";
const tasks = [
  {
    id: 0,
    content: "write an essay",
    type: "Done",
    checked: true,
  },
  {
    id: 1,
    content: "read the book",
    type: "Done",
    checked: true,
  },
  {
    id: 2,
    content: "go to gym",
    type: "Done",
    checked: true,
  },
  {
    id: 3,
    content: "call mom",
    type: "To Do",
    checked: false,
  },
  {
    id: 4,
    content: "finish the task",
    type: "Trash",
    checked: true,
  },
];

export default function Main() {
  const [items, setItems] = useState(tasks);
  const [type, setType] = useState("To Do");
  const [filter, setFilter] = useState("To Do");
  const [isModalShown, setIsModalShown] = useState(false);

  // переключатель цвета button
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

  const openModal = () => {
    // console.log(isModalShown);
    setIsModalShown(!isModalShown);
  };

  const addToDo = (todo) => {
    console.log("new todo", todo);
    const newItem = {
      id: new Date(),
      content: todo,
      type: "To Do",
      checked: false,
    };
    return setItems([...items, newItem]);
  };

  // распознование включения галочки в checkbox
  const handleCheck = (keyFromCheck) => {
    const index = items.findIndex((item) => item.id === keyFromCheck);
    const oldObject = items[index];

    if (oldObject.type === "Trash") {
      setItems(items);
    } else {
      if (oldObject.type === "To Do") {
        const newObject = { ...oldObject };
        newObject.checked = true;
        newObject.type = "Done";
        const leftPart = items.slice(0, index);
        const rightPart = items.slice(index + 1, items.length);
        const newItems = [...leftPart, newObject, ...rightPart];
        return setItems(newItems);
      }
      if (oldObject.type === "Done") {
        const newObject = { ...oldObject };
        newObject.checked = false;
        newObject.type = "To Do";
        const leftPart = items.slice(0, index);
        const rightPart = items.slice(index + 1, items.length);
        const newItems = [...leftPart, newObject, ...rightPart];
        return setItems(newItems);
      }
    }
  };

  const handleStatus = (typeFromButton) => {
    setType(typeFromButton);
  };

  const filteredData = items.filter((item) => item.type === filter);

  return (
    <div className="main">
      <div className="top-buttons">
        <div className="top-left-buttons">
          <button
            className="categories"
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
            className="categories"
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
            className="categories"
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
          <button className="add-button" onClick={openModal}>
            <img src={PLUS_SIGN} alt="plus" />
          </button>
          {isModalShown && <Modal addToDo={addToDo} />}
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
