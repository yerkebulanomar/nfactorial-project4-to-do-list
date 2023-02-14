import "./styles.css";
import PLUS_SIGN from "./Images/Plus Math.svg";
import Task from "./TaskList";
import { useState } from "react";

export default function Main() {
  const tasks = [
    {
      id: 0,
      toDo: "write an essay",
      topic: "To Do",
    },
    {
      id: 1,
      toDo: "read the book",
      topic: "Trash",
    },
    {
      id: 2,
      toDo: "go to gym",
      topic: "To Do",
    },
    {
      id: 3,
      toDo: "call mom",
      topic: "Done",
    },
    {
      id: 4,
      toDo: "finish the task",
      topic: "Done",
    },
  ];

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

  const [filter, setFilter] = useState("To Do");

  const filteredData = tasks.filter((item) => {
    return item.topic === filter;
  });

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
              setFilter("To Do");
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
              setFilter("Done");
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
              setFilter("Trash");
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
        {filteredData.map((item, index) => (
          <Task key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
