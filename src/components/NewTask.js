import { useRef, useState } from "react";

import "./Input.css";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="new-task">
      <input type="text" onChange={handleChange} value={enteredTask} />
      <button onClick={handleClick}>Add Task</button>
    </div>
  );
}
