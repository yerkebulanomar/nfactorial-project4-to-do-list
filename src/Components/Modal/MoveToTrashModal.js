import "./styles.css";
import TRASH_BIN from "../Images/Trash bin.svg";

export default function MoveToTrash() {
  return (
    <div className="moveToTrash-modal">
      <button>
        <img src={TRASH_BIN} alt="trash bin" />
        Move to trash
      </button>
    </div>
  );
}
