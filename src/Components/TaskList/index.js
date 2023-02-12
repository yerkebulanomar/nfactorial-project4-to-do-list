import TASK_DOTS from "../Images/Icon Menu.svg";
import "./styles.css";

export default function Task() {
  return (
    <div className="task">
      <img className="task-dots" src={TASK_DOTS} alt="task menu" />
      <input type="checkbox" id="task1" name="task1" value="task1" />
      <label className="task-text" for="task1">
        Write Essay
      </label>
    </div>
  );
}
