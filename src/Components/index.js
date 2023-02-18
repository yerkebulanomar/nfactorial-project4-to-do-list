import "./styles.css";
import PLUS_SIGN from "./Images/Plus Math.svg";
import { useState } from "react";
import TASK_DOTS from "./Images/Vector.svg";
import Modal from "./Modal";
import DeleteModal from "./Modal/DeleteModal";
import MoveToTrashModal from "./Modal/MoveToTrashModal";
import { v4 as uuid } from "uuid";

const tasks = [
  {
    id: uuid(),
    content: "write an essay",
    type: "Done",
    checked: true,
  },
  {
    id: uuid(),
    content: "read the book",
    type: "Done",
    checked: true,
  },
  {
    id: uuid(),
    content: "go to gym",
    type: "Done",
    checked: true,
  },
  {
    id: uuid(),
    content: "call mom",
    type: "To Do",
    checked: false,
  },
  {
    id: uuid(),
    content: "set alarm for office hours",
    type: "To Do",
    checked: false,
  },
  {
    id: uuid(),
    content: "go outside",
    type: "To Do",
    checked: false,
  },
  {
    id: uuid(),
    content: "finish the task",
    type: "Trash",
    checked: true,
  },
  {
    id: uuid(),
    content: "buy mayo",
    type: "Trash",
    checked: false,
  },
  {
    id: uuid(),
    content: "clean my room",
    type: "Trash",
    checked: true,
  },
];

export default function Main() {
  const [items, setItems] = useState(tasks); // перезаписываем массив
  const [filter, setFilter] = useState("To Do"); //используем для фильтра и изменения надписи темы
  const [isAddModalShown, setIsAddModalShown] = useState(false); //открытие и закрытие моадльного окна для добавления элементов

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

  // функция для открытия модального окна для добавления todo
  const openAddModal = () => {
    setIsAddModalShown(!isAddModalShown);
  };

  // adding new todos in a modal window
  const addToDo = (todo) => {
    const newItem = {
      id: uuid(),
      content: todo,
      type: "To Do",
      checked: false,
    };
    return setItems([...items, newItem]);
  };

  // перемещение тудушек в корзину
  const handleMoveClick = (keyFromClick) => {
    const index = items.findIndex((item) => item.id === keyFromClick);
    const oldObject = items[index];
    const newObject = { ...oldObject };
    newObject.type = "Trash";
    newObject.isModalOpen = false;
    const leftPart = items.slice(0, index);
    const rightPart = items.slice(index + 1, items.length);
    const newItems = [...leftPart, newObject, ...rightPart];
    setItems(newItems);
  };

  // полное удаление тудушек из корзины
  const handleFirstClick = (keyFromClick) => {
    const index = items.findIndex((item) => item.id === keyFromClick);
    const leftPart = items.slice(0, index);
    const rightPart = items.slice(index + 1, items.length);
    const newItems = [...leftPart, ...rightPart];
    setItems(newItems);
  };

  // возвращение тудушек в todo или done
  const handleSecondClick = (keyFromClick) => {
    const index = items.findIndex((item) => item.id === keyFromClick);
    const oldObject = items[index];
    const newObject = { ...oldObject };
    if (newObject.checked === true) {
      newObject.type = "Done";
      newObject.isModalOpen = false;
      const leftPart = items.slice(0, index);
      const rightPart = items.slice(index + 1, items.length);
      const newItems = [...leftPart, newObject, ...rightPart];
      setItems(newItems);
    } else {
      newObject.type = "To Do";
      newObject.isModalOpen = false;
      const leftPart = items.slice(0, index);
      const rightPart = items.slice(index + 1, items.length);
      const newItems = [...leftPart, newObject, ...rightPart];
      setItems(newItems);
    }
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

  // отображение модального окна для перемещения и удаления тудушек
  const handleModal = (keyFromClick) => {
    const index = items.findIndex((item) => item.id === keyFromClick);
    const oldObject = items[index];
    const newObject = { ...oldObject, isModalOpen: !oldObject.isModalOpen };
    const leftPart = items.slice(0, index);
    const rightPart = items.slice(index + 1, items.length);
    const newItems = [...leftPart, newObject, ...rightPart];
    return setItems(newItems);
  };

  // фильтр отображения todos по категориям
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
            }}>
            Trash
          </button>
        </div>
        <div>
          <button className="add-button" onClick={openAddModal}>
            <img src={PLUS_SIGN} alt="plus" />
          </button>
          {isAddModalShown && <Modal addToDo={addToDo} />}
        </div>
      </div>
      <div className="window-title">
        <h4 className="title-text">{filter}</h4>
      </div>
      <div className="task-list">
        {filteredData.map((item) => (
          <div className="task" key={item.id}>
            <div className="modal-container">
              <button
                className="task-dots-button"
                onClick={() => {
                  handleModal(item.id);
                }}>
                <img
                  className="task-dots-img"
                  src={TASK_DOTS}
                  alt="task menu"
                />
              </button>
              {item.isModalOpen &&
              (item.type === "To Do" || item.type === "Done") ? (
                <MoveToTrashModal
                  onClick={() => {
                    handleMoveClick(item.id);
                  }}
                />
              ) : item.isModalOpen && item.type === "Trash" ? (
                <DeleteModal
                  onFirstClick={() => handleFirstClick(item.id)}
                  onSecondClick={() => handleSecondClick(item.id)}
                />
              ) : (
                ""
              )}
            </div>

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
