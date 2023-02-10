import "./styles.css";
import PLUS_SIGN from "./Images/Plus Math.svg";
import TASK_DOTS from "./Images/Icon Menu.svg";

export default function Main() {
  return (
    <div className="main">
      <div className="top-buttons">
        <div className="top-left-buttons">
          <button className="categories dark-grey-button">
            <p className="button-text white-text">To Do</p>
          </button>
          <button className="categories light-grey-button">
            <p className="button-text">Done</p>
          </button>
          <button className="categories light-grey-button">
            <p className="button-text">Trash</p>
          </button>
        </div>
        <div>
          <button className="add-button">
            <img src={PLUS_SIGN} alt="plus" />
          </button>
        </div>
      </div>
      <div className="window-title">
        <h4 className="title-text">To Do</h4>
      </div>
      <div className="task-list">
        <div className="task">
          <img className="task-dots" src={TASK_DOTS} alt="task menu" />
          <input type="checkbox" id="task1" name="task1" value="task1" />
          <label className="task-text" for="task1">
            Write Essay
          </label>
          <br />
        </div>
        <div className="task">
          <img className="task-dots" src={TASK_DOTS} alt="task menu" />
          <input type="checkbox" id="task1" name="task1" value="task1" />
          <label className="task-text" for="task1">
            Go to gym
          </label>
          <br />
        </div>
        <div className="task">
          <img className="task-dots" src={TASK_DOTS} alt="task menu" />
          <input type="checkbox" id="task1" name="task1" value="task1" />
          <label className="task-text" for="task1">
            Buy book
          </label>
          <br />
        </div>
      </div>
    </div>
  );
}
