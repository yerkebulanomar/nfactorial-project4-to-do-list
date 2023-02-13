import TASK_DOTS from "../Images/Vector.svg";
import "./styles.css";

export default function Task(props) {
  return (
    <div className="task">
      <button className="task-dots-button">
        <img className="task-dots-img" src={TASK_DOTS} alt="task menu" />
      </button>
      <input type="checkbox" id="task1" name="task1" value="task1" />
      <label className="task-text" for="task1">
        {props.toDo}
      </label>
    </div>
  );
}
