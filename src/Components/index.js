import "./styles.css";
import PLUS_SIGN from "./Images/Plus Math.svg";
import Task from "./TaskList";
import { useState } from "react";

export default function Main() {
  const [category, setCategory] = useState("To Do");

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

  const tasks = [
    {
      id: 0,
      toDo: "write an essay",
      category: "To Do",
    },
    {
      id: 1,
      toDo: "read the book",
      category: "To Do",
    },
    {
      id: 2,
      toDo: "go to gym",
      category: "To Do",
    },
    {
      id: 3,
      toDo: "call mom",
      category: "To Do",
    },
    {
      id: 4,
      toDo: "finish the task",
      category: "To Do",
    },
  ];

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
              setCategory("To Do");
              selectToDo();
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
              setCategory("Done");
              selectDone();
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
              setCategory("Trash");
              selectTrash();
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
        <h4 className="title-text">{category}</h4>
      </div>
      <div className="task-list">
        {tasks.map((item, index) => (
          <Task key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
