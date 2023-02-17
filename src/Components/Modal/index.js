import "./styles.css";

export default function Modal() {
  return (
    <div className="add-modal">
      <h4 className="add-modal-title">Add New To Do</h4>
      <textarea className="modal-input" type="text" placeholder="Your text" />
      <button className="modal-add-button">Add</button>
    </div>
  );
}
