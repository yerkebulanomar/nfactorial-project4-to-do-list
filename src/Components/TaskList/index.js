import TASK_DOTS from "../Images/Vector.svg";
import "./styles.css";

export default function Task(props) {
  return (
    <div className="task">
      <button className="task-dots-button">
        <img className="task-dots-img" src={TASK_DOTS} alt="task menu" />
      </button>
      <input type="checkbox" />
      <label className="task-text">{props.toDo}</label>
    </div>
  );
}
