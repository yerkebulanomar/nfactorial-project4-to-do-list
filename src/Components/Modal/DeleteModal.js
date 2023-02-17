import "./styles.css";
import TRASH_BIN from "../Images/Trash bin.svg";
import MOVE_BACK from "../Images/BackToDo.svg";

export default function DeleteModal() {
  return (
    <div className="delete-modal">
      <button>
        <img src={TRASH_BIN} alt="trash bin" />
        Delete Forever
      </button>
      <button>
        <img src={MOVE_BACK} />
        Move Back To To Do
      </button>
    </div>
  );
}
